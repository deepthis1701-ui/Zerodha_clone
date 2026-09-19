import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* Market Indices */}
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">100.2</p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">100.2</p>
        </div>
      </div>

      {/* Navigation */}
      <Menu />
    </div>
  );
};

export default TopBar;