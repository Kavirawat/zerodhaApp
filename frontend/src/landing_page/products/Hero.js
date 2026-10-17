import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="mt-5 mb-5 p-5 text-center">
        <h1 className="fs-3 mb-3">Zerodha Products</h1>
        <h3 className="fs-5 mb-3 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-muted">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
