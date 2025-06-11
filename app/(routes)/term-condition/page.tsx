import { termsAndConditionsData } from "@/utils/data/termsAndConditions";

export default function TermsAndConditionsPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{termsAndConditionsData.title}</h1>
            {termsAndConditionsData.sections.map((section, idx) => (
                <div key={idx} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                    <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
                </div>
            ))}
        </div>
    );
}

