import { useEffect, useRef } from "react";
import { Database, Layout, Server, Wrench, Globe } from "lucide-react";

/* ── Skill categories ── */
const categories = [
  {
    title: "Frontend",
    iconClass: "icon-purple",
    icon: <Layout size={18} />,
    skills: [
      { name: "React.js",   pct: 82 },
      { name: "HTML5",      pct: 95 },
      { name: "CSS3",       pct: 88 },
      { name: "JavaScript", pct: 80 },
      { name: "Bootstrap",  pct: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    iconClass: "icon-cyan",
    icon: <Server size={18} />,
    skills: [
      { name: "PHP",        pct: 85 },
      { name: "Laravel",    pct: 78 },
      { name: "Express.js", pct: 70 },
      { name: "REST API",   pct: 82 },
    ],
  },
  {
    title: "Databases",
    iconClass: "icon-pink",
    icon: <Database size={18} />,
    skills: [
      { name: "MySQL",   pct: 84 },
      { name: "MongoDB", pct: 65 },
    ],
  },
  {
    title: "Tools & Other",
    iconClass: "icon-green",
    icon: <Wrench size={18} />,
    skills: [
      { name: "Git / GitHub / GitLab", pct: 80 },
      { name: "Docker",                pct: 60 },
      { name: "Figma",                 pct: 65 },
      { name: "UML / Merise",          pct: 72 },
      { name: "OOP / MVC",             pct: 78 },
    ],
  },
];

/* ── Languages ── */
const languages = [
  { lang: "Arabic",   level: "Native language",       pct: 100 },
  { lang: "French",   level: "Intermediate level",    pct: 70  },
  { lang: "English",  level: "A2 level",              pct: 40  },
  { lang: "German",   level: "A1 level (in progress)", pct: 20  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              bar.style.width = bar.getAttribute("data-pct") + "%";
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-2" style={{ opacity: 0.07 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="skills-section-inner reveal">
          <span className="section-tag" style={{ justifyContent: "center" }}>Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p style={{ color: "var(--clr-text-muted)", maxWidth: "520px", margin: "1rem auto 0", fontSize: "0.95rem" }}>
            An overview of the technologies and tools I use to build modern web experiences.
          </p>
          <div className="section-divider" />
        </div>

        {/* Skill cards */}
        <div className="skills-categories">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-category-card reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="skill-category-title">
                <span className={`skill-category-icon ${cat.iconClass}`}>{cat.icon}</span>
                {cat.title}
              </div>
              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" data-pct={skill.pct} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div style={{ marginTop: "4rem" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>
              <Globe size={14} /> Languages
            </span>
            <h3 className="timeline-section-title" style={{ textAlign: "center" }}>Languages</h3>
          </div>

          <div className="lang-grid reveal">
            {languages.map((l) => (
              <div key={l.lang} className="lang-card">
                <div className="lang-header">
                  <span className="lang-name">{l.lang}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" data-pct={l.pct} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
