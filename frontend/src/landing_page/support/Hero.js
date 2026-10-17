import React from "react";
function Hero() {
  return (
    <section className="container-fluid p-3" id="supportHero">
      <div className="p-2 mt-2" id="supportWrapper">
        <h4>Support Portal</h4>
        <a style={{ color: "white" }} href="#">Track Tickets</a>
      </div>
      <div className="row p-3">
        <div className="col-6 p-5">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input
            style={{ width: "100%", borderRadius: "8px", border: "none" }}
            placeholder="Eg. How do i activate F&O, why is my order getting rejected... "
            className="p-3 mt-3 mb-3"
          />
          <br />
          <a style={{ color: "white" }} href="#">
            Track account opening
          </a>&nbsp;&nbsp;
          <a style={{ color: "white" }} href="#">
            Track segment activation
          </a>&nbsp;&nbsp;
          <a style={{ color: "white" }} href="#">
            Intraday margins
          </a>&nbsp;&nbsp;
          <a style={{ color: "white" }} href="#">
            Kite user munual
          </a> 
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a style={{ color: "white" }} href="#">
                Current takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a style={{ color: "white", lineHeight: "2.8" }} href="#">
                Latest interaday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
