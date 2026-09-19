import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle"></i>{" "}
            Account Opening
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account Opening
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
        </div>

        {/* Your Account */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-user-circle"></i>{" "}
            Your Account
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Forgot Password
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Change Password
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile Settings
          </a>
        </div>

        {/* Trading */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-line-chart"></i>{" "}
            Trading
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Orders
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Positions
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Holdings
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Market Orders
          </a>
        </div>

        {/* Funds */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-money"></i>{" "}
            Funds
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Funds
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw Funds
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Transfer
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Bank Account
          </a>
        </div>

        {/* Console */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-desktop"></i>{" "}
            Console
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Dashboard
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Tax Reports
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trade Book
          </a>
        </div>

        {/* Kite */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-mobile"></i>{" "}
            Kite
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Marketwatch
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Placing Orders
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts
          </a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;