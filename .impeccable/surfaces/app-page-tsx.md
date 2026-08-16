---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx","app/globals.css","components/github-activity.tsx","lib/github.ts"]
---

# Homepage surface brief

- Target: `app/page.tsx`
- Mode: Experience
- Approved comp: `.impeccable/mocks/decision/homepage-activity-ledger.webp`
- Primary action: Explore my work

## Direction

Activity Ledger treats Marc’s public making as a continuous engineering record. The first viewport is an asymmetric thesis-and-proof spread: the developer/finance statement anchors the left, the Savyy personal-finance case file anchors the right, and a full-width recent-public-activity ledger cuts through their lower edge. The GitHub activity is evidence, not a score. Navigation uses workbook index tabs and the lower page continues with Savyy as the sole project case before the about, résumé, and blog binder.

The comp’s photographed folder stack is not literalized as a flattened screenshot. It becomes accessible semantic HTML, inline SVG charts, layered paper surfaces, and a subtle raster paper texture so the product specimen remains responsive and inspectable. The activity matrix uses the authenticated GitHub contribution calendar, including anonymous private counts, with a selectable full-year view, yearly facts, and public account statistics. Mobile preserves the reading order—thesis, project case, activity ledger—without squeezing the desktop split.

## Component grammar

- Corners: mostly square; small 2–4px radii only where a functional control needs a hit-area cue.
- Rules: cobalt 1px ledger lines; 2px only for major section boundaries and active states.
- Elevation: physical overlap and paper layers, not generic card shadows; one restrained cast shadow on the lead case file.
- Type: sturdy slab serif for propositions, restrained monospaced indexing for navigation/evidence, and a humanist sans for supporting prose.
- Materials: pale recycled paper grain, blue ruling, carbon notes, one signal-red proof circle, sparse lime data cells.

## Approved-comp inventory

| Comp ingredient | Implementation medium | Commitment |
| --- | --- | --- |
| MARC MANSOUR brand and six index tabs | Semantic header/nav + Tailwind tab geometry | Exact labels: Home, Projects, About, Resume, Contact, Blog |
| Developer/finance thesis | Semantic heading and prose | Dominant left typographic anchor, not centered |
| Explore my work | Semantic anchor styled as primary action | Solid cobalt control with directional arrow |
| Read the journal | Semantic anchor styled as secondary action | Quiet outlined companion |
| Savyy personal-finance case file | Semantic HTML + Tailwind utilities + inline SVG | Dominant right proof object; layered paper overlap and annotation arrows retained |
| Case-file paper material | Generated raster texture + Tailwind layers | Warm tactile surface, never a glossy dashboard card |
| Red proof circle and cobalt annotations | Tailwind/SVG decoration, aria-hidden | Sparse and purposeful; preserve overlap and directionality |
| Recent activity ledger | Cached GitHub GraphQL calendar + public REST detail | Full-width horizontal ribbon; authenticated totals and no private repository identities |
| Full-year contribution cells | Tailwind grid with accessible labels and instant shadcn tooltips | Real GitHub day counts and contribution levels, including anonymous private activity |
| Year selector and evidence ribbon | shadcn dropdown + semantic definition lists | Active days, busiest day/month, yearly totals, account profile, repositories, and streaks |
| Sole featured project | Semantic Savyy dossier | Source-backed product detail and one direct visit action; no repository index |
| Numbered lower contents | Semantic sections | About, Resume, and Blog continue the binder rhythm |
| Footer contact index | Semantic footer links + iconography | LinkedIn, X, GitHub, and mailto destinations |

All page and component geometry is expressed with Tailwind utilities, including responsive, state, pseudo-element, and arbitrary-property variants. `app/globals.css` is reserved for Tailwind imports, semantic theme tokens, and true browser-wide base defaults.

## Responsive contract

- Desktop: thesis and case file share the first row; the activity ledger crosses beneath both.
- Tablet: case file remains dominant but annotations simplify; tabs may scroll horizontally.
- Mobile: single-column order with a horizontally scrollable activity matrix, 44px minimum interactive targets, and no hidden primary content.
