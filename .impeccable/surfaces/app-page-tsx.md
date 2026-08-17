---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx","app/globals.css","components/github-activity.tsx","lib/github.ts"]
---

# Homepage surface brief

- Target: `app/page.tsx`
- Mode: Experience
- Approved direction: hybrid of `.impeccable/mocks/style-review/b-editorial-column.png` and `.impeccable/mocks/style-review/c-compact-index.png`
- Primary action: Explore my work

## Direction

Activity Ledger treats Marc’s public making as a continuous engineering record. The approved direction combines B’s numbered vertical navigation with C’s sober, compact index rows. The intro is intentionally short; Savyy follows as the sole project case; GitHub activity is evidence rather than a score; About, Résumé, and Writing close the ledger as concise horizontal records.

The financial proof remains accessible semantic HTML, inline SVG charts, layered paper surfaces, and a subtle raster texture, but it is compressed so it supports the page rather than dominating it. The activity matrix uses the authenticated GitHub contribution calendar, including anonymous private counts, with a selectable full-year view, yearly facts, and public account statistics. Dense evidence is limited to a 60rem band and prose to 68ch. Mobile preserves the same reading order without squeezing the desktop rail into the viewport.

## Component grammar

- Corners: mostly square; small 2–4px radii only where a functional control needs a hit-area cue.
- Rules: cobalt 1px ledger lines; 2px only for major section boundaries and active states.
- Elevation: physical overlap and paper layers, not generic card shadows; one restrained cast shadow on the lead case file.
- Type: sturdy slab serif for propositions, restrained monospaced indexing for navigation/evidence, and a humanist sans for supporting prose.
- Materials: pale recycled paper grain, blue ruling, carbon notes, one signal-red proof circle, sparse lime data cells.

## Approved-comp inventory

| Comp ingredient | Implementation medium | Commitment |
| --- | --- | --- |
| MARC MANSOUR brand and six numbered entries | Semantic header/nav + Tailwind rail geometry | Vertical desktop rail; mobile Sheet; exact labels: Home, Projects, About, Resume, Contact, Blog |
| Developer/finance thesis | Semantic heading and prose | Compact left typographic anchor, not centered or oversized |
| Explore my work | Semantic anchor styled as primary action | Solid cobalt control with directional arrow |
| Read the journal | Semantic anchor styled as secondary action | Quiet outlined companion |
| Savyy personal-finance case file | Semantic HTML + Tailwind utilities + inline SVG | Compact proof object; layered paper overlap retained |
| Case-file paper material | Generated raster texture + Tailwind layers | Warm tactile surface, never a glossy dashboard card |
| Red proof circle and cobalt annotations | Tailwind/SVG decoration, aria-hidden | Sparse and purposeful; preserve overlap and directionality |
| Recent activity ledger | Cached GitHub GraphQL calendar + public REST detail | Centered 60rem evidence band; authenticated totals and no private repository identities |
| Full-year contribution cells | Tailwind grid with accessible labels and instant shadcn tooltips | Real GitHub day counts and contribution levels, including anonymous private activity |
| Year selector and evidence ribbon | shadcn dropdown + semantic definition lists | Active days, busiest day/month, yearly totals, account profile, repositories, and streaks |
| Sole featured project | Semantic Savyy dossier | Source-backed product detail and one direct visit action; no repository index |
| Compact lower contents | Semantic sections | About, Resume, and Blog continue as shallow ruled rows |
| Footer contact index | Semantic footer links + iconography | LinkedIn, X, GitHub, and mailto destinations |

All page and component geometry is expressed with Tailwind utilities, including responsive, state, pseudo-element, and arbitrary-property variants. `app/globals.css` is reserved for Tailwind imports, semantic theme tokens, and true browser-wide base defaults.

## Responsive contract

- Desktop: fixed 8.5rem numbered rail; 67.5rem main field; Savyy and activity sit in narrower evidence bands.
- Tablet: the rail gives way to the mobile header; the case file and annotations simplify.
- Mobile: single-column order with a horizontally scrollable activity matrix, 44px minimum interactive targets, and no hidden primary content.
