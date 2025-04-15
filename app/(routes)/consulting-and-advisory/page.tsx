import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import ConsultingSection from "@/app/components/sections/ConsultingSection";
import WhyUsSection from "@/app/components/sections/WhyUsSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";

const ConsultingAndAdvisory = () => {
  return (
    <div>
      <HeroSection
        title="Expert Consulting and  Services Empowering Your Business"
        description="We help your business grow with tailored strategies and expert advice. We guide you through challenges to achieve lasting success."
        imageSrc="/Images/Consulting_Hero.png"
        showButton={false}
      />
      <TailoredSection />
      <ConsultingSection />
      <WhyUsSection />
      <TechDisplaySection />
    </div>
  );
};

export default ConsultingAndAdvisory;
