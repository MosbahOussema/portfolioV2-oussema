import { useCallback } from "react";

export const useScrollToSection = (onAfterScroll) =>
  useCallback(
    (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      onAfterScroll?.();
    },
    [onAfterScroll]
  );

export default useScrollToSection;
