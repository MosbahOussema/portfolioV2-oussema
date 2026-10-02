import { useCallback } from "react";

export const useScrollToSection = (onAfterScroll) =>
  useCallback(
    (sectionId, event) => {
      if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
      event?.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        if (window.location.hash !== `#${sectionId}`) {
          window.history.pushState(null, "", `#${sectionId}`);
        }
        element.scrollIntoView({ behavior: "smooth" });
      }
      onAfterScroll?.();
    },
    [onAfterScroll]
  );

export default useScrollToSection;
