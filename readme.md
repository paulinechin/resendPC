# How to go from zero to sending an email

## Getting Started 

Select your tech stack and environment. In this particular tutorial, we'll be using node.js on the server side and react email. For details on other configurations, go to [Resend Quick doc](https://resend.com/docs/introduction).   

You'll need the following in your system.  

- typescript 
- node 
- npm 

I'm a huge fan of [Homebrew](https://brew.sh/). It's my go-to package manager. 

## Prerequisite

[Create an API key](https://resend.com/api-keys) on your Resend Dashboard
[Verify your domain](https://resend.com/domains)

## Install
Install Resend Node.js SDK using your CLI. 

```
npm install resend
```

While you can generate HTML emails, it is recommended that you use ReactEmails for ease of development. 

Add react email to your project. 
```
npx create-email@latest
```

This will create a new folder called react-email-starter with a few sample email templates. 

Download dependencies.
```
npm install
```

## Create an .env file and add your resend API key
``` 
RESEND_KEY = re_8m9gwsVG_6n94KaJkJ323Yj6qSeVvLq9xF
```

## Run the Server

```
npm run dev
```

Visit localhost:3000 on your browser to view sample templates. As you edit the templates in the emails folder, you'll see the changes on localhost:3000. Here you can duplicate the existing template file or create something completely from scratch. I opt-in to duplicate an existing template since we want a fairly simple design for the billing issue email. 

## Build/Edit your email template

Adjust the email default content. 

Declare variables you'd like to pass through to the email. In particular, I use the four data points like name, credit card, card type, and plan to show up in the email message. 

```
interface ResendEmailProps {
  username?: string;
  lastfourdigits?: number;
  cardtype?: string;
  plan? :string;
}
```

There will be a collection of styling codes for different parts of the email. Adjust them as needed. 

Example: 
```
const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};
```

## Prepare .ts file 
Nod.js SDK automatically created a file called index.ts. We update this with the new react email template and adjust To and From emails. 

### Import react email template 
```
import { ResendBillingIssueEmail } from './react-email-starter/emails/resend-billing-issues';
```

### Adjust the To and From emails
The domain for the From email must have a verified. 
```
from: 'Resend Team <blackhole@resend.paulinechin.com>',
    to: ['hello@paulinechin.com'],
```

### Add a new subject and react email content
```
    subject: 'We couldn\'t process your payment.',
    //html: '<strong>It works!</strong>',
    react: ResendBillingIssueEmail({ username: "Pauline",
      cardtype: "MasterCard",
      lastfourdigits: 7656,
      plan: "Pro"}),
```


### Attach an invoice to the email 

```    
attachments: [
        {
          path: 'https://resend.com/static/sample/invoice.pdf',
          filename: 'invoice.pdf',
        }
      ]
```
