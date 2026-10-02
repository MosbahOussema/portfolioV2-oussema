import "./NavBar.css";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { translations } from "../../translations";
import useScrollToSection from "../../hooks/useScrollToSection";
import { languagePaths } from "../../config/seo";

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  );
}

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  const scrollToSection = useScrollToSection(() => setIsMenuOpen(false));

  useEffect(() => {
    let frameId = null;
    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        setIsScrolled(window.scrollY > 50);

        const sections = ["home", "about", "experience", "services", "work", "solutions", "contact"];
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "work", label: t.nav.portfolio },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`} id="navbar" aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}>
      {/* Logo */}
      <a
        href="#home"
        className="nav-logo"
        onClick={(event) => scrollToSection("home", event)}
        aria-label={language === "fr" ? "Retour à l'accueil" : "Back to home"}
      >
        <div className="nav-logo-icon">
          <span className="logo-letter">O</span>
          <span className="logo-dot"></span>
        </div>
      </a>

      {/* Desktop Nav Links */}
      <ul className={`nav-menu ${isMenuOpen ? "nav-menu--open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id} className="nav-menu-item">
            <a
              href={`#${item.id}`}
              onClick={(event) => scrollToSection(item.id, event)}
              className={`nav-link ${activeSection === item.id ? "nav-link--active" : ""}`}
            >
              {item.label}
              {activeSection === item.id && <span className="nav-link-indicator"></span>}
            </a>
          </li>
        ))}
      </ul>

      {/* Right section */}
      <div className="nav-right">
        <button
          className="nav-theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          <span className="theme-toggle-thumb">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>

        <a
          className="nav-lang-toggle"
          href={languagePaths[language === "en" ? "fr" : "en"]}
          hrefLang={language === "en" ? "fr" : "en"}
          onClick={toggleLanguage}
          aria-label={language === "en" ? "ENFR — Switch to French" : "ENFR — Passer en anglais"}
          title={`Switch to ${language === "en" ? "French" : "English"}`}
        >
          <span className={`lang-thumb ${language === "fr" ? "lang-thumb--fr" : ""}`} />
          <span className={`lang-text ${language === "en" ? "lang-text--active" : ""}`}>EN</span>
          <span className={`lang-text ${language === "fr" ? "lang-text--active" : ""}`}>FR</span>
        </a>

        <a
          href="#contact"
          className="btn btn-primary nav-contact-btn"
          onClick={(event) => scrollToSection("contact", event)}
        >
          {t.nav.contact}
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}
    </nav>
  );
}

export default NavBar;
