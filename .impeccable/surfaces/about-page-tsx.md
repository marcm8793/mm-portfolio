---
version: 1
slug: "about-page-tsx"
primary_target: "app/about/page.tsx"
related_targets: ["lib/about.ts","app/globals.css","components/site-header.tsx","components/site-footer.tsx"]
---

# About page surface brief

- Target: `app/about/page.tsx`
- Mode: Read
- Seed: `working-dossier`
- Proposition: 1, The Working Dossier
- Approved comp: `.impeccable/mocks/decision/about-working-dossier.webp`
- Comp sidecar: `.impeccable/mocks/decision/about-working-dossier.json`
- Primary action: Start a conversation
- Secondary actions: Open résumé; Explore Savyy

## Scope and visitor job

This route is an ordinary cross-page extension of the established Activity Ledger, not a new visual identity. It helps a broad public reader understand the sequence connecting Marc’s investment-banking context, recurring technical pressure, software as an investigative method, and public work. The route may state the confirmed current position and working method, but it must not invent an employer, job title, dates, clients, metrics, outcomes, or other biographical proof.

## Shipped direction and contract

- **THESIS:** Investment-banking work keeps producing technical questions; software is how Marc investigates and builds through them.
- **OWN-WORLD:** The Activity Ledger becomes a clipped personal dossier built from ruled paper, cobalt rules, index tabs, proof marks, and inspectable first-person evidence.
- **STORY:** Present role, technical pressure, software method, public work, current practice, then contact.
- **FIRST VIEWPORT:** A dominant statement and clipped position slip lead immediately into four dossier leaves, an action strip, and a compact index bar.
- **FORM:** Working Dossier, proposition 1, seed key `working-dossier`. The implementation is a static semantic Next.js App Router Server Component with route-aware shared navigation and no page-specific client data.
- **FINISH:** “Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.” The fresh finish-review disposition is `ship`; this brief records the shipped surface without widening the global system.

The memorable moment is the four-leaf progression—Investment banking, Technical pressure, Software development, Public work—under the opening thesis. Each leaf reads as a working paper rather than an independent card, and the third leaf carries the route’s single signal-red proof circle.

## Fidelity evidence

- The approved comp is a 1536×1024 comp-led artifact. Its desktop contract is preserved in `.impeccable/review/desktop.png` and the first-viewport reproduction checkpoint `.impeccable/review/hero-repro.png`, both captured at 1536×1024.
- Desktop evidence retains the active About workbook tab, asymmetrical thesis/current-position split, clipped warm-stock position slip with paperclip and sparse lime tab, four numbered ruled leaves, primary/secondary actions, and dark ruled dossier index.
- `.impeccable/review/mobile.png` captures the 390×844 mobile route in Night Ledger mode. It shows the sticky touch-first header, full-scale left-anchored thesis, readable lead copy, shared red margin rule, and semantic dark-token remapping without compressing the desktop split.
- Comp fidelity is structural rather than photographic: the generated dossier is rebuilt as semantic HTML and CSS, with readable factual copy and shared site chrome instead of flattened artwork or invented annotations.

## Implementation notes

- `app/about/page.tsx` owns metadata, the durable in-artifact direction contract, semantic regions, shared header/footer, and the email, résumé, and Savyy actions.
- `lib/about.ts` is the single route-content record for the thesis, position slip, four dossier leaves, practice narrative, and close. Keep claims evidence-bound and first-person.
- `app/about/page.tsx` implements the route entirely with Tailwind CSS utilities, including arbitrary properties and responsive/pseudo-element variants for its ruled paper and proof details. `app/globals.css` supplies only Tailwind imports, the established semantic tokens, and true browser-wide base defaults; it contains no page- or component-specific selectors. The opening uses an unequal `1.85fr / 0.65fr` ledger split; the position slip is the only lifted paper object; the dossier leaves remain flat, ruled, square, and aligned to the shared page gutter.
- The leaves reflow from four columns to two at 1180px and one at 640px. At 900px the intro stacks, the route uses the shared sticky Sheet navigation, actions wrap, and the position slip becomes a centered full-width working sheet below the thesis. Primary content is reordered by the grid, never hidden.
- Typography keeps the system’s three voices: Bitter for thesis and leaf propositions, Open Sans for explanatory copy, and Source Code Pro for file labels, indices, controls, and evidence marks.
- Theme behavior is inherited from the global Activity Ledger tokens. Paper, ink, cobalt, lime, signal red, stock, shadows, and texture remap semantically in dark mode; this route adds no independent palette or component primitive.

## Constraints

- Preserve the sequence: present role → technical pressure → software method → public work → current practice → contact.
- Keep the four leaf titles and their proof notes concise enough to preserve the ledger rhythm.
- Use one signal-red proof gesture and one sparse lime verification tab; neither becomes a general accent pattern.
- Keep ordinary leaves and sections unshadowed. Any shadow must continue to explain the physical overlap of the clipped position slip.
- Preserve full content, readable contrast, and touch-sized controls across desktop, tablet, mobile, Light, System, and Dark modes.

## Unresolved decisions

None at ship. Future factual biography additions require source evidence and a content decision; they do not follow automatically from this surface direction.
