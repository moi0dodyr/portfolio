// Compresses every PNG in src/assets/ in place.
// Run it after adding or replacing images:  npm run optimize-images
//
// It keeps the PNG format and the exact pixel dimensions — only the file
// size shrinks. If a file can't be made smaller, it is left untouched.

import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ASSETS_DIR = fileURLToPath(new URL('../src/assets/', import.meta.url));

const files = (await readdir(ASSETS_DIR)).filter((f) => f.toLowerCase().endsWith('.png'));

let savedTotal = 0;

for (const file of files) {
  const path = join(ASSETS_DIR, file);
  const before = (await stat(path)).size;

  const tmpPath = path + '.tmp';
  await sharp(path)
    .png({ palette: true, quality: 90, effort: 10 })
    .toFile(tmpPath);

  const after = (await stat(tmpPath)).size;

  if (after < before) {
    await rename(tmpPath, path);
    savedTotal += before - after;
    console.log(
      `${file}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (-${Math.round((1 - after / before) * 100)}%)`
    );
  } else {
    await unlink(tmpPath);
    console.log(`${file}: already optimal, skipped`);
  }
}

console.log(`\nTotal saved: ${(savedTotal / 1024 / 1024).toFixed(1)} MB`);
