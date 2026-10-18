import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-2 p-md-5 my-3 my-md-5">
        <h1 className="fs-3 text-center text-muted mb-4">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-12 col-sm-6 col-lg-4 mt-3 p-3">
          <h3 className="fs-5  text-muted p-3">
            <i className="fas fa-plus-circle" aria-hidden="true"></i>&nbsp;Account
            Opening
          </h3>
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Online Opening Account
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Offline Opening Account
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Company, Partnership and HUF Account
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Opening
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            NRI Account Opening
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Charges at Zerodha
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Zerodha IDFC First Bank 3-in-1 Account
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#opening">
            Getting Started
          </a>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-3 p-3">
          <h3 className="fs-5  text-muted p-3">
            <i className="fas fa-user" aria-hidden="true"></i>&nbsp;Your Zerodha
            Account
          </h3>
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#account">
            Login Credentials
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#account">
            Account modifications and Segment Additions
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#account">
            DP ID and Bank details
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#account">
            Your Profile
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#account">
            Transfer and conversion of Shares
          </a>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-3 p-3">
          <h3 className="fs-5 text-muted p-3">
            <i className="fas fa-chart-bar" aria-hidden="true"></i>&nbsp;Trading & Markets
          </h3>
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#trading">
            IPO
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#trading">
            Trading FAQs
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#trading">
            Margin Trading Facility (MTF) and Margins
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#trading">
            Charts and orders
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#trading">
            Alerts and Nudges
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#trading">
            General
          </a>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-3 p-3">
          <h3 className="fs-5  text-muted p-3">
            <i className="fas fa-wallet" aria-hidden="true"></i>&nbsp; Funds
          </h3>
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#funds">
            Add money
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#funds">
            Withdraw money
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#funds">
            Add bank accounts
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#funds">
            eMandates
          </a>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-3 p-3">
          <h3 className="fs-5 text-muted p-3">
            <i className="fas fa-terminal" aria-hidden="true"></i>&nbsp;Console
          </h3>
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#console">
            Portfolio
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#console">
            Corporate actions
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#console">
            Funds statement
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#console">
            Reports
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#console">
            Profile
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="#console">
            Segments
          </a>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-3 p-3">
          <h3 className="fs-5 text-muted p-3">
            <i className="fas fa-coins" aria-hidden="true"></i>&nbsp;Coin
          </h3>
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
            Mutual funds
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
            National Pension Scheme (NPS)
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
            Fixed Deposit (FD)
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
            Features on Coin
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
            Payments and Orders
          </a>
          <br />
          <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
            General
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
