import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        
        <div className="skills-container" id="skills">
            {/* Programming Languages Section */}
            {/* <h1>Skills</h1> */}
            <div className="skill-section">
                <h2>Programming Languages</h2>
                <div className="skills-grid">
                    <div className="skill-item"><span className="icon">🌐</span> Java </div>
                    <div className="skill-item"><span className="icon">🐍</span> Python </div>
                    <div className="skill-item"><span className="icon">🍏</span> Swift </div>
                    <div className="skill-item"><span className="icon">🌐</span> C++ </div>
                    <div className="skill-item"><span className="icon">🐍</span> C# </div>
                    <div className="skill-item"><span className="icon">🍏</span> JavaScript </div>
                    <div className="skill-item"><span className="icon">🌐</span> HTML </div>
                    <div className="skill-item"><span className="icon">🐍</span> CSS </div>
                </div>
            </div>

            {/* Database Section */}
            <div className="skill-section-database">
                <h2>Database</h2>
                <div className="skills-grid">
                    <div className="skill-item"><span className="icon">🌐</span> SQL </div>
                    <div className="skill-item"><span className="icon">🐍</span> NoSQL </div>
                    <div className="skill-item"><span className="icon">🍏</span> MySQL </div>
                    <div className="skill-item"><span className="icon">🐍</span> Firestore </div>
                </div>
            </div>

            {/* Framework And Tools Section */}
            <div className="skill-section">
                <h2>Framework And Tools</h2>
                <div className="skills-grid">
                    <div className="skill-item"><span className="icon">🌐</span> Spring Boot </div>
                    <div className="skill-item"><span className="icon">🐍</span> Rest API </div>
                    <div className="skill-item"><span className="icon">🍏</span> AWS </div>
                    <div className="skill-item"><span className="icon">🐍</span> AWS Amplify </div>
                    <div className="skill-item"><span className="icon">🌐</span> Firebase </div>
                    <div className="skill-item"><span className="icon">🐍</span> React</div>
                    <div className="skill-item"><span className="icon">🍏</span> Node.js </div>
                    <div className="skill-item"><span className="icon">🌐</span> Stripe </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;




/*
import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill-section">
                <h2>Programming Languages</h2>
                <div className="scrollable-content">
                    <ul>
                        <li>Java (Expert)</li>
                        <li>Python (Proficient)</li>
                        <li>Swift (Prior Experience)</li>
                        <li>C++ (Proficient)</li>
                        <li>C# (Basic)</li>
                        <li>HTML (Proficient)</li>
                        <li>CSS (Proficient)</li>
                        <li>JavaScript (Intermediate)</li>
                    </ul>
                </div>
            </div>
            <div className="skill-section">
                <h2>Frameworks And Tools</h2>
                <div className="scrollable-content">
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Stripe</li>
                        <li>PyCharm</li>
                        <li>Linux</li>
                        <li>AWS</li>
                        <li>AWS Amplify</li>
                        <li>Rest API</li>
                    </ul>
                </div>
            </div>
            <div className="skill-section">
                <h2>Database</h2>
                <div className="scrollable-content">
                    <ul>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>MySQL</li>
                        <li>Firestore</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
*/