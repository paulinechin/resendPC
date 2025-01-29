# How to go from zero to sending an email

## Getting Started 

Select your tech stack and environment. In this particular tutorial, we'll be using node.js on the server side and react email. For details on other configurations, go to [Resend Quick doc](https://resend.com/docs/introduction).   

You'll need the following for your project:

- typescript 
- node.js
- npm 

I'm a huge fan of [Homebrew](https://brew.sh/). It's my go-to package manager. 

## Prerequisite

Sign up for a free Resend account and [Create an API key](https://resend.com/api-keys)
[Verify your domain](https://resend.com/domains)

## Setup your project
Create your new project and install Resend Node.js SDK.
```
mkdir project-name 
```

```
cd project-name 
```

```
npm install resend
```

Add a new file called send.ts with the example code below.

```
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Resend Team <blackhole@resend.paulinechin.com>',
    to: ['hello@paulinechin.com'],,
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
```

## Add your resend API key
``` 
export RESEND_KEY = secret_key
```

Add dev script to package.json file,
```
  "scripts": {
    "dev": "ts-node index.ts"
  }
```

Let's rebuild. 

```
npm install
```

## Send out your first HTML email
You're ready to start sending HTML emails. 

```
npm run dev 
``` 

## Add react email 
It is recommended that you use react emails to build out email templates. Add react email to your project. 
```
npx create-email@latest
```

This will create a new folder called react-email-starter with a few sample email templates. 

Download dependencies.
```
npm install
```

## Run dev server

```
npm run dev
```

Visit localhost:3000 on your browser to view sample templates. As you edit the templates in the emails folder, you'll see the changes on localhost:3000. Here you can duplicate the existing template file or create something completely from scratch. I opt-in to duplicate an existing template since we want a fairly simple design for the billing issue email. 

## Build/Edit your email template

1. Adjust the email default content. 

2. Declare variables you'd like to pass through to the email. I created name, credit card, card type, and pricing plan for my email message. 

```
interface ResendEmailProps {
  username?: string;
  lastfourdigits?: number;
  cardtype?: string;
  plan? :string;
}
```

3. Adjust the email style. There will be a collection of styling codes for parts of the email. 

Example below is the styling for the paragraph: 
```
const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};
```

## Prepare send file 
Node.js SDK install automatically created a file called index.ts. We add the new react email template and adjust 'To' and 'From' emails. 

1. Import react email template 
```
import { ResendBillingIssueEmail } from './react-email-starter/emails/resend-billing-issues';
```

2. Adjust the To and From emails
The domain for the From email must have a verified. 
```
from: 'Resend Team <blackhole@resend.paulinechin.com>',
    to: ['hello@paulinechin.com'],
```

3. Add a new subject and react email content
```
    subject: 'We couldn\'t process your payment.',
    //html: '<strong>It works!</strong>',
    react: ResendBillingIssueEmail({ username: "Pauline",
      cardtype: "MasterCard",
      lastfourdigits: 7656,
      plan: "Pro"}),
```


4.  Attach an invoice to the email 

```    
attachments: [
        {
          path: 'https://resend.com/static/sample/invoice.pdf',
          filename: 'invoice.pdf',
        }
      ]
```

## Ready to Send? 
```
npm run dev 
```
