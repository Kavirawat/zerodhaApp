import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DASHBOARD_URL } from "../../config";

function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("zerodha_user");
      setIsLoggedIn(!!user);
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const getDashboardUrl = () => {
    const token = localStorage.getItem("zerodha_token") || "";
    const user = encodeURIComponent(localStorage.getItem("zerodha_user") || "{}");
    return `${DASHBOARD_URL}?token=${token}&user=${user}`;
  };

  return (
    <div className="container p-3 p-md-5 mb-3 mb-md-5">
      <div className="row text-center justify-content-center">
        <div className="col-12">
          <img
            src="Media/Images/homeHero.png"
            alt="Zerodha Platform Overview"
            className="img-fluid mb-4 mb-md-5"
            style={{ maxHeight: "420px", objectFit: "contain" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Media/Images/homeHero.png";
            }}
          />
        </div>
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mt-3 mt-md-4 fs-1">Invest in everything</h1>
          <p className="fs-5 text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>
          {isLoggedIn ? (
            <a
              href={getDashboardUrl()}
              className="py-2 px-4 btn btn-primary fs-5 mb-4 mb-md-5 d-inline-block"
              style={{
                width: "auto",
                minWidth: "220px",
                backgroundColor: "#387ed1",
                borderColor: "#387ed1",
                fontWeight: 500,
              }}
            >
              <i className="fas fa-chart-line me-2"></i> Open Kite Dashboard
            </a>
          ) : (
            <Link
              to="/signup"
              className="py-2 px-4 btn btn-primary fs-5 mb-4 mb-md-5 d-inline-block"
              style={{
                width: "auto",
                minWidth: "200px",
                backgroundColor: "#387ed1",
                borderColor: "#387ed1",
                fontWeight: 500,
              }}
            >
              Signup Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
