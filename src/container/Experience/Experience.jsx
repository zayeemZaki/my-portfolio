import React, { useState } from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'CCC Intelligent Solutions',
    role: 'Software Engineer Intern',
    startDate: 'May 2025',
    endDate: 'Present',
    logo: '🏢',
    company: 'CCC Intelligent Solutions',
    location: 'Chicago, IL (Hybrid)',
    status: 'current',
    tasks: [
      'Created a mini Node.js service for Puppeteer-based PDF generation and deployed it using Docker, improving form rendering accuracy by 90% in a Spring Boot + Vue.js app.',
      'Built 165 responsive HTML forms with inline styles, ensuring accurate data reflection and optimizing for dynamic PDF generation and internal use.',
      'Fixed UI issues and enhanced responsiveness using Vue 3, reducing layout bugs by 70%.',
      'Developed reusable common-ui components for CCC\'s flagship product, reducing front-end development effort by over 3x.',
      'Refactored a complex Kafka consumer to make its logic cleaner and more modular.',
      'Working with Vue.js, Java, Spring Boot, Docker, and Kafka in a fast-paced development environment.'
    ]
  },
  {
    id: 2,
    title: 'First Solar',
    role: 'IT Business Intelligence Intern',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    logo: '☀️',
    company: 'First Solar Inc.',
    location: 'Perrysburg, OH',
    status: 'completed',
    subBranches: [
      {
        title: 'Information Security Intern',
        startDate: 'July 2024',
        endDate: 'Dec 2024',
        tasks: [
          'Developed a full-stack web application using Flask to automate CrowdStrike processes, streamlining IT security workflows and enabling log storage with Excel export functionality.',
          'Contributed to CrowdStrike automation projects, streamlining IT security processes and increasing operational efficiency.',
          'Developed Python scripts to identify and sort stale accounts using domain, inactivity period, and other criteria, enhancing account management efficiency.',
          'Automated the removal of admin rights from specific users, improving security posture and reducing manual intervention.',
          'Executed real-time security commands using CrowdStrike APIs, ensuring quick and effective incident response.',
          'Collaborated with cross-functional teams to integrate automation solutions, driving scalability and adaptability in a fast-paced environment.'
        ]
      },      
      {
        title: 'Network Intern',
        startDate: 'April 2024',
        endDate: 'June 2024',
        tasks: [
          'Contributed to upgrading and configuring network switches to improve performance and reliability through careful planning and execution.',
          'Implementing new firewall rules to enhance network security and ensure compliance with organizational policies and industry standards.',
          'Provisioning and configuring servers to support various network services and applications, fostering scalability and resource efficiency.'
        ]
      },
      {
        title: 'Service Desk Intern',
        startDate: 'Jan 2024',
        endDate: 'Mar 2024',
        tasks: [
          'Managed imaging of 500+ laptops for new hires and refresh cycles, ensuring consistent device setup and deployment.',
          'Proficiently addressed IT-related tickets, resolving technical issues for employees in a timely manner to ensure uninterrupted workflow.',
          'Streamlined ticket management processes by routing over 1000 tickets to respective departments, optimizing operational efficiency and customer service delivery.'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'University of Toledo',
    role: 'IT Support Specialist & Peer Mentor',
    startDate: 'Sept 2021',
    endDate: 'Current',
    logo: '🎓',
    company: 'University of Toledo',
    location: 'Toledo, OH',
    status: 'current',
    subBranches: [
      {
        title: 'Peer Mentor',
        startDate: 'Jan 2025',
        endDate: 'May 2025',
        tasks: [
          'Assisting students in mastering foundational programming concepts and Object-Oriented Programming (OOP) principles through hands-on guidance and mentorship.',
          'Providing one-on-one tutoring sessions to help students understand complex programming logic and debugging techniques.',
          'Developing supplementary learning materials and practice exercises to reinforce key C++ and Java concepts.',
          'Collaborating with faculty to identify struggling students and implement targeted intervention strategies.'
        ]
      },
      {
        title: 'IT Support Specialist',
        startDate: 'Sept 2021',
        endDate: 'Current',
        tasks: [
          'Successfully resolved over 100 software and IT-related challenges with an average solution time of less than 24 hours, addressing issues like devices not powering on, water damage, hardware replacement, screen replacement, network connectivity problems, and virus infections.',
          'Diagnose and debug staff and lab desktops of the University, employing techniques such as PXE boot and archive directory management to address issues like slowdowns, re-imaging, networking, and related issues.'
        ]
      }
    ]
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experienceData[0]);
  const [selectedSubBranch, setSelectedSubBranch] = useState(0);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
    setSelectedSubBranch(0); // Reset to first sub-branch when switching companies
  };

  // Function to highlight keywords in task descriptions
  const highlightKeywords = (text) => {
    const keywords = [
      'Node.js', 'Puppeteer', 'PDF', 'Docker', 'Spring Boot', 'Vue.js', 'Vue 3',
      'HTML', 'Kafka', 'Java', 'Python', 'Flask', 'CrowdStrike', 'APIs',
      'React', 'JavaScript', 'TypeScript', 'CSS', 'SQL', 'MongoDB', 'Express',
      'AWS', 'Azure', 'GCP', 'Git', 'GitHub', 'Linux', 'Windows', 'macOS',
      'API', 'REST', 'GraphQL', 'JSON', 'XML', 'MySQL', 'PostgreSQL',
      'responsive', 'automation', 'security', 'network', 'firewall', 'switches',
      'servers', 'imaging', 'tickets', 'troubleshooting', 'debugging',
      'optimization', 'performance', 'scalability', 'efficiency'
    ];

    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="highlight-keyword">${keyword}</span>`);
    });

    return { __html: highlightedText };
  };

  return (
    <div className="experience-section" id="experience">
      <div className="heading-container">
        <div className="line"></div>
        <h2 className="experience-heading">Experience</h2>
        <div className="line"></div>
      </div>
      
      <div className="experience-container" data-aos="fade-up">
        <div className="experience-timeline">
          {/* Company Selection Cards */}
          <div className="company-cards">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className={`company-card ${selectedExperience.id === experience.id ? 'active' : ''}`}
                onClick={() => handleExperienceClick(experience)}
              >
                <div className="company-logo">{experience.logo}</div>
                <div className="company-info">
                  <h3 className="company-name">{experience.title}</h3>
                  <p className="company-location">{experience.location}</p>
                  <span className={`status-badge ${experience.status}`}>
                    {experience.status === 'current' ? 'Current' : 'Completed'}
                  </span>
                </div>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="experience-details" data-aos="fade-left">
            <div className="experience-header">
              <div className="role-info">
                <h2 className="role-title">{selectedExperience.role}</h2>
                <p className="duration">
                  <span className="date-badge">{selectedExperience.startDate}</span>
                  <span className="date-separator">—</span>
                  <span className="date-badge">{selectedExperience.endDate}</span>
                </p>
              </div>
              <div className="company-badge">
                <span className="company-emoji">{selectedExperience.logo}</span>
                {selectedExperience.title}
              </div>
            </div>

            {/* Sub-branches (for First Solar and University of Toledo) */}
            {selectedExperience.subBranches && (
              <div className="sub-branches-container">
                {/* Sub-branch Navigation */}
                <div className="sub-branch-tabs">
                  {selectedExperience.subBranches.map((subBranch, index) => (
                    <button
                      key={index}
                      className={`sub-branch-tab ${selectedSubBranch === index ? 'active' : ''}`}
                      onClick={() => setSelectedSubBranch(index)}
                    >
                      <div className="tab-content">
                        <h4>{subBranch.title}</h4>
                        <span className="tab-duration">
                          {subBranch.startDate} - {subBranch.endDate}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Selected Sub-branch Content */}
                <div className="sub-branch-content">
                  <div className="sub-branch-card active">
                    <div className="sub-branch-header">
                      <h3 className="sub-branch-title">
                        {selectedExperience.subBranches[selectedSubBranch].title}
                      </h3>
                      <p className="sub-branch-duration">
                        {selectedExperience.subBranches[selectedSubBranch].startDate} - {selectedExperience.subBranches[selectedSubBranch].endDate}
                      </p>
                    </div>
                    <ul className="achievement-list">
                      {selectedExperience.subBranches[selectedSubBranch].tasks.map((task, i) => (
                        <li key={i} className="achievement-item">
                          <span className="achievement-bullet">▸</span>
                          <span dangerouslySetInnerHTML={highlightKeywords(task)} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Direct tasks (for CCC Intelligent Solutions) */}
            {!selectedExperience.subBranches && (
              <div className="main-experience-card">
                <ul className="achievement-list">
                  {selectedExperience.tasks.map((task, i) => (
                    <li key={i} className="achievement-item">
                      <span className="achievement-bullet">▸</span>
                      <span dangerouslySetInnerHTML={highlightKeywords(task)} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
};

export default Experience;
