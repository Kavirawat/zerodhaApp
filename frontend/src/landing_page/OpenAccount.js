import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("zerodha_user");
    setIsLoggedIn(!!user);
  }, []);

  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2 text-muted mb-3">Open a Zerodha account</h1>
        <p className="text-muted mb-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5 "
          style={{ width: "20%", minWidth: "180px", margin: " 0 auto" }}
        >
          Signup for free
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
