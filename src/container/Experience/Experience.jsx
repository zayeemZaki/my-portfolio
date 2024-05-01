import React, { useState } from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'First Solar',
    role: 'IT Business Intelligence Intern',
    startDate: 'Jan 2024',
    endDate: 'Current',
    details: [
      {
        title: 'Networking Intern',
        startDate: 'Jan 2024',
        endDate: 'Current',
        tasks: [
          'Upgrading and configuring switches to optimize network performance and reliability.',
          'Implementing new firewall rules to enhance network security and ensure compliance with organizational policies and industry standards.',
          'Provisioning and configuring servers to support various network services and applications, fostering scalability and resource efficiency.'
        ]
      },
      {
        title: 'Service Desk Intern',
        startDate: 'Jan 2024',
        endDate: 'March 2024',
        tasks: [
          'Orchestrated the imaging of 500+ laptops for new hires and refresh cycles, seamlessly integrating devices into the domain and transitioning them to Active Directory (AD).',
          'Proficiently addressed IT-related tickets, resolving technical issues for employees in a timely manner to ensure uninterrupted workflow.',
          'Streamlined ticket management processes by routing over 1000 tickets to respective departments, optimizing operational efficiency and customer service delivery.'
        ]
      }
    ]
  },
  {
    title: 'University of Toledo',
    role: 'IT Support Specialist',
    startDate: 'Sept 2021',
    endDate: 'Current',
    details: [
      'Successfully resolved over 100 software and IT-related challenges with an average solution time of less than 24 hours, addressing issues like devices not powering on, water damage, hardware replacement, screen replacement, network connectivity problems, and virus infections.',
      'Diagnose and debug staff and lab desktops of the University, employing techniques such as PXE boot and archive directory management to address issues like slowdowns, re-imaging, networking, and related issues.'
    ]
  }
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
            <div key={index}>
              <h2>{detail.title}</h2>
              <p>{`${detail.startDate} - ${detail.endDate}`}</p>
              <ul>
                {detail.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
