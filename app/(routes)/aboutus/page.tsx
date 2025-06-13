import MissionSection from "@/app/components/sections/MissionSection";
import ServiceCard from "@/app/components/ServiceCard";
import React from "react";
import Image from "next/image";
import IndustriesSection, {
  IndustriesCard,
} from "@/app/components/sections/IndustriesSection";

function page() {
  return (
    <div>
      <ServiceCard
        title={"About Us"}
        description={
          "At CodeToCloud, we are architects of connection, dedicated to empowering businesses globally to navigate the complexities of technology and reach new heights. Our mission is to bridge the gap between where your business is today and where it could be tomorrow, by leveraging the power of innovative, multi-cloud solutions. We specialize in helping organizations transform their IT infrastructure to improve performance, scalability, and security. With expertise in cloud engineering, responsive web solutions, and user experience design, we create tailored services that address your specific needs."
        }
        image={"/Images/aboutus/aboutHeader.png"}
      />
      <MissionSection />

      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Our Journey
          </h1>
          <p className="text-center max-w-[800px] mx-auto text-base md:text-lg mb-16">
            Our team of cloud experts is dedicated to driving innovation and
            delivering top-tier solutions to meet your business needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed">
                We deliver tailored solutions, embracing innovation to meet each
                customer&apos;s unique needs. By prioritizing quality and
                personalized experiences, we ensure reliable, high-standard
                results every time.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  We build partnerships.
                </h2>
                <h3 className="text-xl self-center text-center md:text-2xl">
                  Let&apos;s break through together.
                </h3>
              </div>

              {/* <div className="flex items-center w-full max-w-md bg-[#1B332F] rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
                />
                <button className="px-4 py-1  text-[#1B332F] font-medium bg-[#ffffff] transition-colors m-2 mr-3 rounded-2xl">
                  Connect
                </button>
              </div> */}
            </div>

            {/* Right Content */}
            <div className="bg-gray-50 p-8 rounded-xl space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl self-center text-center font-medium">
                    Project: Fintech
                  </h3>
                  <span className="bg-[#C5D1CE] px-3 py-1 rounded-full text-sm">
                    Increased progress
                  </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Efficiency</span>
                      <span>60%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-[60%] bg-[#1B332F] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Security</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-[45%] bg-[#1B332F] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <span>74%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-[74%] bg-[#1B332F] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Overall</span>
                      <span>83%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-[83%] bg-[#1B332F] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Stats Bar Chart */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-end justify-between h-32 gap-4">
                    <div className="w-1/4 bg-gray-200 h-full rounded-t"></div>
                    <div className="w-1/4 bg-[#1B332F] h-[60%] rounded-t"></div>
                    <div className="w-1/4 bg-[#1B332F] h-[85%] rounded-t"></div>
                    <div className="w-1/4 bg-[#1B332F] h-[70%] rounded-t"></div>
                  </div>
                  <div className="mt-4 flex items-start">
                    <div className="flex-1">
                      <p className="text-3xl md:text-4xl font-bold">40 %</p>
                      <p className="text-sm mt-2">
                        Reduced data breach costs for
                        <span className="bg-[#C5D1CE] px-2 py-0.5 rounded-full ml-1">
                          AWS Company Limited.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-12 bg-[#081617] text-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Company Unique Factor
          </h2>
          <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto">
            We don&apos;t just build websites; we craft digital experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Customized FinOps Solutions */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <Image
                  src="/Images/aboutus/Group1.png"
                  alt="FinOps"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl self-center text-center font-semibold mb-4">
                Customized FinOps Solutions
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Tailoring financial operations to fit specific business needs
                and objectives.
              </p>
            </div>

            {/* Innovative Technology */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <Image
                  src="/Images/aboutus/Group2.png"
                  alt="Innovative"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl self-center text-center font-semibold mb-4">
                Innovative Technology
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Leveraging advanced tools and automation to optimize financial
                workflows.
              </p>
            </div>

            {/* Continuous Optimization */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <Image
                  src="/Images/aboutus/Group3.png"
                  alt="Optimization"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl self-center text-center font-semibold mb-4">
                Continuous Optimization
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Proactively refining processes for sustained efficiency and
                long-term growth.
              </p>
            </div>

            {/* Expert FinOps Team */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <Image
                  src="/Images/aboutus/Group4.png"
                  alt="Team"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl self-center text-center font-semibold mb-4">
                Expert FinOps Team
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Providing specialized expertise to drive strategic financial
                decision-making and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Premium Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content - Text and Image */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl   font-bold">Our Premium Services</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-5">
                With extensive experience across various industries, we drive
                innovation and deliver exceptional results.
              </p>
              <div className="relative w-full aspect-square">
                <Image
                  src="/Images/aboutus/Rectangle.png"
                  alt="Services Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <IndustriesCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
