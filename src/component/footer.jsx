import React from "react";
import Link from "next/link";

function Footer() {
  return (

    <div>
        <section className="apply-now-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="apply-now-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <div className="apply-now-shape animate-this">
                            <img src="assets/images/newsletter-bg-shape.svg" width="838" height="488"
                                alt=""/>
                        </div>
                        <div className="apply-now-content">
                            <div className="apply-now-image-box">
                                <img src="assets/images/apply-now-image.png" width="305" height="287"
                                    alt="Student receiving academic help from Class Takers Pro experts"/>
                            </div>
                            <div className="apply-now-text">
                                <div className="sec-title">
                                    <span className="sub-title">Apply Now</span>
                                    <h3 className="h3-title">Get Your Best Skills Certificate Now !</h3>
                                </div>
<div className="apply-now-btn">
  <Link href="/contact" className="sec-btn" title="Hire PhD Tutor - Get Free Quote">
    <span>Hire PhD Tutor - Get Free Quote</span>
  </Link>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="site-footer">
      <div className="top-footer">
        <div className="footer-bg-aliment-wp">
          <div className="bg-aliment-1 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt="" />
          </div>
          <div className="bg-aliment-2 rotate-animation">
            <img src="assets/images/aliment-05.svg" width="30" height="30" alt="" />
          </div>
          <div className="bg-aliment-3 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt="" />
          </div>
          <div className="bg-aliment-4 animate-this">
            <img src="assets/images/aliment-07.svg" width="38" height="32" alt="" />
          </div>
          <div className="bg-aliment-5 animate-this">
            <img src="assets/images/aliment-06.svg" width="19" height="16" alt="" />
          </div>
          <div className="bg-aliment-6 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="29" height="29" alt="" />
          </div>
          <div className="bg-aliment-7 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="29" height="29" alt="" />
          </div>
          <div className="bg-aliment-8 animate-this">
            <img src="assets/images/aliment-08.svg" width="34" height="34" alt="" />
          </div>
          <div className="bg-aliment-9 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="58" height="58" alt="" />
          </div>
          <div className="bg-aliment-10 rotate-animation">
            <img src="assets/images/aliment-11.svg" width="30" height="30" alt="" />
          </div>
          <div className="bg-aliment-11 animate-this">
            <img src="assets/images/aliment-10.svg" width="26" height="22" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-about">
                <div className="footer-logo">
                  <h4 className="underline-title" style={{ color: "white" }}> About Us</h4>
                 
                </div>
                <div className="footer-logo-about-text">
                  
                  <p>
                    Class Takers Pro is a trusted academic support service helping students succeed in online courses, exams, and assignments. Our expert team ensures quality, confidentiality, and timely delivery.
                  </p>
                </div>
                <div className="social-info">
                  <h4 className="underline-title">Follow Us</h4>
                  <div className="footer-social-icons">
                    <a href="https://www.facebook.com/classtakerspro/" title="Follow On Facebook" target="_blank" rel="noreferrer">
                      <img src="assets/images/facebook-icon.svg" width="8" height="15" alt="" />
                    </a>
                    <a href="https://www.instagram.com/classtakerspro.usa/" title="Follow On Instagram" target="_blank" rel="noreferrer">
                      <img src="assets/images/instagram-icon.svg" width="14" height="14" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Links */}
            <div className="col-lg-3 col-md-6">
              <div className="our-link-box">
                <div className="our-link-content">
                  <h4 className="underline-title">Quick Links</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/online-class">Online Class</Link></li>
                    <li><Link href="/online-exams">Online Exams</Link></li>
                    <li><Link href="/online-course">Online Course</Link></li>
                    <li><Link href="/online-assignment">Online Assignment</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Top Categories */}
            <div className="col-lg-3 col-md-6">
              <div className="our-link-box">
                <div className="our-link-content">
                  <h4 className="underline-title">Support Links</h4>
                  <ul>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/terms-and-condition">Terms & Conditions</Link></li>
                   
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-info-box">
                <h4 className="underline-title">Contact Us</h4>
                <ul>
                  <li>
                    <span className="contact-icon">
                      <img src="assets/images/location-icon-2.svg" width="16" height="18" alt="" />
                    </span>
                    <span className="contact-text">
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1001 Brickell Bay, DR#2600, Miami, FL 33131
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <img src="assets/images/phone-icon.svg" width="19" height="19" alt="" />
                    </span>
                    <span className="contact-text">
                    <a
  href="https://wa.me/16087655189"
  target="_blank"
  rel="noopener noreferrer"
>
  +1 608-765-5189
</a>
                      
                    </span>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <img src="assets/images/mail-icon.svg" width="19" height="13" alt="" />
                    </span>
                    <span className="contact-text">
                     
                      <a href="mailto:info@classtakerspro.com">info@classtakerspro.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-bottom-box">
                <div className="copy-right">
                  <p>
                    Copyright © <span id="copy-right-year"></span>{" "}
                    <Link href="/">
                     Class Takers Pro
                    </Link>. <span>All rights reserved.</span>
                  </p>
                </div>
                <div className="footer-bottom-link">
                  <ul>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
