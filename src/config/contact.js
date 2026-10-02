export const contactConfig = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  email: import.meta.env.VITE_CONTACT_EMAIL || "Mosbahoussama19@gmail.com",
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/mosbah-oussama",
  githubUrl: import.meta.env.VITE_GITHUB_URL || "https://github.com/MosbahOussema",
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || "21620009536",
};

export const getMailtoUrl = (subject = "Hello from your portfolio") =>
  `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}`;

export const getWhatsappUrl = (message = "") => {
  const baseUrl = `https://wa.me/${contactConfig.whatsappPhone}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
