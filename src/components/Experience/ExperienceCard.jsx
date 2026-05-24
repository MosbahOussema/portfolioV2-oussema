/* eslint-disable react/prop-types */
import ExperienceArrow from "./ExperienceArrow";
import { getCompanyIcon } from "./companyIcons";

function ExperienceCard({ job, index, totalJobs, language, onSelect }) {
  const companyIcon = getCompanyIcon(job.company);

  return (
    <div
      className={`experience-card glass reveal delay-${index + 1}`}
      onClick={() => onSelect(job)}
      tabIndex="0"
      role="button"
      aria-haspopup="dialog"
      aria-label={`${job.role} at ${job.company}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(job);
        }
      }}
    >
      <div className="experience-card-header">
        <div className="experience-card-left">
          <div className="experience-company-icon">
            {companyIcon ? (
              <img
                src={companyIcon}
                alt=""
                className="experience-company-icon-image"
                loading="lazy"
              />
            ) : (
              <span>{job.company.charAt(0)}</span>
            )}
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

      <div className="experience-click-badge">
        <span>
          {language === "fr" ? "Voir projets" : "View projects"}
          <ExperienceArrow />
        </span>
      </div>

      {index < totalJobs - 1 && (
        <div className="experience-connector">
          <div className="connector-line"></div>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
