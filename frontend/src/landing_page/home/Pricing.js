import React from "react";
function Pricing() {
  return (
    <div className="container my-4 my-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 mb-4 mb-lg-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}>
            See pricing &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="d-none d-lg-block col-lg-1"></div>
        <div className="col-12 col-lg-6">
          <div className="row text-center g-2 g-md-3">
            <div className="col-12 col-sm-4">
              <div className="border p-3 rounded h-100 d-flex flex-column justify-content-center">
                <h1 className="mb-2 fs-2">
                  <i className="fa fa-inr me-1" aria-hidden="true"></i>0
                </h1>
                <p className="text-muted small mb-0">Free account opening</p>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="border p-3 rounded h-100 d-flex flex-column justify-content-center">
                <h1 className="mb-2 fs-2">
                  <i className="fa fa-inr me-1" aria-hidden="true"></i>0
                </h1>
                <p className="text-muted small mb-0">Free equity delivery and direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="border p-3 rounded h-100 d-flex flex-column justify-content-center">
                <h1 className="mb-2 fs-2">
                  <i className="fa fa-inr me-1" aria-hidden="true"></i>20
                </h1>
                <p className="text-muted small mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
