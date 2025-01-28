import { Resend } from 'resend';
import { ResendBillingIssueEmail } from './react-email-starter/emails/resend-billing-issues';


const resend = new Resend(process.env.RESEND_KEY);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'TLDR <blackhole@resend.paulinechin.com>',
    to: ['hello@paulinechin.com'],
    subject: 'We couldn\'t process your payment.',
    //html: '<strong>It works!</strong>',
    react: ResendBillingIssueEmail({ username: "Pauline",
      cardtype: "MasterCard",
      lastfourdigits: 7656,
      plan: "Pro"})
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
