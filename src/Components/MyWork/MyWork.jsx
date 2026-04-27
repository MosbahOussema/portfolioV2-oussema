import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import getMyWorkData from "../../assets/mywork_data";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

function MyWork() {
  const t = useTranslation();
  const { language } = useLanguage();
  const mywork_data = getMyWorkData(language);
  const [activeCard, setActiveCard] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const touchTimeoutRef = useRef(null);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouchDevice());
  }, []);

  const handleCardInteraction = (index, isActive) => {
    setActiveCard(isActive ? index : null);
  };

  const handleTouchStart = (index, e) => {
    if (isTouchDevice) {
      e.preventDefault();
      // Clear any existing timeout
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
      handleCardInteraction(index, true);
    }
  };

  const handleTouchEnd = (index, e) => {
    if (isTouchDevice) {
      e.preventDefault();
      // Clear any existing timeout
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
      // Add a shorter delay for smoother experience
      touchTimeoutRef.current = setTimeout(() => {
        handleCardInteraction(index, false);
      }, 50);
    }
  };

  const handleMouseEnter = (index) => {
    if (!isTouchDevice) {
      handleCardInteraction(index, true);
    }
  };

  const handleMouseLeave = (index) => {
    if (!isTouchDevice) {
      handleCardInteraction(index, false);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>{t.work.title}</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          const isEekad = work.w_name === "Eekad";
          const imgStyle = isEekad
            ? { objectFit: "contain", background: "#111" }
            : {};

          // Split technologies by comma and clean them
          const technologies = work.w_technologies
            .split(",")
            .map((tech) => tech.trim())
            .filter((tech) => tech.length > 0);

          const isActive = activeCard === index;

          return (
            <div
              key={index}
              className={`work-card ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onTouchStart={(e) => handleTouchStart(index, e)}
              onTouchEnd={(e) => handleTouchEnd(index, e)}
              onTouchCancel={() => {
                if (touchTimeoutRef.current) {
                  clearTimeout(touchTimeoutRef.current);
                }
                handleCardInteraction(index, false);
              }}
            >
              <div className="work-image-container">
                {work.w_link ? (
                  <a
                    href={work.w_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                    onClick={(e) => {
                      if (isTouchDevice) {
                        e.preventDefault();
                        // Shorter delay for better responsiveness
                        setTimeout(() => {
                          window.open(work.w_link, "_blank");
                        }, 100);
                      }
                    }}
                  >
                    <img src={work.w_img} alt={work.w_name} style={imgStyle} />
                    <div className="work-overlay">
                      <div className="work-info">
                        <h3>{work.w_name}</h3>
                        <p className="work-description">{work.w_description}</p>
                        <div className="work-technologies-container">
                          {technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="work-technology-badge"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="work-link-text">
                          {t.work.viewSite}
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <>
                    <img src={work.w_img} alt={work.w_name} style={imgStyle} />
                    <div className="work-overlay">
                      <div className="work-info">
                        <h3>{work.w_name}</h3>
                        <p className="work-description">{work.w_description}</p>
                        <div className="work-technologies-container">
                          {technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="work-technology-badge"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
