import React, { useState } from 'react';
import './Projects.css';
import NeuroTransmitter1 from '../../constants/NeuroTransmitter1.png';
import NeuroTransmitter2 from '../../constants/NeuroTransmitter2.png';
import NeuroTransmitter3 from '../../constants/NeuroTransmitter3.png';
import ueats1 from '../../constants/u-eats1.png';
import ueats2 from '../../constants/u-eats2.png';
import ueats3 from '../../constants/u-eats3.png';

const Projects = () => {

    const [dragStartX, setDragStartX] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleDragStart = (e) => {
        setIsMouseDown(true);
        setDragStartX(e.clientX || e.touches[0].clientX);
        e.target.classList.add('grabbing'); // Add grabbing class on drag start
    };
    
    const handleDragMove = (e, projectIndex) => {
        if (!isMouseDown) return;
    
        const currentX = e.clientX || e.touches[0].clientX;
        const dragDistance = dragStartX - currentX;
    
        if (dragDistance > 50 || dragDistance < -50) {
            // If dragging is significant, update image and reset dragStartX
            if (dragDistance > 50) {
                selectNextImage(projectIndex);
            } else {
                selectPrevImage(projectIndex);
            }
            setDragStartX(currentX);
        }
    };
    
    const handleMouseUp = (e) => {
        setIsMouseDown(false);
        e.target.classList.remove('grabbing'); // Remove grabbing class on mouse up
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
            title: "U-Eats - Full-Stack restraunt website",
            description: "Deployed an online-ordering restaurant website on AWS amplify in collaboration with my roommate Dec 2023. The website is expected to increase monthly sales by 5%. Integrated React.js and Node.js technologies to enhance the website's performance, as evidenced by improved loading times and interactivity. Implemented Stripe payment for secure and efficient online transactions.",
            technologies: ["React", "Node.js", "Stripe", "Aws Amplify", "Rest API"],
            images: [ueats1, ueats2, ueats3],
            url: "http://u-eats.com"
        },
        {
            title: "NeuroTransmitter - iOS application",
            description: "Developed an iOS app for the University of Toledo that combines Swift UI and UI Kit to enhance research paper management and improve communication among doctors, thereby boosting user satisfaction and efficiency. The app, which has been accepted by the university and is set to be deployed in January 2024, features strengthened security using Firebase Authentication and Face ID integration, ensuring robust data protection and privacy. Additionally, it includes real-time chat threads and advanced annotation features like text highlighting, commenting, writing directly on documents, and Text-to-Speech functionality, fostering improved collaboration and facilitating research progress.",
            technologies: ["Swift", "Firebase", "Firestore", "Swift UI"],
            images: [NeuroTransmitter1, NeuroTransmitter2, NeuroTransmitter3],
            url: "http://u-eats.com"
        },
        {
            title: "AlgoAce - YouTube Channel Project",
            description: "AlgoAce is a YouTube channel I created to share my expertise in data structures, algorithms, and LeetCode problem-solving. Through this project, I develop and deliver clear, concise, and engaging tutorials aimed at helping students and professionals improve their coding skills and excel in technical interviews. This project showcases my ability to break down complex topics, create educational content, and engage with an audience in the tech community.",
            technologies: ["Python", "Data Structures and Algorithms", "LeetCode"],
            images: [NeuroTransmitter1, NeuroTransmitter2, NeuroTransmitter3],
            url: "https://www.youtube.com/@AlgoAcez"
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

    return (
        <div>
            <div className="heading-container" id="projects">
                <div className="line"></div>
                <h2 className="projects-heading">Projects</h2>
                <div className="line"></div>
            </div>
            <div className='full-section'>
                {projects.map((project, index) => (
                    <div key={index} className="project-container">
                        <div className="project-description">
                            <h2>
                                <a href={project.url} className="project-title-link">
                                    {project.title} <i className="fas fa-external-link-alt link-icon"></i>
                                </a>
                            </h2>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-item">{tech}</span>
                                ))}
                            </div>
                        </div>


                        <div className="project-images">
                            <img 
                                src={project.images[currentImage[index] || 0]} 
                                alt="Project" 
                                draggable="false"
                                className={isMouseDown ? 'grabbing' : ''}
                                onMouseDown={handleDragStart}
                                onMouseMove={(e) => handleDragMove(e, index)}
                                onMouseUp={handleMouseUp} // Reset the mouse state
                                onTouchStart={handleDragStart}
                                onTouchMove={(e) => handleDragMove(e, index)}
                                onTouchEnd={handleMouseUp} // Reset the mouse state for touch devices
                            />
                            <div className="image-navigation">
                                {project.images.map((_, imgIndex) => (
                                    <span
                                        key={imgIndex}
                                        className={`nav-dot ${imgIndex === (currentImage[index] || 0) ? 'active' : ''}`}
                                        onClick={() => selectImage(index, imgIndex)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
