import Image from "next/image";
import Link from "next/link";

interface MarketDifferenceProps {
  heading?: string;
}

const cards = [
    {
      title: "Seamless Service Management",
      description: "Streamline project execution, and resource allocation. Gain full transparency and deliver outcomes that exceed expectations.",
      icon: "/images/service-management.png",
    },
    {
      title: "Turn Insights into Strategy",
      description: "Transform operational data into actionable plans. Address inefficiencies, track KPIs, and refine service delivery for optimal impact.",
      icon: "/images/insights.png",
    },
    {
      title: "Secure, Trusted Operations",
      description: "Protect critical systems and sensitive data with enterprise-grade security, risk management, and compliance frameworks.",
      icon: "/images/security.png",
    },
    {
      title: "Grow Without Limits",
      description: "Our scalable services adapt with your business needs expanding teams, capabilities, and technology in sync with your success.",
      icon: "/images/grow.png",
    },
    {
      title: "Unify Your Operations",
      description: "Integrate with your existing tools ERP, CRM, collaboration platforms for a cohesive and efficient service experience.",
      icon: "/images/unify.png",
    },
    {
      title: "Accelerating Business Excellence",
      description: "Empower your enterprise with innovative solutions and guidance, enabling smarter decisions and sustainable growth.",
      icon: "/images/excellence.png",
    },
  ];
  

      

const MarketDifference = ({ heading }: MarketDifferenceProps) => {

  return (
    <section className="bg-[#0e0f11] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-Nunito mb-12">
                How We Differentiate from the <br className="hidden md:block"></br> Market
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {cards.map((card, index) => (
                <div key={index} className="space-y-4 mt-12">
                    <div className="flex justify-center">
                    <Image src={card.icon} alt={card.title} width={60} height={60} fill />
                    </div>
                    <h5 className="text-2xl font-Nunito font-semibold md:w-[60%] w-80 m-auto mb-4" style={{lineHeight: "32px;"}}>{card.title}</h5>
                    <p className="text-white-300 font-Nunito text-md md:w-[70%] w-80 m-auto">{card.description}</p>
                </div>
                ))}
            </div>
        </div>
  </section>

  );
};

export default MarketDifference;
