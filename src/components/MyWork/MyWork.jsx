import { useEffect, useRef, useState } from "react";
import { animate } from "motion/mini";
import "./MyWork.css";
import getMyWorkData from "../../assets/mywork_data";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import useScrollReveal from "../../hooks/useScrollReveal";
import ProjectCard from "./ProjectCard";

const getSlideVisual = (offset) => {
  const distance = Math.abs(offset);
  const direction = Math.sign(offset);
  const slot = direction * (distance === 0 ? 0 : distance === 1 ? 1 : distance === 2 ? 1.68 : 2.3);
  const depth = distance === 0 ? 0 : distance === 1 ? -110 : -210;
  const rotation = distance === 0 ? 0 : direction * -48;
  const scale = distance === 0 ? 1 : distance === 1 ? 0.88 : 0.76;
  const opacity = distance > 2 ? 0 : distance === 2 ? 0.4 : distance === 1 ? 0.78 : 1;

  return {
    transform: `translate(-50%, -50%) translateX(calc(${slot} * var(--coverflow-step))) translateZ(${depth}px) rotateY(${rotation}deg) scale(${scale})`,
    opacity,
  };
};

const getCircularOffset = (index, activeIndex, count) => {
  const forward = (index - activeIndex + count) % count;
  return forward > count / 2 ? forward - count : forward;
};

function MyWork() {
  const t = useTranslation();
  const { language } = useLanguage();
  const mywork_data = getMyWorkData(language);
  const sectionRef = useScrollReveal();
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);
  const slideAnimations = useRef([]);
  const lastIndex = useRef(0);
  const touchStart = useRef(null);

  useEffect(() => {
    if (lastIndex.current === activeIndex) return;
    lastIndex.current = activeIndex;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const { transform, opacity } = getSlideVisual(getCircularOffset(index, activeIndex, mywork_data.length));
      const startTransform = getComputedStyle(slide).transform;
      const startOpacity = getComputedStyle(slide).opacity;
      slideAnimations.current[index]?.cancel();
      if (reducedMotion) {
        slide.style.transform = transform;
        slide.style.opacity = opacity;
        return;
      }

      const animation = animate(
        slide,
        { transform: [startTransform, transform], opacity: [startOpacity, opacity] },
        { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
      );
      slideAnimations.current[index] = animation;
      animation.then(() => {
        if (slideAnimations.current[index] !== animation) return;
        slide.style.transform = transform;
        slide.style.opacity = opacity;
        slideAnimations.current[index] = null;
      });
    });
  }, [activeIndex, mywork_data.length]);

  useEffect(() => () => {
    slideAnimations.current.forEach((animation) => animation?.cancel());
  }, []);

  const goToIndex = (index) => {
    if (mywork_data.length === 0) return;
    setActiveProject(null);
    setActiveIndex((index + mywork_data.length) % mywork_data.length);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - touchStart.current.x;
    const distanceY = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(distanceX) < 50 || Math.abs(distanceX) < Math.abs(distanceY) * 1.2) return;
    goToIndex(activeIndex + (distanceX < 0 ? 1 : -1));
  };

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
      <h2 className="section-title reveal" id="work-title">
        {t.work.title}
      </h2>

      <div className="mywork-carousel" role="region" aria-labelledby="work-title">
        <div
          className="mywork-coverflow"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="mywork-coverflow-deck">
            {mywork_data.map((work, index) => {
              const offset = getCircularOffset(index, activeIndex, mywork_data.length);
              const distance = Math.abs(offset);
              const technologies = work.w_technologies
                ? work.w_technologies.split(",").map((tech) => tech.trim())
                : [];
              const initialVisual = getSlideVisual(getCircularOffset(index, 0, mywork_data.length));

              return (
                <div
                  className="mywork-coverflow-slide"
                  role="group"
                  aria-label={`${work.w_name}, ${index + 1} ${t.work.of} ${mywork_data.length}`}
                  aria-hidden={distance > 2}
                  inert={distance > 2 ? "" : undefined}
                  data-position={offset === 0 ? "active" : offset < 0 ? "previous" : "next"}
                  style={{ ...initialVisual, zIndex: mywork_data.length - distance, pointerEvents: distance > 2 ? "none" : undefined }}
                  ref={(node) => { slideRefs.current[index] = node; }}
                  onClickCapture={(event) => {
                    if (index === activeIndex || distance > 2) return;
                    event.preventDefault();
                    event.stopPropagation();
                    goToIndex(index);
                  }}
                  key={work.id}
                >
                  <ProjectCard
                    work={work}
                    index={index}
                    technologies={technologies}
                    activeProject={activeProject}
                    viewSiteLabel={t.work.viewSite}
                    onProjectClick={handleProjectClick}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {mywork_data.length > 1 && (
          <div className="mywork-carousel-controls">
            <button
              type="button"
              className="mywork-carousel-arrow is-previous"
              aria-label={t.work.previousPage}
              onClick={() => goToIndex(activeIndex - 1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <nav className="mywork-carousel-dots" aria-label={t.work.navigation}>
              {mywork_data.map((work, index) => (
                <button
                  type="button"
                  className={`mywork-carousel-dot${index === activeIndex ? " is-active" : ""}`}
                  aria-label={`${work.w_name}, ${index + 1} ${t.work.of} ${mywork_data.length}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => goToIndex(index)}
                  key={work.id}
                />
              ))}
            </nav>
            <button
              type="button"
              className="mywork-carousel-arrow is-next"
              aria-label={t.work.nextPage}
              onClick={() => goToIndex(activeIndex + 1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyWork;
