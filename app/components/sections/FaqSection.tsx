import JsonLd from "@/app/components/JsonLd";
import { faqPageSchema, type FaqItem } from "@/lib/structured-data";

/**
 * On-page FAQ section. Renders the Q&A visibly (native <details>, so it is fully
 * server-rendered and every answer stays in the DOM for AI/search extraction)
 * AND emits FAQPage JSON-LD co-located with the topic it answers.
 *
 * Use one FaqSection (emitSchema on) per page to avoid duplicate FAQPage schema.
 */
export default function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  description,
  emitSchema = true,
}: {
  items: FaqItem[];
  heading?: string;
  description?: string;
  emitSchema?: boolean;
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-[900px] mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </header>

        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl bg-white overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-3xl leading-none text-gray-400 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed pt-4">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {emitSchema && <JsonLd data={faqPageSchema(items)} />}
    </section>
  );
}
