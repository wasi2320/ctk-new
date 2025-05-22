import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import ConsultingSection from "@/app/components/sections/ConsultingSection";
import WhyUsSection from "@/app/components/sections/WhyUsSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const ConsultingAndAdvisory = () => {
  const consultingTechStack = {
    heading: "Consulting & Advisory Technologies",
    description:
      "Leveraging data analytics and business intelligence tools to provide strategic insights and transformative solutions:",
    marqueeItems: [
      "/Images/PNGSS/tableau-logo.png",
      "/Images/PNGSS/power-bi-logo.png",
      "/Images/PNGSS/salesforce-logo.png",
      "/Images/PNGSS/jira-logo.png",
      "/Images/PNGSS/ms-teams-logo.png",
      "/Images/PNGSS/slack-logo.png",
      "/Images/PNGSS/asana-logo.png",
    ],
  };

  return (
    <div>
      <HeroSection
        title="Expert Consulting and  Services Empowering Your Business"
        description="We help your business grow with tailored strategies and expert advice. We guide you through challenges to achieve lasting success."
        imageSrc="/Images/Consulting_Hero.png"
        cover={true}
      />
      <TailoredSection />
      <ConsultingSection />
      <WhyUsSection />
      <TechDisplaySection techDisplaySection={consultingTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default ConsultingAndAdvisory;
