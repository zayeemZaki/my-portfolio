import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zayeem-zaki/',
      icon: 'fab fa-linkedin',
      color: '#0077b5',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/zayeemZaki',
      icon: 'fab fa-github',
      color: '#333',
      description: 'View my repositories'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/zayeem_zaki/',
      icon: 'fas fa-code',
      color: '#ffa116',
      description: 'Check my solutions'
    }
  ];

  const contactMethods = [
    {
      type: 'email',
      value: 'zayeemzaki45@gmail.com',
      icon: 'fas fa-envelope',
      action: () => copyToClipboard('zayeemzaki45@gmail.com')
    },
    {
      type: 'phone',
      value: '(567) 801-7023',
      icon: 'fas fa-phone',
      action: () => window.open('tel:5678017023')
    },
    {
      type: 'location',
      value: 'United States',
      icon: 'fas fa-map-marker-alt',
      action: null
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <div className="contact-me-section" id="contact-me">
      <div className="heading-container">
        <div className="line"></div>
        <h2 className="contact-me-heading">Let's Connect</h2>
        <div className="line"></div>
      </div>
      
      <div className="contact-container" data-aos="fade-up">
        {/* Hero Contact Section */}
        <div className="contact-hero" data-aos="zoom-in">
          <div className="hero-content">
            <div className="contact-emoji">👋</div>
            <h1>Ready to Create Something Amazing?</h1>
            <p>
              I'm always excited to discuss new opportunities and innovative projects. 
              Currently seeking full-time software engineering roles anywhere in the USA 
              as I'm graduating soon!
            </p>
            
            <div className="primary-contact-actions">
              <a
                href="mailto:zayeemzaki45@gmail.com?subject=Hello%20Zayeem!&body=Hi%20Zayeem,%20I%20would%20like%20to%20connect%20with%20you."
                className="primary-contact-btn"
                data-aos="pulse"
                data-aos-delay="300"
              >
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </a>
              
              <button 
                className="secondary-contact-btn"
                onClick={() => copyToClipboard('zayeemzaki45@gmail.com')}
                data-aos="pulse"
                data-aos-delay="400"
              >
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                <i className={`fas ${copiedEmail ? 'fa-check' : 'fa-copy'}`}></i>
              </button>
            </div>
          </div>

          <div className="contact-visual">
            <div className="floating-elements">
              <div className="element-1">💻</div>
              <div className="element-2">🚀</div>
              <div className="element-3">⚡</div>
              <div className="element-4">🎯</div>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-methods" data-aos="fade-up" data-aos-delay="200">
          <h3>
            <i className="fas fa-paper-plane contact-section-icon"></i>
            Get In Touch
          </h3>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`contact-method ${method.action ? 'clickable' : ''}`}
                onClick={method.action}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="method-icon">
                  <i className={method.icon}></i>
                </div>
                <div className="method-content">
                  <span className="method-type">{method.type}</span>
                  <span className="method-value">{method.value}</span>
                </div>
                {method.action && (
                  <div className="method-action">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section" data-aos="fade-up" data-aos-delay="400">
          <h3>
            <i className="fas fa-users contact-section-icon"></i>
            Follow My Journey
          </h3>
          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                data-aos="flip-left"
                data-aos-delay={index * 150}
              >
                <div className="social-icon" style={{color: link.color}}>
                  <i className={link.icon}></i>
                </div>
                <div className="social-content">
                  <h4>{link.name}</h4>
                  <p>{link.description}</p>
                </div>
                <div className="social-arrow">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats" data-aos="fade-up" data-aos-delay="600">
          <div className="stat-card">
            <div className="stat-icon">�</div>
            <div className="stat-content">
              <span className="stat-number">2025</span>
              <span className="stat-label">Graduating Soon</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <span className="stat-number">USA</span>
              <span className="stat-label">Seeking Full-time</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer" data-aos="fade-up" data-aos-delay="800">
          <div className="footer-content">
            <div className="footer-text">
              <p>Built using React by Zayeem Zaki</p>
              <p>© 2025 Zayeem Zaki. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <i className="fas fa-arrow-up"></i>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification for copied email */}
      {copiedEmail && (
        <div className="copy-notification" data-aos="fade-in">
          <i className="fas fa-check-circle"></i>
          Email copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ContactMe;
