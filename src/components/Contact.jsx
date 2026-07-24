import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* ─────────────────────────────────────────────────────────────
   EmailJS config
   1. Go to https://www.emailjs.com  → sign up (free)
   2. Add an Email Service  →  copy the Service ID below
   3. Create an Email Template with these variables:
         {{from_name}}  {{from_email}}  {{subject}}  {{message}}
      Set "To email" = bensaltananadia6@gmail.com
      Copy the Template ID below
   4. Go to Account → API Keys → copy your Public Key below
   ───────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = "service_portfolio";   // ← replace with yours
const EMAILJS_TEMPLATE_ID = "template_contact";    // ← replace with yours
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";     // ← replace with yours

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef    = useRef(null);

  const [status, setStatus]     = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    from_name:  "",
    from_email: "",
    subject:    "",
    message:    "",
  });

  /* ── Intersection observer for reveal animations ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Input change handler ── */
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isSending = status === "sending";

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-3" style={{ opacity: 0.08 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="contact-header reveal">
          <span className="section-tag" style={{ justifyContent: "center" }}>Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "500px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="section-divider" />
        </div>

        <div className="contact-grid">

          {/* ── Info panel ── */}
          <div className="contact-info reveal-left">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-desc">
              I'm currently open to new professional opportunities.
              Whether you have a question or a project idea, feel free to reach out!
            </p>

            <div className="contact-item">
              <div className="contact-item-icon"><i className="bi bi-envelope" /></div>
              <div className="contact-item-text">
                <div className="label">Email</div>
                <a
                  href="mailto:bensaltananadia6@gmail.com"
                  className="value"
                  style={{ color: "var(--clr-text)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--clr-primary-l)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--clr-text)")}
                >
                  bensaltananadia6@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><i className="bi bi-telephone" /></div>
              <div className="contact-item-text">
                <div className="label">Phone</div>
                <a href="tel:+212710206233" className="value" style={{ color: "var(--clr-text)" }}>
                  +212 710 206 233
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><i className="bi bi-geo-alt" /></div>
              <div className="contact-item-text">
                <div className="label">Location</div>
                <div className="value">Boujdour, Morocco</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><i className="bi bi-clock" /></div>
              <div className="contact-item-text">
                <div className="label">Availability</div>
                <div className="value">Open to opportunities</div>
              </div>
            </div>

            {/* Social */}
            <div className="social-row">
              <a href="https://github.com/nadiabenslt" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a href="https://www.linkedin.com/in/nadia-bensaltana-8b8202334" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href="mailto:bensaltananadia6@gmail.com" className="social-btn" aria-label="Email">
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="contact-form-wrap reveal-right">
            <form ref={formRef} onSubmit={handleSubmit} noValidate>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="from_name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="from_email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="form-alert form-alert-success">
                  <i className="bi bi-check-circle-fill" />
                  Message sent successfully! I'll get back to you very soon.
                </div>
              )}
              {status === "error" && (
                <div className="form-alert form-alert-error">
                  <i className="bi bi-exclamation-triangle-fill" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary form-submit${isSending ? " sending" : ""}`}
                disabled={isSending}
              >
                {isSending ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><i className="bi bi-send" /> Send Message</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "5rem" }}>
        <p>
          © 2026 <span>Nadia Bensaltana</span>. Built with ❤️ and lots of coffee.
        </p>
      </footer>
    </section>
  );
}
