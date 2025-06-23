import HeroSection from "@/app/components/HeroSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import OurPortfolioSection from "@/app/components/sections/nonProfit/OurPortfolioSection";
import NonProfitStatsSection from "@/app/components/sections/nonProfit/statsSection";
import SMBBusinessSection from "@/app/components/sections/SMBBusinessSection";
import Image from "next/image";

const SMBPage = () => {
  return (
    <div>
      <HeroSection
        title="Small and Mid-Sized Business"
        description="Small and Mid-Sized Businesses need smart, cost-effective technology that drives results without complexity. At Code to Cloud, we deliver agile web and app development, UI/UX design, AI integration, and cloud services tailored to SMBs looking to grow, compete, and adapt in a fast-paced market. Whether you're scaling operations or digitizing your customer experience, our solutions help you move faster, smarter, and with confidence."
        imageSrc="/svgs/small-mid-bussiness.svg"
        cover={true}
      />
      <NonProfitStatsSection />
      <Image
        className="w-full h-full object-cover"
        src="/svgs/cover-business.svg"
        alt="Small and Mid-Sized Business"
        width={1000}
        height={1000}
      />
      <SMBBusinessSection />
      <OurPortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default SMBPage;
