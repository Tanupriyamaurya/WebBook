import React from "react";

const ContactUs = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h1 className="page-title">Contact Us</h1>

        <p className="page-text">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form className="page-form">
          <input
            type="text"
            placeholder="Your Name"
            className="page-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="page-input"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="page-textarea"
            required
          ></textarea>

          <button type="submit" className="page-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
