import { useEffect, useState } from "react";

export const useTypewriter = (fullText) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
  }, [fullText]);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 4500);
      } else {
        const nextSpeed = displayText === "" ? 1000 : 130 + Math.random() * 40;
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, nextSpeed);
      }
    } else if (displayText === "") {
      timer = setTimeout(() => setIsDeleting(false), 1000);
    } else {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, 65);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText]);

  return displayText;
};

export default useTypewriter;
