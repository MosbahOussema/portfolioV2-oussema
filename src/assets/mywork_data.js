import project1_img from "../assets/project_1.svg";
import project2_img from "../assets/project_2.svg";
import sarabImg from "../assets/sarab1.png";
import championmind_img from "../assets/ChampionMind.svg";
import agcff_img from "../assets/AGCFF.png";
import eekad_img from "../assets/EeKad.png";
import { translations } from "../translations";

const getMyWorkData = (language = "en") => {
  const t = translations[language];

  return [
    {
      w_no: 1,
      w_name: t.projects.eldowallet.name,
      w_img: project1_img,
      w_link: "https://manager.eldowallet.fr/",
      w_description: t.projects.eldowallet.description,
      w_technologies: t.projects.eldowallet.technologies,
    },
    {
      w_no: 2,
      w_name: t.projects.sweetees.name,
      w_img: project2_img,
      w_link: "https://manager.sweetees.fr/",
      w_description: t.projects.sweetees.description,
      w_technologies: t.projects.sweetees.technologies,
    },
    {
      w_no: 3,
      w_name: t.projects.sarabapp.name,
      w_img: sarabImg,
      w_link: "",
      w_description: t.projects.sarabapp.description,
      w_technologies: t.projects.sarabapp.technologies,
    },
    {
      w_no: 4,
      w_name: t.projects.championsmind.name,
      w_img: championmind_img,
      w_link: "",
      w_description: t.projects.championsmind.description,
      w_technologies: t.projects.championsmind.technologies,
    },
    {
      w_no: 5,
      w_name: t.projects.agcff.name,
      w_img: agcff_img,
      w_link: "https://agcff.net/",
      w_description: t.projects.agcff.description,
      w_technologies: t.projects.agcff.technologies,
    },
    {
      w_no: 6,
      w_name: t.projects.eekad.name,
      w_img: eekad_img,
      w_link: "",
      w_description: t.projects.eekad.description,
      w_technologies: t.projects.eekad.technologies,
    },
  ];
};

export default getMyWorkData;
