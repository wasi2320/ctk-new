import { UIUX_BUSINESS_SECTION } from "@/utils/data/uiUxBusinessSection";
import Image from "next/image";

const UiUxBusinessSection = () => {
  return (
    <section className="md:px-28 px-4 py-16">
      <h2 className="md:text-4xl text-3xl nunito-bold font-bold text-center">
        {UIUX_BUSINESS_SECTION.heading}
      </h2>
      <div className="grid md:grid-cols-2 mt-14 gap-12">
        {UIUX_BUSINESS_SECTION.cards.map((card, index) => (
          <div 
            key={index} 
            className={`${index === 3 ? 'md:col-start-2' : ''}`}
          >
            {card.image ? (
              <div className="relative w-full h-[180px] md:-mt-10">
                <Image
                  src={card.image}
                  alt="UI/UX Business Benefits"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <>
                <div className="flex md:gap-5 gap-2.5 mb-2">
                  <Image src="/Images/Tick.svg" alt="" width={20} height={20} />
                  <h3 className="md:text-2xl text-xl nunito-bold font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="md:text-xl md:ml-10 ml-7">{card.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UiUxBusinessSection;