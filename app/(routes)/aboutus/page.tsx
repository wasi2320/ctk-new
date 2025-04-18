import ServiceCard from "@/app/components/ServiceCard";
import React from "react";

function page() {
  return (
    <div>
      <ServiceCard
        title={"About Us"}
        description={
          "Connect your team with cloud expertise that drives innovation. Connect your team with cloud expertise that drives innovation. Connect your team with cloud expertise that drives innovation. Connect your team with cloud expertise that drives innovation.    "
        }
        image={"/Images/aboutus/aboutHeader.png"}
      />
      <header className="w-full h-screen bg-[url('/Images/aboutus/vision-misssion.png')] bg-cover bg-center overflow-hidden relative">
        <div className="relative w-full h-full flex items-center justify-end md:justify-center lg:justify-end px-5 md:px-5 lg:px-[120px]">
          <div className="max-w-[800px] md:max-w-[600px] lg:max-w-[900px] text-white text-right md:text-center lg:text-center px-5 md:px-0 lg:w-[60%]">
            <h1 className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold mb-4 md:mb-6 lg:mb-8 leading-[1.2]">
              Our Vision and Mission
            </h1>
            <p className="text-base text-center md:text-[1.1rem] lg:text-[1.25rem] leading-[1.6] opacity-90">
              As architects of connection, we empower business across the globe
              to envision a future where legacy technology serves as a
              foundational stepping stone towards progress. Our mission is to
              connect the dots between where your business is today and the
              dynamic, multi-cloud future that awaits.
            </p>
          </div>
        </div>
      </header>

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
                <h3 className="text-xl md:text-2xl">
                  Let&apos;s break through together.
                </h3>
              </div>

              <div className="flex items-center w-full max-w-md bg-[#1B332F] rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
                />
                <button className="px-4 py-1  text-[#1B332F] font-medium bg-[#ffffff] transition-colors m-2 mr-3 rounded-2xl">
                  Connect
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-gray-50 p-8 rounded-xl space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-medium">Project: Fintech</h3>
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
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src="/Images/aboutus/Group1.png"
                  alt="FinOps"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Customized FinOps Solutions
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Tailoring financial operations to fit specific business needs
                and objectives.
              </p>
            </div>

            {/* Innovative Technology */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src="/Images/aboutus/Group2.png"
                  alt="Innovative"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Innovative Technology
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Leveraging advanced tools and automation to optimize financial
                workflows.
              </p>
            </div>

            {/* Continuous Optimization */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src="/Images/aboutus/Group3.png"
                  alt="Optimization"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Continuous Optimization
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Proactively refining processes for sustained efficiency and
                long-term growth.
              </p>
            </div>

            {/* Expert FinOps Team */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src="/Images/aboutus/Group4.png"
                  alt="Team"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert FinOps Team</h3>
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
                <img
                  src="/Images/aboutus/Rectangle.png"
                  alt="Services Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Content - Service Cards in 2x3 Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Fintech Card */}
                <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src="/Images/aboutus/Frame4.svg"
                      alt="Healthcare"
                      className="w-full h-full transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fintech</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Enhancing financial security and operational efficiency.
                  </p>
                </div>

                {/* Edtech Card */}
                <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src="/Images/aboutus/Frame3.svg"
                      alt="Professional Services"
                      className="w-full h-full transition-all duration-300 brightness-1 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Edtech</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Transforming education through innovative solutions.
                  </p>
                </div>

                {/* Professional Services Card */}
                <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src="/Images/aboutus/Frame5.svg"
                      alt="E-commerce"
                      className="w-full h-full transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Services
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Streamlining operations for optimal performance.
                  </p>
                </div>

                {/* Healthcare Card */}
                <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src="/Images/aboutus/Frame6.svg"
                      alt="Healthcare"
                      className="w-full h-full transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Improving patient care and healthcare efficiency.
                  </p>
                </div>

                {/* E-commerce Card */}
                <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src="/Images/aboutus/Frame2.svg"
                      alt="E-commerce"
                      className="w-full h-full transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Enhancing customer experiences and operational efficiency.
                  </p>
                </div>

                {/* Manufacturing Card */}
                <div className="p-6 rounded-2xl hover:bg-[#081617] transition-all duration-300 hover:shadow-lg border border-gray-200 hover:text-white group">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src="/Images/aboutus/Frame1.svg"
                      alt="Fintech"
                      className="w-full h-full transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Driving automation and quality control in manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
