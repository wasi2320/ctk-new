import HeroSection from "@/app/components/HeroSection";
import EcommerceExpertiseTailoredSection from "@/app/components/sections/EcommerceExpertiseTailoredSection";
import EcommerceTransformative from "@/app/components/sections/EcommerceTransformative";
import EcommerceSolution from "@/app/components/sections/EcommerceSolution";
import EcommerceFutureHealthcare from "@/app/components/sections/EcommerceFutureHealthcare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="E-Commerce"
        description="E-Commerce blends retail with innovative technology to create smarter, faster, and more personalized shopping experiences. From online storefronts to cloud-powered platforms, it enables businesses to innovate, scale, and meet the evolving needs of customers worldwide."
        imageSrc="/Images/healthcare.png"
        buttonText="Let’s connect"
        buttonLink="/contact"
      />
      <EcommerceExpertiseTailoredSection />
      <EcommerceTransformative />
      <EcommerceSolution />
      <EcommerceFutureHealthcare />
      <ContactUsSection />
    </div>
  );
};

export default CloudMigration;
