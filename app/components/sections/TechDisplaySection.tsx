"use client";
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { TECH_DISPLAY_SECTION } from "@/utils/data/techMarqueeSection";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TechDisplaySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 2000 })]);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const updateSlidesToShow = useCallback(() => {
    if (emblaApi) {
      const newSlidesToShow = window.innerWidth < 768 ? 3 : 5;
      setSlidesToShow(newSlidesToShow);
    }
  }, [emblaApi]);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [updateSlidesToShow]);

  return (
    <section className="bg-[#F9F8F8] py-20 md:px-20 px-4 overflow-hidden">
      <h2 className="md:text-4xl text-2xl text-center nunito-bold font-bold mb-5">
        {TECH_DISPLAY_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-6/12 mx-auto text-center font-semibold">
        {TECH_DISPLAY_SECTION.description}
      </p>
      
      <div className="mt-12 md:mx-20 py-4"> {/* Added vertical padding */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container h-full"> {/* Added h-full */}
            {TECH_DISPLAY_SECTION.marqueeItems.map((img, index) => (
              <div 
                key={index} 
                className="embla__slide flex items-center justify-center" /* Added flex centering */
                style={{ minWidth: `${100 / slidesToShow}%`, padding: '8px 0' }} /* Added vertical padding */
              >
                <div className="p-4 rounded-lg left-right-bottom-shadow bg-[#EFEEEE]/40 mx-2 h-full flex items-center justify-center"> {/* Added h-full and flex centering */}
                  <Image
                    src={img}
                    alt="Technology logo"
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .embla {
          overflow: hidden;
          padding: 8px 0; /* Additional padding insurance */
        }
        .embla__container {
          display: flex;
          align-items: center; /* Vertical centering */
        }
        .embla__slide {
          position: relative;
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
};

export default TechDisplaySection;