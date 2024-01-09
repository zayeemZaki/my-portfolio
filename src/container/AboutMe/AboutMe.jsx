import React from 'react';
import './AboutMe.css';
import MyPic from '../../constants/MyPic.jpg'; // Adjust as per your directory structure
import resumePDF from '../../constants/Zayeem_zaki_resume.pdf'; // Import the resume PDF

const AboutMe = () => {
    return (
        <div >
            <div className="heading-container" >
                <div className="line"></div>
                    <h2 className="about-me-heading">About Me</h2>
                    <div className="line"></div>
                </div>
            <div className="about-me-container" id="about-me" data-aos="fade-up">
                <div className="about-me" >
                    <p data-aos="fade-up">
                        A passionate and dedicated Computer Science student set to graduate in December 2025.
                        My academic journey has been marked by a strong GPA of 3.7, and I've earned recognition on the 
                        President’s List and Dean’s List for my academic excellence. I take pride in my robust foundation
                        in key areas like <b>Data Structures</b> and <b>Object-Oriented Programming</b>.
                    </p>
                    <p data-aos="fade-up">
                        My drive to excel extends beyond the classroom into practical, real-world applications.
                        I've successfully deployed an <b>online ordering restaurant website on AWS Amplify</b>, 
                        a project that not only honed my technical skills in <b>React.js</b> and <b> Node.js</b> but also is 
                        projected to boost sales significantly. Additionally, my <b>iOS app development</b> project for 
                        the University of Toledo, NeuroTransmitter, showcases my ability to blend technology with 
                        user-centric design, enhancing research paper management and doctor communication.
                    </p>
                    <p data-aos="fade-up">
                        My technical proficiency spans a wide range of programming languages and frameworks, including 
                        <b> Java, Python, Swift, C++, JavaScript</b>, and more. I'm also skilled in various tools and platforms like <b>Spring Boot, Firebase, React, Node.js, and AWS</b>.
                    </p>
                    <p data-aos="fade-up">
                        As I aspire to become a <b>software developer</b>, I am eager to apply my skills and experiences
                        in a dynamic and innovative environment. I am passionate about creating solutions that make a 
                        difference and am always on the lookout for challenging opportunities that will allow me to grow
                        and contribute effectively.
                    </p>
                </div>
                <div className="resume-section">
                        <img src={MyPic} alt="Zayeem Zaki's" className="resume-image" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;


