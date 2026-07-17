# Oleg Stepanchykov's Portfolio

A lightweight, fast portfolio website built with plain HTML, CSS, and a
little vanilla JavaScript, bundled by Vite. Bilingual (English/Ukrainian).
Styled by a token-based design system (CSS custom properties in two
collections — primitives and semantic aliases — plus component styles).

**Want to change text, images, or styles? Read [EDITING.md](EDITING.md).**

## Structure

- `index.html` — home page
- `ticket-fairy/index.html`, `wealthtrace/index.html` — case study pages
- `src/partials/` — shared HTML included into every page at build time
  (navbar, footer, head boilerplate) via `{{> name}}` handlebars partials
- `src/styles/` — the design system:
  - `tokens/globals.css` — Collection 1: primitive variables (colors,
    type scale, weights, spacing, radii, motion)
  - `tokens/aliases.css` — Collection 2: semantic tokens components use
    (`--accent`, `--surface-page`, `--text-muted`, …)
  - `base/` — reset, master text styles, layout & section rhythm
  - `components/` — one file per component, all built on the tokens
  - `main.css` — the entry that imports everything in cascade order
- `src/main.js` — navbar color detection, tooltips, lightbox
- `src/i18n.js` + `src/locales/ua.json` — language switching
  (English is written in the HTML; Ukrainian comes from the JSON)
- `src/assets/` — images (`npm run optimize-images` compresses them)
- `public/` — favicon and social-share image, served as-is

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Deployment

Deployed on Vercel. Push to the repository (or run `vercel`) and it
builds and deploys automatically.
