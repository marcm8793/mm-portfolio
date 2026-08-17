---
name: "Marc Mansour Portfolio"
description: "An analyst's working paper for inspectable finance-software work and public activity."
colors:
  paper: "#f4f7f5"
  paper-raised: "#fbfcfa"
  paper-deep: "#e7ece9"
  ink: "#101828"
  ink-muted: "#435164"
  cobalt: "#174ea6"
  cobalt-dark: "#103b80"
  rule-soft: "rgba(23, 78, 166, 0.28)"
  rule-faint: "rgba(23, 78, 166, 0.09)"
  lime: "#9fd818"
  lime-soft: "#dff39d"
  signal: "#c8313b"
  night-paper: "#0b111b"
  night-raised: "#111c2a"
  night-deep: "#192636"
  night-ink: "#edf3f0"
  night-ink-muted: "#abb9c5"
  night-cobalt: "#78a8ff"
  night-lime: "#b9e84b"
  night-signal: "#ff7d86"
typography:
  scale:
    diagram: "0.625rem"
    micro: "0.6875rem"
    label: "0.75rem"
    control: "0.8125rem"
    caption: "0.9375rem"
    body: "1rem"
    body-lg: "1.0625rem"
    lead: "1.125rem"
    title: "1.1875rem"
    intro: "1.3125rem"
    section-min: "1.875rem"
    section-max: "2.5rem"
    display-min: "2.5rem"
    display-max: "3.25rem"
    project-min: "2.75rem"
    project-max: "3.5rem"
  display:
    fontFamily: "Bitter, Georgia, serif"
    fontSize: "clamp(2.5rem, 4vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bitter, Georgia, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bitter, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Code Pro, SFMono-Regular, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.05em"
rounded:
  sm: "2px"
  md: "3px"
spacing:
  page-gutter: "clamp(1.25rem, 3vw, 3.25rem)"
  outer-sheet: "76rem"
  index-rail: "8.5rem"
  data-measure: "60rem"
  reading-measure: "68ch"
components:
  action-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper-raised}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem 0.85rem 1.25rem"
  action-primary-hover:
    backgroundColor: "{colors.cobalt-dark}"
    textColor: "{colors.paper-raised}"
    rounded: "{rounded.sm}"
  action-secondary:
    backgroundColor: "rgba(251, 252, 250, 0.62)"
    textColor: "{colors.cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem 0.85rem 1.25rem"
  action-secondary-hover:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.cobalt-dark}"
    rounded: "{rounded.sm}"
  navigation-rail:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    width: "8.5rem"
  navigation-rail-hover:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.cobalt}"
  badge-solid:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper-raised}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: "1.7rem"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: "1.7rem"
  activity-cell-empty:
    backgroundColor: "#dfe4e1"
    size: "0.72rem"
  activity-cell-low:
    backgroundColor: "#dcf29f"
    size: "0.72rem"
  activity-cell-medium:
    backgroundColor: "#c5ec58"
    size: "0.72rem"
  activity-cell-high:
    backgroundColor: "#a9dc24"
    size: "0.72rem"
  activity-cell-max:
    backgroundColor: "{colors.lime}"
    size: "0.72rem"
  case-sheet:
    backgroundColor: "rgba(251, 252, 250, 0.95)"
    textColor: "{colors.ink}"
  project-dossier:
    backgroundColor: "rgba(251, 252, 250, 0.56)"
    darkBackgroundColor: "rgba(17, 28, 42, 0.62) under a 92% Raised Stock wash"
    textColor: "{colors.ink}"
    padding: "clamp(1.5rem, 3vw, 3.25rem)"
  footer-index:
    backgroundColor: "#101828"
    textColor: "#f4f7f5"
    typography: "{typography.label}"
  theme-switcher:
    backgroundColor: "transparent"
    textColor: "#f4f7f5"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: "2.7rem"
---

# Design System: Marc Mansour Portfolio

## Overview

**Creative North Star: "The Activity Ledger"**

The visual world is an analyst's working paper: part engineering lab book, part market activity ledger. Public work appears as an inspectable record assembled from ruled paper, index tabs, proof marks, financial-model diagrams, and live evidence. The mood is cerebral, credible, exploratory, precise, and tactile rather than glossy.

The system is editorial without becoming precious. High-contrast serif statements carry the thesis; monospaced labels index the evidence; readable sans-serif prose makes technical and financial ideas accessible. Interfaces remain square, explicit, and mostly flat, with physical paper overlap supplying the rare moments of depth. It rejects the generic fintech dashboard, polished corporate deck, glowing gradient, dark crypto interface, bento grid, and centered hero.

**Key Characteristics:**

