"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative w-full min-h-[60vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/Images/homepage/World_Image.png')] bg-cover
        bg-size-cover bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: "url('/Images/homepage/World_Image.png')",
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-full mx-auto">
          <div className="flex flex-col items-center justify-center text-white space-y-6 md:space-y-8 lg:space-y-10 py-12 md:py-16 lg:py-20">
            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center max-w-[800px] mx-auto"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Our Vision and Mission
            </h2>

            {/* Description */}
            <div
              className="w-full max-w-[800px] mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed">
                As architects of connection, we empower business across the globe to
                envision a future where legacy technology serves as a foundational
                stepping stone towards progress. Our mission is to connect the dots
                between where your business is today and the dynamic, multi-cloud
                future that awaits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
