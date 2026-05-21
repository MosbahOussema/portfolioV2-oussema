/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "fr" : "en";
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "language_switch", {
          event_category: "engagement",
          event_label: next,
        });
      }
      return next;
    });
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
};
