import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useTranslation } from "../../hooks/useTranslation";

function Contact() {
  const form = useRef();
  const t = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const customToastStyle = {
    background: "linear-gradient(264deg, #df8908 -5.09%, #b415ff 100%)",
    color: "#fff",
    borderRadius: "50px",
    fontFamily: "Outfit, 'Segoe UI', Roboto, sans-serif",
    fontSize: "16px",
    border: "none",
    boxShadow: "0 4px 24px 0 rgba(186, 35, 225, 0.15)",
    padding: "12px 32px",
    fontWeight: 500,
    letterSpacing: "0.2px",
    minHeight: "auto",
    alignItems: "center",
    whiteSpace: "nowrap",
    maxWidth: "400px",
  };

  // Style pour le bouton de fermeture du toast
  const customCloseButton = ({ closeToast }) => (
    <button
      onClick={closeToast}
      style={{
        background: "transparent",
        border: "none",
        color: "#fff",
        fontSize: "22px",
        fontWeight: 700,
        cursor: "pointer",
        marginLeft: "10px",
        marginRight: "8px",
        lineHeight: 1,
      }}
      aria-label="Fermer"
    >
      ×
    </button>
  );

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Empêcher les soumissions multiples
    if (isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    toast.dismiss(); // Ferme tous les toasts avant d'en afficher un nouveau
    
    emailjs
      .sendForm(
        "service_bpst4vk", // service_id
        "template_f219soe", // template_id
        form.current,
        "VUqWGMuWe4hqvUJJ7" // public key
      )
      .then(
        () => {
          toast.success(t.contact.toast.success, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: customToastStyle,
            icon: false,
            closeButton: customCloseButton,
          });
          form.current.reset();
          setIsSubmitting(false);
        },
        () => {
          toast.error(t.contact.toast.error, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: customToastStyle,
            icon: false,
            closeButton: customCloseButton,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer
        position="bottom-right"
        toastStyle={customToastStyle}
        limit={1}
        closeOnClick
        pauseOnHover
        draggable
        newestOnTop
        hideProgressBar
      />
      <div className="contact-title">
        <h1>{t.contact.title}</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>{t.contact.subtitle}</h1>
          <p>{t.contact.description}</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>{t.contact.details.email}</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" />
              <p>{t.contact.details.phone}</p>
            </div>
            <div className="contact-detail">
             
              <img src={location_icon} alt="" />
              <p>{t.contact.details.location}</p>
            </div>
          </div>
        </div>
        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label htmlFor="">{t.contact.form.name}</label>
          <input
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            name="name"
            required
          />
          <label htmlFor="">{t.contact.form.email}</label>
          <input
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            name="email"
            required
          />
          <label htmlFor="">{t.contact.form.message}</label>
          <textarea
            type="text"
            rows="8"
            placeholder={t.contact.form.messagePlaceholder}
            name="message"
            required
          />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <button 
            type="submit" 
            className="contact-sumbit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.contact.form.submitting || "Envoi en cours..." : t.contact.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
