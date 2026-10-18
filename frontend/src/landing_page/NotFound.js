import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container p-5 mb-5 text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 my-5">
          <i className="fas fa-exclamation-triangle text-warning fa-3x mb-3"></i>
          <h1 className="mt-2 fs-2">404 Page Not Found</h1>
          <p className="text-muted">Sorry, the page you are looking for does not exist.</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/" className="btn btn-primary px-4" style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}>
              <i className="fas fa-home me-2"></i> Go to Home
            </Link>
            <Link to="/dashboard" className="btn btn-outline-primary px-4">
              <i className="fas fa-chart-line me-2"></i> Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
