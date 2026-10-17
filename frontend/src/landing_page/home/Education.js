import React from "react";
function Education() {
  return (
    <div className="container mt-4 mt-md-5 p-2">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src="Media/Images/education.svg" alt="Market Education" className="img-fluid" style={{ maxWidth: "80%" }} />
        </div>
        <div className="col-12 col-md-6 p-2 p-md-4">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}>
            Varsity &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4 mt-md-5 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}>
            TradingQ&A &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
