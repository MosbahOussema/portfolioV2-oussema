/* eslint-disable react/prop-types */
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";
import { contactConfig } from "../../config/contact";

const SuccessIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

function FooterNewsletter({ t }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    toast.dismiss();

    const templateParams = {
      name: "Newsletter Subscriber",
      email: email,
      message: "Please add me to your newsletter! I want to stay updated with your latest projects.",
      time: new Date().toLocaleString()
    };

    emailjs
      .send(
        contactConfig.emailjs.serviceId,
        contactConfig.emailjs.templateId,
        templateParams,
        contactConfig.emailjs.publicKey
      )
      .then(
        () => {
          toast.success(t.footer.subscribeSuccess || "Merci pour votre abonnement !", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            icon: <SuccessIcon />
          });
          setEmail("");
          setIsSubmitting(false);
        },
        () => {
          toast.error(t.footer.subscribeError || "Une erreur est survenue.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            icon: <ErrorIcon />
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="footer-newsletter-col">
      <h4 className="footer-col-title">{t.footer.connect}</h4>
      <p className="footer-newsletter-text">{t.footer.newsletter}</p>
      <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder={t.footer.emailPlaceholder}
          className="footer-newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <button type="submit" className="footer-newsletter-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="footer-submit-spinner"></span>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}

export default FooterNewsletter;
