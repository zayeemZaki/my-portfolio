import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
    const [skillsVisible, setSkillsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSkillsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const skillsElement = document.querySelector('.skills-container');
        if (skillsElement) {
            observer.observe(skillsElement);
        }

        return () => observer.disconnect();
    }, []);

    const programmingSkills = [
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'Swift', level: 85, icon: '🦅' },
        { name: 'JavaScript', level: 88, icon: '🟨' },
        { name: 'HTML', level: 92, icon: '🌐' },
        { name: 'CSS', level: 90, icon: '🎨' }
    ];

    const frameworkSkills = [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Node.js', level: 85, icon: '🟩' },
        { name: 'Flask', level: 80, icon: '🌿' },
        { name: 'Spring Boot', level: 95, icon: '🌱' },
        { name: 'Vue.js', level: 90, icon: '🖖' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Firebase', level: 88, icon: '🔥' },
        { name: 'Docker', level: 70, icon: '🐳' }
    ];

    const databaseSkills = [
        { name: 'SQL', level: 85, icon: '🐬' },
        { name: 'PostgreSQL', level: 90, icon: '🦙' },
        { name: 'Firestore', level: 85, icon: '🔥' }
    ];

    const SkillBar = ({ skill, index }) => (
        <div className="skill-bar-container" data-aos="fade-up" data-aos-delay={index * 50}>
            <div className="skill-info">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
                <div 
                    className="skill-progress"
                    style={{
                        width: skillsVisible ? `${skill.level}%` : '0%',
                        transition: `width 1.5s ease-out ${index * 0.1}s`
                    }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="skills-section" id="skills">
            <div className="heading-container">
                <div className="line"></div>
                <h2 className="skills-heading">Skills & Technologies</h2>
                <div className="line"></div>
            </div>
            <div className="skills-container" data-aos="fade-up">
                <div className="skill-section">
                    <h2>Programming Languages</h2>
                    <div className="skills-bars">
                        {programmingSkills.map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                <div className="skill-section">
                    <h2>Frameworks & Tools</h2>
                    <div className="skills-bars">
                        {frameworkSkills.map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                <div className="skill-section">
                    <h2>Databases</h2>
                    <div className="skills-bars">
                        {databaseSkills.map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Smooth transition to next section */}
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

export default Skills;




