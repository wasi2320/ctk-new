import { nonProfitSectionData } from "@/utils/data/NonProfitSectionData";

export default function DifferentiateSection() {
    return (
        <section
            className="w-full py-16 px-2 md:px-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Images/nonprofit/Differenciate.svg')" }}
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-14 text-center">
                    How we Differentiate from the Market?
                </h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                    {nonProfitSectionData.differentiateData.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="h-1 w-8 bg-white mt-2 shrink-0" />
                            <div>
                                <div className="text-white text-lg md:text-xl font-bold mb-2">
                                    {item.title}
                                </div>
                                <div className="text-white text-base md:text-lg opacity-80">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

