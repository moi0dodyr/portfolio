# How to edit this website

A practical guide — no programming knowledge needed.

## Where everything lives

```
index.html                  ← the home page
ticket-fairy/index.html     ← The Ticket Fairy case study
wealthtrace/index.html      ← the WealthTrace case study
src/assets/                 ← all images
src/styles/                 ← all styles (colors, sizes, spacing)
src/locales/ua.json         ← Ukrainian translations
public/                     ← favicon and the social-share image
```

## Changing text

English text lives **directly in the HTML files**. Open the file for the
page you want, find the text, change it. Done.

Ukrainian lives in `src/locales/ua.json`. Each piece of text has a key,
e.g. `"lets_talk": "Поговорімо."`. In the HTML, the element has the same
key in a `data-i18n="lets_talk"` attribute — that's how they connect.

- To update a Ukrainian text: find its key in `ua.json` and edit the value.
- If a Ukrainian translation is missing, the site simply shows English —
  nothing breaks.
- Adding a brand-new paragraph? Give it a `data-i18n="my_new_key"`
  attribute in the HTML and add `"my_new_key": "..."` to `ua.json`.

## Changing images

1. Drop the new image into `src/assets/` (same filename = automatic swap;
   new filename = also update the `src="/src/assets/..."` in the HTML).
2. Run `npm run optimize-images` — it compresses images so the site stays
   fast. (Or just ask Claude/your dev tool to run it.)
3. If you changed an image's proportions, update the `width` and `height`
   numbers on its `<img>` tag in the HTML — they prevent the page from
   jumping while loading.

## Changing colors, fonts, spacing

Global colors are defined once at the top of `src/styles/main.css`:

```css
--accent: #e60000;   /* the red */
--bg: #FBFBF9;       /* page background */
--ink: #16181d;      /* main text color */
```

Change a value there and it updates everywhere. The other style files are
named after what they control: `navbar.css`, `hero.css`, `projects.css`
(home page work cards), `subpages.css` (case study pages), `elements.css`
(other products, Pure UI, contact), `footer.css`.

## Adding a new case study page

1. Copy the `ticket-fairy` folder, rename it (e.g. `my-new-case`).
2. Edit its `index.html`: title, meta description, and the content.
3. Add one line for it in `vite.config.js` (there's a comment showing how).
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
- The CV button links to Google Drive — the URL appears twice in each HTML
  file (navbar + contact card). Search for `drive.google.com` to update it.
