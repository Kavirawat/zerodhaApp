import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 p-5 align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageUrl} alt={productName} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-4">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}
              {...(tryDemo.startsWith("http") && !tryDemo.includes("localhost") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              Try Demo &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "60px", textDecoration: "none", color: "#387ed1", fontWeight: 500 }}
            >
              Learn More &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay} target="_blank" rel="noreferrer">
              <img src="Media/Images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a
              href={appStore}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "20px" }}
            >
              <img src="Media/Images/appstore.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
