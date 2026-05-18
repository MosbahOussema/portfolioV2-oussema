import "./NavBar.css";
import { useState, useEffect } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { translations } from "../../translations";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`} id="navbar">
      {/* Logo */}
      <div className="nav-logo" onClick={() => scrollToSection("home")}>
        <div className="nav-logo-icon">
          <span className="logo-letter">O</span>
          <span className="logo-dot"></span>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <ul className={`nav-menu ${isMenuOpen ? "nav-menu--open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id} className="nav-menu-item">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? "nav-link--active" : ""}`}
            >
              {item.label}
              {activeSection === item.id && <span className="nav-link-indicator"></span>}
            </button>
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
            {theme === "dark" ? (
              <WbSunnyRoundedIcon fontSize="inherit" />
            ) : (
              <DarkModeRoundedIcon fontSize="inherit" />
            )}
          </span>
        </button>

        <button
          className="nav-lang-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          <span className={`lang-option ${language === "en" ? "lang-option--active" : ""}`}>EN</span>
          <span className="lang-separator">/</span>
          <span className={`lang-option ${language === "fr" ? "lang-option--active" : ""}`}>FR</span>
        </button>

        <button
          className="btn btn-primary nav-contact-btn"
          onClick={() => scrollToSection("contact")}
        >
          {t.nav.contact}
        </button>

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
