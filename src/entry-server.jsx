import { renderToString } from 'react-dom/server';
import App from './App';
import { getSeo, serializeJsonLd } from './config/seo';

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

export function render(language) {
  const seo = getSeo(language);
  const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
  const head = [
    `<title>${escapeHtml(seo.title)}</title>`,
    ...seo.meta.map(([attribute, key, content]) => `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`),
    ...seo.links.map((link) => `<link ${Object.entries(link).map(([key, value]) => `${key}="${escapeHtml(value)}"`).join(' ')} />`),
    `<link rel="preload" as="image" href="${escapeHtml(seo.portrait)}" fetchpriority="high" />`,
    `<link rel="preload" as="font" type="font/woff2" href="${escapeHtml(seo.font)}" crossorigin />`,
    `<script id="portfolio-schema" type="application/ld+json">${serializeJsonLd(seo.structuredData)}</script>`,
    ...(verification ? [`<meta name="google-site-verification" content="${escapeHtml(verification)}" />`] : []),
  ].join('\n    ');
  return { html: renderToString(<App initialLanguage={language} />), head };
}
