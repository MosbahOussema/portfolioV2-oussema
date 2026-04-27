import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/oussema_img.jpg";
import { useTranslation } from "../../hooks/useTranslation";

function About() {
  const t = useTranslation();

  return (
    <div className="about" id="about">
      <div className="about-line">
        <h1>{t.about.title}</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>{t.about.skills.htmlCss}</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>{t.about.skills.reactJs}</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>{t.about.skills.javascript}</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>{t.about.skills.nextJs}</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>{t.about.achievements.experience}</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>{t.about.achievements.projects}</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>{t.about.achievements.clients}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
