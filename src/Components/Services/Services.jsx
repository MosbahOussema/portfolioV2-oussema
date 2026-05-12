import "./Services.css";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollReveal from "../../hooks/useScrollReveal";

function Services() {
  const t = useTranslation();
  const sectionRef = useScrollReveal();

  const skillIcons = ["⚡", "📱", "🎯", "✨"];

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <h2 className="section-title reveal">
        {t.skills.title}
      </h2>

      <div className="skills-grid">
        {t.skills.items.map((skill, index) => (
          <div
            key={index}
            className={`skill-card glass reveal delay-${index + 1}`}
          >
            <div className="skill-card-icon">
              <span>{skillIcons[index]}</span>
            </div>
            <h3 className="skill-card-title">{skill.name}</h3>
            <p className="skill-card-description">{skill.description}</p>
            <div className="skill-card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
