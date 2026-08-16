---
version: 1
slug: "app-contact-page-tsx"
primary_target: "app/contact/page.tsx"
related_targets: ["app/contact/_components/contact-form.tsx","app/contact/actions.ts","lib/contact.ts","emails/contact-message.tsx","components/site-header.tsx","components/site-footer.tsx"]
---

# Contact page

- **Mode:** Operate. A public visitor sends Marc one concise message.
- **Audience and job:** Finance, software, and collaboration-minded readers need a direct, credible contact route without leaving the portfolio.
- **Primary action:** Submit exactly three visible fields—Name, Email, Message—and receive an on-page confirmation.
- **Proof and content:** Fixed destination `marc@mansour.contact`; no response-time promise, social proof, or invented claim.
- **Chosen direction:** Registered Dispatch. Approved comp: `.impeccable/mocks/decision/contact-registered-dispatch.webp`.
- **Memorable moment:** The form is the working half of a registered-mail docket; the right receipt shifts from pending to dispatched after a successful send.
- **States:** Empty, focused, validating, sending, field error, throttled, provider/configuration error, and success. Errors explain recovery and preserve entered values.
- **Constraints:** Activity Ledger world, light and Night Ledger themes, mobile reading order, shadcn controls, Tailwind utilities only, server-only Resend key, React Email notification, fixed recipient and verified sender, visitor email as `replyTo`, honeypot, server throttling, and Resend idempotency.
- **Responsive contract:** Desktop preserves the wide form plus narrow detachable receipt. Below the desktop threshold the receipt becomes a ruled section after the form; controls remain at least 44px and the full task stays in reading order.
