import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState("home");

  /* --- Scroll effects --- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- Active section via IntersectionObserver --- */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* --- Smooth scroll handler --- */
  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => scrollTo(e, "#home")}
          >
            Nadia.
          </a>

          {/* Hamburger */}
          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`} role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link ${activeId === href.slice(1) ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
