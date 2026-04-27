import React, { useState } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpeg";
import ContactModal from "../ContactModal/ContactModal";
import { useTranslation } from "../../hooks/useTranslation";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslation();

  const handleResumeDownload = () => {
    // Lien vers votre CV sur Google Drive
    const cvDriveLink =
      "https://drive.google.com/file/d/1lsw-k8yyLAVcbPAt_3-ApJVGniqqjtBG/view?usp=drive_link";

    // Ouvrir dans un nouvel onglet pour téléchargement
    window.open(cvDriveLink, "_blank");
  };

  const handleConnectClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="Oussema Profile" className="profile-image" />
      <h1>
        <span>{t.hero.title}</span>, {t.hero.subtitle}
      </h1>
      <p>{t.hero.description}</p>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleConnectClick}>
          {t.hero.connectButton}
        </div>
        <div className="hero-resume" onClick={handleResumeDownload}>
          {t.hero.resumeButton}
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Hero;
