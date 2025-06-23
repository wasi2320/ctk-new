import Image from "next/image";
import { REAL_ESTATE_SOLUTIONS_SECTION } from "@/utils/data/realEstateSection";

const RealEstateSolutionsSection = () => {
  return (
    <section className="md:px-28 px-4 py-16 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-end items-start gap-8 md:gap-12">
        {/* Left side - Illustration */}
        <div className="left-0 w-[60%] absolute">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={REAL_ESTATE_SOLUTIONS_SECTION.illustration}
              alt="Real Estate Solutions Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-[60%] w-full">
          <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-6">
            {REAL_ESTATE_SOLUTIONS_SECTION.heading}
          </h2>
          <p className="md:text-lg text-base mb-8 text-gray-700">
            {REAL_ESTATE_SOLUTIONS_SECTION.description}
          </p>

          {/* Bullet Points */}
          <div className="space-y-3">
            {REAL_ESTATE_SOLUTIONS_SECTION.bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#152F27] rounded-full mt-2"></div>
                </div>
                <p className="md:text-base text-sm text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSolutionsSection;
