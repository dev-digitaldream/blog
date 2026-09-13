const ORIGIN = 'https://blog.digitaldream.work';
const HOSTNAME = 'blog.digitaldream.work';
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{40,100}$/;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

const json = (status, code) => Response.json({ ok: status === 200, code }, {
  status,
  headers: {
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...(status === 429 ? { 'Retry-After': '60' } : {}),
  },
});

const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

function page(lang, title, message) {
  const back = lang === 'en' ? 'Back to the blog' : 'Retour au blog';
  return new Response(`<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>${escapeHtml(title)}</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f5efe2;color:#222a45;font:18px Georgia,serif}.card{max-width:38rem;margin:2rem;padding:2.5rem;border:1px solid #dbcba9;border-radius:20px;background:#fffdf7;box-shadow:0 18px 60px #463c2718}h1{font:700 2rem system-ui,sans-serif}p{line-height:1.65}a{color:#d35d42;font-weight:700}</style><main class="card"><h1>${escapeHtml(title)}</h1><p>${escapeHtml(message)}</p><a href="https://blog.digitaldream.work/">${back}</a></main></html>`, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=UTF-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  });
}

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

async function tokenHash(token) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
}

async function verifyTurnstile(env, token, ip, verifyFetch) {
  const response = await verifyFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
    signal: AbortSignal.timeout(8000),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error('turnstile_unavailable');
  return result.success && result.hostname === HOSTNAME && result.action === 'newsletter';
}

function messages(lang) {
  return lang === 'en' ? {
    subject: 'Confirm your monthly note — Le Carnet de DD',
    mail: link => `Hello,\n\nPlease confirm your subscription to the monthly note by opening this link:\n${link}\n\nIf you did not request this, you can ignore this email.\n\nMohammed — Le Carnet de DD`,
    confirmedTitle: 'Subscription confirmed',
    confirmed: 'Your address is now registered. The next field note will arrive in your inbox.',
    invalidTitle: 'Invalid link',
    invalid: 'This confirmation link is invalid or has already been used.',
    unsubscribedTitle: 'Subscription cancelled',
    unsubscribed: 'Your address has been removed from the monthly note.',
  } : {
    subject: 'Confirmez votre note mensuelle — Le Carnet de DD',
    mail: link => `Bonjour,\n\nMerci de confirmer votre abonnement à la note mensuelle en ouvrant ce lien :\n${link}\n\nSi vous n’avez rien demandé, ignorez simplement cet e-mail.\n\nMohammed — Le Carnet de DD`,
    confirmedTitle: 'Abonnement confirmé',
    confirmed: 'Votre adresse est bien inscrite. La prochaine note de terrain arrivera dans votre boîte mail.',
    invalidTitle: 'Lien invalide',
    invalid: 'Ce lien de confirmation est invalide ou a déjà été utilisé.',
    unsubscribedTitle: 'Abonnement annulé',
    unsubscribed: 'Votre adresse a été retirée de la note mensuelle.',
  };
}

