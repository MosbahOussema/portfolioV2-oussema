import { useState } from "react";
import "./MyWork.css";
import getMyWorkData from "../../assets/mywork_data";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import useScrollReveal from "../../hooks/useScrollReveal";
import ProjectCard from "./ProjectCard";

function MyWork() {
  const t = useTranslation();
  const { language } = useLanguage();
  const mywork_data = getMyWorkData(language);
  const sectionRef = useScrollReveal();
  const [activeProject, setActiveProject] = useState(null);
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
            <ProjectCard
              key={work.id}
              work={work}
              index={index}
              technologies={technologies}
              activeProject={activeProject}
              viewSiteLabel={t.work.viewSite}
              onProjectClick={handleProjectClick}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
            />
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
