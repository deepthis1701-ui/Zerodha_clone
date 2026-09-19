import React from "react";

function Hero() {
    return (
         <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h3>Pricing</h3>
                <p className="text-muted mt-3 fs-5">Free equity investment anf flat ₹20 traday and F&O traders</p>
            </div>
            <div className="row p-5 mt-5">
                <div className="col-4 p-5 text-center">
                    <img src="media/images/zeroprice.png " style={{ width: "150px", height: "150px", objectFit: "contain" }}  />
                    <h1 fs-4>Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.

</p>
                </div>
                <div className="col-4 p-5 text-center">
                    <img src="media/images/twentyprice.png" style={{ width: "200px", height: "150px", objectFit: "contain" }}/>
                    <h1 fs-4>Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5 text-center">
                    <img src="media/images/zeroprice.png " style={{ width: "150px", height: "150px", objectFit: "contain" }}/>
                    <h1 fs-4>Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;