export function createNewsletterHandler(send, verifyFetch = fetch) {
  return async function handleNewsletter(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/newsletter') {
      if (request.method !== 'POST') return json(405, 'method');
      if (request.headers.get('Origin') !== ORIGIN) return json(403, 'origin');
      if (!request.headers.get('Content-Type')?.startsWith('application/json')) return json(415, 'content_type');
      if (!env.NEWSLETTER_DB || !env.NEWSLETTER_LIMIT || !env.TURNSTILE_SECRET_KEY || !env.SMTP_PASSWORD) return json(503, 'unavailable');
      try {
        const ip = request.headers.get('CF-Connecting-IP');
        if (!ip) return json(403, 'origin');
        if (!(await env.NEWSLETTER_LIMIT.limit({ key: ip })).success) return json(429, 'rate_limit');
        const body = await request.json();
        if (!body || typeof body !== 'object' || Array.isArray(body) || body.website) return json(400, 'invalid');
        const email = typeof body.email === 'string' ? body.email.trim() : '';
        const token = typeof body.token === 'string' ? body.token : '';
        const lang = body.lang === 'en' ? 'en' : 'fr';
        if (!email || email.length > 254 || !EMAIL_PATTERN.test(email) || /[\r\n\x00-\x1f]/.test(email) || !token || token.length > 2048) return json(400, 'invalid');
        if (!(await verifyTurnstile(env, token, ip, verifyFetch))) return json(400, 'verification');

        const normalized = email.toLowerCase();
        const existing = await env.NEWSLETTER_DB.prepare('SELECT status, confirmation_sent_at FROM newsletter_subscribers WHERE email_normalized = ?').bind(normalized).first();
        if (existing?.status === 'active') return json(200, 'confirmation_sent');
        if (existing?.status === 'pending' && existing.confirmation_sent_at && Date.now() - Date.parse(existing.confirmation_sent_at) < 15 * 60 * 1000) return json(200, 'confirmation_sent');

        const confirmationToken = randomToken();
        const unsubscribeToken = randomToken();
        const confirmationHash = await tokenHash(confirmationToken);
        const unsubscribeHash = await tokenHash(unsubscribeToken);
        const id = crypto.randomUUID();
        const now = new Date().toISOString();
        await env.NEWSLETTER_DB.prepare(`INSERT INTO newsletter_subscribers
          (id,email,email_normalized,status,language,confirmation_token_hash,unsubscribe_token_hash,created_at,confirmation_sent_at,confirmed_at,unsubscribed_at)
          VALUES (?,?,?,'pending',?,?,?,?,NULL,NULL,NULL)
          ON CONFLICT(email_normalized) DO UPDATE SET email=excluded.email,status='pending',language=excluded.language,
          confirmation_token_hash=excluded.confirmation_token_hash,unsubscribe_token_hash=excluded.unsubscribe_token_hash,
          confirmation_sent_at=NULL,unsubscribed_at=NULL`).bind(id, email, normalized, lang, confirmationHash, unsubscribeHash, now).run();
        const copy = messages(lang);
        const link = `${ORIGIN}/newsletter/confirm?token=${encodeURIComponent(confirmationToken)}&lang=${lang}`;
        await send(env, { to: email, subject: copy.subject, text: copy.mail(link) });
        await env.NEWSLETTER_DB.prepare('UPDATE newsletter_subscribers SET confirmation_sent_at = ? WHERE email_normalized = ?').bind(now, normalized).run();
        return json(200, 'confirmation_sent');
      } catch (error) {
        console.error(JSON.stringify({ event: 'newsletter_failed', errorName: error instanceof Error ? error.name : 'UnknownError' }));
        return json(503, 'unavailable');
      }
    }

    if (url.pathname === '/newsletter/confirm' || url.pathname === '/newsletter/unsubscribe') {
      if (request.method !== 'GET') return json(405, 'method');
      const token = url.searchParams.get('token') || '';
      const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'fr';
      const copy = messages(lang);
      if (!env.NEWSLETTER_DB || !TOKEN_PATTERN.test(token)) return page(lang, copy.invalidTitle, copy.invalid);
      const hash = await tokenHash(token);
      if (url.pathname === '/newsletter/confirm') {
        const result = await env.NEWSLETTER_DB.prepare(`UPDATE newsletter_subscribers SET status='active',confirmed_at=?,confirmation_token_hash=NULL WHERE confirmation_token_hash=? AND status='pending'`).bind(new Date().toISOString(), hash).run();
        return result.meta.changes ? page(lang, copy.confirmedTitle, copy.confirmed) : page(lang, copy.invalidTitle, copy.invalid);
      }
      await env.NEWSLETTER_DB.prepare(`UPDATE newsletter_subscribers SET status='unsubscribed',unsubscribed_at=?,confirmation_token_hash=NULL WHERE unsubscribe_token_hash=?`).bind(new Date().toISOString(), hash).run();
      return page(lang, copy.unsubscribedTitle, copy.unsubscribed);
    }

    return json(404, 'not_found');
  };
}
