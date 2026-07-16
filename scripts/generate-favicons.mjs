/**
 * Generate favicon PNGs from the profile photo.
 * Uses sharp (already in devDependencies) to resize and crop.
 *
 * Output files go into public/ so Vite copies them to the build root:
 *   - apple-touch-icon.png   (180×180)
 *   - favicon-32x32.png      (32×32)
 *   - favicon-16x16.png      (16×16)
 *   - favicon-192x192.png    (192×192 — for webmanifest)
 *   - favicon-512x512.png    (512×512 — for webmanifest)
 */

import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE = resolve(__dirname, '../src/assets/profile-img.png');
const PUBLIC = resolve(__dirname, '../public');

const sizes = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(SOURCE)
    .resize(size, size, { fit: 'cover', position: 'top' })
    .png()
    .toFile(resolve(PUBLIC, name));

  console.log(`✔  ${name}  (${size}×${size})`);
}

console.log('\nAll favicons generated in public/');
