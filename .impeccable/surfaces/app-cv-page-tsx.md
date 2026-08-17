---
version: 1
slug: "app-cv-page-tsx"
primary_target: "app/cv/page.tsx"
related_targets: ["lib/resume.ts","components/site-header.tsx","components/site-shell.tsx"]
---

# Résumé page surface brief

- Target: `app/cv/page.tsx`
- Mode: Read
- Seed: `career-ledger`
- Proposition: Career Ledger
- Approved comp: none; this is a code-led extension of the established Activity Ledger
- Primary action: Open PDF résumé
- Secondary actions: Email Marc; view Savyy

## Scope and visitor job

This route is an ordinary cross-page extension of the established Activity Ledger, not a new visual identity. It lets a recruiter, collaborator, or curious reader scan Marc's current position, finance-to-software trajectory, education, certifications, skills, and selected product work, then open a printable résumé or supporting credential PDF.

## Shipped direction and contract

- **THESIS:** The résumé is a continuous working record rather than a stack of disconnected cards.
- **OWN-WORLD:** The Activity Ledger becomes a clipped career folio built from ruled fields, cobalt rules, monospaced evidence labels, slab-serif statements, sparse lime verification marks, and one signal-red review circle.
- **STORY:** Identity and proposition → working profile and direct actions → professional experience → certifications and education → technical practice, languages, and Savyy.
- **FIRST VIEWPORT:** A two-column identity/profile opening, with the real portrait and direct actions opposite a clipped contact folio; three compact facts form the ledger index below.
- **FORM:** Career Ledger. The implementation is a semantic Next.js App Router Server Component backed by one typed content file, with route-aware shared navigation and local PDF assets.
- **FINISH:** “Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.” The fresh finish-review disposition is `ship`; this brief records the shipped surface without widening the global system.

The memorable moment is the clipped profile folio in the first viewport: the portrait, August 2026 dateline, contact facts, and social links read like a pinned working document, closed by the route's single signal-red “finance → software” proof circle.

## Fidelity evidence

- `.impeccable/review/desktop.png` records the 1440×1000 desktop viewport. It preserves the active Résumé workbook tab, unequal identity/profile split, clipped folio, direct PDF action, three-cell fact strip, and lateral “Career record” index leading into the first experience entry.
- `.impeccable/review/mobile.png` records the 390×844 mobile viewport. It preserves the shared sticky mobile header, full-scale left-anchored identity, readable proposition, and a touch-sized primary PDF action without horizontal overflow.
- Browser checks measured `scrollWidth === innerWidth` at desktop and mobile. On narrow layouts, the “Career record” and “Selected work” labels are intentionally hidden rather than becoming forbidden eyebrows above their headings.
- The live résumé and its prior open-source implementation informed content and information architecture; the shipped visual treatment remains inside the current portfolio's Activity Ledger world.

## Implementation notes

- `lib/resume.ts` is the single editable content record. It defines the profile, contact links, facts, experience, certifications, education, skills, languages, and selected project. Routine résumé edits should start there.
- Education and certification records accept optional document objects. Put diploma PDFs in `public/diplomas/` and set `diploma: { label, href }`; put certification PDFs in `public/certifications/` and use the matching `certificate` object.
- `app/cv/page.tsx` owns metadata, the durable in-artifact direction contract, semantic sections, layout, conditional document links, and shared shell integration. Styling is entirely Tailwind utility classes; no page selector or CSS Module is introduced.
- `components/site-header.tsx` and `components/site-shell.tsx` add the route-aware Résumé state. The homepage résumé action now links to `/cv`, while the sitemap publishes the route.
- Typography keeps the established three voices: Bitter for the main identity and section statements, Open Sans for narrative copy, and Source Code Pro for indices, dates, actions, and evidence labels.
- Theme behavior inherits the Activity Ledger tokens. Paper, ink, cobalt, lime, signal red, shadows, and texture remap through the global system; this route adds no independent palette or reusable primitive.

## Constraints

- Preserve the route order and the distinction between the full-page résumé and the downloadable PDF résumé.
- Keep professional claims and dates evidence-bound to `lib/resume.ts`; do not invent metrics, clients, outcomes, or credentials.
- Retain one signal-red proof circle and sparse lime verification marks. They are evidence gestures, not general decoration.
- Keep the desktop section labels lateral. Below 901px they remain hidden instead of moving above headings as eyebrow text.
- Preserve readable contrast, keyboard-visible links, touch-sized primary actions, and overflow-free desktop/mobile layouts.
- Keep diploma and certificate PDFs local under `public/` so content entries can use stable root-relative URLs.

## Unresolved decisions

None at ship. Additional diplomas or credentials require only the local PDF and corresponding data entry; they do not require a layout change.
