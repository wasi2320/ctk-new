import HeroSection from "@/app/components/HeroSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import OurPortfolioSection from "@/app/components/sections/nonProfit/OurPortfolioSection";
import NonProfitStatsSection from "@/app/components/sections/nonProfit/statsSection";
import SaaSBusinessSection from "@/app/components/sections/SaaSBusinessSection";
import SaaSDifferentiateSection from "@/app/components/sections/SaaSDifferentiateSection";

const SaaSISVPage = () => {
  //   const securityTechStack = {
  //     heading: "Saas and ISV",
  //     description:
  //       "SaaS providers and Independent Software Vendors thrive on innovation, speed, and scalability—Code to Cloud delivers just that. From full-cycle web and app development to AI, DevOps, and cloud-native architecture, we equip ISVs with future-ready tools to launch, evolve, and optimize software products. Our solutions are designed to streamline development, reduce time-to-market, and ensure seamless deployment in dynamic digital environments.",
  //     marqueeItems: [
  //       "/Images/PNGSS/aws.png",
  //       "/Images/PNGSS/cloudflare-logo.png",
  //       "/Images/PNGSS/vault-hashicorp.png",
  //       "/Images/PNGSS/soc2-logo.png",
  //     ],
  //   };

  return (
    <div>
      <HeroSection
        title="Saas and ISV"
        description="SaaS providers and Independent Software Vendors thrive on innovation, speed, and scalability—Code to Cloud delivers just that. From full-cycle web and app development to AI, DevOps, and cloud-native architecture, we equip ISVs with future-ready tools to launch, evolve, and optimize software products. Our solutions are designed to streamline development, reduce time-to-market, and ensure seamless deployment in dynamic digital environments."
        imageSrc="/svgs/saas-isv.svg"
        cover={true}
      />
      <NonProfitStatsSection />
      <SaaSBusinessSection />
      <SaaSDifferentiateSection />
      <OurPortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default SaaSISVPage;
