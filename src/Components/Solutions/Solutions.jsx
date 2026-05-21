import "./Solutions.css";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollReveal from "../../hooks/useScrollReveal";

function Solutions() {
  const t = useTranslation();
  const sectionRef = useScrollReveal();

  const solutionIcons = [
    <svg key="responsive" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    <svg key="design" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    <svg key="performance" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    <svg key="api" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>,
  ];

  return (
    <section className="solutions section" id="solutions" ref={sectionRef}>
      <div className="solutions-header reveal">
        <h2 className="section-title">{t.solutions.title}</h2>
        <p className="solutions-subtitle">{t.solutions.subtitle}</p>
      </div>

      <div className="solutions-grid">
        {t.solutions.items.map((solution, index) => (
          <div
            key={index}
            className={`solution-card glass reveal delay-${index + 1}`}
          >
            <div className="solution-card-header">
              <div className="solution-icon">
                {solutionIcons[index]}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
            </div>
            <ul className="solution-points">
              {solution.points.map((point, pointIndex) => (
                <li key={pointIndex} className="solution-point">
                  <span className="solution-point-dot"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
