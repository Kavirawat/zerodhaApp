import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-3 p-md-5 border-bottom">
        <h1 className="mt-3 mt-md-5 text-muted fs-1">Pricing</h1>
        <h3 className="mt-2 mb-4 mb-md-5 fs-5 text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades.
        </h3>
      </div>
      <div className="row text-center p-2 p-md-5 mt-3 mt-md-4">
        <div className="col-12 col-md-4 p-3 p-md-4 mb-4 mb-md-0">
          <img src="Media/Images/pricingEquity.svg" alt="Free equity delivery" className="img-fluid mb-3" style={{ maxHeight: "180px" }} />
          <h2 className="fs-4 text-muted">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-4 mb-4 mb-md-0">
          <img src="Media/Images/intradayTrades.svg" alt="Intraday and F&O" className="img-fluid mb-3" style={{ maxHeight: "180px" }} />
          <h2 className="fs-4 text-muted">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-4 mb-4 mb-md-0">
          <img src="Media/Images/pricingMF.svg" alt="Free direct MF" className="img-fluid mb-3" style={{ maxHeight: "180px" }} />
          <h2 className="fs-4 text-muted">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
