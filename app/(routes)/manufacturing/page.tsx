import HeroSection from "@/app/components/HeroSection";
import ManufacturingExpertiseTailoredSection from "@/app/components/sections/ManufacturingExpertiseTailoredSection";
import ManufacturingSolution from "@/app/components/sections/ManufacturingSolution";
import ManufacturingTransformative from "@/app/components/sections/ManufacturingTransformative";
import ManufacturingReimagine from "@/app/components/sections/ManufacturingReimagine";
import ManufacturingFutureHealthcare from "@/app/components/sections/ManufacturingFutureHealthcare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="Manufacturing"
        description="Manufacturing solutions blend industrial processes with innovative technology to create smarter, faster, and more personalized production.   
        From automated factories to cloud-powered platforms, it enables enterprises to innovate, scale, and meet the evolving needs of the market."
        imageSrc="/Images/manufacturing.svg"
        buttonText="Let’s connect"
        buttonLink="/contact"
      />
      <ManufacturingExpertiseTailoredSection />
      <ManufacturingSolution />
      <ManufacturingReimagine />
      <ManufacturingTransformative />
      <ManufacturingFutureHealthcare />
      <ContactUsSection />
    </div>
  );
};

export default CloudMigration;
