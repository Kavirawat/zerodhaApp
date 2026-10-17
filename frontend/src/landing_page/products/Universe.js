import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center my-4 my-md-5">
        <div className="col-12 mb-4">
          <h1 className="fs-2">The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-3">
          <img src="Media/Images/smallcaseLogo.png" alt="smallcase" className="img-fluid mb-3" style={{ maxHeight: "40px" }} />
          <p className="text-muted small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-3">
          <img
            src="Media/Images/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-3"
            style={{ maxHeight: "45px" }}
          />
          <p className="text-muted small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-3">
          <img src="Media/Images/streakLogo.png" alt="Streak" className="img-fluid mb-3" style={{ maxHeight: "40px" }} />
          <p className="text-muted small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-3">
          <img src="Media/Images/sensibullLogo.svg" alt="Sensibull" className="img-fluid mb-3" style={{ maxHeight: "40px" }} />
          <p className="text-muted small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-3">
          <img
            src="Media/Images/appstoreBadge.svg"
            alt="Tijori"
            className="img-fluid mb-3"
            style={{ maxHeight: "45px" }}
          />
          <p className="text-muted small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-3">
          <img src="Media/Images/dittoLogo.png" alt="Ditto" className="img-fluid mb-3" style={{ maxHeight: "40px" }} />
          <p className="text-muted small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-12 mt-3 mb-4">
          <Link
            to="/signup"
            className="py-2 px-4 btn btn-primary fs-5 d-inline-block"
            style={{ width: "auto", minWidth: "220px", margin: "0 auto", backgroundColor: "#387ed1", borderColor: "#387ed1" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
