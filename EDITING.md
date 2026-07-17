# How to edit this website

A practical guide — no programming knowledge needed.

## Where everything lives

```
index.html                  ← the home page
ticket-fairy/index.html     ← The Ticket Fairy case study
wealthtrace/index.html      ← the WealthTrace case study
src/partials/               ← shared pieces of every page:
  navbar.html                  the top navigation (ONE copy for all pages)
  footer.html                  the footer
  head-meta.html               favicons & browser theme color
  head-assets.html             the font and the site's code entry
src/styles/
  tokens/globals.css        ← ALL raw values: colors, font sizes/weights,
                               spacing, corner radii (Collection 1)
  tokens/aliases.css        ← what each value is FOR: text-muted,
                               surface-page, accent… (Collection 2)
  base/typography.css       ← the master text styles (headings, body…)
  base/layout.css           ← page width, section rhythm
  components/               ← one CSS file per component (buttons,
                               navbar, hero, contact cards…)
src/assets/                 ← all images
src/locales/ua.json         ← Ukrainian translations
public/                     ← favicon and the social-share image
```

## Changing text

English text lives **directly in the HTML files**. Open the file for the
page you want, find the text, change it. Done.

The navbar and footer are shared, so their text lives in **one place**:
`src/partials/navbar.html` and `src/partials/footer.html`. Edit there and
every page updates. (In the page files you'll see `{{> navbar}}` — that's
the include marker; leave it alone.)

Ukrainian lives in `src/locales/ua.json`. Each piece of text has a key,
e.g. `"lets_talk": "Поговорімо."`. In the HTML, the element has the same
key in a `data-i18n="lets_talk"` attribute — that's how they connect.

- To update a Ukrainian text: find its key in `ua.json` and edit the value.
- If a Ukrainian translation is missing, the site simply shows English —
  nothing breaks.
- Adding a brand-new paragraph? Give it a `data-i18n="my_new_key"`
  attribute in the HTML and add `"my_new_key": "..."` to `ua.json`.

## Changing colors, fonts, spacing — the design system

Styles work like Figma variables, in two collections:

**Collection 1 — primitives** (`src/styles/tokens/globals.css`).
Every raw value the site uses, defined once: the full color palette,
every font size and weight, the spacing scale, corner radii.

```css
--red-500: #e60000;    /* the brand red */
--gray-25: #FBFBF9;    /* the warm off-white */
--font-size-14: 14px;
--space-24: 24px;
```

**Collection 2 — aliases** (`src/styles/tokens/aliases.css`).
Semantic names that point at primitives and say what they're *for*.
Components only ever use these (or a primitive for one-off values):

```css
--accent:       var(--red-500);   /* CTA buttons, links, markers  */
--surface-page: var(--gray-25);   /* page background              */
--text-muted:   var(--gray-500);  /* captions, meta text          */
```

So:
- **"I want a different red everywhere"** → change `--red-500` in
  `globals.css`. Done — buttons, hover glows, list markers, tag tints
  all follow.
- **"I want CTAs blue but the rest unchanged"** → repoint `--accent`
  in `aliases.css` to another primitive.
- **Text styles** (sizes, weights, line heights of headings and body
  text) live in `src/styles/base/typography.css`, built from the same
  tokens. Component-specific text (metric numbers, tags, captions) is
  in that component's file under `src/styles/components/`, also built
  from tokens.

Font weights worth knowing: the site uses Inter as a *variable* font,
so it has in-between weights like 550 and 750. They're all listed in
`globals.css` with notes on which ones could be merged.

## Changing images

1. Drop the new image into `src/assets/` (same filename = automatic swap;
   new filename = also update the `src="/src/assets/..."` in the HTML).
2. Run `npm run optimize-images` — it compresses images so the site stays
   fast. (Or just ask Claude/your dev tool to run it.)
3. If you changed an image's proportions, update the `width` and `height`
   numbers on its `<img>` tag in the HTML — they prevent the page from
   jumping while loading.

## Adding a new case study page

1. Copy the `ticket-fairy` folder, rename it (e.g. `my-new-case`).
2. Edit its `index.html`: title, meta description, and the content.
   The navbar/footer come in automatically via the `{{> ...}}` includes.
3. Add one line for it in `vite.config.mjs` (there's a comment showing how).
4. Link to it from the home page: `href="/my-new-case/"`.

## Seeing your changes

```bash
npm run dev
```

Then open http://localhost:5173. The page refreshes automatically as you
save files. Publishing works as before — push to git, Vercel deploys.

## Small things to know

- The favicon (browser-tab icon) is `public/favicon.svg` — replace it with
  your own anytime.
- The image used when the site is shared on LinkedIn/Telegram is
  `public/og-image.png`. Ideal size is 1200×630. It's referenced from the
  `og:image` meta tag in each HTML file.
- The CV button links to Google Drive — the URL appears in
  `src/partials/navbar.html` (navbar) and once in `index.html` (contact
  card). Search for `drive.google.com` to update it.
