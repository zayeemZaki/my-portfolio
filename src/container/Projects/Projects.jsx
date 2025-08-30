import React, { useState } from 'react';
import './Projects.css';
import NeuroTransmitter1 from '../../constants/NeuroTransmitter1.png';
import NeuroTransmitter2 from '../../constants/NeuroTransmitter2.png';
import NeuroTransmitter3 from '../../constants/NeuroTransmitter3.png';
import ueats1 from '../../constants/u-eats1.png';
import ueats2 from '../../constants/u-eats2.png';
import ueats3 from '../../constants/u-eats3.png';
import AlgoAce1 from '../../constants/algo-ace2.png';
import AlgoAce2 from '../../constants/algo-ace2.png';
import AlgoAce3 from '../../constants/algo-ace3.png';

const Projects = () => {
    const [dragStartX, setDragStartX] = useState(0);
    const [dragStartY, setDragStartY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedProject, setDraggedProject] = useState(null);

    const handleDragStart = (e, projectIndex) => {
        setIsMouseDown(true);
        setDraggedProject(projectIndex);
        setIsDragging(false);
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        setDragStartX(clientX);
        setDragStartY(clientY);
        e.target.classList.add('grabbing');
        e.preventDefault();
    };
    
    const handleDragMove = (e, projectIndex) => {
        if (!isMouseDown || draggedProject !== projectIndex) return;
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        const deltaX = dragStartX - clientX;
        const deltaY = Math.abs(dragStartY - clientY);
        
        // Only consider horizontal swipes (ignore vertical scrolling)
        if (deltaY > 30) return;
        
        if (Math.abs(deltaX) > 15 && !isDragging) {
            setIsDragging(true);
        }
        
        if (isDragging && Math.abs(deltaX) > 80) {
            if (deltaX > 0) {
                selectNextImage(projectIndex);
            } else {
                selectPrevImage(projectIndex);
            }
            setIsMouseDown(false);
            setIsDragging(false);
            setDraggedProject(null);
            e.target.classList.remove('grabbing');
            e.target.classList.add('transitioning');
            setTimeout(() => {
                e.target.classList.remove('transitioning');
            }, 300);
        }
    };
    
    const handleMouseUp = (e) => {
        setIsMouseDown(false);
        setIsDragging(false);
        setDraggedProject(null);
        e.target.classList.remove('grabbing');
    };

    const handleMouseLeave = (e) => {
        if (isMouseDown) {
            handleMouseUp(e);
        }
    };

    const selectNextImage = (projectIndex) => {
        setCurrentImage(prevState => ({
            ...prevState,
            [projectIndex]: (prevState[projectIndex] + 1) % projects[projectIndex].images.length
        }));
    };

    const selectPrevImage = (projectIndex) => {
        setCurrentImage(prevState => ({
            ...prevState,
            [projectIndex]: (prevState[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
        }));
    };

    const projects = [
        {
            title: "U-Eats",
            subtitle: "Full-Stack Restaurant Platform",
            description: "Deployed an online-ordering restaurant website on AWS amplify in collaboration with my roommate Dec 2023. The website is expected to increase monthly sales by 5%. Integrated React.js and Node.js technologies to enhance the website's performance, as evidenced by improved loading times and interactivity. Implemented Stripe payment for secure and efficient online transactions.",
            technologies: ["React", "Node.js", "Stripe", "AWS Amplify", "REST API"],
            images: [ueats1, ueats2, ueats3],
            url: "http://u-eats.com",
            category: "Web Development",
            status: "Live",
            year: "2023"
        },
        {
            title: "NeuroTransmitter",
            subtitle: "iOS Research Application",
            description: "Developed an iOS app for the University of Toledo Neurology department, integrating SwiftUI and UIKit to revolutionize research paper management and enhance communication among doctors. The app, currently available on the App Store, features advanced security measures such as Firebase Authentication and Face ID for robust data protection. Key functionalities include real-time chat threads, document annotation with text highlighting, commenting, and writing directly on documents, as well as Text-to-Speech capabilities, fostering seamless collaboration and productivity among users.",
            technologies: ["Swift", "Firebase", "Firestore", "SwiftUI", "UIKit"],
            images: [NeuroTransmitter1, NeuroTransmitter2, NeuroTransmitter3],
            url: "https://apps.apple.com/us/app/neuro-transmitter/id6463495879",
            category: "Mobile Development",
            status: "Published",
            year: "2024"
        },
        {
            title: "AlgoAce",
            subtitle: "Educational YouTube Channel",
            description: "AlgoAce is a YouTube channel I created to share my expertise in data structures, algorithms, and LeetCode problem-solving. Through this project, I develop and deliver clear, concise, and engaging tutorials aimed at helping students and professionals improve their coding skills and excel in technical interviews. This project showcases my ability to break down complex topics, create educational content, and engage with an audience in the tech community.",
            technologies: ["Python", "Data Structures", "Algorithms", "LeetCode", "Education"],
            images: [AlgoAce1, AlgoAce2, AlgoAce3],
            url: "https://www.youtube.com/@AlgoAcez",
            category: "Content Creation",
            status: "Active",
            year: "2024"
        }
    ];

    const [currentImage, setCurrentImage] = useState(() => {
        const initialState = {};
        projects.forEach((_, index) => {
            initialState[index] = 0;
        });
        return initialState;
    });

    const selectImage = (projectIndex, imageIndex) => {
        setCurrentImage(prevState => ({
            ...prevState,
            [projectIndex]: imageIndex
        }));
    };

    const handleKeyPress = (e, projectIndex) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            selectPrevImage(projectIndex);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            selectNextImage(projectIndex);
        }
    };

    return (
        <div className="projects-section" id="projects">
            <div className="heading-container">
                <div className="line"></div>
                <h2 className="projects-heading">Featured Projects</h2>
                <div className="line"></div>
            </div>
            
            <div className="projects-container" data-aos="fade-up">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                        >
                            <div className="project-header">
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                    <span className={`project-status ${project.status.toLowerCase()}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="project-year">{project.year}</div>
                            </div>

                            <div 
                                className="project-image-container"
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyPress(e, index)}
                                role="img"
                                aria-label={`${project.title} gallery, image ${(currentImage[index] || 0) + 1} of ${project.images.length}`}
                            >
                                <img 
                                    src={project.images[currentImage[index] || 0]} 
                                    alt={project.title}
                                    draggable="false"
                                    className={`project-image ${isMouseDown && draggedProject === index ? 'grabbing' : ''}`}
                                    onMouseDown={(e) => handleDragStart(e, index)}
                                    onMouseMove={(e) => handleDragMove(e, index)}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseLeave}
                                    onTouchStart={(e) => handleDragStart(e, index)}
                                    onTouchMove={(e) => handleDragMove(e, index)}
                                    onTouchEnd={handleMouseUp}
                                    onTouchCancel={handleMouseUp}
                                />
                                <div className="image-overlay">
                                    <a 
                                        href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="view-project-btn"
                                    >
                                        <span>View Project</span>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>
                                <div className="image-navigation">
                                    {project.images.map((_, imgIndex) => (
                                        <span
                                            key={imgIndex}
                                            className={`nav-dot ${imgIndex === (currentImage[index] || 0) ? 'active' : ''}`}
                                            onClick={() => selectImage(index, imgIndex)}
                                            role="button"
                                            tabIndex={0}
                                            aria-label={`View image ${imgIndex + 1}`}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    selectImage(index, imgIndex);
                                                }
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-title-section">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                </div>
                                
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <a 
                                        href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <span>Explore Project</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
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
};

export default Projects;
