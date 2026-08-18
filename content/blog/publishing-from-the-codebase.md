---
title: "Publishing from the codebase"
description: "How this journal turns a local Markdown file into a dated, readable article."
date: "2026-08-17"
tags:
  - Engineering
  - Writing
draft: false
---

This journal is deliberately simple: an article begins as a Markdown file committed alongside the application. The build reads its metadata, orders it by date, and turns the body into a static page.

## The article contract

Every post lives in `content/blog` and starts with a small YAML header. The filename becomes the URL, while the date determines its place in the journal.

```md title="content/blog/my-article.md"
---
title: "A clear article title"
description: "One sentence that explains why the article is worth opening."
date: "2026-08-17"
tags:
  - Software
  - Finance
draft: false
---

Write the article here.
```

The public index never relies on filesystem order. It parses each ISO date and sorts the resulting records from newest to oldest.

## What Markdown supports

- Headings, paragraphs, emphasis, links, and nested lists
- GitHub-style tables, task lists, strikethrough, and footnotes
- Inline `code` and fenced code blocks with syntax highlighting
- Blockquotes and horizontal rules

| Field | Required | Purpose |
| --- | --- | --- |
| `title` | Yes | Article heading and page metadata |
| `description` | Yes | Index summary and search description |
| `date` | Yes | Newest-first ordering |
| `tags` | No | Compact subject labels |
| `draft` | No | Keeps unfinished writing out of public routes |

> A publishing system should make the right thing easy: write, preview, commit, and deploy.

## Code is part of the prose

Code blocks use a server-side highlighter, so readers receive formatted HTML without downloading a browser syntax-highlighting runtime.

```ts title="lib/sort-articles.ts" {2}
export function newestFirst(left: Article, right: Article) {
  return Date.parse(right.date) - Date.parse(left.date);
}
```

Long lines scroll inside their own ruled specimen instead of widening the reading column. A copy control stays available to keyboard and pointer users.

The result is intentionally modest: Markdown remains portable, while the surrounding page supplies the typography, navigation, and visual identity.[^portable]

[^portable]: The source stays readable even without the website renderer.
