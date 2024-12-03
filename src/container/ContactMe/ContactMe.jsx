import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div>
      <div className="heading-container">
        <div className="line"></div>
        <h2 className="contact-me-heading">Contact Me</h2>
        <div className="line"></div>
      </div>
      <section className="contact-container">
        <div className="top-section" id="contact-me" data-aos="fade-up">
          <h1>Get in Touch!</h1>
          <p>I would be delighted to hear from you if you're interested in discussing new opportunities.</p>
          <a
            href="mailto:zayeemzaki45@gmail.com?subject=Hello%20Zayeem!&body=Hi%20Zayeem,%20I%20would%20like%20to%20connect%20with%20you."
            className="get-in-touch-button"
          >
            Say Hello
          </a>
        </div>

        <div className="links">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/zayeem-zaki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>LinkedIn
            </a>
            <a
              href="https://github.com/zayeemZaki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>GitHub
            </a>
            <a
              href="https://leetcode.com/u/zayeem_zaki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>LeetCode
            </a>
          </div>
          <div className="email-contact">
            <p>
              <i className="fas fa-envelope"></i> zayeemzaki45@gmail.com | 5678017023
            </p>
          </div>
          <div className="credit-line">
            <p>Developed by Zayeem Zaki using React</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
