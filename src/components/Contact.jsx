
export default function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          Contact <span className="text-accent">Me</span>
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="contact-form p-4 shadow-lg rounded">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-accent px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-5">
          <p>Or find me on:</p>
          <div className="d-flex justify-content-center gap-3 social-links">
            <a href="https://github.com/nadiabenslt" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nadia-bensaltana-8b8202334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="bensaltananadia6@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
