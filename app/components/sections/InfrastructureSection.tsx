import { INFRASTRUCTURE_SECTION } from "@/utils/data/infrastructureSection";
import Image from "next/image";
import Link from "next/link";

const InfrastructureSection = () => {
  return (
    <section className="py-12">
      <h2 className="md:text-5xl text-center md:w-7/12 mx-auto">
        {INFRASTRUCTURE_SECTION.heading}
      </h2>
      <p className="text-center md:text-lg md:w-5/12 mx-auto my-5">
        {INFRASTRUCTURE_SECTION.description}
      </p>
      <div className="flex items-center md:w-8/12 mx-auto">
        <div className="md:w-[60%] relative -right-10">
          <div className="flex flex-col gap-6">
            {INFRASTRUCTURE_SECTION.cards.map((card, index) => (
              <div
                key={index}
                className="shadow-2xl bg-white py-4 px-8 rounded-3xl"
              >
                <h3 className="md:text-3xl mb-2 text-center">{card.title}</h3>
                <p className="md:text-lg text-center">{card.description}</p>
                <div className="grid md:grid-cols-2 gap-y-3 font-semibold mt-3">
                  {card.pages.map((page, index) => (
                    <div key={index} className="flex justify-center">
                      <Link href={page.url}>
                        <p>{page.name}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] h-[600px]">
          <Image
            src={INFRASTRUCTURE_SECTION.image}
            alt=""
            height={500}
            width={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
