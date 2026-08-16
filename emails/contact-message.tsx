import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  pixelBasedPreset,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

type ContactMessageEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactMessageEmail({
  name,
  email,
  message,
}: ContactMessageEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New portfolio message from {name}</Preview>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                paper: "#f4f7f5",
                raised: "#fbfcfa",
                ink: "#101828",
                muted: "#435164",
                cobalt: "#174ea6",
                signal: "#c8313b",
              },
            },
          },
        }}
      >
        <Body className="m-0 bg-paper px-16 py-40 font-sans text-ink">
          <Container className="mx-auto max-w-[620px] border border-solid border-cobalt bg-raised">
            <Section className="border-0 border-b border-solid border-cobalt px-32 py-20">
              <Text className="m-0 font-mono text-[12px] font-bold uppercase tracking-[1px] text-cobalt">
                Registered dispatch · portfolio contact
              </Text>
            </Section>
            <Section className="px-32 py-32">
              <Heading className="m-0 font-serif text-[36px] font-semibold leading-[40px] text-ink">
                New message from {name}
              </Heading>
              <Text className="mb-0 mt-16 text-[15px] leading-[24px] text-muted">
                Replying to this email will address {email} directly.
              </Text>
            </Section>
            <Section className="border-0 border-t border-solid border-cobalt px-32 py-24">
              <Text className="m-0 font-mono text-[11px] font-bold uppercase tracking-[1px] text-cobalt">
                Name
              </Text>
              <Text className="mb-24 mt-8 text-[16px] leading-[24px] text-ink">
                {name}
              </Text>
              <Text className="m-0 font-mono text-[11px] font-bold uppercase tracking-[1px] text-cobalt">
                Email
              </Text>
              <Text className="mb-24 mt-8 break-all text-[16px] leading-[24px] text-ink">
                {email}
              </Text>
              <Text className="m-0 font-mono text-[11px] font-bold uppercase tracking-[1px] text-cobalt">
                Message
              </Text>
              <Text className="mb-0 mt-8 whitespace-pre-wrap break-words text-[16px] leading-[26px] text-ink">
                {message}
              </Text>
            </Section>
            <Section className="border-0 border-t border-solid border-cobalt px-32 py-16">
              <Text className="m-0 font-mono text-[10px] uppercase tracking-[1px] text-signal">
                Submitted through marcmansour.dev/contact
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactMessageEmail;
