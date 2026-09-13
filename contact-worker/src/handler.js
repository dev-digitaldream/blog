const ORIGIN = 'https://blog.digitaldream.work';
const MAX_BYTES = 24000;
const reply = (status, code) => Response.json({ ok: status === 200, code }, {
  status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...(status === 429 ? { 'Retry-After': '60' } : {}) },
});

async function readBody(request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error('empty');
  let length = 0;
  const chunks = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > MAX_BYTES) throw new Error('large');
      chunks.push(value);
    }
  } catch (error) {
    await reader.cancel();
    throw error;
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export function createHandler(sendMail, verifyFetch = fetch) {
  return async function handle(request, env) {
    let stage = 'request';
    if (new URL(request.url).pathname !== '/api/contact') return reply(404, 'not_found');
    if (request.method !== 'POST') return reply(405, 'method');
    if (request.headers.get('Origin') !== ORIGIN) return reply(403, 'origin');
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) return reply(415, 'content_type');
    if (!env.SMTP_PASSWORD || !env.TURNSTILE_SECRET_KEY || !env.CONTACT_LIMIT || !env.GLOBAL_LIMIT) return reply(503, 'unavailable');
    try {
      const ip = request.headers.get('CF-Connecting-IP');
      if (!ip) return reply(403, 'origin');
      const limited = await env.CONTACT_LIMIT.limit({ key: ip });
      if (!limited.success) return reply(429, 'rate_limit');
      let body;
      try { body = await readBody(request); } catch { return reply(400, 'invalid'); }
      if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(400, 'invalid');
      if (body.website || body.botcheck) return reply(400, 'invalid');
      const { name, email, message, token } = body;
      if ([name, email, message, token].some(value => typeof value !== 'string')) return reply(400, 'invalid');
      if (!name.trim() || name.length > 100 || /[\r\n\x00-\x1f]/.test(name) ||
          email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
          message.trim().length < 10 || message.length > 5000 || /\x00/.test(message) ||
          token.length < 1 || token.length > 2048) return reply(400, 'invalid');
      stage = 'turnstile_request';
      const verification = await verifyFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
        signal: AbortSignal.timeout(8000),
      });
      if (!verification.ok) {
        console.error(JSON.stringify({ event: 'contact_failed', stage, status: verification.status }));
        return reply(503, 'unavailable');
      }
      const result = await verification.json();
      if (!result.success || result.hostname !== 'blog.digitaldream.work' || result.action !== 'contact') {
        console.error(JSON.stringify({
          event: 'contact_failed',
          stage: 'turnstile_validation',
          hostnameMatches: result.hostname === 'blog.digitaldream.work',
          actionMatches: result.action === 'contact',
          errorCodes: Array.isArray(result['error-codes']) ? result['error-codes'] : [],
        }));
        return reply(400, 'verification');
      }
      if (!(await env.GLOBAL_LIMIT.limit({ key: 'contact' })).success) return reply(429, 'rate_limit');
      stage = 'smtp';
      await sendMail(env, { name: name.trim(), email, message: message.trim() });
      return reply(200, 'sent');
    } catch (error) {
      // Never log SMTP credentials, message contents, or visitor addresses.
      console.error(JSON.stringify({
        event: 'contact_failed',
        stage,
        errorName: error instanceof Error ? error.name : 'UnknownError',
        errorCode: typeof error?.code === 'string' ? error.code : undefined,
        command: typeof error?.command === 'string' ? error.command : undefined,
        responseCode: Number.isInteger(error?.responseCode) ? error.responseCode : undefined,
      }));
      return reply(503, 'unavailable');
    }
  };
}
