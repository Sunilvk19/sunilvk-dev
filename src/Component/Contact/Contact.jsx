import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <ul className="contact-details">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>sunil.2701k@gmail.com</p>
                </div>
              </li>
            </ul>
            <div className="social-links">
              <a href="https://github.com/Sunilvk19" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sunil-kumar-683b5130b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/sunilKyadappa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/photogenicworld_1/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
