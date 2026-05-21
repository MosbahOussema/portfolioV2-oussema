import "./About.css";
import profile_img from "../../assets/me1.png";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollReveal from "../../hooks/useScrollReveal";

function About() {
  const t = useTranslation();
  const sectionRef = useScrollReveal();

  const skills = Object.values(t.about.skills);
  const achievements = [
    { value: t.about.achievements.experienceValue, label: t.about.achievements.experience },
    { value: t.about.achievements.projectsValue, label: t.about.achievements.projects },
    { value: t.about.achievements.clientsValue, label: t.about.achievements.clients },
  ];

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <h2 className="section-title reveal">
        {t.about.title}
      </h2>

      <div className="about-content">
        <div className="about-image-col reveal-left">
          <div className="about-image-wrapper">
            <img src={profile_img} alt="Oussama Mosbah" className="about-image" />
            <div className="about-image-border"></div>
            <div className="about-image-glow"></div>
          </div>
        </div>

        <div className="about-info-col reveal-right">
          <div className="about-text">
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
          </div>

          <div className="about-skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="about-skill-chip">
                <span className="skill-chip-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="about-achievements reveal">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card glass">
            <span className="achievement-value">{item.value}</span>
            <span className="achievement-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
