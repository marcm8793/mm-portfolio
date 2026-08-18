---
version: 1
slug: "app-blog-page-tsx"
primary_target: "app/blog/page.tsx"
related_targets: ["app/blog/[slug]/page.tsx","lib/blog.ts","app/blog/_components/article-markdown.tsx","app/blog/_components/copy-code-button.tsx","app/typeset.css","components/site-header.tsx","app/sitemap.ts"]
---

# Blog surface brief

- **Mode:** Read. This is a public journal index and article-reading surface, not a dashboard or publishing UI.
- **Audience:** Broad readers interested in software, financial tools, and practical systems thinking.
- **Primary job:** Let readers scan the newest writing first, understand each premise quickly, and read an article without leaving the portfolio.
- **Content source:** Local Markdown files in `content/blog`. A filename becomes the URL slug; validated YAML frontmatter provides title, description, ISO publication date, optional updated date, tags, and draft state.
- **Ordering:** Published articles are always sorted by parsed ISO date descending. Filesystem order is never used.
- **Visual direction:** Annotated Chronology (seed `6e0a22f7`) within the established Activity Ledger world, using `.impeccable/mocks/decision/blog-annotated-chronology.webp` as the approved composition reference: paper texture, cobalt rules, serif editorial headlines, mono metadata, and one lime marker reserved for the newest entry.
- **Article typography:** The official shadcn Typeset stylesheet supplies long-form defaults. GFM, heading anchors, footnotes, tables, and highlighted fenced code are supported; code blocks include language-aware syntax color and a copy control.
- **Responsive behavior:** Desktop uses the existing numbered rail. Smaller viewports use the existing menu sheet; dates stack above article premises, and code and tables scroll locally without widening the page.
- **Scope boundary:** No filters, pagination, CMS, search, comments, or authoring form in this version. Publishing remains a codebase workflow and occurs on the next build/deploy.
