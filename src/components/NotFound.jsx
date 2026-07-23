import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound-section">
      <div>
        <div className="notfound-code">404</div>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary" id="not-found-home-btn">
          <i className="bi bi-house" />
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
