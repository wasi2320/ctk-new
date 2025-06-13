import React from "react";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

export default function page() {
  // Map social media platforms to their respective Lucide React icons
  return (
    <div>
      <header className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-[url('/Images/contact/contactHeader.png')] bg-cover bg-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end px-5 md:px-[5%] lg:px-[10%] xl:px-[15%]">
          <div className="absolute z-[2] w-full max-w-full md:max-w-[600px] lg:w-[60%] lg:max-w-none text-white text-center lg:text-start px-[15px] lg:right-0 lg:mr-[5%]">
            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[3.5rem] font-semibold mb-4 md:mb-5 lg:mb-6 leading-[1.2]">
              Schedule a meeting
            </h1>
            <p className="text-base md:text-[1.1rem] lg:text-[1.2rem] leading-[1.5] opacity-90">
              Connect with our team to discuss solutions tailored to your
              business needs and accelerate your digital growth.
            </p>
          </div>
        </div>
      </header>

      <ContactUsSection />

      {/* Our Journey Section */}
    </div>
  );
}
