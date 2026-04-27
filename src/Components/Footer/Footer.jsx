import "./Footer.css";
import logo from "../../assets/logo.svg";
import { useTranslation } from "../../hooks/useTranslation";

function Footer() {
  const t = useTranslation();

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>{t.footer.description}</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">{t.footer.rights}</p>
      </div>
    </div>
  );
}

export default Footer;
