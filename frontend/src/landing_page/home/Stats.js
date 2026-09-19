import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-5">

        {/* Left side text */}
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <div className="mt-4">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mt-4">
            <h4>No spam or gimmicks</h4>
            <p>
              No gimmicks, spam, "gamification", or annoying push
              notifications. High quality apps that you use at your pace,
              the way you like.
            </p>
          </div>

          <div className="mt-4">
            <h4>The Zerodha universe</h4>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mt-4">
            <h4>Do better with money</h4>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>
        </div>

        {/* Right side image */}
        <div className="col-6 text-center p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Trading ecosystem"
            style={{ width: "90%" }}
          />

          <div className="mt-4">

            {/* Explore products */}
            <a
              href="/product"
              className="me-4 text-decoration-none"
            >
              Explore our products
              <i className="fa fa-long-arrow-right ms-2"></i>
            </a>

            {/* Open Dashboard */}
            <a
              href="http://127.0.0.1:3000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Try Kite demo
              <i className="fa fa-long-arrow-right ms-2"></i>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;