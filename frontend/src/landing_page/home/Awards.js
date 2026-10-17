import React from "react";
function Awards() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
          <img src="Media/Images/largestBroker.svg" alt="Largest Broker in India" className="img-fluid" style={{ maxHeight: "380px" }} />
        </div>
        <div className="col-12 col-lg-6 p-2 p-md-4">
          <h1 className="fs-2 mb-3">Largest stock broker in India</h1>
          <p className="text-muted">
            2+ million Zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 p-2 p-md-3">
              <ul>
                <li>
                  <p className="mb-2">Futures and options</p>
                </li>
                <li>
                  <p className="mb-2">Commodity derivatives</p>
                </li>
                <li>
                  <p className="mb-2">Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-2 p-md-3">
              <ul>
                <li>
                  <p className="mb-2">Stocks & IPOs</p>
                </li>
                <li>
                  <p className="mb-2">Direct mutual funds</p>
                </li>
                <li>
                  <p className="mb-2">Bonds and Govt. securities</p>
                </li>
              </ul>
            </div>
            <div className="col-12 text-center mt-3">
              <img src="Media/Images/pressLogos.png" alt="Press Logos" className="img-fluid" style={{ maxWidth: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
