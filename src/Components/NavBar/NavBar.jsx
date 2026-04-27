import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";
import underline from "../../assets/nav_underline.svg";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Fermer le menu mobile après clic
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />

      {/* Menu hamburger pour mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "active" : ""}`}></span>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
        <li>
          <p
            onClick={() => scrollToSection("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            {t.nav.home}
          </p>
          {activeSection === "home" && <img src={underline} alt="" />}
        </li>
        <li>
          <p
            onClick={() => scrollToSection("about")}
            className={activeSection === "about" ? "active" : ""}
          >
            {t.nav.about}
          </p>
          {activeSection === "about" && <img src={underline} alt="" />}
        </li>
        <li>
          <p
            onClick={() => scrollToSection("services")}
            className={activeSection === "services" ? "active" : ""}
          >
            {t.nav.services}
          </p>
          {activeSection === "services" && <img src={underline} alt="" />}
        </li>
        <li>
          <p
            onClick={() => scrollToSection("work")}
            className={activeSection === "work" ? "active" : ""}
          >
            {t.nav.portfolio}
          </p>
          {activeSection === "work" && <img src={underline} alt="" />}
        </li>
        <li>
          <p
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            {t.nav.contact}
          </p>
          {activeSection === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>
      <button className="nav-language-btn" onClick={toggleLanguage}>
        {language === "en" ? "EN" : "FR"}
      </button>
    </div>
  );
}

export default NavBar;
