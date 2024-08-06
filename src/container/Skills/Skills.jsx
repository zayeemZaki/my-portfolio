import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div >
            <div className="heading-container" >
                <div className="line"></div>
                    <h2 className="skills-heading">Skills</h2>
                <div className="line"></div>
            </div>
            <div className="skills-container" id="skills" data-aos="fade-up">
                <div className="skill-section">
                    <h2>Programming Languages</h2>
                    <div className="skills-grid">
                        <div className="skill-item"><span className="icon">☕</span> Java </div>
                        <div className="skill-item"><span className="icon">🐍</span> Python </div>
                        <div className="skill-item"><span className="icon">🦅</span> Swift </div>
                        <div className="skill-item"><span className="icon">💻</span> C++ </div>
                        <div className="skill-item"><span className="icon">🔣</span> C# </div>
                        <div className="skill-item"><span className="icon">🟨</span> JavaScript </div>
                        <div className="skill-item"><span className="icon">🌐</span> HTML </div>
                        <div className="skill-item"><span className="icon">🎨</span> CSS </div>
                    </div>
                </div>

                {/* Database Section */}
                <div className="skill-section-database">
                    <h2>Database</h2>
                    <div className="skills-grid">
                        <div className="skill-item"><span className="icon">🗃️</span> SQL </div>
                        <div className="skill-item"><span className="icon">🔄</span> NoSQL </div>
                        <div className="skill-item"><span className="icon">🐬</span> MySQL </div>
                        <div className="skill-item"><span className="icon">🔥</span> Firestore </div>
                    </div>
                </div>

                {/* Framework And Tools Section */}
                <div className="skill-section">
                    <h2>Framework And Tools</h2>
                        <div className="skills-grid">
                        <div className="skill-item"><span className="icon">⚛️</span> React</div>
                        <div className="skill-item"><span className="icon">🟩</span> Node.js </div>
                        <div className="skill-item"><span className="icon">🌿</span> Flask </div>
                        <div className="skill-item"><span className="icon">🔷</span> .Net </div>
                        <div className="skill-item"><span className="icon">🌱</span> Spring Boot </div>
                        <div className="skill-item"><span className="icon">🔁</span> Rest API </div>
                        <div className="skill-item"><span className="icon">☁️</span> AWS </div>
                        <div className="skill-item"><span className="icon">🛡️</span> CrowdStrike </div>
                        <div className="skill-item"><span className="icon">🔥</span> Firebase </div>
                        <div className="skill-item"><span className="icon">💳</span> Stripe </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;




