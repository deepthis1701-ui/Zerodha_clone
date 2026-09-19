import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary text-white" id="supportHero">
      <div className="container">
        <div className="row p-5">
          <div className="col-8">
            <h4 className="mb-4">Support Portal</h4>

            <h1 className="fs-2 mb-4">
              How can we help you?
            </h1>

            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search for answers"
              />

              <button className="btn btn-light">
                Search
              </button>
            </div>

            <a
              href=""
              className="text-white me-4"
              style={{ textDecoration: "none" }}
            >
              Track Tickets
            </a>

            <a
              href=""
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Create a Ticket
            </a>
          </div>

          <div className="col-4 text-center">
            <i className="fa fa-headphones fa-5x"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;