import '../../styles/InfiniteScrollBar.css';
import React from 'react';

const InfiniteScrollBar = () => {
  const logos = [
    { id: 1, src: '/Images/aws-logo.png', alt: 'AWS Logo' },
    { id: 2, src: '/Images/Alphabravo.png', alt: 'Alphabravo Logo' },
    { id: 3, src: '/Images/dashstack.png', alt: 'Dashstack Logo' },
    { id: 4, src: '/Images/Goagalia.png', alt: 'Goagalia Logo' },
    // { id: 5, src: spider_door, alt: 'Spider Door Logo' },
    // { id: 6, src: Allheartz, alt: 'Allheartz Logo' },
  ];

  // Duplicate logos for infinite scroll effect
  const allLogos = [...logos, ...logos , ...logos];

  return (
    <div className="infinite-scroll-container">
    <div className="infinite-scroll-wrapper">
      <div className="infinite-scroll-content">
        {allLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default InfiniteScrollBar; 