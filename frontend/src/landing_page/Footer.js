import React from "react";

function Footer() {
    return (
        <footer className="container mt-5">

            {/* ===============================
                MAIN FOOTER
            =============================== */}

            <div className="row">

                {/* Company */}
                <div className="col-md-4">

                    <img
                        src="media/images/logo.svg"
                        style={{ width: "130px" }}
                        alt="logo"
                    />

                    <p className="mt-3 text-muted">
                        TradeX Technologies Pvt. Ltd.
                    </p>

                    <p className="text-muted">
                        A modern trading platform interface created for
                        educational purposes.
                    </p>

                    <div>
                        <i className="fa-brands fa-twitter me-3"></i>
                        <i className="fa-brands fa-facebook me-3"></i>
                        <i className="fa-brands fa-instagram me-3"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>

                </div>


                {/* Company Links */}
                <div className="col-md-2">

                    <h5>Company</h5>

                    <p>About</p>
                    <p>Products</p>
                    <p>Pricing</p>
                    <p>Careers</p>
                    <p>Contact</p>

                </div>


                {/* Products */}
                <div className="col-md-2">

                    <h5>Products</h5>

                    <p>Stocks</p>
                    <p>Mutual Funds</p>
                    <p>ETFs</p>
                    <p>Bonds</p>
                    <p>IPO</p>

                </div>


                {/* Support */}
                <div className="col-md-2">

                    <h5>Support</h5>

                    <p>Help Centre</p>
                    <p>Trading Support</p>
                    <p>FAQs</p>
                    <p>Report Issue</p>

                </div>


                {/* Account */}
                <div className="col-md-2">

                    <h5>Account</h5>

                    <p>Open Account</p>
                    <p>Login</p>
                    <p>Dashboard</p>
                    <p>Profile</p>

                </div>

            </div>


            {/* ===============================
                LEGAL & DISCLAIMER SECTION
            =============================== */}

            <div className="row mt-5">

                <div className="col-12">

                    <p className="text-muted small">
                        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a
    href="mailto:complaints@zerodha.com"
    style={{ color: "#387ed1", textDecoration: "none" }}
>
    complaints@zerodha.com
</a>, for DP related to <a href="mailto:dp@zerodha.com" style={{ color:"#387ed1", textDecoration: "none"  }}>
    dp@zerodha.com
</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF


                    </p>


                    <p className="text-muted small">
                        Procedure to file a complaint on <a
    href="https://scores.sebi.gov.in/"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#387ed1", textDecoration: "none" }}
>
    SEBI SCORES
</a>/<a
    href="https://smartodr.in/login"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#387ed1", textDecoration: "none" }}
>
    SMARTODR
</a> Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances


                    </p>


                    <p className="text-muted small">
                        <a
    href="https://smartodr.in/"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#387ed1", textDecoration: "none" }}
>
    Smart Online Dispute Resolution
</a> | <a
    href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#387ed1", textDecoration: "none" }}
>
    Grievances Redressal Mechanism
</a>
                    </p>

                    <p className="text-muted small">Investments in securities market are subject to market risks; read all the related documents carefully before investing.

</p>


                    <p className="text-muted small">
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.


                    </p>


                    <p className="text-muted small">
                        India's largest broker based on networth as per NSE. NSE broker factsheet


                    </p>


                    <p className="text-muted small">
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a
    href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#387ed1", textDecoration: "none" }}
>
    create a ticket here
</a>
                    </p>


                    <p className="text-muted small">
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.


                    </p>


                    <p className="text-muted small">
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).


                    </p>


                    <hr />

                    {/* Footer Links */}

                    <p className="text-muted small text-center">

                        Market Information&nbsp; | &nbsp;
                        Terms & Conditions&nbsp; | &nbsp;
                        Privacy Policy&nbsp; | &nbsp;
                        Disclosure&nbsp; | &nbsp;
                        Investor Awareness&nbsp; | &nbsp;
                        Sitemap

                    </p>


                    {/* Copyright */}

                    <p className="text-muted small text-center">

                        © 2026 TradeX Technologies Pvt. Ltd.
                        All rights reserved.

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;