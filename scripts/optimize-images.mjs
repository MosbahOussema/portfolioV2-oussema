import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';

// Derived assets only. Originals remain untouched; used by both dev and production.
await mkdir('src/assets/generated', { recursive: true });
for (const [source, name, width] of [
  ['hero4.jpg', 'oussama-mosbah-portrait', 486],
  ['me1.jpg', 'oussama-mosbah-about', 600],
  ['tcc-logo-provided.png', 'tcc-informatique', 160],
]) {
  const input = `src/assets/${source}`;
  const output = `src/assets/generated/${name}.webp`;
  const image = sharp(input).rotate();
  if (name === 'tcc-informatique') {
    // The supplied mark is wide, while both experience icon slots are square.
    // Letterbox it instead of cropping the wordmark with object-fit: cover.
    image.resize({ width, height: width, fit: 'contain', background: '#ffffff' });
  } else {
    image.resize({ width, withoutEnlargement: true });
  }
  await image.webp({ quality: 88 }).toFile(output);
  console.log(`${name}: ${(await stat(input)).size} → ${(await stat(output)).size} bytes`);
}
