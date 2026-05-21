import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import "./Experience.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import useScrollReveal from "../../hooks/useScrollReveal";

import eldoImg from "../../assets/project_1.svg";
import sweeteesImg from "../../assets/project_2.svg";
import sarabImg from "../../assets/sarab1.png";
import agcffImg from "../../assets/AGCFF.png";
import championMindImg from "../../assets/ChampionMind.svg";
import eekadImg from "../../assets/EeKad.png";
import crimpingImg from "../../assets/draxlmaier.png";
import pilldispenserImg from "../../assets/Smart Pill Dispenser.png";

const projectImages = {
  eldowallet: eldoImg,
  sweetees: sweeteesImg,
  sarabapp: sarabImg,
  agcff: agcffImg,
  championsmind: championMindImg,
  eekad: eekadImg,
  crimping: crimpingImg,
  pilldispenser: pilldispenserImg,
};

function Experience() {
  const t = useTranslation();
  const { language } = useLanguage();
  const sectionRef = useScrollReveal();
  const [selectedJob, setSelectedJob] = useState(null);
  const scrollLockY = useRef(null);

  const lockPageScroll = useCallback(() => {
    if (scrollLockY.current !== null) return;

    scrollLockY.current = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
      const navbar = document.getElementById("navbar");
      if (navbar) navbar.style.paddingRight = `${scrollbarWidth}px`;
    }
  }, []);

  const unlockPageScroll = useCallback(() => {
    if (scrollLockY.current === null) return;

    const savedY = scrollLockY.current;
    scrollLockY.current = null;

    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    body.style.paddingRight = "";

    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.paddingRight = "";

    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, savedY);
    html.style.scrollBehavior = prevScrollBehavior;
  }, []);

  const closeModal = useCallback(() => {
    unlockPageScroll();
    setSelectedJob(null);
  }, [unlockPageScroll]);

  useLayoutEffect(() => {
    if (!selectedJob) return undefined;
    lockPageScroll();
    return unlockPageScroll;
  }, [selectedJob, lockPageScroll, unlockPageScroll]);

  useEffect(() => {
    if (!selectedJob) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedJob, closeModal]);

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <h2 className="section-title reveal">
        {t.experience.title}
      </h2>

      <div className="experience-timeline">
        {t.experience.jobs.map((job, index) => (
          <div
            key={index}
            className={`experience-card glass reveal delay-${index + 1}`}
            onClick={() => setSelectedJob(job)}
            tabIndex="0"
            role="button"
            aria-haspopup="dialog"
            aria-label={`${job.role} at ${job.company}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedJob(job);
              }
            }}
          >
            <div className="experience-card-header">
              <div className="experience-card-left">
                <div className="experience-company-icon">
                  <span>{job.company.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
              </div>
              <div className="experience-card-right">
                <span className="experience-type-badge">{job.type}</span>
                <span className="experience-period">{job.period}</span>
              </div>
            </div>

            <p className="experience-description">{job.description}</p>

            <div className="experience-tags">
              {job.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="experience-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Click Indicator Badge */}
            <div className="experience-click-badge">
              <span>{language === "fr" ? "Voir projets →" : "View projects →"}</span>
            </div>

            {/* Timeline connector */}
            {index < t.experience.jobs.length - 1 && (
              <div className="experience-connector">
                <div className="connector-line"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Experience Details Modal — rendered via Portal at body level to escape section stacking context */}
      {selectedJob && createPortal(
        <div 
          className="experience-modal-overlay" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div className="experience-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="experience-modal-close" 
              onClick={closeModal} 
              aria-label={language === "fr" ? "Fermer" : "Close"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="experience-modal-header">
              <div className="experience-company-icon modal-icon">
                <span>{selectedJob.company.charAt(0)}</span>
              </div>
              <div className="modal-header-text">
                <h3 className="modal-role">{selectedJob.role}</h3>
                <p className="modal-company">{selectedJob.company}</p>
                <span className="modal-period">{selectedJob.period}</span>
                {selectedJob.type && (
                  <span className="modal-job-type">{selectedJob.type}</span>
                )}
              </div>
            </div>

            {selectedJob.description && (
              <p className="experience-modal-summary">{selectedJob.description}</p>
            )}

            {selectedJob.tags?.length > 0 && (
              <div className="experience-modal-tags">
                {selectedJob.tags.map((tag) => (
                  <span key={tag} className="experience-modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="modal-projects-section">
              <h4 className="modal-section-title">
                {language === "fr" ? "Projets Réalisés" : "Realized Projects"}
              </h4>
              <div className="modal-projects-grid">
                {selectedJob.projects.map((project) => (
                  <div key={project.id} className="modal-project-card">
                    <div className="modal-project-img-container">
                      <img 
                        src={projectImages[project.id]} 
                        alt={project.name} 
                        className="modal-project-img" 
                      />
                    </div>
                    <div className="modal-project-details">
                      <h5 className="modal-project-name">{project.name}</h5>
                      {project.role && (
                        <p className="modal-project-role">{project.role}</p>
                      )}
                      <p className="modal-project-desc">{project.description}</p>
                      
                      <div className="modal-project-achievements">
                        <h6>{language === "fr" ? "Réalisations Clés :" : "Key Achievements:"}</h6>
                        <ul>
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="modal-project-footer">
                        <div className="modal-project-tech">
                          {project.tech.map((techItem, idx) => (
                            <span key={idx} className="project-tech-badge">{techItem}</span>
                          ))}
                        </div>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="modal-project-link"
                          >
                            {language === "fr" ? "Voir le site →" : "View site →"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

export default Experience;
