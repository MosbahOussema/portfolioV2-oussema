import sharp from "sharp";
import { readFileSync, writeFileSync, renameSync, statSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, "../src/assets");
const publicDir = resolve(__dirname, "../public");

const formatKB = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function compressInPlace(inputPath, options = {}) {
  const { quality = 82, maxWidth } = options;
  const before = statSync(inputPath).size;
  const tmpPath = inputPath + ".tmp.png";

  let pipeline = sharp(readFileSync(inputPath));
  if (maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  pipeline = pipeline.png({ quality, compressionLevel: 9 });
  const buffer = await pipeline.toBuffer();

  writeFileSync(tmpPath, buffer);
  renameSync(tmpPath, inputPath);

  const after = buffer.length;
  const saved = (((before - after) / before) * 100).toFixed(0);
  const name = inputPath.split(/[\\/]/).pop();
  console.log(`✓ ${name} : ${formatKB(before)} → ${formatKB(after)} (-${saved}%)`);
}

async function compressTo(inputPath, outputPath, options = {}) {
  const { quality = 82, maxWidth } = options;
  const before = statSync(inputPath).size;

  let pipeline = sharp(readFileSync(inputPath));
  if (maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  pipeline = pipeline.png({ quality, compressionLevel: 9 });
  const buffer = await pipeline.toBuffer();

  writeFileSync(outputPath, buffer);
  const name = outputPath.split(/[\\/]/).pop();
  console.log(`✓ ${name} : ${formatKB(before)} → ${formatKB(buffer.length)} créé`);
}

console.log("\n📦 Compression des images lourdes...\n");

await compressInPlace(`${assetsDir}/me1.png`,                     { quality: 80, maxWidth: 900 });
await compressInPlace(`${assetsDir}/sarab1.png`,                  { quality: 80, maxWidth: 900 });
await compressInPlace(`${assetsDir}/AGCFF.png`,                   { quality: 80, maxWidth: 900 });
await compressInPlace(`${assetsDir}/draxlmaier.png`,              { quality: 80, maxWidth: 900 });
await compressInPlace(`${assetsDir}/Smart Pill Dispenser.png`,    { quality: 80, maxWidth: 900 });
await compressInPlace(`${assetsDir}/hero4.png`,                   { quality: 82, maxWidth: 600 });

console.log("\n🌐 Création de l'image OG...\n");
await compressTo(`${assetsDir}/hero4.png`, `${publicDir}/og-image.png`, { quality: 85, maxWidth: 1200 });

console.log("\n✅ Compression terminée !\n");
