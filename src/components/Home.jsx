import React from "react";
import img from '../assets/profile.png'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container text-center text-lg-start">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={img}
              alt="developer illustration"
              className="hero-img img-fluid"
              style={{"with": "50px"}}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h1 className="fw-bold display-5 text-white mb-3">
              Turning <span className="brand-accent">Ideas</span> into 
              <br /> 
              Beautiful <span className="brand-accent">Web Experiences</span>
            </h1>
            <p className="lead text-light mb-4">
              I'm a passionate web developer who loves crafting clean, modern and responsive websites that bring creativity and functionality together.
            </p>
            <div>
              <Link to="/projects" className="btn btn-accent me-3">View Projects</Link>
              <Link to="/contact" className="btn btn-outline-light">Let's Talk</Link>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}
