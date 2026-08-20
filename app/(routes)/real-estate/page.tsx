import HeroSection from "@/app/components/HeroSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import RealEstateServicesSection from "@/app/components/sections/RealEstateServicesSection";
import RealEstateSolutionsSection from "@/app/components/sections/RealEstateSolutionsSection";
import OurPortfolioSection from "@/app/components/sections/nonProfit/OurPortfolioSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/real-estate");
const RealEstatePage = () => {
  return (
    <div>
      <HeroSection
        title="Real Estate"
        description="We build the cloud platforms and software that modern real estate businesses run on. From listing and transaction platforms to tenant portals, property-management systems, and data and valuation tools, we deliver the engineering that keeps your systems fast, secure, and ready to scale."
        imageSrc="/svgs/realEstate.svg"
      />
      <RealEstateServicesSection />
      <RealEstateSolutionsSection />
      <ProfessionalServices
        heading="We Help You Reimagine the Real Estate Industry"
        description="We build the cloud platforms and software that modern real estate businesses run on. From listing and property-management platforms to data, security, and automation, we deliver the engineering support that keeps your systems fast, reliable, and ready to scale."
      />
      <OurPortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default RealEstatePage;
