import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createNewsletterHandler } from '../src/newsletter.js';

function fakeDatabase() {
  const rows = new Map();
  return {
    rows,
    prepare(sql) {
      let values = [];
      return {
        bind(...bound) { values = bound; return this; },
        async first() {
          const row = rows.get(values[0]);
          return row ? { status: row.status, confirmation_sent_at: row.confirmation_sent_at } : null;
        },
        async run() {
          if (sql.startsWith('INSERT')) {
            const [id, email, normalized, language, confirmationHash, unsubscribeHash, createdAt] = values;
            rows.set(normalized, { id, email, normalized, language, status: 'pending', confirmationHash, unsubscribeHash, createdAt, confirmation_sent_at: null });
            return { meta: { changes: 1 } };
          }
          if (sql.includes('confirmation_sent_at = ?')) {
            rows.get(values[1]).confirmation_sent_at = values[0];
            return { meta: { changes: 1 } };
          }
          const hash = values[1];
          const row = [...rows.values()].find(candidate => sql.includes("status='active'") ? candidate.confirmationHash === hash : candidate.unsubscribeHash === hash);
          if (!row) return { meta: { changes: 0 } };
          if (sql.includes("status='active'")) { row.status = 'active'; row.confirmationHash = null; }
          else row.status = 'unsubscribed';
          return { meta: { changes: 1 } };
        },
      };
    },
  };
}

function setup(turnstile = { success: true, hostname: 'blog.digitaldream.work', action: 'newsletter' }) {
  const db = fakeDatabase();
  const mail = [];
  const env = {
    NEWSLETTER_DB: db,
    NEWSLETTER_LIMIT: { limit: async () => ({ success: true }) },
    TURNSTILE_SECRET_KEY: 'secret',
    SMTP_PASSWORD: 'secret',
  };
  const handle = createNewsletterHandler(async (_, message) => mail.push(message), async () => Response.json(turnstile));
  return { db, mail, env, handle };
}

function subscribe(body = { email: 'Reader@Example.com', lang: 'fr', token: 'valid' }) {
  return new Request('https://blog.digitaldream.work/api/newsletter', {
    method: 'POST',
    headers: { Origin: 'https://blog.digitaldream.work', 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.4' },
    body: JSON.stringify(body),
  });
}

test('creates a pending subscription and sends one confirmation link', async () => {
  const { db, mail, env, handle } = setup();
  const response = await handle(subscribe(), env);
  assert.equal(response.status, 200);
  assert.equal(db.rows.get('reader@example.com').status, 'pending');
  assert.equal(mail.length, 1);
  assert.match(mail[0].text, /newsletter\/confirm\?token=/);
  assert.equal(mail[0].text.includes(db.rows.get('reader@example.com').confirmationHash), false);
});

test('rejects a Turnstile token for another action', async () => {
  const { mail, env, handle } = setup({ success: true, hostname: 'blog.digitaldream.work', action: 'contact' });
  assert.equal((await handle(subscribe(), env)).status, 400);
  assert.equal(mail.length, 0);
});

test('rejects header injection and the honeypot', async () => {
  const { mail, env, handle } = setup();
  assert.equal((await handle(subscribe({ email: 'reader@example.com\r\nBcc:x@example.com', token: 'valid' }), env)).status, 400);
  assert.equal((await handle(subscribe({ email: 'reader@example.com', token: 'valid', website: 'bot' }), env)).status, 400);
  assert.equal(mail.length, 0);
});
