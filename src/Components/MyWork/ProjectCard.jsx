/* eslint-disable react/prop-types */
import useAnalytics from "../../hooks/useAnalytics";

function ProjectCard({
  work,
  index,
  technologies,
  activeProject,
  viewSiteLabel,
  onProjectClick,
  onKeyDown,
  onBlur,
}) {
  const isActive = activeProject === index;

  return (
    <article
      className={`mywork-format reveal revealed${isActive ? " is-active" : ""}`}
      tabIndex="0"
      role="button"
      aria-expanded={isActive}
      aria-label={`${work.w_name} project details`}
      onClick={(event) => onProjectClick(event, index)}
      onKeyDown={(event) => onKeyDown(event, index)}
      onBlur={(event) => onBlur(event, index)}
    >
      <div className="project-card-inner">
        <div className="project-card-face project-card-front">
          <div className={`project-image-container${work.w_no === 6 ? " project-image-eekad" : ""}`}>
            <img src={work.w_img} alt={work.w_name} />
          </div>
          <div className="project-front-shine" aria-hidden="true" />
          <ProjectInfo work={work} technologies={technologies} viewSiteLabel={viewSiteLabel} isMobile />
        </div>

        <div className="project-card-face project-card-back">
          <ProjectInfo work={work} technologies={technologies} viewSiteLabel={viewSiteLabel} />
        </div>
      </div>

      {isActive && (
        <div className="project-mobile-panel">
          <h3>{work.w_name}</h3>
          <p>{work.w_description}</p>
          <ProjectTags technologies={technologies} />
          <ProjectLink work={work} viewSiteLabel={viewSiteLabel} />
        </div>
      )}
    </article>
  );
}

function ProjectInfo({ work, technologies, viewSiteLabel, isMobile = false }) {
  return (
    <div className={isMobile ? "project-mobile-info" : "project-info"}>
      <h3>{work.w_name}</h3>
      <p>{work.w_description}</p>
      <ProjectTags technologies={technologies} />
      <ProjectLink work={work} viewSiteLabel={viewSiteLabel} />
    </div>
  );
}

function ProjectTags({ technologies }) {
  return (
    <div className="project-tags">
      {technologies.slice(0, 4).map((tech, i) => (
        <span key={i} className="project-tag">{tech}</span>
      ))}
    </div>
  );
}

function ProjectLink({ work, viewSiteLabel }) {
  const { trackProjectLink } = useAnalytics();
  if (!work.w_link) return null;

  return (
    <a
      href={work.w_link}
      target="_blank"
      rel="noreferrer"
      className="project-link"
      onClick={(event) => {
        event.stopPropagation();
        trackProjectLink(work.w_name, work.w_link);
      }}
    >
      {viewSiteLabel}
    </a>
  );
}

export default ProjectCard;
