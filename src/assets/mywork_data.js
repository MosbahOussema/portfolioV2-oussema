import { translations } from "../translations";
import { getFeaturedProjects } from "../data/projects";

const getMyWorkData = (language = "en") => {
  const t = translations[language];
  return getFeaturedProjects(t);
};

export default getMyWorkData;
