import type { Metadata } from "next";

import { ContactDispatch } from "./_components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { contactConfig } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send Marc Mansour a message about finance, software development, financial tools, or a potential collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact Marc Mansour",
    description:
      "Start a conversation about finance, software, financial tools, or collaboration.",
  },
};

export default function ContactPage() {
  return (
    <SiteShell activePage="contact" showFooterCta={false}>
      <main className="overflow-clip" id="main-content">
        <ContactDispatch
          destination={contactConfig.recipient}
          docketNumber={contactConfig.docketNumber}
        />
      </main>
    </SiteShell>
  );
}
