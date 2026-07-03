import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { faqPageSchema } from "@/lib/structured-data";
import { pageFaqs } from "@/lib/faqs";

export const metadata = pageMetadata("/faq");

// Topic groups, in display order. Each maps to its Q&A set in lib/faqs.ts.
const groups = [
  { title: "Cloud Services", key: "/cloud-service" },
  { title: "DevOps", key: "/devops" },
  { title: "AI & Automation", key: "/ai" },
  { title: "Security & Compliance", key: "/security-and-compliance" },
  { title: "About CodetoKloud", key: "/aboutus" },
];

export default function FaqPage() {
  // One combined FAQPage schema for the whole page (all topics).
  const allItems = groups.flatMap((g) => pageFaqs[g.key] ?? []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Answers about CodetoKloud&apos;s cloud, DevOps, AI, and security
            services. Open a topic to see all of its questions.
          </p>
        </header>

        <div className="space-y-4">
          {groups.map((group) => {
            const items = pageFaqs[group.key] ?? [];
            if (items.length === 0) return null;

            return (
              <details
                key={group.key}
                className="group border border-gray-200 rounded-xl bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {group.title}
                    <span className="ml-2 text-base font-normal text-gray-400">
                      ({items.length})
                    </span>
                  </h2>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-3xl leading-none text-gray-400 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pt-0 space-y-6 border-t border-gray-100">
                  {items.map((item, index) => (
                    <div key={index} className="pt-5">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </div>

      <JsonLd data={faqPageSchema(allItems)} />
    </div>
  );
}
