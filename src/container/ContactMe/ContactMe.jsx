import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, subject, message });
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="contact-container">
      <div className="top-section" id="contact-me" data-aos="fade-up">
        <h1>Get in Touch!</h1>
        <p>I would be delighted to hear from you if you're interested in discussing new opportunities.</p>
        {!showForm && (
          <button 
            className="get-in-touch-button" 
            onClick={() => setShowForm(true)}>Say Hello</button>
        )}
      </div>

      {showForm && (
        <form className="email-form" onSubmit={handleSubmit}>
          <button 
            type="button" 
            className="close-form-button" 
            onClick={() => setShowForm(false)}>Close</button>

          <h2>Send Me An Email</h2>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              id="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </div >
          <button type="submit" className="email-form-button">Send Email</button>
        </form>
      )}


<      div className="links">
        <a href="https://www.linkedin.com/in/zayeem-zaki/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/zayeemZaki" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <p>
          <i className="fas fa-phone"></i> 567-801-7023
          <span className="contact-space"></span>
          <i className="fas fa-envelope"></i> zayeemzaki45@gmail.com
        </p>
      </div>    
      </section>
  );
};

export default ContactMe;

