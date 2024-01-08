import React, { useState } from 'react';
import './Experience.css';

const experienceData = [
    {
        title: 'First Solar',
        role: 'IT Business Intelligence Intern',
        startDate: 'June 2021',
        endDate: 'June 2022',
        details: [
          'Undertake a one-year IT Business Intelligence internship at First Solar, focusing on data troubleshooting, syncing, and migrating reports from Tableau to PowerBI.',
          'Work with the IT data services team on diverse tasks, including enhancing existing solutions and crafting new PowerBI dashboards and reports, ensuring effective time management and clear communication.',
        ],
      },
      {
        title: 'University of Toledo',
        role: 'IT Support Specialist',
        startDate: 'September 2019',
        endDate: 'May 2021',
        details: [
          'Successfully resolved over 100 software and IT-related challenges with an average solution time of less than 24 hours...',
          'Diagnose and debug staff and lab desktops of the University, employing techniques such as PXE boot and archive directory management...'
        ],
      },
];

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(experienceData[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleExperienceClick = (experience, index) => {
      setSelectedExperience(experience);
      setSelectedIndex(index);
    };
  
    return (
      <div className="experience-container" id="experience">
        <div className="experience-list">
          <div className="experience-names">
            <h1><u>Experience</u></h1>
            <ul>
              {experienceData.map((experience, index) => (
                <li 
                  key={index} 
                  onClick={() => handleExperienceClick(experience, index)}
                  className={selectedIndex === index ? 'selected' : ''}
                >
                  {experience.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="experience-details">
            <h2>{selectedExperience.role}</h2>
            <p>{`${selectedExperience.startDate} - ${selectedExperience.endDate}`}</p>
            <ul>
              {selectedExperience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  