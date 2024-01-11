import React, { useState } from 'react';
import './Projects.css';
import Certificate8 from '../../constants/Certificates/Certificate8.jpg';
import Certificate9 from '../../constants/Certificates/Certificate9.jpg';
import Certificate10 from '../../constants/Certificates/Certificate10.jpg';

const Projects = () => {

    const [dragStartX, setDragStartX] = useState(0);

    const handleDragStart = (e) => {
        setDragStartX(e.clientX || e.touches[0].clientX);
    };

    

    const handleDragMove = (e, projectIndex) => {
        const currentX = e.clientX || e.touches[0].clientX;
        const dragDistance = dragStartX - currentX;

        if (dragDistance > 50) {
            selectNextImage(projectIndex);
            setDragStartX(currentX);
        } else if (dragDistance < -50) {
            selectPrevImage(projectIndex);
            setDragStartX(currentX);
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
            description: "Deployed an online-ordering restaurant website on AWS amplify in collaboration with my roommate Dec 2023. The website is expected to increase monthly sales by 5%. Integrated React.js and Node.js technologies to enhance the website's performance, as evidenced by improved loading times and interactivity. Implemented Stripe payment for secure and efficient online transactions.",
            technologies: ["React", "Node.js", "MongoDB"],
            images: [Certificate8, Certificate9, Certificate10]
        },
        {
            title: "NeuroTransmitter",
            description: "Developed an iOS app for the University of Toledo that combines Swift UI and UI Kit to enhance research paper management and improve communication among doctors, thereby boosting user satisfaction and efficiency. The app, which has been accepted by the university and is set to be deployed in January 2024, features strengthened security using Firebase Authentication and Face ID integration, ensuring robust data protection and privacy. Additionally, it includes real-time chat threads and advanced annotation features like text highlighting, commenting, writing directly on documents, and Text-to-Speech functionality, fostering improved collaboration and facilitating research progress.",
            technologies: ["Tech1", "Tech2", "Tech3"],
            images: [Certificate8, Certificate9, Certificate10]
            // Replace with actual image paths
        }
        // Add more projects as needed
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
            <div className="heading-container">
                <div className="line"></div>
                <h2 className="projects-heading">Projects</h2>
                <div className="line"></div>
            </div>
            <div className='full-section'>
                {projects.map((project, index) => (
                    <div key={index} className="project-container">
                    <div className="project-description">
                        <h2>{project.title}</h2>
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
                                onMouseDown={handleDragStart}
                                onMouseMove={(e) => handleDragMove(e, index)}
                                onTouchStart={handleDragStart}
                                onTouchMove={(e) => handleDragMove(e, index)}
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
