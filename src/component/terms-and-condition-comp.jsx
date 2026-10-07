import React from "react";
import Link from "next/link";

      

function TermsAndConditionComp() {
  return (
   <div>




<section className="inner-banner">
    <div className="main-banner-bg-shape">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
    </div>
    <div className="inner-banner-bg-aliment-wp">
        <div className="bg-aliment-1 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-2 animate-this">
            <img src="assets/images/aliment-02.svg" width="26" height="22" alt=""/>
        </div>
        <div className="bg-aliment-3 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="44" height="44" alt=""/>
        </div>
        <div className="bg-aliment-4 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-5 animate-this">
            <img src="assets/images/aliment-04.svg" width="26" height="22" alt=""/>
        </div>
        <div className="bg-aliment-6 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="44" height="44" alt=""/>
        </div>
        <div className="bg-aliment-7 rotate-animation">
            <img src="assets/images/aliment-05.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-8 animate-this">
            <img src="assets/images/aliment-06.svg" width="19" height="16" alt=""/>
        </div>
        <div className="bg-aliment-9 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="29" height="29" alt=""/>
        </div>
        <div className="bg-aliment-10 rotate-animation">
            <img src="assets/images/aliment-09.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-11 animate-this">
            <img src="assets/images/aliment-08.svg" width="34" height="34" alt=""/>
        </div>
        <div className="bg-aliment-12 animate-this">
            <img src="assets/images/aliment-10.svg" width="26" height="22" alt=""/>
        </div>
        <div className="bg-aliment-13 rotate-animation">
            <img src="assets/images/aliment-11.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-14 animate-this">
            <img src="assets/images/aliment-07.svg" width="38" height="32" alt=""/>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-content text-center">
                    <h1 className="h1-title">Terms & Condition</h1>
                    <div className="banner-breadcrum">
                        <ul>
                            <li><Link href="/" title="Home">Home</Link></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



 <section
      className="terms-conditions-section"
      style={{
        padding: "60px 0",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}
      >
        

        <div className="terms-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>1. Use of the Website</h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            By accessing and utilising this website, you acknowledge and agree
            to adhere to the terms and conditions set forth below. We advise you
            to review them thoroughly prior to continued use.
          </p>
        </div>

        <div className="terms-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>2. Intellectual Property Rights</h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            All materials presented on this website, including but not limited
            to textual content, imagery, graphical elements, logos, and
            software, are safeguarded by international copyright legislation.
            Any trademarks displayed are the property of their respective owners
            and may not be used without explicit prior permission.
          </p>
        </div>

        <div className="terms-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>3. Policy on Amendments</h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            Clients are entitled to unlimited revisions, provided that such
            requests are submitted within the stipulated revision period.
            Following the expiration of this timeframe, the order will be deemed
            approved and shall be considered final.
          </p>
        </div>

        <div className="terms-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>4. Amendment Completion Timeframes</h3>
          <ul style={{ lineHeight: "1.8", paddingLeft: "20px", color: "#000000" }}>
            <li>For projects with a 24-hour deadline: Revisions will be completed within 24 hours.</li>
            <li>For projects requiring a 24 to 48 hour turnaround: Revisions will be completed within 48 hours.</li>
            <li>For projects with a 48 hour or longer timeline: Revisions will be completed within 72 hours.</li>
          </ul>
        </div>

        <div className="terms-box">
          <h3 style={{ color: "#0b2c61" }}>
            5. Copyright Registration and No Objection Certificate (NOC)
          </h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            It is the responsibility of both national and international clients
            to bear any costs associated with the registration of copyright and
            the procurement of a No Objection Certificate (NOC) for the academic
            services requested.
          </p>
        </div>
      </div>
    </section>










  
</div>



   
  );
}

export default TermsAndConditionComp;
