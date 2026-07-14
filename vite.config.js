import { resolve } from 'path';
import { defineConfig } from 'vite';

// Each entry here is a page of the site.
// Adding a new case study? Create a folder with an index.html
// (copy an existing one) and add a line below.
export default defineConfig({
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
