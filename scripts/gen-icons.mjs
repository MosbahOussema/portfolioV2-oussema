import sharp from "sharp";

const svg = Buffer.from(`<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7F1DFF"/>
      <stop offset="100%" stop-color="#D46F88"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="120" fill="url(#g)"/>
  <text x="256" y="345" font-family="system-ui,sans-serif" font-size="290" font-weight="800" fill="white" text-anchor="middle">O</text>
</svg>`);

await sharp(svg).resize(512, 512).png().toFile("public/icon-512.png");
console.log("✓ public/icon-512.png");

await sharp(svg).resize(192, 192).png().toFile("public/icon-192.png");
console.log("✓ public/icon-192.png");

await sharp(svg).resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("✓ public/apple-touch-icon.png");

console.log("\n✅ Icônes PWA générées !");
