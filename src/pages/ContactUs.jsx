import React from "react";

const ContactUs = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h1 className="page-title">Contact Us</h1>

        <p className="page-text">
          We’re here to help! If you have any questions, feedback, or need
          assistance, feel free to reach out to us using the form below.
        </p>

        {/* Contact Information */}
        <h2 className="section-title">Get in Touch</h2>
        <p className="page-text">
          📧 Email: support@webbook.com  
          <br />
          📞 Phone: +91 98765 43210  
          <br />
          📍 Address: WebBook, India
        </p>

        {/* Contact Form */}
        <h2 className="section-title">Send Us a Message</h2>

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
            rows="5"
            placeholder="Your Message"
            className="page-textarea"
            required
          />

          <button type="submit" className="page-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
