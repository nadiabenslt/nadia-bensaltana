
import img from '../assets/profile.png'


export default function About() {
  return (
    <section className="about-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h2 className="mb-4">
          Nadia Bensaltana
        </h2>

        <img
          src={img}
          alt="profile"
          className="about-img img-fluid mb-4"
        />

        <p className="text-light">
          I'm a <span className="text-accent">Full Stack Developer</span> who loves building
          powerful, creative, and user-centered web applications.  
          I enjoy turning complex ideas into elegant, functional, and scalable digital solutions.
        
          With a solid background in both frontend and backend technologies, I create seamless
          experiences that connect design and functionality.
        
          Every project I take on is an opportunity to innovate, learn, and bring value through code.
        </p>
      </div>
    </section>
  );
}
