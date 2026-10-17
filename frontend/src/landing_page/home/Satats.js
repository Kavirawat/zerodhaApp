import React from "react";
function Stats() {
  return (
    <div className="container p-2 p-md-3">
      <div className="row p-2 p-md-5 align-items-center">
        <div className="col-12 col-lg-6 p-2 p-md-4 mb-4 mb-lg-0">
          <h1 className="mb-4 mb-md-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-6 p-2 p-md-4 text-center">
          <img src="Media/Images/ecosystem.png" alt="Zerodha Ecosystem" className="img-fluid mb-4" style={{ maxWidth: "100%" }} />
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
            <a href="/products" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}>
              Explore our products &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}>
              Try Kite demo &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
