import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Uses IntersectionObserver for performant scroll detection.
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for early/late trigger
 * @returns {React.RefObject} - Ref to attach to the container element
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const { language } = useLanguage();
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: unobserve after reveal for performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe the container and all reveal children
    const revealElements = element.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    revealElements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has a reveal class
    if (
      element.classList.contains('reveal') ||
      element.classList.contains('reveal-left') ||
      element.classList.contains('reveal-right') ||
      element.classList.contains('reveal-scale')
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, language]);

  return ref;
};

export default useScrollReveal;
