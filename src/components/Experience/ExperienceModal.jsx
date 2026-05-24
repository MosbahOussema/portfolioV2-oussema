/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { projectAssets } from "../../data/projects";
import ExperienceArrow from "./ExperienceArrow";
import { getCompanyIcon } from "./companyIcons";
import useAnalytics from "../../hooks/useAnalytics";
import useFocusTrap from "../../hooks/useFocusTrap";

function ExperienceModal({ selectedJob, language, onClose }) {
  const { trackProjectLink } = useAnalytics();
  const modalRef = useFocusTrap(Boolean(selectedJob), onClose);

  if (!selectedJob) return null;

  const companyIcon = getCompanyIcon(selectedJob.company);

  return createPortal(
    <div
      className="experience-modal-overlay"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="experience-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
        tabIndex="-1"
      >
        <div className="experience-modal-header-row">
          <div className="experience-modal-header">
            <div className="experience-company-icon modal-icon">
              {companyIcon ? (
                <img
                  src={companyIcon}
                  alt=""
                  className="experience-company-icon-image"
                  loading="lazy"
                />
              ) : (
                <span>{selectedJob.company.charAt(0)}</span>
              )}
            </div>
            <div className="modal-header-text">
              <h3 className="modal-role" id="experience-modal-title">{selectedJob.role}</h3>
              <p className="modal-company">{selectedJob.company}</p>
              <span className="modal-period">{selectedJob.period}</span>
              {selectedJob.type && (
                <span className="modal-job-type">{selectedJob.type}</span>
              )}
            </div>
          </div>

          <button
            className="experience-modal-close"
            onClick={onClose}
            aria-label={language === "fr" ? "Fermer" : "Close"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
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
                    src={projectAssets[project.id]}
                    alt={project.name}
                    className="modal-project-img"
                    loading="lazy"
                    decoding="async"
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
                        onClick={() => trackProjectLink(project.name, project.link)}
                      >
                        <>
                          {language === "fr" ? "Voir le site" : "View site"}
                          <ExperienceArrow />
                        </>
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
  );
}

export default ExperienceModal;
