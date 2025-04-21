import { MISSION_SECTION } from "@/utils/data/missionSection";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="flex justify-between items-center md:gap-5 bg-[url('/Images/Mission_Bg.png')] bg-cover bg-center bg-no-repeat md:h-[60vh] h-[35vh] mt-12 md:mt-0">
      <div className="md:w-1/2 w-[45%] h-full">
        <Image
          src={MISSION_SECTION.leftImage}
          alt=""
          height={500}
          width={500}
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 w-[60%] text-white md:mr-20 mr-4">
        <h2 className="md:text-5xl text-xl text-center md:text-start">{MISSION_SECTION.heading}</h2>
        <p className="md:text-xl md:mt-7 mt-3 text-xs text-center md:text-start">{MISSION_SECTION.description}</p>
      </div>
    </section>
  );
};

export default MissionSection;
