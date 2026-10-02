import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getSeo, serializeJsonLd } from '../../config/seo';

// Static HTML already contains these tags. Keep them aligned with client-side language navigation.
export default function Seo() {
  const { language } = useLanguage();
  useEffect(() => {
    const seo = getSeo(language);
    document.documentElement.lang = language;
    document.title = seo.title;
    const upsert = (tag, selector, attributes) => {
      const element = document.head.querySelector(selector) || document.createElement(tag);
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
      if (!element.isConnected) document.head.append(element);
      return element;
    };
    seo.meta.forEach(([attribute, key, content]) => upsert('meta', `meta[${attribute}="${key}"]`, { [attribute]: key, content }));
    seo.links.forEach((link) => upsert('link', `link[rel="${link.rel}"]${link.hreflang ? `[hreflang="${link.hreflang}"]` : ''}`, link));
    upsert('script', '#portfolio-schema', { id: 'portfolio-schema', type: 'application/ld+json' }).textContent = serializeJsonLd(seo.structuredData);
  }, [language]);
  return null;
}
