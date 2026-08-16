import type { Metadata } from "next";

import { ContactDispatch } from "./_components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
    <div className="relative isolate mx-auto min-h-screen w-[min(100%,var(--content-width))] border-x-0 border-[var(--rule-soft)] bg-[var(--shell-surface)] before:pointer-events-none before:fixed before:top-0 before:bottom-0 before:left-[0.8rem] before:-z-10 before:w-px before:bg-[var(--margin-rule)] before:content-[''] min-[641px]:before:left-[1.1rem] min-[901px]:border-x min-[901px]:before:left-[max(1.15rem,calc((100vw-var(--content-width))/2+4rem))]">
      <a
        className="fixed top-3 left-3 z-100 -translate-y-[160%] border border-[var(--cobalt)] bg-[var(--paper-raised)] px-4 py-[0.7rem] font-mono [font-size:var(--type-label)] text-[var(--ink)] uppercase focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader activePage="contact" />
      <main className="overflow-clip" id="main-content">
        <ContactDispatch
          destination={contactConfig.recipient}
          docketNumber={contactConfig.docketNumber}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
