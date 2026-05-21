import eldoImg from "../assets/project_1.svg";
import sweeteesImg from "../assets/project_2.svg";
import sarabImg from "../assets/sarab1.png";
import agcffImg from "../assets/AGCFF.png";
import championMindImg from "../assets/ChampionMind.svg";
import eekadImg from "../assets/EeKad.png";
import crimpingImg from "../assets/draxlmaier.png";
import pilldispenserImg from "../assets/Smart Pill Dispenser.png";

export const projectAssets = {
  eldowallet: eldoImg,
  sweetees: sweeteesImg,
  sarabapp: sarabImg,
  agcff: agcffImg,
  championsmind: championMindImg,
  eekad: eekadImg,
  crimping: crimpingImg,
  pilldispenser: pilldispenserImg,
};

export const featuredProjectIds = [
  "eldowallet",
  "sweetees",
  "sarabapp",
  "championsmind",
  "agcff",
  "eekad",
];

export const projectLinks = {
  eldowallet: "https://manager.eldowallet.fr/",
  sweetees: "https://manager.sweetees.fr/",
  sarabapp: "",
  championsmind: "",
  agcff: "https://agcff.net/",
  eekad: "",
};

export const getFeaturedProjects = (translations) =>
  featuredProjectIds.map((id, index) => ({
    id,
    w_no: index + 1,
    w_name: translations.projects[id].name,
    w_img: projectAssets[id],
    w_link: projectLinks[id],
    w_description: translations.projects[id].description,
    w_technologies: translations.projects[id].technologies,
  }));
