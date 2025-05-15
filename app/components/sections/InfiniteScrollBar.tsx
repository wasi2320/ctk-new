"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const InfiniteScrollBar = () => {
  const logos = [
    { id: 1, src: '/Images/aws-logo.png', alt: 'AWS Logo' },
    { id: 2, src: '/Images/Alphabravo.png', alt: 'Alphabravo Logo' },
    { id: 3, src: '/Images/dashstack.png', alt: 'Dashstack Logo' },
    { id: 4, src: '/Images/Goagalia.png', alt: 'Goagalia Logo' },
    // { id: 5, src: spider_door, alt: 'Spider Door Logo' },
    // { id: 6, src: Allheartz, alt: 'Allheartz Logo' },
  ];

  // Duplicate logos to ensure continuous sliding
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden relative h-[120px] bg-white/10 rounded-lg">
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 blur-gradient"></div>

      {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 blur-gradient"></div>

      <div className="w-full h-full flex items-center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,

          }}
          speed={2000}
          className="w-full"
          style={{
            '--swiper-wrapper-transition-timing-function': 'linear',
          } as any}
        >
          {allLogos.map((logo, index) => (
            <SwiperSlide key={`${logo.id}-${index}`} className="!w-auto">
              <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-120">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InfiniteScrollBar; 