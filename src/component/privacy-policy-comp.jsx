import React from "react";
import Link from "next/link";

      

function PrivacyPolicyComp() {
  return (
   <div>




<section className="inner-banner">
    <div className="main-banner-bg-shape">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
    </div>
    <div className="inner-banner-bg-aliment-wp">
        <div className="bg-aliment-1 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt="Aliment"/>
        </div>
        <div className="bg-aliment-2 animate-this">
            <img src="assets/images/aliment-02.svg" width="26" height="22" alt="Aliment"/>
        </div>
        <div className="bg-aliment-3 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="44" height="44" alt="Aliment"/>
        </div>
        <div className="bg-aliment-4 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt="Aliment"/>
        </div>
        <div className="bg-aliment-5 animate-this">
            <img src="assets/images/aliment-04.svg" width="26" height="22" alt="Aliment"/>
        </div>
        <div className="bg-aliment-6 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="44" height="44" alt="Aliment"/>
        </div>
        <div className="bg-aliment-7 rotate-animation">
            <img src="assets/images/aliment-05.svg" width="30" height="30" alt="Aliment"/>
        </div>
        <div className="bg-aliment-8 animate-this">
            <img src="assets/images/aliment-06.svg" width="19" height="16" alt="Aliment"/>
        </div>
        <div className="bg-aliment-9 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="29" height="29" alt="Aliment"/>
        </div>
        <div className="bg-aliment-10 rotate-animation">
            <img src="assets/images/aliment-09.svg" width="30" height="30" alt="Aliment"/>
        </div>
        <div className="bg-aliment-11 animate-this">
            <img src="assets/images/aliment-08.svg" width="34" height="34" alt="Aliment"/>
        </div>
        <div className="bg-aliment-12 animate-this">
            <img src="assets/images/aliment-10.svg" width="26" height="22" alt="Aliment"/>
        </div>
        <div className="bg-aliment-13 rotate-animation">
            <img src="assets/images/aliment-11.svg" width="30" height="30" alt="Aliment"/>
        </div>
        <div className="bg-aliment-14 animate-this">
            <img src="assets/images/aliment-07.svg" width="38" height="32" alt="Aliment"/>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-content text-center">
                    <h1 className="h1-title">Privacy Policy</h1>
                    <div className="banner-breadcrum">
                        <ul>
                            <li><Link href="/" title="Home">Home</Link></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



 <section
      className="privacy-policy-section"
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
       

        <div className="policy-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>Refund Policy</h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            If you’re not fully satisfied with your purchase, you may request a
            refund. We will refund the remaining balance, excluding charges for
            any work already completed. Refunds are not available after
            revisions have been made; however, if you present a valid concern, a
            full refund may be considered upon review.
          </p>
        </div>

        <div className="policy-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>Revision Policy</h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            We provide unlimited free revisions, subject to certain conditions.
            Additional charges may apply if the revised content exceeds the
            original page limit. To be eligible for a free revision, requests
            must be submitted within the specified timeframe. Once this period
            expires, the work is considered approved. For any plagiarism-related
            revision, a detailed report must be provided. Standard revision
            turnaround time is 24 hours.
          </p>
        </div>

        <div className="policy-box" style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#0b2c61" }}>Partial Payment Plan</h3>
          <p style={{ lineHeight: "1.8", color: "#000000" }}>
            If you opt for a partial payment plan, 50% of the work will be
            delivered initially. The remaining balance must be paid to receive
            the final, complete version.
          </p>
        </div>

        <div className="policy-box">
          <h3 style={{ color: "#0b2c61" }}>Revision Turnaround Times</h3>
          <ul style={{ lineHeight: "1.8", paddingLeft: "20px", color: "#000000" }}>
            <li>Orders with 24-hour urgency: Revisions completed within 24 hours</li>
            <li>Orders with 24–48-hour urgency: Revisions completed within 48 hours</li>
            <li>Orders with 48 hours or more urgency: Revisions completed within 72 hours</li>
          </ul>
        </div>
      </div>
    </section>











  
</div>



   
  );
}

export default PrivacyPolicyComp;
