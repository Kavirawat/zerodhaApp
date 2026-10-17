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
      <div className="row my-3 my-md-5 p-2 p-md-5 align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageUrl} alt={productName} className="img-fluid" style={{ maxHeight: "360px", objectFit: "contain" }} />
        </div>
        <div className="col-12 col-md-6 p-2 p-md-4">
          <h2 className="fs-3 text-muted mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>
          <div className="d-flex flex-wrap gap-3 gap-md-4 mb-4">
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
              style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}
            >
              Learn More &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="d-flex flex-wrap gap-3 align-items-center">
            <a href={googlePlay} target="_blank" rel="noreferrer">
              <img src="Media/Images/googlePlayBadge.svg" alt="Google Play" className="img-fluid" style={{ maxHeight: "40px" }} />
            </a>
            <a href={appStore} target="_blank" rel="noreferrer">
              <img src="Media/Images/appstore.svg" alt="App Store" className="img-fluid" style={{ maxHeight: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
