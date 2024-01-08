import React, { useState, useEffect } from 'react';
import './Navbar.css';
import resumePDF from '../../constants/Zayeem_zaki_resume.pdf'; // Import the resume PDF
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const texts = ["Zayeem Zaki", "Computer Science Student", "A Software Developer", "A Full Stack Developer"];

    // Typing Effect Logic
    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }
    
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }
    
        const typingDelay = 150; // Delay for typing each letter
        const deletingDelay = 50; // Faster delay for deleting each letter
    
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingDelay : typingDelay);
    
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);
        
    // Blinking Cursor Effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);

        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <button 
                    className={`hamburger ${isNavExpanded ? 'open' : ''}`} 
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-links ${isNavExpanded ? 'expanded' : ''}`}>
                    <li><Link to="about-me" spy={true} smooth={true} duration={500}>About me</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="experience" spy={true} smooth={true} duration={500}>Experience</Link></li>
                    <li><Link to="certificates" spy={true} smooth={true} duration={500}>Certificates</Link></li>
                    <li><Link to="contact-me" spy={true} smooth={true} duration={500}>Contact</Link></li>
                    <li><a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">Resume</a></li>
                </ul>
            </nav>
            <div className="full-screen-animation">
                <div className="static-text">
                    <p>Hello,</p> 
                    <p>I'm</p>
                </div>
                <div className="animated-text">
                    <h1>{`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
