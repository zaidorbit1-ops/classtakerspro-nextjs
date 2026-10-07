"use client";

import React, { useState, useEffect } from 'react';
import { submitLead } from '../lib/leadApi';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [leadName, setLeadName] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 350);
  };

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
      setError('Please fill in name, email and phone.');
      return;
    }

    const trimmedName = formData.name.trim();
    setLeadName(trimmedName);
    setStatus('sending');
    setError('');

    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || '',
        form_name: 'popup-form',
        source_url: window.location.href,
      });

      setFormData(initialForm);
      setStatus('success');
    } catch (submitError) {
      setStatus('idle');
      setError(submitError.message || 'Submission failed. Please try again.');
    }
  };

  return (
    <div className={`popup-overlay ${isActive ? 'active' : ''}`}>
      <div className="popup-content">
        <button className="close-button" onClick={handleClose} aria-label="Close popup">
          &times;
        </button>

        {status === 'success' ? (
          <div className="success-panel">
            <div className="success-icon">✓</div>
            <h3>Thanks, {leadName}!</h3>
            <p>Your enquiry has been received. We’ll contact you shortly.</p>
            <button type="button" className="success-close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="Popup-title">Get In Touch With Us!</h2>
            <p className="popup-subtitle">
              Tell us what you need and our experts will contact you soon.
            </p>

            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="popup-field"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="popup-field"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                className="popup-field"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="popup-field popup-textarea"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <p className="popup-consent">
                By sharing your number, you agree to receive updates and information from Class Takers Pro.
                Message frequency may vary. Standard message and data rates apply. Reply STOP to unsubscribe.
              </p>

              {error && <p className="form-error" style={{ color: '#d32f2f', marginBottom: '12px' }}>{error}</p>}

              <button type="submit" className={`sec-btn popup-submit ${status === 'sending' ? 'is-loading' : ''}`}>
                <span className="button-inner">
                  {status === 'sending' && <i className="spinner" aria-hidden="true"></i>}
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
