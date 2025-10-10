
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container">
        <h1 className="display-1 fw-bold text-accent">404</h1>
        <h2 className="mb-3">Oops! Page Not Found 😕</h2>
        <p className="mb-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-accent px-4">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
