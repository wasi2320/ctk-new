import Image from "next/image";
import { REAL_ESTATE_SERVICES_SECTION } from "@/utils/data/realEstateSection";

const RealEstateServicesSection = () => {
  return (
    <section className="md:px-28 px-4 pt-12 pb-20">
      <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-12 text-center">
        {REAL_ESTATE_SERVICES_SECTION.heading}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {REAL_ESTATE_SERVICES_SECTION.services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 relative hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="mb-4">
              <h3 className="md:text-2xl text-xl nunito-bold font-bold mb-4">
                {service.title}
              </h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div
              className={`absolute bottom-[-17px] `}
              style={{
                right: index === 2 ? "22px" : "-17px",
              }}
            >
              {/* <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-sm"> */}
              <div
                className="w-24 h-22 rounded-xl flex items-center justify-center shadow-sm"
                style={{
                  clipPath: "circle(53% at 58% 84%)",
                  backgroundColor: "lightgrey",
                  zIndex: 2,
                  position: "absolute",
                }}
              />
              <Image
                src={service.icon}
                alt={service.title}
                width={90}
                height={100}
                style={{
                  width: index === 3 ? "88px" : index === 2 ? "55px" : "100px",
                  height: index === 0 ? "100px" : "100px",
                  position: "relative",
                  zIndex: 5,
                  right: index === 2 ? "6px" : "15px",
                }}
                objectFit="contain"
                // className="w-8 h-8 md:w-10 md:h-10"
              />
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateServicesSection;
