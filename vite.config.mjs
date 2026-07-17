import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

// Each entry here is a page of the site.
// Adding a new case study? Create a folder with an index.html
// (copy an existing one) and add a line below.
export default defineConfig({
  // Dev server: default Vite port, or the one the tooling assigns.
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  plugins: [
    // Lets pages include shared HTML from src/partials/ with
    // {{> navbar}}, {{> footer}}, {{> head-meta}}, {{> head-assets}} —
    // the navbar/footer markup lives in ONE file instead of every page.
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        ticketFairy: resolve(__dirname, 'ticket-fairy/index.html'),
        wealthtrace: resolve(__dirname, 'wealthtrace/index.html'),
      },
    },
  },
});
