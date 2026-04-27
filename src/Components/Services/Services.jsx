import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import getServicesData from "../../assets/services_data";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";

function Services() {
  const t = useTranslation();
  const { language } = useLanguage();
  const Services_Data = getServicesData(language);

  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>{t.services.title}</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
