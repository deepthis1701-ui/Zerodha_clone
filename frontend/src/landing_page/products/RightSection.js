import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="mt-3 mb-5">

            {tryDemo && (
              <a
                href={tryDemo}
                style={{ textDecoration: "none" }}
              >
                Try Demo{" "}
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </a>
            )}

            {learnMore && (
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  marginLeft: tryDemo ? "40px" : "0px"
                }}
              >
                Learn More{" "}
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </a>
            )}

          </div>
        </div>

        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "80%",
              height: "auto"
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;