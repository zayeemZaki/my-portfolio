import React from 'react';
import './AboutMe.css';
import MyPic from '../../constants/MyPic.jpg';

const AboutMe = () => {
    const aboutStats = [
        { label: 'Graduation', value: 'Dec 2025', icon: '📅' }
    ];

    return (
        <div className="about-me-section" id="about-me">
            <div className="heading-container">
                <div className="line"></div>
                <h2 className="about-me-heading">About Me</h2>
                <div className="line"></div>
            </div>
            
            <div className="about-me-container" data-aos="fade-up">
                {/* Stats Cards */}
                <div className="about-stats-grid">
                    {aboutStats.map((stat, index) => (
                        <div key={index} className="about-stat-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
                
                {/* Main Content */}
                <div className="about-content-wrapper">
                    <div className="about-me-content">
                        <div className="about-text" data-aos="fade-right">
                            <p>
                                Computer Science student at University of Toledo, graduating December 2025. 
                                <b> 3.7 GPA</b> with <b>President's and Dean's List</b> recognition. 
                                Passionate about <b>Software Development</b> and <b>Problem Solving</b>.
                            </p>
                            <p>
                                Currently a <b>Software Engineer Intern at CCC Intelligent Solutions</b>, where I am working on <b>Spring Boot</b>, <b>Vue.js</b>, and <b>Docker</b>. 
                                Previously interned at <b>First Solar</b> as IT Security Intern, where I automated workflows 
                                using <b>Python</b> and <b>CrowdStrike APIs</b>, and built a <b>Flask website</b> with 
                                <b>Bootstrap</b> frontend.
                            </p>
                            <p>
                                Built <b>U-Eats</b> restaurant platform on <b>AWS Amplify</b> using <b>React.js</b> and <b>Node.js</b>. 
                                Created <b>NeuroTransmitter iOS app</b> for University of Toledo's Neurology department, 
                                featuring real-time collaboration and document management.
                            </p>
                            <p>
                                Skilled in <b>Python, Java, Swift, JavaScript, React, AWS, Firebase</b> and more. 
                                Always excited to learn new technologies and solve challenging problems.
                            </p>
                        </div>
                        <div className="about-image" data-aos="fade-left">
                            <img src={MyPic} alt="Zayeem Zaki" className="resume-image" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Smooth transition element */}
            <div className="section-transition">
                <div className="wave-container">
                    <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="m0,6C0,6,347.333,18,505.333,18C663.333,18,1200,6,1200,6L1200,120L0,120z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
