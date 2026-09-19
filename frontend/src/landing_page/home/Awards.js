import React from "react";

function Awards() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-6 p-5 mt-10">
          <img
            src="/media/images/award.png"
            alt="Award"
            className="img-fluid"
            style={{
              width: "400px",
              height: "auto"
            }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-6 p-5" mt-5>
          <h2>Largest Stock Broker in India</h2>

          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India every day by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds & Government Securities</li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' style={{width:"450px" , height:"200"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;