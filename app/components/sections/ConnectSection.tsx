import { CONNECT_SECTION } from "@/utils/data/connectSection";

const ConnectSection = () => {
  return (
    <section className="py-8 px-4 md:px-20 bg-[url('/Images/Partner_Bg.png')] bg-cover bg-center bg-no-repeat flex justify-between items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-6xl text-white">
          {CONNECT_SECTION.heading}
        </h2>
      </div>
      <div className="md:w-[40%] space-y-5">
        <h3 className="text-white md:text-3xl">{CONNECT_SECTION.subHeading}</h3>
        <div className="bg-[#152F27] p-1.5 flex justify-between items-center rounded-full">
          <input type="email" placeholder={CONNECT_SECTION.placeholder} className="text-white outline-none ml-6 text-lg w-7/12" />
          <button className="rounded-full nunito-medium font-semibold px-9 py-2 bg-white text-[#1C3D7A] cursor-pointer text-lg">
            {CONNECT_SECTION.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
