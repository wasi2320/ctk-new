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
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <header className="mb-7 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </header>

        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl bg-white overflow-hidden"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden md:px-6">
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
              <div className="border-t border-gray-100 px-5 pb-5 pt-0 md:px-6">
                <p className="pt-3 leading-relaxed text-gray-600">
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
