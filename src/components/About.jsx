import { useEffect, useRef } from "react";
import img from "../assets/profile.png";

/* ── Data from CV ── */
const experience = [
  {
    role: "Développeuse Web Full Stack (Stage)",
    company: "Agence Urbaine de Laâyoune‑Sakia El Hamra",
    location: "Laâyoune, Maroc",
    period: "Janvier 2026",
    tasks: [
      "Développement d'une application de gestion des interventions informatiques.",
      "Conception et développement du backend avec PHP et MySQL.",
      "Mise en place des opérations CRUD.",
      "Application de l'architecture MVC pour un code structuré et maintenable.",
      "Développement d'une interface utilisateur responsive.",
      "Participation aux tests, correction des bugs et amélioration des performances.",
    ],
  },
];

const education = [
  {
    degree: "Technicien Spécialisé en Développement Digital",
    option: "Option Web Full Stack",
    school: "Cité des Métiers et des Compétences (CMC)",
    location: "Laâyoune, Maroc",
    period: "Sept. 2024 – Juil. 2026",
  },
  {
    degree: "Baccalauréat — Sciences Physiques et Chimiques",
    option: null,
    school: "Qualifiant Al Baqali",
    location: "Boujdour, Maroc",
    period: "2022 – 2023",
  },
];

const qualities = ["Esprit d'équipe", "Adaptabilité", "Curiosité", "Résolution de problèmes"];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" style={{ opacity: 0.06 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        {/* ── Top grid: image + bio ── */}
        <div className="about-grid">

          {/* Image */}
          <div className="about-image-wrap reveal-left">
            <div className="about-img-frame">
              <img src={img} alt="Nadia Bensaltana" className="about-img" />
              <div className="about-experience-badge">
                <div className="number">2026</div>
                <div className="label">Diploma</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="about-content reveal-right">
            <span className="section-tag">Full Stack Developer</span>
            <h2 className="section-title" style={{ fontSize: "2rem", textAlign: "left" }}>
              Nadia Bensaltana
            </h2>

            <p className="about-bio">
              Jeune développeuse Full Stack diplômée en{" "}
              <strong>Développement Digital (option Web Full Stack)</strong>. Passionnée par le
              développement d'applications web modernes, j'ai acquis au cours de ma formation et
              de mon stage de solides compétences en{" "}
              <strong>Laravel, React.js, PHP, JavaScript, MySQL</strong> et le développement
              d'<strong>API REST</strong>. Rigoureuse, curieuse et motivée, je souhaite intégrer
              une entreprise afin de contribuer à des projets concrets tout en développant
              davantage mes compétences.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>

            {/* Qualities chips */}
            <div className="qualities-row">
              {qualities.map((q) => (
                <span key={q} className="quality-chip">{q}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="mailto:bensaltananadia6@gmail.com" className="btn btn-primary">
                <i className="bi bi-envelope" /> Get In Touch
              </a>
              <a
                href="https://github.com/nadiabenslt"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="bi bi-github" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ── Experience ── */}
        <div style={{ marginTop: "5rem" }}>
          <div className="reveal" style={{ marginBottom: "2.5rem" }}>
            <span className="section-tag">Expérience</span>
            <h3 className="timeline-section-title">Expérience Professionnelle</h3>
          </div>

          {experience.map((exp, i) => (
            <div key={i} className="timeline-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <p className="timeline-company">
                      <i className="bi bi-building" /> {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-tasks">
                  {exp.tasks.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <div style={{ marginTop: "4rem" }}>
          <div className="reveal" style={{ marginBottom: "2.5rem" }}>
            <span className="section-tag">Formation</span>
            <h3 className="timeline-section-title">Formation</h3>
          </div>

          <div className="edu-grid">
            {education.map((edu, i) => (
              <div
                key={i}
                className="edu-card reveal"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="edu-icon">
                  <i className="bi bi-mortarboard-fill" />
                </div>
                <div>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  {edu.option && <p className="edu-option">{edu.option}</p>}
                  <p className="edu-school">
                    <i className="bi bi-geo-alt" /> {edu.school} — {edu.location}
                  </p>
                  <span className="timeline-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
