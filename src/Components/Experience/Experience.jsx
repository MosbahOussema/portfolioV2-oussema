import "./Experience.css";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollReveal from "../../hooks/useScrollReveal";

function Experience() {
  const t = useTranslation();
  const sectionRef = useScrollReveal();

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

            {/* Timeline connector */}
            {index < t.experience.jobs.length - 1 && (
              <div className="experience-connector">
                <div className="connector-line"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
