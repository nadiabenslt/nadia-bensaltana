import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* ─────────────────────────────────────────────────────────────
   EmailJS credentials — stored in .env (never pushed to GitHub)
   Copy .env.example → .env and fill in your real values.
   ───────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const BLOCKED_EMAIL = "bensaltananadia6@gmail.com";

/* ── Floating-label field ── */
function Field({ id, name, label, type = "text", as = "input", value, onChange, error, disabled }) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const Tag = as;

  return (
    <div className={`ct-field${focused ? " ct-field--focused" : ""}${error ? " ct-field--error" : ""}${filled ? " ct-field--filled" : ""}`}>
      <Tag
        id={id}
        name={name}
        type={type}
        className="ct-field__input"
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        autoComplete="off"
        rows={as === "textarea" ? 4 : undefined}
      />
      <label className="ct-field__label" htmlFor={id}>{label}</label>
      <span className="ct-field__line" aria-hidden="true" />
      {error && (
        <span className="ct-field__error" role="alert">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M6 3.5v3M6 8.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef    = useRef(null);

  const [status, setStatus]     = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", title: "", message: "" });
  const [errors,   setErrors]   = useState({});

  /* ── Intersection observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .ct-reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim())  err.name  = "Name is required.";
    if (!formData.email.trim()) {
      err.email = "Email is required.";
    } else if (!emailRe.test(formData.email.trim())) {
      err.email = "Please enter a valid email address.";
    } else if (formData.email.trim().toLowerCase() === BLOCKED_EMAIL.toLowerCase()) {
      err.email = "You cannot send a message to your own address.";
    }
    if (!formData.title.trim())   err.title   = "Subject is required.";
    if (!formData.message.trim()) err.message = "Message is required.";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ve = validate();
    if (Object.keys(ve).length) { setErrors(ve); return; }
    setErrors({});
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", title: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const isSending = status === "sending";

  return (
    <section className="ct-section" id="contact" ref={sectionRef}>

      {/* ── Decorative noise grain overlay ── */}
      <div className="ct-grain" aria-hidden="true" />

      <div className="ct-inner">

        {/* ════ LEFT COLUMN ════ */}
        <div className="ct-left ct-reveal">

          {/* eyebrow */}
          <span className="ct-eyebrow">
            <span className="ct-eyebrow__dot" />
            Contact
          </span>

          {/* Big headline */}
          <h2 className="ct-headline">
            Let's build<br />
            something<br />
            <em>great</em>.
          </h2>

          <p className="ct-sub">
            Open to freelance projects, full-time roles, and creative collaborations.
            Drop me a line — I read every message.
          </p>

          {/* Contact chips */}
          <div className="ct-chips">
            <a href="mailto:bensaltananadia6@gmail.com" className="ct-chip">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5"/></svg>
              bensaltananadia6@gmail.com
            </a>
            <a href="tel:+212710206233" className="ct-chip">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 3A1.5 1.5 0 0 0 4 4.5v11A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 14.5 3h-9ZM10 14.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" stroke="currentColor" strokeWidth="1.5"/></svg>
              +212 710 206 233
            </a>
            <span className="ct-chip ct-chip--plain">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
              Boujdour, Morocco
            </span>
          </div>

          {/* Socials */}
          <div className="ct-socials">
            <a href="https://github.com/nadiabenslt" target="_blank" rel="noreferrer" className="ct-social" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/nadia-bensaltana-8b8202334" target="_blank" rel="noreferrer" className="ct-social" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
            </a>
          </div>
        </div>

        {/* ════ RIGHT COLUMN — FORM ════ */}
        <div className="ct-right ct-reveal" style={{ "--delay": "0.15s" }}>
          <div className="ct-form-shell">
            <div className="ct-form-header">
              <p className="ct-form-kicker">Send a message</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="ct-form">

              <div className="ct-row-2">
                <Field
                  id="ct-name" name="name" label="Full name *"
                  value={formData.name} onChange={handleChange}
                  error={errors.name} disabled={isSending}
                />
                <Field
                  id="ct-email" name="email" label="Email address *" type="email"
                  value={formData.email} onChange={handleChange}
                  error={errors.email} disabled={isSending}
                />
              </div>

              <Field
                id="ct-subject" name="title" label="Subject / Objet *"
                value={formData.title} onChange={handleChange}
                error={errors.title} disabled={isSending}
              />

              <Field
                id="ct-message" name="message" label="Your message *" as="textarea"
                value={formData.message} onChange={handleChange}
                error={errors.message} disabled={isSending}
              />

              {/* Status banners */}
              {status === "success" && (
                <div className="ct-banner ct-banner--ok" role="status">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Message sent — I'll get back to you soon!
                </div>
              )}
              {status === "error" && (
                <div className="ct-banner ct-banner--err" role="alert">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v5M10 13v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button type="submit" className="ct-submit" disabled={isSending} id="ct-submit-btn">
                {isSending ? (
                  <><span className="ct-spinner" aria-hidden="true" /> Sending…</>
                ) : (
                  <>
                    Send message
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="ct-submit__arrow"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="ct-footer">
        <span>© 2026 Nadia Bensaltana</span>
        <span className="ct-footer__dot" />
        <span>Crafted with care &amp; curiosity</span>
      </footer>

    </section>
  );
}
