import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mt-4 p-4">
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-3">
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
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={imageUrl} alt={productName} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