- Recycled day paper or midnight-blue night stock with the same raster grain and 32px horizontal ruling.
- Cobalt rules and labels that organize almost every surface.
- Restrained asymmetric serif statements paired with compact monospaced evidence.
- Sparse data lime and a single signal-red proof gesture.
- Semantic, responsive components that preserve reading order and inspectability.

## Colors

The palette behaves like ink and notation on cool recycled stock: cobalt builds the ledger, deep ink carries meaning, lime marks data, and red appears only as proof.

### Primary

- **Cobalt Ruling** (`#174ea6`): The structural voice for rules, borders, labels, links, charts, focus outlines, and primary actions.
- **Cobalt Press** (`#103b80`): The darker interactive state for primary controls and text links on hover.

### Secondary

- **Data Lime** (`#9fd818`): The most active level in contribution-like cells and the guide line inside financial diagrams.
- **Soft Data Lime** (`#dff39d`): Selection color and the quiet accent surface; it supports meaning without competing with cobalt.

### Tertiary

- **Signal Red** (`#c8313b`): A deliberately rare proof mark used for the hand-drawn circle and the mobile notebook margin signal.

### Neutral

- **Recycled Paper** (`#f4f7f5`): The page field and dominant canvas beneath the paper texture.
- **Raised Stock** (`#fbfcfa`): The lightest working surface, used by controls, case sheets, and hover fills.
- **Deep Paper** (`#e7ece9`): Tonal separation for tabs, muted surfaces, and paper layers.
- **Deep Ink** (`#101828`): Primary copy and the inverted footer field.
- **Carbon Note** (`#435164`): Supporting copy, dates, metadata, and explanatory labels.
- **Soft Cobalt Rule** (`rgba(23, 78, 166, 0.28)`): Secondary dividers and internal table lines.
- **Faint Ledger Rule** (`rgba(23, 78, 166, 0.09)`): The 32px page ruling and low-emphasis model grids.

### Night Ledger

Dark mode is a second working-paper composition, not an inversion. **Night Paper** (`#0b111b`), **Night Raised Stock** (`#111c2a`), and **Night Deep Stock** (`#192636`) create explicit surface depth; **Mineral Ink** (`#edf3f0`) and **Blueprint Cobalt** (`#78a8ff`) preserve the day theme’s hierarchy. Data Lime brightens to `#b9e84b`, Signal Red lifts to `#ff7d86`, and the financial case file keeps a warmer graphite folder so its physical-paper role remains legible. Light paper bitmaps blend with multiply in dark mode so their white stock stays neutral instead of washing dark surfaces toward gray; the footer stays the deepest field in both modes.

### Named Rules

**The Cobalt Skeleton Rule.** Structure the page with cobalt rules before introducing filled surfaces or decorative containers.

**The Proof-Mark Rule.** Signal red is one annotation, not a general accent system; use it once where review or proof is the meaning.

**The Data-Is-Sparse Rule.** Reserve lime for measured activity, chart guidance, selection, and exceptional contact hover—not broad brand fills.

**The Night-Ledger Rule.** Remap semantic roles for dark mode—canvas, raised stock, ink, ruling, data, and proof—rather than inverting rendered colors or introducing a generic black dashboard.

**The Dark-Texture Rule.** Any light paper bitmap used over a translucent ledger surface receives an opaque Night Raised Stock wash before blending. Texture may add grain in dark mode; it may never lift the working surface into gray.

## Typography

**Display Font:** Bitter (with `Georgia, serif` fallback)

**Body Font:** Open Sans (with `Arial, sans-serif` fallback)

**Label/Mono Font:** Source Code Pro (with `SFMono-Regular, Consolas, monospace` fallback)

**Character:** Bitter gives the working-paper world sturdy slab-serif authority without the fragility of a fashion editorial face. Open Sans keeps explanations calm and highly readable for a broad public audience. Source Code Pro is reserved for navigation, controls, evidence, dates, and data so the ledger voice remains purposeful rather than becoming a technical costume.

### Hierarchy

- **Display** (500, `clamp(2.5rem, 4vw, 3.25rem)`, 1.02): The first thesis statement; keep it concise, left anchored, and below half of the initial viewport. The lead project name may rise only to `clamp(2.75rem, 4vw, 3.5rem)`.
- **Headline** (500, `clamp(1.875rem, 3vw, 2.5rem)`, 1.06): Major section propositions and closing invitations, tracked at `-0.025em`.
- **Title** (500, `1.1875rem`, 1.4): Compact italic premise statements and working notes.
- **Body** (400, `1rem`–`1.0625rem`, 1.65–1.7): Supporting explanations and project copy, typically held between 34rem and 42rem rather than allowed to run full width.
- **Label** (500–700, `0.6875rem`–`0.8125rem`, `0.02em`–`0.065em`, uppercase when indexing): Navigation, buttons, case labels, activity metadata, badge text, dates, and register marks. Public metadata never drops below 0.6875rem.

