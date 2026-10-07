import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat, readdir } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import sharp from 'sharp';
import { fr } from '../src/translations/fr.js';
import { en } from '../src/translations/en.js';

const origin = 'https://www.oussamamosbah.com';
const routes = { en: '/', fr: '/fr/' };
const ids = ['astrolab', 'talinty', 'ciceria', 'eldowallet', 'sweetees', 'sarabapp', 'championsmind', 'agcff', 'eekad'];
const read = (path) => readFile(path, 'utf8');
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(([tag]) => attrs(tag));

for (const [lang, path] of Object.entries(routes)) {
  const file = lang === 'fr' ? 'dist/fr/index.html' : 'dist/index.html';
  test(`${lang}: static HTML exposes the real portfolio without executing JavaScript`, async () => {
    const html = await read(file);
    assert.match(html, new RegExp(`<html lang="${lang}">`));
    assert.match(html, /data-prerendered="true"/);
    assert.equal(tags(html, 'h1').length, 1);
    assert.equal(tags(html, 'main').length, 1);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
    for (const phrase of ['Oussama Mosbah', 'React.js', 'TypeScript', 'Astrolab', 'Talinty', 'Ciceria', 'NEXYM', 'Sousse', 'Eldo Wallet', 'Sweetees', 'AGCFF', 'EeKad']) {
      assert.ok(main.includes(phrase), `Missing static content: ${phrase}`);
    }
    assert.ok(main.includes(lang === 'fr' ? 'Ingénieur Frontend' : 'Frontend Engineer'));
    assert.ok(!html.includes('Please enable JavaScript'));
    assert.ok(!html.includes('undefined'), 'Unresolved values must never be published');
    const anchors = tags(main, 'div').map((a) => a.id);
    ids.forEach((id) => assert.ok(anchors.includes(`project-${id}`)));
    // No duplicate DOM IDs; every internal anchor has an actual target.
    const domIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(domIds.length, new Set(domIds).size);
    const links = tags(html, 'a');
    for (const id of ['home', 'about', 'experience', 'work', 'contact']) assert.ok(links.some((l) => l.href === `#${id}`));
    for (const link of links.filter((l) => l.href?.startsWith('#'))) assert.ok(domIds.includes(link.href.slice(1)), link.href);
    const otherLanguage = lang === 'en' ? 'fr' : 'en';
    assert.ok(links.some((l) => l.href === routes[otherLanguage] && (l.hrefLang || l.hreflang) === otherLanguage));
    assert.ok(links.some((l) => /Cv_Oussama_Mosbah_/.test(l.href || '')));
  });

  test(`${lang}: canonical, localized alternates, social metadata and image dimensions`, async () => {
    const html = await read(file);
    const links = tags(html, 'link');
    assert.deepEqual(links.filter((l) => l.rel === 'canonical').map((l) => l.href), [origin + path]);
    const alternates = links.filter((l) => l.rel === 'alternate');
    assert.equal(alternates.length, 3);
    for (const [language, route] of [...Object.entries(routes), ['x-default', '/']]) {
      assert.ok(alternates.some((l) => l.hreflang === language && l.href === origin + route));
    }
    assert.equal((html.match(/<title>/g) || []).length, 1);
    const expectedTitle = lang === 'fr'
      ? 'Oussama Mosbah | Ingénieur Frontend React & Next.js'
      : 'Oussama Mosbah | Frontend Engineer, React & Next.js';
    const encodedTitle = expectedTitle.replace('&', '&amp;');
    assert.ok(html.includes(`<title>${encodedTitle}</title>`));
    const meta = tags(html, 'meta');
    for (const key of ['description', 'robots', 'og:title', 'og:description', 'og:url', 'og:image', 'og:locale', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) {
      assert.equal(meta.filter((m) => (m.name || m.property) === key).length, 1, key);
    }
    const value = (key) => meta.find((m) => (m.name || m.property) === key)?.content;
    assert.ok(value('description').length >= 100 && value('description').length <= 170);
    assert.ok(value('description').includes(lang === 'fr' ? 'ingénieur frontend' : 'Frontend Engineer'));
    assert.equal(value('og:title'), encodedTitle);
    assert.equal(value('twitter:title'), encodedTitle);
    assert.equal(value('og:description'), value('description'));
    assert.equal(value('twitter:description'), value('description'));
    assert.equal(value('og:url'), origin + path);
    assert.ok(!value('robots').includes('noindex'));
    const dimensions = await sharp('public/og-image.png').metadata();
    assert.equal(Number(value('og:image:width')), dimensions.width);
    assert.equal(Number(value('og:image:height')), dimensions.height);
    const hero = tags(html, 'img').find((img) => img.class === 'hero-profile-image');
    assert.equal(links.find((l) => l.rel === 'preload' && l.as === 'image').href, hero.src);
    assert.equal(hero.fetchPriority, 'high');
    assert.equal(hero.width, '486');
    assert.equal(hero.height, '430');
    assert.ok(tags(html, 'img').every((img) => 'alt' in img));
    assert.ok(links.some((link) => link.rel === 'preload' && link.as === 'font'));
    assert.ok(!html.includes('fonts.googleapis.com'), 'Font stylesheet should be self-hosted');
  });

  test(`${lang}: JSON-LD entities match the page and reference each other`, async () => {
    const html = await read(file);
    const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.equal(blocks.length, 1);
    const data = JSON.parse(blocks[0][1]);
    assert.equal(data['@context'], 'https://schema.org');
    const graph = data['@graph'];
    const find = (type) => graph.find((n) => n['@type'] === type);
    assert.equal(find('Person').name, 'Oussama Mosbah');
    assert.equal(find('Person').jobTitle, lang === 'fr' ? 'Ingénieur Frontend' : 'Frontend Engineer');
    assert.ok(find('Person').knowsAbout.includes('React.js'));
    assert.ok(find('Person').sameAs.length >= 2, 'Public profile links must be configured');
    assert.equal(find('ProfilePage').url, origin + path);
    assert.equal(find('ProfilePage').inLanguage, lang);
    assert.equal(find('ProfilePage').name, lang === 'fr'
      ? 'Oussama Mosbah | Ingénieur Frontend React & Next.js'
      : 'Oussama Mosbah | Frontend Engineer, React & Next.js');
    assert.equal(find('ProfilePage').mainEntity['@id'], find('Person')['@id']);
    assert.equal(find('ProfilePage').isPartOf['@id'], find('WebSite')['@id']);
    const works = graph.filter((n) => n['@type'] === 'CreativeWork');
    assert.equal(works.length, 9);
    assert.equal(find('ItemList').numberOfItems, works.length);
    works.forEach((work, index) => {
      assert.equal(work.description, ({ fr, en })[lang].projects[ids[index]].description);
      assert.equal(work.url, `${origin}${path}#project-${ids[index]}`);
      assert.ok(html.includes(work.name.replace(/&/g, '&amp;')));
      assert.equal(work.contributor['@id'], find('Person')['@id']);
      assert.equal(find('ItemList').itemListElement[index].item['@id'], work['@id']);
    });
    const idsInGraph = new Set(graph.map((n) => n['@id']));
    function checkRefs(value) {
      if (!value || typeof value !== 'object') return;
      if (Object.keys(value).length === 1 && value['@id']) assert.ok(idsInGraph.has(value['@id']));
      Object.values(value).forEach(checkRefs);
    }
    checkRefs(data);
  });

  test(`${lang}: all generated local assets exist and HTML stays lightweight`, async () => {
    const html = await read(file);
    const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"#?]+)"/g)].map((m) => m[1]);
    assert.ok(assets.length > 5);
    for (const asset of new Set(assets)) assert.ok((await stat(`dist${decodeURI(asset)}`)).size > 0, asset);
    assert.ok(gzipSync(html).length < 20000, 'Compressed page exceeds 20 kB');
    console.log(`${lang}: HTML ${Buffer.byteLength(html)} bytes, gzip ${gzipSync(html).length} bytes`);
  });
}

