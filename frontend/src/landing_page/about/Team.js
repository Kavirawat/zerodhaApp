import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mb-3 mb-md-5 border-top align-items-center">
        <h1 className="text-center mb-4 mb-md-5 fs-2">People</h1>
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            className="p-2 img-fluid"
            src="/Media/Images/kavi.JPG"
            alt="Kavi Rawat"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Media/Images/nithinKamath.jpg";
            }}
            style={{ width: "65%", maxWidth: "260px", borderRadius: "100%", objectFit: "cover", aspectRatio: "1/1" }}
          />
          <h4 className="mt-3 fs-4 text-muted">Kavi Rawat</h4>
          <h5 className="fs-6 text-muted">
            Founder & Software Engineer
          </h5>
        </div>
        <div className="col-12 col-md-6 p-2 p-md-4 fs-5 text-muted">
          <p>
            Kavi bootstrapped and built this Zerodha full-stack platform to overcome the
            hurdles traders face with high brokerage, clunky interfaces, and fragmented tools.
          </p>
          <p>
            With a focus on transparent pricing, modern technology, and user-first design,
            the platform empowers retail investors to trade effortlessly across equities, F&O, and mutual funds.
          </p>
          <p>Building scalable financial products and intuitive UI is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none", color: "#387ed1" }}>Homepage</a> /{" "}
            <a href="https://tradingqna.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#387ed1" }}>TradingQnA</a> /{" "}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#387ed1" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
