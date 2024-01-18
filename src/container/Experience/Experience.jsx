import React, { useState } from 'react';
import './Experience.css';

const experienceData = [
    {
        title: 'First Solar',
        role: 'IT Business Intelligence Intern',
        startDate: 'Jan 2024',
        endDate: 'Current',
        details: [
          'A one-year IT Business Intelligence internship at First Solar, focusing on data troubleshooting, syncing, and migrating reports from Tableau to PowerBI.',
          'Work with the IT data services team on diverse tasks, including enhancing existing solutions and crafting new PowerBI dashboards and reports, ensuring effective time management and clear communication.',
        ],
      },
      {
        title: 'University of Toledo',
        role: 'IT Support Specialist',
        startDate: 'Sept 2021',
        endDate: 'Current',
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
    <div >
    <div className="heading-container" >
        <div className="line"></div>
            <h2 className="experience-heading">Experience</h2>
        <div className="line"></div>
    </div>
    <div className="experience-container" id="experience" data-aos="fade-up">
      <div className="experience-list">
        <div className="experience-names">
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
    </div>
  );
};

export default Experience;
