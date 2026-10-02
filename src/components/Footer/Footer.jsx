import "./Footer.css";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollToSection from "../../hooks/useScrollToSection";
import FooterNewsletter from "./FooterNewsletter";
import { SocialIconLinks, SocialTextLinks } from "./SocialLinks";

function Footer() {
  const t = useTranslation();
  const scrollToSection = useScrollToSection();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <span className="footer-logo-letter">O</span>
              <span className="footer-logo-dot"></span>
            </div>
            <span className="footer-logo-text">Oussama</span>
          </div>
          <p className="footer-description">{t.footer.description}</p>
          <SocialIconLinks />
        </div>

        <div className="footer-links-col">
          <h2 className="footer-col-title">{t.footer.quickLinks}</h2>
          <ul className="footer-links footer-section-links">
            <li><a href="#about" onClick={(event) => scrollToSection("about", event)}>{t.nav.about}</a></li>
            <li><a href="#experience" onClick={(event) => scrollToSection("experience", event)}>{t.nav.experience}</a></li>
            <li><a href="#work" onClick={(event) => scrollToSection("work", event)}>{t.nav.portfolio}</a></li>
            <li><a href="#contact" onClick={(event) => scrollToSection("contact", event)}>{t.nav.contact}</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h2 className="footer-col-title">{t.footer.socialMedia}</h2>
          <SocialTextLinks />
        </div>

        <FooterNewsletter t={t} />
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{t.footer.rights}</p>
      </div>
    </footer>
  );
}

export default Footer;
