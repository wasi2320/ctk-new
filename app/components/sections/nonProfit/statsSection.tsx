import Image from "next/image";
import { nonProfitSectionData } from "@/utils/data/NonProfitSectionData";

export default function NonProfitStatsSection() {
    return (
        <section
            className="w-full py-12 px-2 md:px-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('/Images/nonprofit/nonprofit-Section2_bg.svg')",
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
                    {nonProfitSectionData.title}
                </h2>
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
                    {nonProfitSectionData.stats.map((stat, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center text-center px-2">
                            <div className="h-2 w-12 bg-white rounded-full mb-4" />
                            <div className="text-white text-5xl md:text-6xl font-bold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white text-lg md:text-xl font-normal opacity-80">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

