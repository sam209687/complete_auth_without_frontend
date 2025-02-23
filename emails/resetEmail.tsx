
import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from "@react-email/components";

  

   interface ForgotPasswordEmailProps  {
    
    
    email: string,
    resetLink : string
    
  }
   export default function ForgotPasswordEmail({ email, resetLink }: ForgotPasswordEmailProps ) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Verification Code</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Here&apos;s your reset-password link</Preview>
        <Section>
          <Row>
            <Heading as="h2">Hello {email},</Heading>
          </Row>
          <Row>
            <Text>
               We receiver a reset password request from your end please
              password click the link  to reset your password...
            </Text>
          </Row>
          <Row>
            <Button
            href={resetLink}
           
            
            >Click here </Button>
          </Row>
          <Row>
            <Text>
              If you did not request this code, please ignore this email.
            </Text>
          </Row>
          {/* <Row>
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={{ color: '#61dafb' }}
            >
              Verify here
            </Button>
          </Row> */}
        </Section>
      </Html>
    );
  }
 