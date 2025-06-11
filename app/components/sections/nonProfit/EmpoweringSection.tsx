import { nonProfitSectionData } from "@/utils/data/NonProfitSectionData";

export default function EmpoweringSection() {
    return (
        <section className="w-full py-12 px-2 md:px-0 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-[#193728] text-2xl md:text-3xl font-bold mb-10 text-center">
                    Empowering Top NGOs<br className="hidden md:block" /> with Seamless Integration
                </h2>
                <div className="w-full flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch">
                    {nonProfitSectionData.empoweringData.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-1 bg-white border border-gray-300 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center min-w-[260px] max-w-md mx-auto md:mx-0"
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#193728]">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed whitespace-pre-line">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



