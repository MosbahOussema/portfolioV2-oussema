const track = (eventName, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

const useAnalytics = () => {
  const trackResumeClick = (language) => {
    track("resume_click", {
      event_category: "engagement",
      event_label: `CV_${language.toUpperCase()}`,
    });
  };

  const trackConnectClick = () => {
    track("connect_modal_open", {
      event_category: "engagement",
    });
  };

  const trackContactItem = (platform) => {
    track("contact_item_click", {
      event_category: "engagement",
      event_label: platform,
    });
  };

  const trackContactFormSubmit = (success) => {
    track("contact_form_submit", {
      event_category: "conversion",
      event_label: success ? "success" : "error",
    });
  };

  const trackProjectLink = (projectName, url) => {
    track("project_link_click", {
      event_category: "engagement",
      event_label: projectName,
      project_url: url,
    });
  };

  const trackLanguageSwitch = (newLanguage) => {
    track("language_switch", {
      event_category: "engagement",
      event_label: newLanguage,
    });
  };

  return {
    trackResumeClick,
    trackConnectClick,
    trackContactItem,
    trackContactFormSubmit,
    trackProjectLink,
    trackLanguageSwitch,
  };
};

export default useAnalytics;
