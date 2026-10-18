import React from "react";
function Footer() {
  return (
    <footer
      className="border-top "
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container mt-4 mt-md-5">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-lg-0">
            <a className="navbar-brand d-block mb-3" href="#">
              <img src="Media/Images/logo.svg" alt="Zerodha" style={{ width: "130px", maxWidth: "60%" }} />
            </a>
            <p className="text-muted small">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                <i
                  style={{ fontSize: "22px" }}
                  className="fab fa-facebook text-muted"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                <i
                  style={{ fontSize: "22px" }}
                  className="fab fa-instagram text-muted"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                <i
                  style={{ fontSize: "22px" }}
                  className="fab fa-linkedin text-muted"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                <i
                  style={{ fontSize: "22px" }}
                  className="fab fa-twitter text-muted"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
            <h6>Account</h6>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Open demat account
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Minor demat account
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              NRI demat account
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Commodity
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Dematerialisation
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Fund transfer
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              MTF
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Referral program
            </a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
            <h6>Support</h6>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Contact us
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Support portal
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              How to file a complaint?
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Status of complaints
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Bulletin
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Circular
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Z-Connect blog
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Downloads
            </a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
            <h6>Company</h6>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              About
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Philosophy
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Press & media
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Careers
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Zerodha Cares (CSR)
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Zerodha.tech
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Open source
            </a>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0">
            <h6>Quick links</h6>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Upcoming IPOs
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Brokerage charges
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Market holidays
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Economic calendar
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Calculators
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Markets
            </a>
            <a style={{ textDecoration: "none" }} href="#" className="text-muted d-block mb-1">
              Sectors
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            <a href="#" style={{ textDecoration: "none" }}> complaints@zerodha.com</a>, for DP related to
            <a href="#" style={{ textDecoration: "none" }}>dp@zerodha.com </a>. Please ensure you carefully read
            the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="#" style={{ textDecoration: "none" }}>SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <a href="#" style={{ textDecoration: "none" }}>Smart Online Dispute Resolution</a> |
          <a href="#" style={{ textDecoration: "none" }}>Grievances Redressal Mechanism </a>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE.
            <a href="#" style={{ textDecoration: "none" }}>NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            <a href="#" style={{ textDecoration: "none" }}>create a ticket here</a>.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4 pt-2 border-top">
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              NSE
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              BSE
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              MCX
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              Terms & condition
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              Policies & procedures
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              Privacy & Policy
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              Disclosure
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              For investor's attention
            </a>
            <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
