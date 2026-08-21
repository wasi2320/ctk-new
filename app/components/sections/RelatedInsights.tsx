import Link from "next/link";

export interface RelatedInsightItem {
  href: string;
  title: string;
  description: string;
}

interface RelatedInsightsProps {
  heading?: string;
  intro?: string;
  items: readonly RelatedInsightItem[];
}

export default function RelatedInsights({
  heading = "Related insights",
  intro = "Practical guidance for planning, reviewing, and operating production systems.",
  items,
}: RelatedInsightsProps) {
  return (
    <section className="bg-[#f4f7fb] px-4 py-12 md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0972d3]">
            Engineering guides
          </p>
          <h2 className="mb-3 text-3xl font-bold text-[#16212e] md:text-4xl">
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-[#52677c] md:text-lg">
            {intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.href}
              className="rounded-2xl border border-[#d8e2ee] bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-bold leading-snug text-[#16212e]">
                {item.title}
              </h3>
              <p className="mb-5 leading-relaxed text-[#52677c]">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="font-semibold text-[#0972d3] hover:text-[#0b5cad]"
              >
                Read the guide
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
