import { useEffect, useState } from "react";
import img from "../assets/Image_Nadia_Bensaltana.png";

const roles = [
  "Full Stack Developer",
  "React.js & Laravel Dev",
  "REST API Builder",
  "UI/UX Enthusiast",
];

export default function Home() {
  const [roleIndex,  setRoleIndex]  = useState(0);
  const [displayed,  setDisplayed]  = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* --- Typewriter --- */
  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToNext = (e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="home">
      {/* Ambient orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">

          {/* ── Text ── */}
          <div>
            <div className="hero-badge">
              <span className="dot" />
              Open to opportunities
            </div>

            <h1 className="hero-title">
              Hi, I'm{" "}
              <span className="text-gradient">Nadia Bensaltana</span>
            </h1>

            <div className="typewriter-wrapper">
              <p className="typewriter">
                I'm a{" "}
                <span className="typewriter-text">{displayed}</span>
                <span className="cursor" aria-hidden="true" />
              </p>
            </div>

            <p className="hero-desc">
              Full Stack developer passionate about building modern web applications.
              Skilled in <strong>Laravel, React.js, PHP, MySQL</strong> and REST APIs —
              turning ideas into clean, scalable digital solutions.
            </p>

            {/* Quick contact info */}
            <div className="hero-meta">
              <span><i className="bi bi-geo-alt-fill" /> Boujdour, Maroc</span>
              <span><i className="bi bi-telephone-fill" /> +212 710 206 233</span>
            </div>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <i className="bi bi-grid-3x3-gap-fill" />
                View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <i className="bi bi-chat-dots" />
                Let's Talk
              </a>
            </div>
          </div>

          {/* ── Image ── */}
          <div className="hero-image-wrapper">
            <div className="hero-avatar-ring">
              <img src={img} alt="Nadia Bensaltana" className="hero-avatar" />
            </div>
            <div className="tech-float tech-float-1">⚛️ React.js</div>
            <div className="tech-float tech-float-2">🐘 Laravel</div>
            <div className="tech-float tech-float-3">🔗 REST API</div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll to About">
        <div className="scroll-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        scroll
      </a>
    </section>
  );
}
