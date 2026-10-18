import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-3 my-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 order-2 order-md-1 p-2 p-md-4">
          <h2 className="fs-3 text-muted mb-3">{productName}</h2>
          <p className="text-muted mb-3">{productDescription}</p>
          <div className="mb-3">
            <a
              href={learnMore}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}
            >
              Learn More &nbsp;
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img src={imageUrl} alt={productName} className="img-fluid" style={{ maxHeight: "360px", objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
