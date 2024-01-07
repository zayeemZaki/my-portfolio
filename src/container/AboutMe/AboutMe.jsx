import React from 'react';
import './AboutMe.css';
import MyPic from '../../constants/MyPic.jpg'; // Adjust as per your directory structure
import resumePDF from '../../constants/Zayeem_zaki_resume.pdf'; // Import the resume PDF

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me" id="about-me">
                <p>
                    A passionate and dedicated Computer Science student set to graduate in December 2025.
                    My academic journey has been marked by a strong GPA of 3.7, and I've earned recognition on the 
                    President’s List and Dean’s List for my academic excellence. I take pride in my robust foundation
                    in key areas like <b>Data Structures</b> and <b>Object-Oriented Programming</b>.
                </p>
                <p>
                    My drive to excel extends beyond the classroom into practical, real-world applications.
                    I've successfully deployed an <b>online ordering restaurant website on AWS Amplify</b>, 
                    a project that not only honed my technical skills in <b>React.js</b> and <b> Node.js</b> but also is 
                    projected to boost sales significantly. Additionally, my <b>iOS app development</b> project for 
                    the University of Toledo, NeuroTransmitter, showcases my ability to blend technology with 
                    user-centric design, enhancing research paper management and doctor communication.
                </p>
                <p>
                    My technical proficiency spans a wide range of programming languages and frameworks, including 
                    <b> Java, Python, Swift, C++, JavaScript</b>, and more. I'm also skilled in various tools and platforms like <b>Spring Boot, Firebase, React, Node.js, and AWS</b>.
                </p>
                <p>
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
    );
}

export default AboutMe;











/*
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>Hello, I'm Zayeem Zaki</h1>
            <p>My professional journey is anchored in developing innovative technological solutions. 
                Fueled by a profound passion for pioneering advancements in technology, 
                I excel in diverse programming languages, web and iOS application development, 
                data structures, information technology, and database management. 
                My expertise lies in adapting and excelling in dynamic tech environments.</p>
            <p>I am eager to engage in collaborations that drive substantial value and impact. 
                Together, we can delve into opportunities that lead to meaningful and enduring contributions 
                in the tech landscape.</p>

        </div>
    );
}

export default AboutMe;

*/