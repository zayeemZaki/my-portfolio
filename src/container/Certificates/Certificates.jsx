import React, { useState } from 'react';
import Certificate1 from '../../constants/Certificates/Certificate1.jpg';
import Certificate2 from '../../constants/Certificates/Certificate2.jpg';
import Certificate4 from '../../constants/Certificates/Certificate4.jpg';
import Certificate5 from '../../constants/Certificates/Certificate5.jpg';
import Certificate7 from '../../constants/Certificates/Certificate7.jpg';
import Certificate8 from '../../constants/Certificates/Certificate8.jpg';
import Certificate9 from '../../constants/Certificates/Certificate9.jpg';
import ML from '../../constants/Certificates/ML.jpeg';

import './Certificates.css';

const certificatesData = [
  {
    title: 'Supervised Machine Learning',
    imageURL: ML,
    issuer: 'Coursera',
    year: '2024'
  },
  {
    title: 'HTML5, CSS3, JS and Bootstrap',
    imageURL: Certificate5,
    issuer: 'Coursera',
    year: '2023'
  },
  {
    title: 'Programming For Everybody (Python)',
    imageURL: Certificate1,
    issuer: 'University of Michigan',
    year: '2023'
  },
  {
    title: 'Python Data Structures',
    imageURL: Certificate2,
    issuer: 'University of Michigan',
    year: '2023'
  },
  {
    title: 'Using Python to Access Web Data',
    imageURL: Certificate4,
    issuer: 'University of Michigan',
    year: '2023'
  },
  {
    title: 'Technical Support Fundamentals',
    imageURL: Certificate8,
    issuer: 'Google',
    year: '2022'
  },
  {
    title: 'Computer Networking',
    imageURL: Certificate9,
    issuer: 'Google',
    year: '2023'
  },
  {
    title: 'Operating Systems',
    imageURL: Certificate7,
    issuer: 'Coursera',
    year: '2023'
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };
  
  return (
    <div className="certificates-section" id="certificates">
      <div className="heading-container">
        <div className="line"></div>
        <h2 className="certificates-heading">Certifications</h2>
        <div className="line"></div>
      </div>
      
      <div className="certificates-container">
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="cert-card"
              onClick={() => openModal(cert)}
            >
              <div className="cert-image">
                <img src={cert.imageURL} alt={cert.title} />
                <div className="cert-overlay">
                  <i className="fas fa-eye"></i>
                  <span>View Certificate</span>
                </div>
              </div>
              
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedCert.imageURL} alt={selectedCert.title} />
            <div className="modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer} • {selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;