import React from "react";

function Universe() {
  const imageStyle = {
    width: "150px",
    height: "50px",
    objectFit: "contain"
  };

  const imageContainerStyle = {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-4 p-4">
          <div style={imageContainerStyle}>
            <img
              src="/media/images/smallcaseLogo.png"
              alt="Smallcase"
              style={imageStyle}
            />
          </div>

          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            basket of stocks or ETFs.
          </p>
        </div>

        {/* Zerodha Fund House */}
        <div className="col-4 p-4">
          <div style={imageContainerStyle}>
            <img
              src="/media/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              style={imageStyle}
            />
          </div>

          <p className="text-small text-muted">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>

        {/* Streak */}
        <div className="col-4 p-4">
          <div style={imageContainerStyle}>
            <img
              src="/media/images/streakLogo.png"
              alt="Streak"
              style={imageStyle}
            />
          </div>

          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-4 p-4">
          <div style={imageContainerStyle}>
            <img
              src="/media/images/sensibullLogo.svg"
              alt="Sensibull"
              style={imageStyle}
            />
          </div>

          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/CII,
            and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-4 p-4">
          <div style={imageContainerStyle}>
            <img
              src="/media/images/streakLogo.png"
              alt="Streak"
              style={imageStyle}
            />
          </div>

          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-4 p-4">
          <div style={imageContainerStyle}>
            <img
              src="/media/images/tijori.png"
              alt="Tijori"
              style={imageStyle}
            />
          </div>

          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Universe;