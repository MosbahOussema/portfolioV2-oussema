import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { useTranslation } from "../../hooks/useTranslation";
import useScrollReveal from "../../hooks/useScrollReveal";

function Contact() {
  const form = useRef();
  const t = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useScrollReveal();

  const customToastStyle = {
    background: "linear-gradient(135deg, #7F1DFF 0%, #D46F88 100%)",
    color: "#fff",
    borderRadius: "16px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14px",
    border: "none",
    boxShadow: "0 8px 32px rgba(127, 29, 255, 0.3)",
    padding: "14px 24px",
    fontWeight: 500,
  };

  const customCloseButton = ({ closeToast }) => (
    <button
      onClick={closeToast}
      style={{
        background: "transparent",
        border: "none",
        color: "#fff",
        fontSize: "18px",
        fontWeight: 700,
        cursor: "pointer",
        marginLeft: "8px",
        lineHeight: 1,
      }}
      aria-label="Close"
    >
      ×
    </button>
  );

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    toast.dismiss();

    emailjs
      .sendForm(
        "service_bpst4vk",
        "template_f219soe",
        form.current,
        "VUqWGMuWe4hqvUJJ7"
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
    <section className="contact section" id="contact" ref={sectionRef}>
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

      <h2 className="section-title reveal">
        {t.contact.title}
      </h2>

      <div className="contact-content">
        <div className="contact-info-col reveal-left">
          <h3 className="contact-subtitle">{t.contact.subtitle}</h3>
          <p className="contact-description">{t.contact.description}</p>

          <div className="contact-details">
            <a href={`mailto:${t.contact.details.email}`} className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span>{t.contact.details.email}</span>
            </a>

            <a href={`tel:${t.contact.details.phone.split("/")[0].trim()}`} className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span>{t.contact.details.phone}</span>
            </a>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>{t.contact.details.location}</span>
            </div>
          </div>
        </div>

        <form className="contact-form glass reveal-right" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="contact-name">{t.contact.form.name}</label>
            <input
              type="text"
              id="contact-name"
              placeholder={t.contact.form.namePlaceholder}
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">{t.contact.form.email}</label>
            <input
              type="email"
              id="contact-email"
              placeholder={t.contact.form.emailPlaceholder}
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">{t.contact.form.message}</label>
            <textarea
              id="contact-message"
              rows="6"
              placeholder={t.contact.form.messagePlaceholder}
              name="message"
              required
            />
          </div>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <button
            type="submit"
            className="btn btn-primary contact-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="submit-spinner"></span>
                {t.contact.form.submitting}
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {t.contact.form.submit}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
