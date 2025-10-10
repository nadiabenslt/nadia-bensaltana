import projects from '../projects.json'
export default function Projects() {

  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          My <span className="text-accent">Projects</span>
        </h2>

        <div className="row justify-content-center">
          {projects.map((p,i) => (
            <div key={i} className="col-md-5 mb-4">
              <div className="card project-card h-100 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
