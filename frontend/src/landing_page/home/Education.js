import React from "react";

function Education() {
    return (
       <div className="container" style={{ marginTop: "100px" }}>

            <div className="row align-items-center">

                {/* Left Image */}
                <div className="col-6 text-center">
                    <img 
                        src="media/images/education.svg"
                        alt="education"
                        className="education-img"
                    />
                </div>


                {/* Right Content */}
                <div className="col-6">

                    <h1>
                        Free and open market education
                    </h1>

                    <p>
                        Varsity, the largest online stock market education
                        book in the world covering everything from the basics
                        to advanced trading.
                    </p>


                    <p>
                        TradingQ&A, the most active trading and investment
                        community in India for all your market related queries.
                    </p>


                    <a href="#" className="text-decoration-none">
                        TradingQ&A
                        <i className="fa fa-long-arrow-right ms-2"></i>
                    </a>

                </div>

            </div>

        </div>
    );
}

export default Education;