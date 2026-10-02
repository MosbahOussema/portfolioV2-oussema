import eldoImg from "../assets/project_1.svg";
import sweeteesImg from "../assets/project_2.svg";
import sarabImg from "../assets/sarab1.jpg";
import agcffImg from "../assets/AGCFF.jpg";
import championMindImg from "../assets/ChampionMind.svg";
import eekadImg from "../assets/EeKad.png";
import crimpingImg from "../assets/draxlmaier.jpg";
import pilldispenserImg from "../assets/Smart Pill Dispenser.jpg";
import astrolabLogo from "../assets/astrolab-navbar.svg";
import talintyWordmark from "../assets/talinty-wordmark.avif";
import ciceriaWordmark from "../assets/ciceria-wordmark.png";

export const projectAssets = {
  astrolab: astrolabLogo,
  talinty: talintyWordmark,
  ciceria: ciceriaWordmark,
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
  "astrolab",
  "talinty",
  "ciceria",
  "eldowallet",
  "sweetees",
  "sarabapp",
  "championsmind",
  "agcff",
  "eekad",
];

export const projectLinks = {
  astrolab: "https://astrolab.co/fr/",
  talinty: "https://talinty.com/en",
  ciceria: "https://app.ciceria.fr/auth/signin",
  eldowallet: "https://manager.eldowallet.fr/",
  sweetees: "https://manager.sweetees.fr/",
  sarabapp: "",
  championsmind: "",
  agcff: "https://agcff.net/",
  eekad: "",
};

const logoProjectIds = new Set(["astrolab", "talinty", "ciceria"]);

export const getFeaturedProjects = (translations) =>
  featuredProjectIds.map((id, index) => ({
    id,
    w_no: index + 1,
    w_name: translations.projects[id].name,
    w_img: projectAssets[id],
    w_isLogo: logoProjectIds.has(id),
    w_imageAlt: logoProjectIds.has(id)
      ? `${translations.work.logo}: ${translations.projects[id].name}`
      : `${translations.work.imagePreview}: ${translations.projects[id].name}`,
    w_link: projectLinks[id],
    w_description: translations.projects[id].description,
    w_technologies: translations.projects[id].technologies,
  }));
