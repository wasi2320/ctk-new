import { INFRASTRUCTURE_SECTION } from "@/utils/data/infrastructureSection";
import Image from "next/image";
import Link from "next/link";

const InfrastructureSection = () => {
  return (
    <section className="py-12">
      <h2 className="md:text-5xl text-2xl text-center md:w-7/12 mx-auto">
        {INFRASTRUCTURE_SECTION.heading}
      </h2>
      <p className="text-center md:text-lg md:w-5/12 mx-auto my-5">
        {INFRASTRUCTURE_SECTION.description}
      </p>
      <div className="flex items-center md:w-8/12 mx-auto">
        <div className="md:w-[60%] relative md:-right-10 -right-5">
          <div className="flex flex-col md:gap-6 gap-3">
            {INFRASTRUCTURE_SECTION.cards.map((card, index) => (
              <div
                key={index}
                className="shadow-2xl bg-white md:py-4 py-2 md:px-8 px-4 md:rounded-3xl rounded-2xl"
              >
                <h3 className="md:text-4xl text-2xl mb-2">{card.title}</h3>
                <p className="md:text-2xl">{card.description}</p>
                <div className="grid md:grid-cols-2 md:gap-y-3 gap-y-2 font-semibold mt-3">
                  {/* {card.pages.map((page, index) => (
                    <div key={index} className="flex justify-center">
                      <Link href={page.url}>
                        <p className="md:text-base text-xs text-center">{page.name}</p>
                      </Link>
                    </div>
                  ))} */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] h-[600px] mr-4 md:mr-0">
          <Image
            src={INFRASTRUCTURE_SECTION.image}
            alt=""
            height={500}
            width={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
