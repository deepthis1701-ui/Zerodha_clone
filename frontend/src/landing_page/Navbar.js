import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="media/images/logo.svg"
                        alt="Zerodha Logo"
                        style={{ width: "130px" }}
                    />
                </Link>


                {/* Mobile button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                Signup
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                Products
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/support">
                                Support
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fa fa-bars"></i>
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;