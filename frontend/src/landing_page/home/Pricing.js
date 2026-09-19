import React from 'react';

function Pricing() {
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <div className="row align-items-center">

                {/* Left section */}
                <div className="col-6">
                    <h1>Unbeatable Pricing</h1>

                    <p>
                        We introduced discount broking in India with a focus on transparency.
                        <br />
                        Trade at flat fees with no hidden charges and keep more of your money.
                    </p>

                    <a href="#" className="text-decoration-none">
                        See Pricing
                        <i className="fa fa-long-arrow-right ms-2"></i>
                    </a>
                </div>


                {/* Right section */}
                <div className="col-6">
                    <div className="row text-center">

                        <div className="col p-4 border">
                            <h1 className="mb-3">₹0</h1>
                            <p>
                                Free equity delivery and
                                <br />
                                direct mutual funds
                            </p>
                        </div>

                        <div className="col p-4 border">
                            <h1 className="mb-3">₹20</h1>
                            <p>
                                Intraday and
                                <br />
                                F&O
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;