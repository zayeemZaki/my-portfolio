import React, { useState } from 'react';
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
    title: 'Certificate 1',
    imageURL: Certificate1, 
    websiteURL: Certificate1, 
  },
  {
    title: 'Certificate 2',
    imageURL: Certificate2, 
    websiteURL: Certificate2, 
  },
    {
    title: 'Certificate 3',
    imageURL: Certificate3, 
    websiteURL: Certificate3, 
  },
  {
    title: 'Certificate 4',
    imageURL: Certificate4, 
    websiteURL: Certificate4, 
  },
    {
    title: 'Certificate 5',
    imageURL: Certificate5, 
    websiteURL: Certificate5, 
  },
  {
    title: 'Certificate 6',
    imageURL: Certificate6, 
    websiteURL: Certificate6, 
  },
    {
    title: 'Certificate 7',
    imageURL: Certificate7, 
    websiteURL: Certificate7, 
  },
  {
    title: 'Certificate 8',
    imageURL: Certificate8, 
    websiteURL: Certificate8, 
  },
    {
    title: 'Certificate 9',
    imageURL: Certificate9, 
    websiteURL: Certificate9, 
  },
  {
    title: 'Certificate 10',
    imageURL: Certificate10, 
    websiteURL: Certificate10, 
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(certificatesData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCertificateClick = (certificate) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCertificate(certificate);
      setIsTransitioning(false);
    }, 300); // The timeout duration should match the CSS transition time
  };

  return (
    <div className="certificates-container">
      <div className="certificate-list">
        <div className="certificate-names">
          <h1>Certificates</h1> {/* Moved this line here */}
          <ul>
            {certificatesData.map((certificate, index) => (
              <li key={index} onClick={() => handleCertificateClick(certificate)}>
                {certificate.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="certificate-images">
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
