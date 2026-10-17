import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 border-top">
        <h1 className="text-center mb-5 fs-2">People</h1>
        <div className="col-12 col-md-6 text-center">
          <img
            className="p-3"
            src="/Media/Images/kavi.JPG"
            alt="Kavi Rawat"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Media/Images/nithinKamath.jpg";
            }}
            style={{ width: "60%", maxWidth: "320px", borderRadius: "100%", objectFit: "cover" }}
          />
          <h4 className="mt-2 fs-4 text-muted">Kavi Rawat</h4>
          <h5 className="fs-6 text-muted">
            Founder & Software Engineer
          </h5>
        </div>
        <div className="col-12 col-md-6 p-4 fs-5 text-muted">
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
