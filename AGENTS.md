<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Styling rules

- Use Tailwind CSS utility classes for all new page and component styling.
- Do not add page-specific or component-specific selectors to `app/globals.css`.
- Do not create CSS Modules or handwritten stylesheet rules for UI styling unless the user explicitly authorizes an exception.
- Keep `app/globals.css` limited to Tailwind imports, design tokens, and true base/browser defaults. Component and page selectors do not belong there.
- Express complex responsive states, pseudo-elements, and one-off values with Tailwind variants and arbitrary properties. Extract reusable React components or static Tailwind class constants when utility strings repeat.
