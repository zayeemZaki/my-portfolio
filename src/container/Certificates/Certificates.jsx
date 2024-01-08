import React, { useState, useRef } from 'react';
import Certificate1 from '../../constants/Certificates/Certificate1.jpg';
import Certificate2 from '../../constants/Certificates/Certificate2.jpg';
import Certificate3 from '../../constants/Certificates/Certificate3.jpg';
import Certificate4 from '../../constants/Certificates/Certificate4.jpg';
import Certificate5 from '../../constants/Certificates/Certificate5.jpg';
import Certificate6 from '../../constants/Certificates/Certificate6.jpg';
import Certificate7 from '../../constants/Certificates/Certificate7.jpg';
import Certificate8 from '../../constants/Certificates/Certificate8.jpg';
import Certificate9 from '../../constants/Certificates/Certificate9.jpg';
import Certificate10 from '../../constants/Certificates/Certificate10.jpg';


import './Certificates.css';

const certificatesData = [
  {
    title: 'Programming For Everybody(Python)',
    imageURL: Certificate1, 
    websiteURL: Certificate1, 
  },
  {
    title: 'Python Data Structures',
    imageURL: Certificate2, 
    websiteURL: Certificate2, 
  },
    {
    title: 'Capstone(Python)',
    imageURL: Certificate3, 
    websiteURL: Certificate3, 
  },
  {
    title: 'Using Python to Access Web Data',
    imageURL: Certificate4, 
    websiteURL: Certificate4, 
  },
    {
    title: 'HTML5, CSS3, JS and Bootstrap',
    imageURL: Certificate5, 
    websiteURL: Certificate5, 
  },
  {
    title: 'Customer Service',
    imageURL: Certificate6, 
    websiteURL: Certificate6, 
  },
    {
    title: 'Operating Systems',
    imageURL: Certificate7, 
    websiteURL: Certificate7, 
  },
  {
    title: 'Technical Support',
    imageURL: Certificate8, 
    websiteURL: Certificate8, 
  },
    {
    title: 'The Bits and Bytes of Computer Networking',
    imageURL: Certificate9, 
    websiteURL: Certificate9, 
  },
  {
    title: 'Wix',
    imageURL: Certificate10, 
    websiteURL: Certificate10, 
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(certificatesData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);  // Ref for scrolling
  const certificateNamesRef = useRef(null); // Ref for the certificate names container

  const handleCertificateClick = (certificate, index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCertificate(certificate);
      setSelectedIndex(index);
  
      if (window.innerWidth <= 768) {
        // Scroll to 50% of the certificate names container height
        const namesHeight = certificateNamesRef.current.clientHeight;
        window.scrollTo({
          top: certificateNamesRef.current.offsetTop + namesHeight * 4 / 5,
          behavior: 'smooth'
        });
      }
  
      setIsTransitioning(false);
    }, 300); 
  };
  
  return (
    <div className="certificates-container" id="certificates" data-aos="fade-up">
      <div className="certificate-list" >
        <div className="certificate-names" ref={certificateNamesRef}>
          <h1><u>Certificates</u></h1>
          <div className="certificate-names-inner">
            <ul>
              {certificatesData.map((certificate, index) => (
                <li 
                  key={index} 
                  onClick={() => handleCertificateClick(certificate, index)}
                  className={selectedIndex === index ? 'selected' : ''}
                >
                  {certificate.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="certificate-images" ref={scrollRef}> {/* Attach ref here */}
          <img
            className={isTransitioning ? 'fading' : ''}
            src={selectedCertificate.imageURL}
            alt={selectedCertificate.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;