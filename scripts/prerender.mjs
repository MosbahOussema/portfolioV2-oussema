import { build } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

await build({
  build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', emptyOutDir: true },
});
const { render } = await import('../dist-ssr/entry-server.js');
const template = await readFile('dist/index.html', 'utf8');
for (const language of ['en', 'fr']) {
  const { html, head } = render(language);
  const output = template
    .replace('<html lang="en">', `<html lang="${language}">`)
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->\n    ${head}\n    <!-- seo:end -->`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${html}</div>`);
  const directory = language === 'fr' ? 'dist/fr' : 'dist';
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, output);
  console.log(`Prerendered ${language}: ${Buffer.byteLength(output)} bytes of crawlable HTML`);
}
