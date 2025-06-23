import { SAAS_BUSINESS_SECTION } from "@/utils/data/saasBusinessSection";
import Image from "next/image";

const SaaSBusinessSection = () => {
  return (
    <section className="md:px-28 px-4 pt-12 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Left side - Illustration */}
        <div className="md:w-[45%] w-full">
          <Image
            src={SAAS_BUSINESS_SECTION.image}
            alt="SaaS and ISV Illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Right side - Content */}
        <div className="md:w-[55%] w-full">
          <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-6 text-center md:text-left">
            {SAAS_BUSINESS_SECTION.heading}
          </h2>
          <p className="md:text-lg text-base mb-8 text-center md:text-left">
            {SAAS_BUSINESS_SECTION.description}
          </p>

          {/* Bullet Points */}
          <div className="space-y-4">
            {SAAS_BUSINESS_SECTION.bulletPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm"
              >
                <p className="md:text-base text-sm font-medium text-center md:text-left">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSBusinessSection;
