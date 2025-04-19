import { CLOUD_DIFFERENTIATE__SECTION } from "@/utils/data/cloudDifferentiateSection";

const CloudDifferentiateSection = () => {
  return (
    <section className="md:px-32 px-4 pt-12 pb-20 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-4xl text-3xl nunito-bold font-bold text-center">
        {CLOUD_DIFFERENTIATE__SECTION.heading}
      </h2>
      <div className="mt-14">
        {CLOUD_DIFFERENTIATE__SECTION.cards.map((card, index) => (
          <div key={index} className="flex">
            <div className="md:w-[30%] w-[40%] border-r-3 border-[#1D493A] md:mr-12 mr-6">
              <h3 className="nunito-bold font-semibold md:text-xl">{card.title}</h3>
            </div>
            <div className="md:w-[70%] w-[60%]">
              <p className="text-white/90 text-sm md:text-base mb-10">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudDifferentiateSection;
