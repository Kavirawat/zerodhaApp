import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 ">
          <img src="Media/Images/largestBroker.svg" />
        </div>
        <div className="col-6">
          <h1>Largest stock broken in India </h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all valumes in
            India daily by traiding and investing in:
          </p>
          <div className="row">
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p> Futures and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p> Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p> Bonds and Govt. secrities</p>
                </li>
              </ul>
            </div>
            <img src="Media/Images/pressLogos.png" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
