import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define your serviceID, templateID, and userID
    const serviceID = 'service_sh02tmn';
    const templateID = 'template_9yfpm61';
    const userID = 'bnSRnJ0LF9kbj6pwd';

    const templateParams = {
      to_name: 'Zayeem Zaki',  // 'to_name' should match the placeholder in your EmailJS template
      from_name: email,  // 'from_name' should ideally be an identifier of the person sending the message, like their name or email
      message: message,  // 'message' should match the placeholder in your EmailJS template
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(response => {
        console.log('Email successfully sent!', response);
        alert('Your message has been sent successfully!');
        // Clear the form
        setEmail('');
        setSubject('');
        setMessage('');
      }, err => {
        console.error('Failed to send the email, Error: ', err);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div >
    <div className="heading-container" >
        <div className="line"></div>
            <h2 className="contact-me-heading">Contact Me</h2>
            <div className="line"></div>
        </div>
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


        <div className="links">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/zayeem-zaki/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>LinkedIn
            </a>
            <a href="https://github.com/zayeemZaki" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>GitHub
            </a>
            <a href="https://leetcode.com/u/zayeem_zaki/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>LeetCode
            </a>
                       
          </div>
          <div className="email-contact">
            <p> <i className="fas fa-envelope"></i> zayeemzaki45@gmail.com  |  5678017023 </p>
          </div>
          <div className="credit-line">
            <p>Developed by Zayeem Zaki using React</p>
            {/* <p>
              <a href="https://github.com/Zarak-Shah-ji" target="_blank" rel="noopener noreferrer">
                Inspired by Zarak Shah Ji
              </a>.
            </p> */}
          </div>


        </div>

      </section>
      </div>
  );
};

export default ContactMe;