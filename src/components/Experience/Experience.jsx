import { useState, useEffect, useCallback } from "react";
import "./Experience.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";
import useScrollReveal from "../../hooks/useScrollReveal";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";

function Experience() {
  const t = useTranslation();
  const { language } = useLanguage();
  const sectionRef = useScrollReveal();
  const [selectedJob, setSelectedJob] = useState(null);
  const unlockPageScroll = useBodyScrollLock(Boolean(selectedJob), {
    preserveNavbarPadding: true,
  });

  const closeModal = useCallback(() => {
    unlockPageScroll();
    setSelectedJob(null);
  }, [unlockPageScroll]);

  useEffect(() => {
    if (!selectedJob) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedJob, closeModal]);

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <h2 className="section-title reveal">
        {t.experience.title}
      </h2>

      <div className="experience-timeline">
        {t.experience.jobs.map((job, index) => (
          <ExperienceCard
            key={job.company}
            job={job}
            index={index}
            totalJobs={t.experience.jobs.length}
            language={language}
            onSelect={setSelectedJob}
          />
        ))}
      </div>

      <ExperienceModal
        selectedJob={selectedJob}
        language={language}
        onClose={closeModal}
      />
    </section>
  );
}

export default Experience;
