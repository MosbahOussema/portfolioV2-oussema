import astrolabIcon from "../../assets/astrolabIcon.jfif";
import nexymIcon from "../../assets/nexymIcon.jfif";
import zenhostingIcon from "../../assets/zenhostingIcon.jfif";
import draxlmaierIcon from "../../assets/draxlmaier.jpg";
import tccIcon from "../../assets/tccIcon.png";

const companyIconMatchers = [
  { match: "astrolab", icon: astrolabIcon, label: "Astrolab Agency" },
  { match: "nexym", icon: nexymIcon, label: "NEXYM" },
  { match: "zenhosting", icon: zenhostingIcon, label: "ZenHosting" },
  { match: "dräxlmaier", icon: draxlmaierIcon, label: "Dräxlmaier Group" },
  { match: "draxlmaier", icon: draxlmaierIcon, label: "Dräxlmaier Group" },
  { match: "tcc", icon: tccIcon, label: "TCC Informatique" },
];

export const getCompanyIcon = (company = "") => {
  const normalized = company.toLowerCase();

  return (
    companyIconMatchers.find(({ match }) => normalized.includes(match))?.icon ??
    null
  );
};
