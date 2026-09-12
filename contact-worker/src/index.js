import nodemailer from 'nodemailer';
import { createHandler } from './handler.js';

const handle = createHandler(async (env, { name, email, message }) => {
  const transport = nodemailer.createTransport({
    host: env.SMTP_HOST, port: 465, secure: true,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
    disableFileAccess: true, disableUrlAccess: true,
    tls: { rejectUnauthorized: true, minVersion: 'TLSv1.2', servername: env.SMTP_HOST },
    logger: false, debug: false,
  });
  try {
    const result = await transport.sendMail({
      from: 'Le Carnet de DD <blog@digitaldream.work>', to: 'dev@digitaldream.work',
      replyTo: { name, address: email }, subject: 'Nouveau message — Le Carnet de DD',
      text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    });
    if (!result.accepted?.includes('dev@digitaldream.work')) throw new Error('not_accepted');
  } finally { transport.close(); }
});

export default { fetch: handle };
