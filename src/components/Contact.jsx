import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-3" style={{ opacity: 0.08 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="contact-header reveal">
          <span className="section-tag" style={{ justifyContent: "center" }}>Contact</span>
          <h2 className="section-title">Travaillons Ensemble</h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "500px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            Un projet en tête ou simplement envie de discuter ? Je serais ravie d'avoir de vos nouvelles.
          </p>
          <div className="section-divider" />
        </div>

        <div className="contact-grid">

          {/* ── Info panel ── */}
          <div className="contact-info reveal-left">
            <h3 className="contact-info-title">Contactez-moi</h3>
            <p className="contact-info-desc">
              Je suis actuellement à la recherche d'opportunités professionnelles.
              Que vous ayez une question ou une idée de projet, n'hésitez pas !
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
                <div className="label">Téléphone</div>
                <a href="tel:+212710206233" className="value" style={{ color: "var(--clr-text)" }}>
                  +212 710 206 233
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><i className="bi bi-geo-alt" /></div>
              <div className="contact-item-text">
                <div className="label">Localisation</div>
                <div className="value">Boujdour, Maroc</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><i className="bi bi-clock" /></div>
              <div className="contact-item-text">
                <div className="label">Disponibilité</div>
                <div className="value">Ouverte aux opportunités</div>
              </div>
            </div>

            {/* Social */}
            <div className="social-row">
              <a
                href="https://github.com/nadiabenslt"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/nadia-bensaltana-8b8202334"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href="mailto:bensaltananadia6@gmail.com"
                className="social-btn"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="contact-form-wrap reveal-right">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci ! Je vous répondrai très bientôt 🚀");
                e.target.reset();
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Nom complet</label>
                  <input id="contact-name" type="text" className="form-input" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Adresse e-mail</label>
                  <input id="contact-email" type="email" className="form-input" placeholder="votre@email.com" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Sujet</label>
                <input id="contact-subject" type="text" className="form-input" placeholder="De quoi s'agit-il ?" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Parlez-moi de votre projet ou de votre idée..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <i className="bi bi-send" /> Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "5rem" }}>
        <p>
          © 2026 <span>Nadia Bensaltana</span>. Fait avec ❤️ et beaucoup de café.
        </p>
      </footer>
    </section>
  );
}
