"use client";

import { INDUSTRIES_SECTION } from "@/utils/data/industriesSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type CardType = {
  title: string;
  description: string;
  img: string;
};

type IndustryCardProps = {
  card: CardType;
  index: number;
};

const IndustriesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const settings = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-3xl font-bold mb-4 w-full text-center"
      >
        {INDUSTRIES_SECTION.heading}
      </h1>

      <div className="max-w-[80%] mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content - Text and Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="lg:col-span-4"
          >
            <div className="relative w-full h-[50vh] ">
              <Image
                src={INDUSTRIES_SECTION.image}
                alt="Services Illustration"
                width={280}
                height={140}
                className="object-contain mt-0  transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group shadow-lg rounded-3xl"
                priority
              />
            </div>
          </div>

          {/* Right Content - Service Cards in 2x3 Grid */}
          <IndustriesCard />
        </div>
      </div>
    </section>
  );
};

export const IndustriesCard = () => {
  return (
    <div className="lg:col-span-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Fintech Card */}
        <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="/Images/aboutus/Frame4.svg"
              alt="Healthcare"
              width={48}
              height={48}
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fintech</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">
            Enhancing financial security and operational efficiency.
          </p>
        </div>

        {/* Edtech Card */}
        <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="/Images/aboutus/Frame3.svg"
              alt="Professional Services"
              fill
              className="object-contain transition-all duration-300 brightness-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Edtech</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">
            Transforming education through innovative solutions.
          </p>
        </div>

        {/* Professional Services Card */}
        <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="/Images/aboutus/Frame5.svg"
              alt="E-commerce"
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Professional Services</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">
            Streamlining operations for optimal performance.
          </p>
        </div>

        {/* Healthcare Card */}
        <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="/Images/aboutus/Frame6.svg"
              alt="Healthcare"
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">
            Improving patient care and healthcare efficiency.
          </p>
        </div>

        {/* E-commerce Card */}
        <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="/Images/aboutus/Frame2.svg"
              alt="E-commerce"
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">
            Enhancing customer experiences and operational efficiency.
          </p>
        </div>

        {/* Manufacturing Card */}
        <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="/Images/aboutus/Frame1.svg"
              alt="Fintech"
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">
            Driving automation and quality control in manufacturing.
          </p>
        </div>
      </div>
    </div>
  );
};

// Separate component for individual industry card
// const IndustryCard: React.FC<IndustryCardProps> = ({ card, index }) => {
//   return (
//     <div
//       className={`
//         bg-white
//         px-6
//         py-8
//         rounded-3xl
//         border
//         border-[#152F27]
//         flex
//         flex-col
//         justify-center
//         items-center
//         hover:bg-[#081410]
//         hover:text-white
//         transition-all
//         duration-300
//         group
//         aspect-square
//         w-full
//         md:aspect-auto
//         md:min-h-0
//       `}
//     >
//       <div className="flex flex-col items-center justify-center h-full space-y-6">
//         <Image
//           src={card.img}
//           alt={card.title}
//           height={60}
//           width={60}
//           className="w-[60px] h-[60px] brightness-0 group-hover:invert transition-all duration-300"
//         />
//         <h3
//           className={`
//             md:text-xl
//             text-xl
//             font-medium
//             nunito-medium
//             text-center
//           `}
//         >
//           {card.title}
//         </h3>

//         <p
//           className={`
//             md:text-base
//             text-base
//             text-center
//             max-w-[90%]
//           `}
//         >
//           {card.description}
//         </p>
//       </div>
//     </div>
//   );
// };

export default IndustriesSection;
