import { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/hero4.png";
import resumePdfEn from "../../assets/Cv_Oussama_Mosbah_En.pdf";
import resumePdfFr from "../../assets/Cv_Oussama_Mosbah_Fr.pdf";
import ContactModal from "../ContactModal/ContactModal";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollReveal from "../../hooks/useScrollReveal";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation();
  const sectionRef = useScrollReveal();

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const resumePdf = language === "en" ? resumePdfEn : resumePdfFr;

  // Rotate role tags
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  // Typewriter effect for subtitle
  const fullText = t.hero.subtitle;

  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
  }, [fullText]);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText === fullText) {
          // Pause 4.5 seconds at the end of the text so it's fully readable
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 4500);
        } else {
          // Slow down writing speed (130ms - 170ms) + initial 1s delay on empty text
          const nextSpeed = displayText === "" ? 1000 : 130 + Math.random() * 40;
          timer = setTimeout(() => {
            setDisplayText(fullText.substring(0, displayText.length + 1));
          }, nextSpeed);
        }
      } else {
        if (displayText === "") {
          // Pause 1 second when empty before starting over
          timer = setTimeout(() => {
            setIsDeleting(false);
          }, 1000);
        } else {
          // Slow down deletion speed (65ms)
          timer = setTimeout(() => {
            setDisplayText(fullText.substring(0, displayText.length - 1));
          }, 65);
        }
      }
    };

    handleTyping();
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText]);

  const roleIcons = [
    <svg key="code" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    <svg key="layers" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    <svg key="layout" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  ];

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-container">
        {/* Left Column — Title & CTA */}
        <div className="hero-left reveal-left">
          {/* Status badge */}
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span className="status-text">{t.hero.statusText || "Available for work"}</span>
          </div>

          <div className="hero-greeting">{t.hero.greeting}</div>
          <h1 className="hero-title">
            <span className="hero-title-line">{t.hero.title}</span>
            <span className="hero-name">{t.hero.name}</span>
          </h1>
          <p className="hero-subtitle">
            <span className="hero-subtitle-line"></span>
            <span className="hero-subtitle-text">
              {displayText}
              <span className="typewriter-cursor">|</span>
            </span>
          </p>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {t.hero.connectButton}
            </button>
            <a
              className="btn btn-outline"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.hero.resumeButton}
            </a>
          </div>
        </div>

        {/* Right Column — Profile Card + Role Stats */}
        <div className="hero-right reveal-right">
          <div className="hero-profile-card glass">
            <div className="hero-profile-image-wrapper">
              <img
                src={profile_img}
                alt="Oussema Mosbah"
                className="hero-profile-image"
              />
              <div className="hero-profile-glow"></div>
              <div className="hero-profile-ring"></div>
            </div>

            <div className="hero-profile-info">
              <h2 className="hero-profile-name">{t.hero.name}</h2>
              <p className="hero-profile-role">{t.hero.subtitle}</p>
            </div>
          </div>

          {/* Role Stat Cards */}
          <div className="hero-stat-cards">
            {t.hero.roles.map((role, index) => (
              <div
                key={index}
                className={`hero-stat-card glass ${index === roleIndex ? "hero-stat-card--active" : ""}`}
                onClick={() => setRoleIndex(index)}
              >
                <div className="hero-stat-icon">
                  {roleIcons[index]}
                </div>
                <span className="hero-stat-label">{role}</span>
                <div className="hero-stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Hero;