### Named Rules

**The Three-Voice Rule.** Serif states the idea, sans explains it, and mono indexes or activates it; do not let one type voice impersonate another.

**The Working-Title Rule.** Display copy reads like a decisive note in a research binder: short, asymmetric, sentence case, and never centered for ceremony.

## Layout

The page is a ruled working sheet contained at `76rem`, centered inside a full-width field and edged with 1px cobalt rules. On desktop, a stable `8.5rem` numbered navigation rail leaves a `67.5rem` main field. Dense evidence is held to `60rem`, prose to `68ch`, and the responsive page gutter (`clamp(1.25rem, 3vw, 3.25rem)`) prevents either from spreading to the full field. A faint horizontal line repeats every 32px. The cobalt rail divider is the single desktop vertical axis; the red notebook margin is reserved for the mobile sheet where the rail is absent.

Desktop compositions use compact ruled rows rather than large editorial panels: intro, Savyy proof, GitHub evidence, About, Résumé, Writing, and Contact read as one indexed ledger. Evidence can use the `60rem` band, while explanations remain on the narrower reading measure. Section rhythm comes from 1.5–3.25rem vertical padding, not fixed heights. At `900px`, the numbered rail becomes a touch-first Sheet index and content returns to one column. At `640px`, actions become full width, the financial model reduces to its essential chart and account table, and the activity matrix alone retains intentional horizontal overflow.

**The Cross-Page Ledger Rule.** Use continuous rules and shared alignment to connect sections; avoid isolated floating cards with independent gutters.

**The Mobile Reading-Order Rule.** Preserve thesis, proof object, public evidence, projects, context, and contact in that sequence; simplify annotations before hiding content.

## Elevation & Depth

The system is flat by default. Depth comes from physical paper overlap, texture, slight rotation, clipped tabs, and restrained shadows only within the lead case-file specimen. The folder layer uses `8px 11px 24px rgba(16, 24, 40, 0.13)`, the foreground sheet uses `5px 8px 18px rgba(16, 24, 40, 0.1)`, and paperclips receive a small directional drop shadow. Dossiers, navigation, activity rows, and binder sections remain unshadowed and derive separation from rule geometry and tonal paper.

### Shadow Vocabulary

- **Folder Cast** (`8px 11px 24px rgba(16, 24, 40, 0.13)`): The rear folder sheet in the lead financial-app case only.
- **Case Sheet Lift** (`5px 8px 18px rgba(16, 24, 40, 0.1)`): The foreground dossier page layered above the folder.
- **Clip Contact** (`drop-shadow(2px 3px 2px rgba(16, 24, 40, 0.22))`): Small hardware contact beneath the two paperclips.

### Named Rules

**The Physical-Overlap Rule.** A shadow must explain paper resting above paper; it never decorates an ordinary content container.

## Shapes

The form language is square, clipped, and ruled. Controls and badges use only a 2px functional radius; the global component foundation retains a 3px control radius, but the shipped portfolio surface favors the smaller ledger edge. Primary divisions are 1px cobalt lines, with softer internal dividers at the same weight. Workbook tabs create their silhouette with skewed 12px corner pieces rather than rounded pills. True circles are reserved for data geometry, paperclip/proof gestures, and small chart marks.

**The Almost-Square Rule.** Default to square surfaces and 1px rules; introduce a tiny radius only where a control needs a hit-area cue.

**The Circle-Means-Evidence Rule.** Round geometry belongs to charts, data dots, or a proof annotation—not generic containers or navigation pills.

## Components

### Buttons

Actions feel like labeled ledger controls: compact monospaced copy, explicit borders, and a directional icon.

- **Shape:** Almost square (2px radius), with a 1px cobalt border and a minimum height of 3.55rem.
- **Primary:** Cobalt Ruling fill with Raised Stock text and asymmetric internal padding (`0.85rem 1rem 0.85rem 1.25rem`).
- **Secondary:** Translucent Raised Stock over the paper field, Cobalt Ruling text, and the same geometry as the primary action.
- **Hover / Focus:** Hover lifts by 2px over 180ms; the primary darkens, the secondary brightens, and keyboard focus uses a 2px cobalt outline offset by 4px.

### Chips

Badges behave as small filing labels rather than pills.

- **Style:** 1.7rem high, 2px radius, uppercase Source Code Pro at 0.6875rem, with a 1px cobalt edge.
- **Variants:** Solid cobalt with paper text for the lead category; transparent with cobalt text for the companion classification.

