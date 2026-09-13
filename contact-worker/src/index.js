import { createHandler } from './handler.js';
import { createNewsletterHandler } from './newsletter.js';
import { sendMail, sendSmtpMail } from './smtp.js';

const handleContact = createHandler(sendSmtpMail);
const handleNewsletter = createNewsletterHandler(sendMail);

export default {
  fetch(request, env, context) {
    const pathname = new URL(request.url).pathname;
    return pathname === '/api/contact'
      ? handleContact(request, env, context)
      : handleNewsletter(request, env, context);
  },
};
