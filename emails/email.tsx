import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export function ClientEmail({
  name,
  subject,
  message,
}: {
  name: String;
  subject: String;
  message: String;
}) {
  return (
    <Html>
      <Head />
      <Preview>
        You got a mail from {name.toString()} for {subject.toString()}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Text style={paragraph}>Hi ExponentialDev,</Text>
            <Text style={paragraph}>{message}</Text>
            <Text style={paragraph}>
              Thanks,
              <br />
              {name}
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2024 ExponentialDev, All Rights Reserved <br />
              Antop Hill, Mumbai, MH, 400037 - India
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
}

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  margin: "20px 0",
  padding: "5px 20px 10px 20px",
};
