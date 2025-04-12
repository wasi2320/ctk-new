import { MISSION_SECTION } from "@/utils/data/missionSection";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="flex justify-between items-center gap-5 bg-[url('/Images/Mission_Bg.png')] bg-cover bg-center bg-no-repeat h-[60vh]">
      <div className="md:w-1/2 h-full">
        <Image
          src={MISSION_SECTION.leftImage}
          alt=""
          height={500}
          width={500}
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 text-white md:mr-20">
        <h2 className="md:text-5xl text-3xl">{MISSION_SECTION.heading}</h2>
        <p className="md:text-xl mt-7">{MISSION_SECTION.description}</p>
      </div>
    </section>
  );
};

export default MissionSection;
