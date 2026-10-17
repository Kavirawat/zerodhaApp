import React from "react";
function Hero() {
  return (
    <section className="container-fluid py-4 px-3" id="supportHero">
      <div className="py-2" id="supportWrapper">
        <h4 className="mb-0">Support Portal</h4>
        <a style={{ color: "white", textDecoration: "underline" }} href="#">Track Tickets</a>
      </div>
      <div className="container">
        <div className="row py-3 align-items-start">
          <div className="col-12 col-md-7 p-2 p-md-4 mb-4 mb-md-0">
            <h1 className="fs-3 mb-3">Search for an answer or browse help topics to create a ticket</h1>
            <input
              style={{ width: "100%", borderRadius: "8px", border: "none", outline: "none" }}
              placeholder="Eg. How do I activate F&O, why is my order getting rejected... "
              className="p-3 mt-2 mb-3 shadow-sm"
            />
            <div className="d-flex flex-wrap gap-2 gap-md-3">
              <a style={{ color: "white", textDecoration: "underline", fontSize: "14px" }} href="#">
                Track account opening
              </a>
              <a style={{ color: "white", textDecoration: "underline", fontSize: "14px" }} href="#">
                Track segment activation
              </a>
              <a style={{ color: "white", textDecoration: "underline", fontSize: "14px" }} href="#">
                Intraday margins
              </a>
              <a style={{ color: "white", textDecoration: "underline", fontSize: "14px" }} href="#">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-12 col-md-5 p-2 p-md-4">
            <h2 className="fs-4 mb-3">Featured</h2>
            <ol className="ps-3" style={{ lineHeight: "2" }}>
              <li className="mb-2">
                <a style={{ color: "white" }} href="#">
                  Current takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a style={{ color: "white" }} href="#">
                  Latest intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
