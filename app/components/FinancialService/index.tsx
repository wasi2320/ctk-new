import React from "react";

const FinancialServicesSection = () => {
  const services = [
    {
      title: "Investment Management",
      description:
        "Maximize your returns with our personalized investment strategies and portfolio management.",
    },
    {
      title: "Financial Planning and Advisory",
      description:
        "Get expert guidance to achieve your financial goals with comprehensive planning and advice.",
    },
    {
      title: "Corporate Finance Services",
      description:
        "Optimize your business growth through strategic mergers, acquisitions, and capital solutions.",
    },
    {
      title: "Accounting and Tax Services",
      description:
        "Ensure accuracy and compliance with our professional accounting and tax management services.",
    },
    {
      title: "Risk Management and Insurance",
      description:
        "Protect your assets and minimize risks with customized insurance and risk management solutions.",
    },
    {
      title: "Loans and Credit Services",
      description:
        "Access flexible lending options tailored to meet your personal and business financing needs.",
    },
  ];

  const differentiators = [
    {
      title: "Client-First, Always",
      description:
        "We prioritize transparency, trust, and tailored advice. No hidden fees. No cookie-cutter solutions. Just honest guidance designed around your goals.",
    },
    {
      title: "Specialized Services for Target Market",
      description:
        "Unlike generic firms, we specialize in serving target market. That means more relevant advice, quicker turnaround, and deeper insight.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Our platform leverages the latest in AI, automation, and secure digital infrastructure to make financial services faster, safer, and smarter.",
    },
    {
      title: "Sustainable & Responsible Finance",
      description:
        "We believe in building futures that last. Our investment options include ESG-focused portfolios and socially responsible strategies for a better world.",
    },
    {
      title: "Expert-Led, Not Just AI-Driven",
      description:
        "While we use technology to enhance efficiency, every financial decision is backed by experienced professionals—real people with real expertise.",
    },
    {
      title: "Education, Not Just Execution",
      description:
        "We empower our clients with knowledge—through guides, webinars, and 1-on-1 consultations—so you're confident in every decision you make.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Our Financial Services Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Financial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How we Differentiate from the Market Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            How we Differentiate from the Market
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-4xl mx-auto">
            At Code to Kloud, we&apos;re not just another financial services
            provider—we&apos;re a partner in your financial journey. What sets
            us apart is our commitment to personalization, transparency, and
            innovation that puts your needs first.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServicesSection;
