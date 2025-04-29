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
    <div className="w-full overflow-hidden relative h-[120px] bg-white/10 rounded-[10px]">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-white/90 to-transparent pointer-events-none z-10"></div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-white/90 to-transparent pointer-events-none z-10"></div>

      <div className="w-full h-full flex items-center">
        <div className="flex gap-10 px-5 scroll hover:animate-pause">
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex-shrink-0 w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-125"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollBar; 