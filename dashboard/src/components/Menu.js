import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="menu-container">

      {/* Kite Logo */}
      <div className="logo-container">
        <img
          src="/logo.png"
          alt="Kite Logo"
          className="kite-logo"
        />
      </div>

      {/* Navigation Menu */}
      <div className="menus">
        <ul>

          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? "menu selected" : "menu"}>
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* Profile */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        {/* Profile Dropdown */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <p>My Profile</p>
            <p>Settings</p>
            <p>Console</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;