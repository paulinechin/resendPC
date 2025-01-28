import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ResendEmailProps {
  username?: string;
  lastfourdigits?: number;
  cardtype?: string;
  plan? :string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ResendBillingIssueEmail = ({
  username,
  lastfourdigits,
  cardtype,
  plan,
}:ResendEmailProps) => (
  <Html>
    <Head />
    <Preview>Oh no! We had some problems processing your payment.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/resend-wordmark-black.png`}
            width="150"
            height="49"
            alt="Resend"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
           Hey {username},
          </Text>
          <Text style={paragraph}>
          Uh-Oh! We ran into some trouble processing your recent payment for Resend using the <strong>{cardtype}</strong> card ending in <strong>{lastfourdigits}</strong>.
          </Text>
          <Text style={paragraph}>
          No worries-just take a quick peek at your payment details to keep your emails flying smoothly without any interruptions.    
          </Text>
          <Button style={button} href="https://resend.com/settings/billing">
            Update your billing
          </Button>

          <Text style={paragraph}>
            If you have any questions or concerns, please contact {" "}
            <Link style={anchor} href="https://resend.com/help/">
              support.
            </Link>{" "} 
            We're here to help! 
          </Text>
          <Text style={paragraph}>— Resend Team</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Resend, 2261 Market Street #5039, San Francisco, CA 94114
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ResendBillingIssueEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#000000",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};

ResendBillingIssueEmail.PreviewProps = {
  username: "Pauline",
  cardtype: "MasterCard",
  lastfourdigits: 3456,
  plan: "Pro",
} as ResendEmailProps;
