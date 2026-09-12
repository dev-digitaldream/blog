import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHandler } from '../src/handler.js';
const valid = { name: 'Mohammed', email: 'visitor@example.com', message: 'Message de contact de test.', token: 'test-token' };
const request = (body = valid, origin = 'https://blog.digitaldream.work') => new Request('https://blog.digitaldream.work/api/contact', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.1' }, body: JSON.stringify(body) });
function setup(result = { success: true, hostname: 'blog.digitaldream.work', action: 'contact' }) {
  const sent = [];
  const env = { SMTP_PASSWORD: 'test', TURNSTILE_SECRET_KEY: 'test', CONTACT_LIMIT: { limit: async () => ({ success: true }) }, GLOBAL_LIMIT: { limit: async () => ({ success: true }) } };
  const handle = createHandler(async (_, data) => { sent.push(data); }, async () => Response.json(result));
  return { handle, sent, env };
}
test('valid request sends once and ignores supplied recipient', async () => {
  const { handle, env, sent } = setup();
  assert.equal((await handle(request({ ...valid, to: 'attacker@example.com' }), env)).status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, undefined);
});
for (const [label, body] of Object.entries({ honeypot: { ...valid, website: 'spam' }, injection: { ...valid, email: 'x@y.com\r\nBcc:evil@z.com' }, short: { ...valid, message: 'a' }, oversized: { ...valid, message: 'a'.repeat(25000) }, missing: { ...valid, token: '' }, malformed: [] })) {
  test(`rejects ${label} without sending`, async () => {
    const { handle, env, sent } = setup();
    assert.equal((await handle(request(body), env)).status, 400);
    assert.equal(sent.length, 0);
  });
}
for (const result of [{ success: false }, { success: true, hostname: 'evil.example', action: 'contact' }, { success: true, hostname: 'blog.digitaldream.work', action: 'other' }]) {
  test(`rejects Turnstile ${JSON.stringify(result)}`, async () => {
    const { handle, env, sent } = setup(result);
    assert.equal((await handle(request(), env)).status, 400);
    assert.equal(sent.length, 0);
  });
}
test('rejects foreign origin', async () => {
  const { handle, env, sent } = setup();
  assert.equal((await handle(request(valid, 'https://evil.example'), env)).status, 403);
  assert.equal(sent.length, 0);
});
test('fails closed without secrets', async () => {
  const { handle, env } = setup(); delete env.SMTP_PASSWORD;
  assert.equal((await handle(request(), env)).status, 503);
});
for (const binding of ['CONTACT_LIMIT', 'GLOBAL_LIMIT']) {
  test(`enforces ${binding}`, async () => {
    const { handle, env, sent } = setup();
    env[binding].limit = async () => ({ success: false });
    assert.equal((await handle(request(), env)).status, 429);
    assert.equal(sent.length, 0);
  });
}
test('delivery failure is not a success and leaks no detail', async () => {
  const { env } = setup();
  const handle = createHandler(async () => { throw Error('password=SECRET'); }, async () => Response.json({ success: true, hostname: 'blog.digitaldream.work', action: 'contact' }));
  const response = await handle(request(), env);
  assert.equal(response.status, 503);
  assert.equal((await response.text()).includes('SECRET'), false);
});
