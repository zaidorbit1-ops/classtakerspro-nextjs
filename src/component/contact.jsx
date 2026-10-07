"use client";

import React, { useState } from "react";
import { submitLead } from "../lib/leadApi";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactComp() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [leadName, setLeadName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in name, email and phone.");
      return;
    }

    setLeadName(formData.name.trim());
    setStatus("sending");
    setError("");

    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || "",
        form_name: "contact-form",
        source_url: window.location.href,
      });

      setFormData(initialForm);
      setStatus("success");
    } catch (submitError) {
      setStatus("idle");
      setError(submitError.message || "Submission failed. Please try again.");
    }
  };

  return (
    <div>
      <section className="inner-banner">
        <div className="main-banner-bg-shape">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
        </div>

        <div className="inner-banner-bg-aliment-wp">
          {[
            "aliment-01.svg",
            "aliment-02.svg",
            "aliment-01.svg",
            "aliment-04.svg",
            "aliment-03.svg",
            "aliment-05.svg",
            "aliment-06.svg",
            "aliment-03.svg",
            "aliment-09.svg",
            "aliment-08.svg",
            "aliment-10.svg",
            "aliment-11.svg",
            "aliment-07.svg",
          ].map((file, i) => (
            <div key={i} className={`bg-aliment-${i + 1}`}>
              <img src={`assets/images/${file}`} alt="" />
            </div>
          ))}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-center">
                <h1 className="h1-title">Contact Us</h1>
                <div className="banner-breadcrum">
                  <ul>
                    <li>
                      <a href="/" title="Home">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us-sec sec-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="contact-us-box wow fadeup-animation text-center"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <div className="sec-title">
                  <span className="sub-title">Contact Us</span>
                  <h2 className="h2-title">Need More Help?</h2>
                </div>

                <div className="contact-form-shell">
                  <p className="mb-3" style={{ fontWeight: 600, color: '#0a2b6a' }}>
                    Usually reply within 1 hour • Chat support available 24/7
                  </p>
                  {status === "success" ? (
                    <div className="success-panel contact-success-panel">
                      <div className="success-icon">✓</div>
                      <h3>Thanks, {leadName}!</h3>
                      <p>Your enquiry has been received. We’ll contact you shortly.</p>
                    </div>
                  ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12 mb-3">
                          <input
                            type="text"
                            name="name"
                            className="form-input form-field"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-input form-field"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-3">
                          <input
                            type="tel"
                            name="phone"
                            className="form-input form-field"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-3">
                          <textarea
                            name="message"
                            className="form-input form-field form-textarea"
                            placeholder="Message (optional)"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="col-lg-12">
                          {error && <p className="form-error" style={{ color: '#d32f2f', marginBottom: '12px' }}>{error}</p>}
                          <button type="submit" className={`sec-btn submit-button ${status === 'sending' ? 'is-loading' : ''}`}>
                            <span>
                              {status === 'sending' ? (
                                <span className="button-inner">
                                  <span className="spinner" aria-hidden="true"></span>
                                  Sending...
                                </span>
                              ) : (
                                'Submit Now'
                              )}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactComp;
