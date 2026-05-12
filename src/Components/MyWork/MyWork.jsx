import React, { useState } from "react";
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
  
  // Logic for Show More (if needed in future)
  const [displayCount, setDisplayCount] = useState(6);

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
            <div key={index} className="mywork-format reveal">
              <div className="project-image-container">
                <img src={work.w_img} alt={work.w_name} />
                <div className="project-overlay">
                   <div className="project-info">
                      <h3>{work.w_name}</h3>
                      <p>{work.w_description}</p>
                      <div className="project-tags">
                        {technologies.map((tech, i) => (
                          <span key={i} className="project-tag">{tech}</span>
                        ))}
                      </div>
                      {work.w_link && (
                        <a href={work.w_link} target="_blank" rel="noreferrer" className="project-link">
                          {t.work.viewSite}
                        </a>
                      )}
                   </div>
                </div>
              </div>
            </div>
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
