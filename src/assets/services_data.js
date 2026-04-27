import { translations } from "../translations";

const getServicesData = (language = "en") => {
  const t = translations[language];

  return [
    {
      s_no: "01",
      s_name: t.services.service1.title,
      s_desc: t.services.service1.description,
    },
    {
      s_no: "02",
      s_name: t.services.service2.title,
      s_desc: t.services.service2.description,
    },
    {
      s_no: "03",
      s_name: t.services.service3.title,
      s_desc: t.services.service3.description,
    },
    {
      s_no: "04",
      s_name: t.services.service4.title,
      s_desc: t.services.service4.description,
    },
    {
      s_no: "05",
      s_name: t.services.service5.title,
      s_desc: t.services.service5.description,
    },
    {
      s_no: "06",
      s_name: t.services.service6.title,
      s_desc: t.services.service6.description,
    },
  ];
};

export default getServicesData;
