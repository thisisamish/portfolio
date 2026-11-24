# Portfolio

Astro + Tailwind v4. The previous Next.js site is preserved at the git tag `v1-2023`.

```
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-checks, then builds to dist/
```

Needs Node 22.12 or newer.

## Where to change things

| I want to change... | Edit |
| --- | --- |
| Any wording, links, projects, films | `src/content/content.yaml` |
| Colours, fonts, sizes, spacing, light/dark palettes, lamp size | `src/config/theme.ts` |
| Section order, or which design a section uses | `src/config/page.ts` |
| Give one section its own look (e.g. a festival hero) | add a theme in `theme.ts`, then `theme: 'name'` on its line in `page.ts` |
| Add an alternative design for a section | add a file in `src/sections/<type>/`, then `variant: 'file-name'` in `page.ts` |
| Words that must never appear | `src/config/guardrails.ts` (the build fails on a match) |

## How sections plug in

Every section type has a `schema.ts` describing its content. All variants of a type take the same content, so swapping a variant never needs content changes. Sections read CSS variables only, never hex codes or font names, and they own their markup, styles and script.
