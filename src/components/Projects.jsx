import { useEffect, useRef } from "react";
import projects from "../projects.json";

const projectMeta = [
  {
    icon: "bi-bag-heart-fill",
    accent: "#7C3AED",
    accentLight: "#9D5CF6",
    gradient: "linear-gradient(135deg, #7C3AED, #06B6D4)",
    number: "01",
    label: "React.js App",
  },
  {
    icon: "bi-tools",
    accent: "#EC4899",
    accentLight: "#F472B6",
    gradient: "linear-gradient(135deg, #EC4899, #7C3AED)",
    number: "02",
    label: "PHP / OOP / MVC",
  },
  {
    icon: "bi-check2-all",
    accent: "#06B6D4",
    accentLight: "#22D3EE",
    gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
    number: "03",
    label: "Full Stack",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" style={{ opacity: 0.05 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div className="projects-header reveal">
          <span className="section-tag" style={{ justifyContent: "center" }}>Portfolio</span>
          <h2 className="section-title">My Projects</h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            A selection of projects I've built — from Full Stack applications to creative interfaces.
          </p>
          <div className="section-divider" />
        </div>

        {/* ── Project list ── */}
        <div className="proj-list">
          {projects.map((p, i) => {
            const m = projectMeta[i] || projectMeta[0];
            return (
              <div
                key={i}
                className="proj-row reveal"
                style={{ "--accent": m.accent, "--accent-l": m.accentLight, transitionDelay: `${i * 0.14}s` }}
              >
                {/* Left: index + icon */}
                <div className="proj-row-left">
                  <div className="proj-icon-wrap" style={{ background: m.gradient }}>
                    <i className={`bi ${m.icon}`} />
                  </div>
                  <span className="proj-index">{m.number}</span>
                </div>

                {/* Center: content */}
                <div className="proj-row-center">
                  <div className="proj-meta-row">
                    <span className="proj-type-badge" style={{ background: `${m.accent}22`, border: `1px solid ${m.accent}55`, color: m.accentLight }}>
                      {m.label}
                    </span>
                  </div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.description}</p>
                  <div className="proj-tags">
                    {(p.tags || []).map((tag) => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Right: actions */}
                <div className="proj-row-right">
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-btn">
                    <i className="bi bi-github" />
                    <span>Source Code</span>
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link-btn proj-link-demo" style={{ "--accent": m.accent, "--accent-l": m.accentLight }}>
                      <i className="bi bi-play-circle-fill" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <div className="proj-arrow">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="proj-row-accent-line" style={{ background: m.gradient }} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
