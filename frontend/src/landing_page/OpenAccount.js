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
    <div className="container p-3 p-md-5 mb-4 mb-md-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-3 mt-md-4 fs-2 mb-3">Open a Zerodha account</h1>
          <p className="text-muted fs-6 mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link
            to="/signup"
            className="py-2 px-4 btn btn-primary fs-5 d-inline-block"
            style={{ width: "auto", minWidth: "200px", margin: "0 auto", backgroundColor: "#387ed1", borderColor: "#387ed1" }}
          >
            Signup for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
