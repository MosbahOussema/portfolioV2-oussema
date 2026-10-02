// Run after deploying: npm run test:production-seo
// This checks the public response, not a local Vite preview or search-engine ranking.
const origin = 'https://www.oussamamosbah.com';
const failures = [];

function check(condition, message) {
  console.log(`${condition ? 'PASS' : 'FAIL'} ${message}`);
  if (!condition) failures.push(message);
}

function allowsCrawler(robots, crawler) {
  const groups = robots.split(/(?=^User-agent:)/gim);
  const rules = groups.find((group) => new RegExp(`^User-agent:\\s*${crawler}\\s*$`, 'im').test(group))
    || groups.find((group) => /^User-agent:\s*\*\s*$/im.test(group));
  return Boolean(rules && /^Allow:\s*\/\s*$/im.test(rules) && !/^Disallow:\s*\/\s*$/im.test(rules));
}

async function request(url, userAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1)') {
  const response = await fetch(url, {
    redirect: 'manual',
    headers: { 'User-Agent': userAgent, 'Cache-Control': 'no-cache' },
    signal: AbortSignal.timeout(15000),
  });
  return { response, body: await response.text() };
}

async function auditPage(path, language, userAgent) {
  const url = `${origin}${path}`;
  const { response, body } = await request(url, userAgent);
  const label = `${path} (${language}, ${userAgent.includes('OAI-SearchBot') ? 'OAI-SearchBot' : 'Googlebot'})`;
  const title = language === 'fr'
    ? 'Oussama Mosbah | Ingénieur Frontend React &amp; Next.js'
    : 'Oussama Mosbah | Frontend Engineer, React &amp; Next.js';
  check(response.status === 200, `${label}: HTTP 200`);
  check(/text\/html/i.test(response.headers.get('content-type') || ''), `${label}: HTML response`);
  check(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${label}: no X-Robots-Tag noindex`);
  check(body.includes('data-prerendered="true"'), `${label}: content present before JavaScript`);
  check(body.includes(`<html lang="${language}">`), `${label}: correct language`);
  check(body.includes(`<title>${title}</title>`), `${label}: correct title`);
  check(/<meta name="description" content="[^"]{80,170}"/.test(body), `${label}: useful meta description`);
  check(body.includes(`<link rel="canonical" href="${url}"`), `${label}: correct canonical`);
  check(body.includes(`<link rel="alternate" hreflang="en" href="${origin}/"`) && body.includes(`<link rel="alternate" hreflang="fr" href="${origin}/fr/"`), `${label}: reciprocal language links`);
  check(body.includes('property="og:title"') && body.includes('name="twitter:card"'), `${label}: social preview metadata`);
  check(body.includes('application/ld+json') && body.includes('"@type":"Person"'), `${label}: Person structured data`);
  check(['Astrolab', 'Talinty', 'Ciceria', 'React.js'].every((term) => body.includes(term)), `${label}: skills and projects in HTML`);
  check(!/name="robots"[^>]*noindex/i.test(body), `${label}: no meta noindex`);
}

async function main() {
  for (const userAgent of ['Mozilla/5.0 (compatible; Googlebot/2.1)', 'Mozilla/5.0 (compatible; OAI-SearchBot/1.4)']) {
    await auditPage('/', 'en', userAgent);
    await auditPage('/fr/', 'fr', userAgent);
  }

  const robots = await request(`${origin}/robots.txt`);
  check(robots.response.status === 200, 'robots.txt: HTTP 200');
  check(allowsCrawler(robots.body, 'Googlebot'), 'robots.txt: Googlebot allowed');
  check(allowsCrawler(robots.body, 'OAI-SearchBot'), 'robots.txt: ChatGPT Search crawler allowed');
  check(robots.body.includes(`Sitemap: ${origin}/sitemap.xml`), 'robots.txt: canonical sitemap declared');

  const sitemap = await request(`${origin}/sitemap.xml`);
  check(sitemap.response.status === 200, 'sitemap.xml: HTTP 200');
  for (const path of ['/', '/fr/']) {
    check(sitemap.body.includes(`<loc>${origin}${path}</loc>`), `sitemap.xml: ${path} listed`);
  }

  const missing = await request(`${origin}/seo-audit-this-page-does-not-exist/`);
  check(missing.response.status === 404, 'missing page: true HTTP 404');
  check(/noindex/i.test(missing.response.headers.get('x-robots-tag') || '') || /name="robots"[^>]*noindex/i.test(missing.body), 'missing page: noindex');

  for (const alias of ['https://oussamamosbah.vercel.app/fr/', 'https://oussamamosbah.com/fr/']) {
    const { response } = await request(alias);
    check([301, 308].includes(response.status) && response.headers.get('location') === `${origin}/fr/`, `${alias}: permanent redirect to canonical /fr/`);
  }

  const image = await request(`${origin}/og-image.png`);
  check(image.response.status === 200 && /image\/png/i.test(image.response.headers.get('content-type') || ''), 'Open Graph image: available as PNG');

  console.log(`\n${failures.length ? `${failures.length} production SEO check(s) failed.` : 'All production SEO checks passed.'}`);
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Production SEO audit could not finish: ${error.message}`);
  process.exitCode = 1;
});
