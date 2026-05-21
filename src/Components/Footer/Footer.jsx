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
          <h4 className="footer-col-title">{t.footer.quickLinks}</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollToSection("about")}>{t.nav.about}</button></li>
            <li><button onClick={() => scrollToSection("experience")}>{t.nav.experience}</button></li>
            <li><button onClick={() => scrollToSection("work")}>{t.nav.portfolio}</button></li>
            <li><button onClick={() => scrollToSection("contact")}>{t.nav.contact}</button></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">{t.footer.socialMedia}</h4>
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
