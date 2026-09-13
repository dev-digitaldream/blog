import { createHandler } from './handler.js';
import { sendSmtpMail } from './smtp.js';

const handle = createHandler(sendSmtpMail);

export default { fetch: handle };
