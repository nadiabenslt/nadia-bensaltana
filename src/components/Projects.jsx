import { useEffect, useRef } from "react";
import projects from "../projects.json";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" style={{ opacity: 0.06 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="projects-header reveal">
          <span className="section-tag" style={{ justifyContent: "center" }}>Portfolio</span>
          <h2 className="section-title">Mes Projets</h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "500px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            Une sélection de projets que j'ai réalisés — des applications Full Stack aux interfaces créatives.
          </p>
          <div className="section-divider" />
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.18}s` }}
            >
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} />
                <div className="project-img-overlay">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-link"
                  >
                    <i className="bi bi-github" /> View on GitHub
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {(p.tags || []).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
