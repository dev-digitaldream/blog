import { connect } from 'cloudflare:sockets';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function base64(value) {
  const bytes = encoder.encode(value);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function normalizeBody(value) {
  return value.replace(/\r?\n/g, '\r\n').replace(/^\./gm, '..');
}

function safeHeader(value) {
  if (typeof value !== 'string' || /[\r\n\x00-\x1f]/.test(value)) throw new Error('invalid_header');
  return value;
}

export async function sendMail(env, { to, subject, text, replyTo }) {
  safeHeader(to);
  safeHeader(subject);
  if (replyTo) safeHeader(replyTo);
  const socket = connect(
    { hostname: env.SMTP_HOST, port: 465 },
    { secureTransport: 'on', allowHalfOpen: false },
  );
  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();
  let buffered = '';

  async function readResponse(expected) {
    let responseCode;
    while (true) {
      const lineEnd = buffered.indexOf('\r\n');
      if (lineEnd === -1) {
        const result = await Promise.race([
          reader.read(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('smtp_timeout')), 10_000)),
        ]);
        if (result.done) throw new Error('smtp_closed');
        buffered += decoder.decode(result.value, { stream: true });
        continue;
      }

      const line = buffered.slice(0, lineEnd);
      buffered = buffered.slice(lineEnd + 2);
      const match = /^(\d{3})([ -])/.exec(line);
      if (!match) throw new Error('smtp_protocol');
      responseCode ??= Number(match[1]);
      if (Number(match[1]) !== responseCode) throw new Error('smtp_protocol');
      if (match[2] === ' ') {
        if (!expected.includes(responseCode)) {
          const error = new Error('smtp_rejected');
          error.code = `SMTP_${responseCode}`;
          throw error;
        }
        return;
      }
    }
  }

  async function command(value, expected) {
    await writer.write(encoder.encode(`${value}\r\n`));
    await readResponse(expected);
  }

  try {
    await Promise.race([
      socket.opened,
      new Promise((_, reject) => setTimeout(() => reject(new Error('smtp_connect_timeout')), 10_000)),
    ]);
    await readResponse([220]);
    await command('EHLO blog.digitaldream.work', [250]);
    await command('AUTH LOGIN', [334]);
    await command(base64(env.SMTP_USER), [334]);
    await command(base64(env.SMTP_PASSWORD), [235]);
    await command(`MAIL FROM:<${env.SMTP_USER}>`, [250]);
    await command(`RCPT TO:<${to}>`, [250, 251]);
    await command('DATA', [354]);

    const encodedSubject = `=?UTF-8?B?${base64(subject)}?=`;
    const body = normalizeBody(text);
    const mail = [
      `Date: ${new Date().toUTCString()}`,
      `From: Le Carnet de DD <${env.SMTP_USER}>`,
      `To: ${to}`,
      ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
      `Subject: ${encodedSubject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      '',
      body,
      '.',
      '',
    ].join('\r\n');
    await writer.write(encoder.encode(mail));
    await readResponse([250]);
    await command('QUIT', [221]);
  } finally {
    reader.releaseLock();
    writer.releaseLock();
    await socket.close().catch(() => {});
  }
}

export function sendSmtpMail(env, { name, email, message }) {
  return sendMail(env, {
    to: 'dev@digitaldream.work',
    subject: 'Nouveau message — Le Carnet de DD',
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    replyTo: `${name} <${email}>`,
  });
}