test('sitemap exposes only canonical pages with reciprocal language alternatives', async () => {
  const xml = await read('dist/sitemap.xml');
  const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  assert.equal(blocks.length, 2);
  assert.deepEqual(blocks.map((block) => block.match(/<loc>(.*?)<\/loc>/)[1]), Object.values(routes).map((p) => origin + p));
  blocks.forEach((block) => {
    for (const [lang, path] of Object.entries(routes)) assert.ok(block.includes(`hreflang="${lang}" href="${origin}${path}"`));
  });
  assert.ok(!xml.includes('<lastmod>'), 'Do not publish a fabricated modification date');
});

test('crawler rules, error pages and host consolidation are deployment-ready', async () => {
  const robots = await read('dist/robots.txt');
  assert.match(robots, /User-agent: \*\s+Allow: \//);
  assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.ok(!robots.includes('Disallow:'));
  assert.match(await read('dist/404.html'), /name="robots" content="noindex"/);
  const config = JSON.parse(await read('vercel.json'));
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.trailingSlash, true);
  assert.ok(!config.rewrites, 'A catch-all SPA rewrite would create soft 404s');
  for (const host of ['oussamamosbah.com', 'oussamamosbah.vercel.app']) {
    assert.ok(config.redirects.some((r) => r.has.some((h) => h.type === 'host' && h.value === host) && r.destination === `${origin}/:path*` && r.permanent));
  }
});

test('image and JS size budgets protect the performance improvements', async () => {
  const targets = [['oussama-mosbah-portrait.webp', 25000], ['oussama-mosbah-about.webp', 50000], ['tcc-informatique.webp', 5000]];
  for (const [name, budget] of targets) assert.ok((await stat(`src/assets/generated/${name}`)).size <= budget, name);
  const files = await readdir('dist/assets');
  const scripts = await Promise.all(files.filter((name) => name.endsWith('.js')).map((name) => readFile(`dist/assets/${name}`)));
  assert.ok(scripts.reduce((sum, content) => sum + gzipSync(content).length, 0) < 100000, 'Initial JavaScript exceeds 100 kB gzip');
});
