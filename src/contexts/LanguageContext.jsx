/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { languageFromPath, languagePaths } from "../config/seo";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children, initialLanguage = "en" }) => {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    const syncLanguage = () => setLanguage(languageFromPath(window.location.pathname));
    window.addEventListener("popstate", syncLanguage);
    return () => window.removeEventListener("popstate", syncLanguage);
  }, []);

  const toggleLanguage = (event) => {
    // Native navigation remains available for new tabs and crawlers.
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
    event?.preventDefault();
    const next = language === "en" ? "fr" : "en";
    window.history.pushState(null, "", languagePaths[next] + window.location.search + window.location.hash);
    setLanguage(next);
    if (typeof window.gtag === "function") {
      window.gtag("event", "language_switch", {
        event_category: "engagement",
        event_label: next,
      });
    }
  };

  const value = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: () => null,
  initialLanguage: () => null,
};
