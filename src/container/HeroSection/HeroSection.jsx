import React, { useState, useEffect, useMemo } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    const texts = useMemo(() => [
        "Software Developer",
        "Full Stack Engineer",
        "Building cool things",
        "Problem Solver",
        "Let's connect!"
    ], []);

    // Typing Effect
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

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts]);

    // Blinking Cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);

        return () => clearTimeout(timeout2);
    }, [blink]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -20; // Small offset to ensure heading is visible
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    const openResume = () => {
        // Try different approaches for opening the resume
        const resumeUrl = `${window.location.origin}/Zayeem_zaki_resume.pdf`;
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <h2 className="name-header">Zayeem Zaki</h2>
                    <h1 className="typing-effect">
                        {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                    </h1>
                    <p className="hero-subtitle">
                        Software Engineer Intern at CCC Intelligent Solutions · Actively <b>seeking full-time roles.</b> 
                    </p>
                    
                    {/* Primary Action Buttons */}
                    <div className="hero-buttons">
                        <button 
                            className="btn-primary" 
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button 
                            className="btn-secondary" 
                            onClick={openResume}
                        >
                            Resume
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <div className="nav-menu">
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('contact-me')}
                            title="Get In Touch"
                        >
                            <span className="nav-icon">👋</span>
                            Get In Touch
                        </button>
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('about-me')}
                            title="About Me"
                        >
                            <span className="nav-icon">👨‍💻</span>
                            About
                        </button>
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('skills')}
                            title="Skills & Technologies"
                        >
                            <span className="nav-icon">🛠️</span>
                            Skills
                        </button>
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('experience')}
                            title="Work Experience"
                        >
                            <span className="nav-icon">💼</span>
                            Experience
                        </button>
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('projects')}
                            title="Projects Portfolio"
                        >
                            <span className="nav-icon">🚀</span>
                            Projects
                        </button>
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('leetcode')}
                            title="LeetCode Journey"
                        >
                            <span className="nav-icon">💻</span>
                            LeetCode
                        </button>
                        <button 
                            className="nav-btn" 
                            onClick={() => scrollToSection('certificates')}
                            title="Certifications"
                        >
                            <span className="nav-icon">🏆</span>
                            Certificates
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-icons">
                        <div className="icon-item">⚛️</div>
                        <div className="icon-item">🐍</div>
                        <div className="icon-item">☕</div>
                        <div className="icon-item">🦅</div>
                        <div className="icon-item">☁️</div>
                        <div className="icon-item">🔥</div>
                    </div>
                </div>
            </div>
            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll down</span>
            </div>

            {/* Smooth transition to next section */}
            <div className="section-transition">
                <div className="wave-container">
                    <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="m0,6C0,6,347.333,18,505.333,18C663.333,18,1200,6,1200,6L1200,120L0,120z" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
