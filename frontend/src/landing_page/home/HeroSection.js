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
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="Media/Images/homeHero.png"
          alt="Zerodha Platform Overview"
          className="mb-5"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/Media/Images/homeHero.png";
          }}
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        {isLoggedIn ? (
          <a
            href={getDashboardUrl()}
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{
              width: "20%",
              minWidth: "220px",
              margin: "0 auto",
              backgroundColor: "#387ed1",
              borderColor: "#387ed1",
              fontWeight: 500,
            }}
          >
            🚀 Open Kite Dashboard
          </a>
        ) : (
          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{
              width: "20%",
              minWidth: "180px",
              margin: "0 auto",
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
  );
}

export default Hero;
