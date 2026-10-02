import { translations } from '../translations';
import { getFeaturedProjects } from '../data/projects';
import { contactConfig } from './contact';
import portrait from '../assets/generated/oussama-mosbah-portrait.webp';
import font from '@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url';

export const siteOrigin = 'https://www.oussamamosbah.com';
export const languagePaths = { en: '/', fr: '/fr/' };
export const languageFromPath = (path) => /^\/fr(?:\/|$)/.test(path) ? 'fr' : 'en';

const descriptions = {
  en: 'Oussama Mosbah is a Frontend Engineer in Sousse, Tunisia. Explore his React, Next.js and TypeScript projects, experience and contact details.',
  fr: 'Oussama Mosbah est ingénieur frontend à Sousse, Tunisie. Découvrez ses projets React, Next.js et TypeScript, son expérience et ses coordonnées.',
};

export const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

export function getSeo(language = 'en') {
  const t = translations[language];
  const url = siteOrigin + languagePaths[language];
  const title = language === 'fr'
    ? 'Oussama Mosbah | Ingénieur Frontend React & Next.js'
    : 'Oussama Mosbah | Frontend Engineer, React & Next.js';
  const description = descriptions[language];
  const personId = `${siteOrigin}/#person`;
  const websiteId = `${siteOrigin}/#website`;
  const projects = getFeaturedProjects(t);
  const graph = [
    {
      '@type': 'Person', '@id': personId,
      name: t.hero.name, url: `${siteOrigin}/`,
      jobTitle: t.hero.subtitle, description: t.about.description1,
      image: new URL(portrait, siteOrigin).href,
      homeLocation: { '@type': 'Place', name: t.contact.details.location },
      knowsAbout: Object.values(t.about.skills),
      sameAs: [contactConfig.linkedinUrl, contactConfig.githubUrl].filter((link) => /^https:\/\//.test(link || '')),
    },
    {
      '@type': 'WebSite', '@id': websiteId, url: `${siteOrigin}/`,
      name: 'Oussama Mosbah Portfolio', inLanguage: ['en', 'fr'],
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage', '@id': `${url}#profile`, url,
      name: title, description, inLanguage: language,
      mainEntity: { '@id': personId }, isPartOf: { '@id': websiteId },
      hasPart: { '@id': `${url}#projects` },
    },
    {
      '@type': 'ItemList', '@id': `${url}#projects`, name: t.work.title,
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem', position: index + 1,
        item: { '@id': `${url}#project-${project.id}` },
      })),
    },
    ...projects.map((project) => ({
      '@type': 'CreativeWork', '@id': `${url}#project-${project.id}`,
      url: `${url}#project-${project.id}`, name: project.w_name,
      description: project.w_description,
      keywords: project.w_technologies.split(',').map((skill) => skill.trim()),
      contributor: { '@id': personId },
      ...(project.w_link ? { sameAs: project.w_link } : {}),
    })),
  ];
  return {
    title, url, language,
    meta: [
      ['name', 'description', description],
      ['name', 'author', t.hero.name],
      ['name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'],
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', 'Oussama Mosbah Portfolio'],
      ['property', 'og:title', title],
      ['property', 'og:description', description],
      ['property', 'og:url', url],
      ['property', 'og:locale', language === 'fr' ? 'fr_FR' : 'en_US'],
      ['property', 'og:locale:alternate', language === 'fr' ? 'en_US' : 'fr_FR'],
      ['property', 'og:image', `${siteOrigin}/og-image.png`],
      ['property', 'og:image:type', 'image/png'],
      ['property', 'og:image:width', '486'],
      ['property', 'og:image:height', '430'],
      ['property', 'og:image:alt', `${t.hero.name} — ${t.hero.subtitle}`],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', `${siteOrigin}/og-image.png`],
      ['name', 'twitter:image:alt', `${t.hero.name} — ${t.hero.subtitle}`],
    ],
    links: [
      { rel: 'canonical', href: url },
      ...Object.entries(languagePaths).map(([hreflang, path]) => ({ rel: 'alternate', hreflang, href: siteOrigin + path })),
      { rel: 'alternate', hreflang: 'x-default', href: `${siteOrigin}/` },
    ],
    structuredData: { '@context': 'https://schema.org', '@graph': graph },
    portrait, font,
  };
}
