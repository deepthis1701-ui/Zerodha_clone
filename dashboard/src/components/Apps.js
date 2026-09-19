import React from "react";

const Apps = () => {
  return (
    <div className="apps-page">
      <h2>Trading Tools</h2>
      <p className="apps-subtitle">
        Explore useful tools available in this learning dashboard.
      </p>

      <div className="apps-grid">

        <div className="app-card">
          <div className="app-icon">📊</div>
          <h3>Market Analytics</h3>
          <p>
            View market trends and analyze stock performance.
          </p>
          <button>Explore</button>
        </div>

        <div className="app-card">
          <div className="app-icon">📈</div>
          <h3>Stock Screener</h3>
          <p>
            Filter and discover stocks based on selected criteria.
          </p>
          <button>Open Screener</button>
        </div>

        <div className="app-card">
          <div className="app-icon">📰</div>
          <h3>Market News</h3>
          <p>
            Stay updated with the latest market-related information.
          </p>
          <button>View News</button>
        </div>

        <div className="app-card">
          <div className="app-icon">🧮</div>
          <h3>Profit Calculator</h3>
          <p>
            Calculate estimated profit and loss for a trade.
          </p>
          <button>Calculate</button>
        </div>

      </div>
    </div>
  );
};

export default Apps;