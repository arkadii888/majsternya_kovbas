# UI components

- Prefer shadcn (in `components/ui`, `@base-ui/react` primitives) for any UI widget. Add new ones with `npx shadcn@4 add <name>` instead of hand-rolling primitives (button, checkbox, radio-group, badge, sheet, card, tooltip, etc.).
- Match existing spacing, rounding, and token conventions (`cn`, `bg-card`, `text-muted-foreground`, `gap-*`) used by the current shadcn components.
- Verify component prop/API usage by reading the generated file in `components/ui/` before using a new one.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