### Cards / Containers

Content containers are dossiers and ledgers, not cards.

- **Corner Style:** Square by default; the project dossier uses top and bottom cobalt rules with a clipped `CASE / 01` tab.
- **Background:** Translucent Raised Stock mixed with raster paper texture; in Night Ledger mode a 92% Raised Stock wash sits above the light bitmap so the grain remains tactile without lifting the dossier into low-contrast gray. Surrounding sections remain on Recycled Paper or Midnight Paper.
- **Shadow Strategy:** None for ordinary containers; only the lead case-file stack receives physical shadows.
- **Border:** 1px cobalt for major boundaries and Soft Cobalt Rule for internal divisions.
- **Internal Padding:** Responsive project surfaces use `clamp(2.5rem, 5vw, 5.5rem)`; mobile resolves to 3rem by 1.5rem.

### Navigation

The desktop header is a sticky vertical index rail. A compact register mark sits above six numbered destinations—Home, Projects, About, Résumé, Contact, and Blog—and the active destination uses cobalt text plus a slim signal marker. The constant rail width establishes one structural axis across every route. At `900px` and below, the rail becomes a sticky horizontal header and a shadcn Sheet opened by a 44px-plus ledger control. The Sheet preserves the same numbers and order, closes on selection or Escape, traps focus, and remains a ruled paper index rather than a generic floating menu.

### Theme Control

The footer holds a compact shadcn Button-based theme control without a redundant visible group label. Its ruled radio group offers Light, System, and Dark directly, pairs each choice with a Phosphor icon, and marks the active mode in data lime while retaining the accessible name “Appearance” for screen readers. The control keeps 44px-plus outer height, supports keyboard and screen-reader radio semantics, and expands across the footer on small screens. `next-themes` applies the class before paint, follows device changes in System mode, updates native `color-scheme`, and stores only the visitor’s appearance preference.

### Activity Ledger

The signature activity component combines a cobalt-labeled identity block, a 53-week by 7-day full-year contribution matrix, a shadcn year menu, a selected-year evidence band, and a ruled GitHub account strip. Authenticated GitHub GraphQL calendars are available from the account’s creation year through the current year; switching years is immediate because only serializable calendar counts cross into the focused client island. The matrix includes private activity without private repository identities, with 0.72rem square cells, GitHub’s four contribution levels rendered through the lime scale (`#dcf29f`, `#c5ec58`, `#a9dc24`, and Data Lime), dotted transparent future cells, tabular numerals, accessible summary text, roving arrow-key focus, instant shadcn tooltips on hover or focus, and horizontal overflow when necessary. Active days, busiest day, busiest month, and total contributions are derived for the selected year and sit directly below its matrix. The closing strip uses the public GitHub profile endpoint for avatar, follower count, and public repository count; longest and current contribution streaks are derived from the authenticated daily calendars. Both evidence bands stay flat and ruled rather than becoming dashboard cards; on mobile the year evidence becomes a two-by-two ledger while the three account measurements remain a compact row.

### Financial Case File

The lead proof object is a layered paper figure containing an inspectable SVG/HTML financial model. It uses warm folder stock, raster texture, two slightly rotated sheets, paperclips, cobalt schematic geometry, lime chart guidance, handwritten italic annotations, and one red proof circle. On mobile, the allocation and note panels are removed while the cash-flow chart and account rows remain legible.

## Do's and Don'ts

### Do:

- **Do** build hierarchy with cobalt rules, shared baselines, paper overlap, and asymmetric type before adding any filled container.
- **Do** keep contribution counts authenticated, cached, and anonymous for private repositories; derive profile, streak, and selected-year activity metrics from GitHub rather than hardcoding them.
- **Do** use Bitter for propositions, Open Sans for explanation, and Source Code Pro only for labels, controls, dates, and technical evidence.
- **Do** preserve full-width reading order and horizontally scrollable evidence on small screens, with at least 44px interactive targets.
- **Do** keep lime sparse and signal red singular so each mark retains meaning.
- **Do** compose light and dark from the same semantic roles, preserving paper texture, cobalt hierarchy, readable contrast, and inspectable data in both modes.

### Don't:

- **Don't** turn this world into a generic fintech dashboard, dark crypto interface, glowing-gradient landing page, or polished corporate deck.
- **Don't** use a centered hero, a bento grid, floating rounded cards, pill navigation, or soft shadow on every container.
- **Don't** replace paper texture and ruled geometry with glossy glass surfaces or decorative noise unrelated to working documents.
- **Don't** fabricate totals, performance metrics, outcomes, or proof; the visual system earns credibility through inspectable evidence.
- **Don't** hide primary content on mobile merely to preserve the desktop composition.
