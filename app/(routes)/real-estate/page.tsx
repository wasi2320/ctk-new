import HeroSection from "@/app/components/HeroSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import RealEstateServicesSection from "@/app/components/sections/RealEstateServicesSection";
import RealEstateSolutionsSection from "@/app/components/sections/RealEstateSolutionsSection";
import OurPortfolioSection from "@/app/components/sections/nonProfit/OurPortfolioSection";

const RealEstatePage = () => {
  return (
    <div>
      <HeroSection
        title="Real Estate"
        description="We offer expert real estate services for buying, selling, leasing, and property management. Our team ensures smooth transactions, reliable tenant matching, and hassle-free property care. With strategic consulting and valuation, we help you make smart investment decisions and maximize returns."
        imageSrc="/svgs/realEstate.svg"
        cover={true}
      />
      <RealEstateServicesSection />
      <RealEstateSolutionsSection />
      <ProfessionalServices
        heading="We Help You Reimagine the Real Estate Industry"
        description="We provide comprehensive real estate solutions tailored to meet the unique needs of our clients. From buying and selling to leasing and property management, our expert team is dedicated to delivering seamless and efficient services. We combine market knowledge, personalized support, and innovative strategies to help you achieve your real estate goals with confidence."
      />
      <OurPortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default RealEstatePage;
