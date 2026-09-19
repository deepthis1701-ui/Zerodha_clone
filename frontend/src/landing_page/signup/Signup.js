import React from "react";
import OpenAccount from "../OpenAccount";

function Signup() {
  return (
    <div className="container-fluid pt-5">

      {/* Top Heading */}
      <div className="text-center mt-1"  >
        <h3>Open a free demat and trading account online</h3>
        <h4 className="text-secondary text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
      </div>

      <div className="mt-5"></div>

      <div className="container mt-5">
        <div className="row align-items-center">

          {/* Left Side Image */}
          <div className="col-md-6 text-center">
            <img
              src="/media/images/signup1.png"
              alt="Zerodha Kite"
              className="img-fluid"
            />
          </div>

          {/* Right Side Signup */}
          <div className="col-md-5">

            <h2 className="text-dark">Signup now</h2>

            <p className="fs-4 text-secondary">
              Or track your existing application
            </p>

            {/* Mobile Number */}
            <div className="input-group input-group-lg mt-4">

              <span className="input-group-text bg-white">
                🇮🇳 &nbsp; +91
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
              />

            </div>

            {/* OTP Button */}
            <button className="btn btn-primary btn-lg w-50 mt-5 py-3">
              Get OTP
            </button>

            {/* Terms */}
            <p className="text-secondary mt-5">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-primary">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-primary">
                privacy policy
              </a>
            </p>

            {/* NRI */}
            <p className="text-secondary">
              Looking to open NRI account?{" "}
              <a href="#" className="text-primary">
                Click here
              </a>
            </p>

          </div>
        </div>
      </div>

      <div className="container text-center mt-5 pt-5">
  <h2 >Already have a demat account?</h2>

  <p className="fs-5 text-muted mt-4 text-secondary" >
    Move your holdings to Zerodha and we'll cover your transfer costs,
    up to ₹500,{" "}
    <a href="#" className="text-primary text-decoration-none">
      learn more.
    </a>
  </p>

  <h2 className="mt-5 pt-5 ">
    Investment options with Zerodha demat account
  </h2>
</div>


<div className="container">
  <div className="row">

    <div className="col-6 d-flex align-items-center mb-5">
      <img src="/media/images/stocks.png" width="140" className="me-3" />

      <div>
        <h3>Stocks</h3>
        <p className="fs-6 text-muted">
          Invest in all exchange-listed securities
        </p>
      </div>
    </div>

    <div className="col-6 d-flex align-items-center mb-4">
      <img src="/media/images/mutual-funds.png" width="140" className="me-3" />

      <div>
        <h3>Mutual funds</h3>
        <p className="fs-6 text-muted">
          Invest in commission-free direct mutual funds
        </p>
      </div>
    </div>

    <div className="col-6 d-flex align-items-center mb-4">
      <img src="/media/images/ipo.png" width="140" className="me-3" />

      <div>
        <h3>IPO</h3>
        <p className="fs-6 text-muted">
          Apply to the latest IPOs instantly via UPI
        </p>
      </div>
    </div>

    <div className="col-6 d-flex align-items-center mb-4">
      <img src="/media/images/futures-options.png" width="140" className="me-3" />

      <div>
        <h3>Futures & options</h3>
        <p className="fs-6 text-muted">
          Hedge and mitigate market risk through simplified F&O trading
        </p>
      </div>
    </div>

  </div>
</div>
<div className="text-center mt-3">
  <button className="btn btn-primary px-4 py-2">
    Explore investments <span>→</span>
  </button>
</div>

<OpenAccount />
    </div>
  );
}


export default Signup;