import { CLOUD_DIFFERENTIATE__SECTION } from "@/utils/data/cloudDifferentiateSection";

const CloudDifferentiateSection = () => {
  return (
    <section className="md:px-32 px-4 pt-12 pb-20 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-4xl text-2xl nunito-bold font-bold text-center">
        {CLOUD_DIFFERENTIATE__SECTION.heading}
      </h2>
      <div className="mt-14">
        {CLOUD_DIFFERENTIATE__SECTION.cards.map((card, index) => (
          <div key={index} className="flex">
            <div className="md:w-[30%] border-r-3 border-[#1D493A] mr-12">
              <h3 className="nunito-bold font-semibold md:text-xl mb-16">{card.title}</h3>
            </div>
            <div className="md:w-[70%]">
              <p className="text-white/90">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudDifferentiateSection;
