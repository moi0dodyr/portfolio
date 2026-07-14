# Oleg Stepanchykov's Portfolio

A lightweight, fast portfolio website built with plain HTML, CSS, and a
little vanilla JavaScript, bundled by Vite. Bilingual (English/Ukrainian).

**Want to change text, images, or styles? Read [EDITING.md](EDITING.md).**

## Structure

- `index.html` — home page
- `ticket-fairy/index.html`, `wealthtrace/index.html` — case study pages
- `src/styles/` — one CSS file per area of the site; design tokens
  (colors, sizes) live at the top of `main.css`
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
