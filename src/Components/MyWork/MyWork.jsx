import { useState } from "react";
import "./MyWork.css";
import getMyWorkData from "../../assets/mywork_data";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import useScrollReveal from "../../hooks/useScrollReveal";

function MyWork() {
  const t = useTranslation();
  const { language } = useLanguage();
  const mywork_data = getMyWorkData(language);
  const sectionRef = useScrollReveal();
  const [activeProject, setActiveProject] = useState(null);
  
  // Logic for Show More (if needed in future)
  const [displayCount, setDisplayCount] = useState(6);

  const toggleProject = (index) => {
    setActiveProject((current) => (current === index ? null : index));
  };

  const isTouchLayout = () => (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse), (max-width: 1024px)").matches
  );

  const handleProjectClick = (event, index) => {
    if (!isTouchLayout()) {
      return;
    }

    if (event.target.closest("a")) {
      return;
    }

    event.preventDefault();
    toggleProject(index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleProject(index);
    }

    if (event.key === "Escape") {
      setActiveProject(null);
      event.currentTarget.blur();
    }
  };

  const handleBlur = (event, index) => {
    if (!event.currentTarget.contains(event.relatedTarget) && activeProject === index) {
      setActiveProject(null);
    }
  };

  return (
    <section className="mywork section" id="work" ref={sectionRef}>
      <h2 className="section-title reveal">
        {t.work.title}
      </h2>

      <div className="mywork-container">
        {mywork_data.slice(0, displayCount).map((work, index) => {
          const technologies = work.w_technologies
            ? work.w_technologies.split(",").map(tech => tech.trim())
            : [];

          return (
            <article
              key={index}
              className={`mywork-format reveal revealed${activeProject === index ? " is-active" : ""}`}
              tabIndex="0"
              role="button"
              aria-expanded={activeProject === index}
              aria-label={`${work.w_name} project details`}
              onClick={(event) => handleProjectClick(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onBlur={(event) => handleBlur(event, index)}
            >
              <div className="project-card-inner">
                <div className="project-card-face project-card-front">
                  <div className={`project-image-container${work.w_no === 6 ? " project-image-eekad" : ""}`}>
                    <img src={work.w_img} alt={work.w_name} />
                  </div>
                  <div className="project-front-shine" aria-hidden="true" />
                  <div className="project-mobile-info">
                    <h3>{work.w_name}</h3>
                    <p>{work.w_description}</p>
                    <div className="project-tags">
                      {technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="project-tag">{tech}</span>
                      ))}
                    </div>
                    {work.w_link && (
                      <a
                        href={work.w_link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {t.work.viewSite}
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-card-face project-card-back">
                  <div className="project-info">
                    <h3>{work.w_name}</h3>
                    <p>{work.w_description}</p>
                    <div className="project-tags">
                      {technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="project-tag">{tech}</span>
                      ))}
                    </div>
                    {work.w_link && (
                      <a
                        href={work.w_link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {t.work.viewSite}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {activeProject === index && (
                <div className="project-mobile-panel">
                  <h3>{work.w_name}</h3>
                  <p>{work.w_description}</p>
                  <div className="project-tags">
                    {technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="project-tag">{tech}</span>
                    ))}
                  </div>
                  {work.w_link && (
                    <a
                      href={work.w_link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {t.work.viewSite}
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {mywork_data.length > displayCount && (
        <div className="mywork-showmore reveal" onClick={() => setDisplayCount(prev => prev + 3)}>
          <p>{t.work.showMore}</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      )}
    </section>
  );
}

export default MyWork;
