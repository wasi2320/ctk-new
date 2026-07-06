import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import { type FaqItem } from "@/lib/structured-data";

export interface ComparisonData {
  path: string;
  heroTitle: string;
  intro: string;
  heroImage: string;
  /** Answer capsule — definition-first, standalone, names the company. */
  capsuleQuestion: string;
  capsuleAnswer: string;
  /** Table headers; first column is the option name. */
  tableHeaders: string[];
  /** Each row: [optionName, ...cells] matching tableHeaders. */
  tableRows: string[][];
  /** "Which should you choose" guidance. */
  recommendation: { title: string; body: string }[];
  faq: FaqItem[];
  crossLinks?: { name: string; href: string }[];
}

export default function ComparisonPage({ data }: { data: ComparisonData }) {
  return (
    <div>
      <HeroSection
        title={data.heroTitle}
        description={data.intro}
        imageSrc={data.heroImage}
        cover
        buttonText="Talk to an AWS expert"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {data.capsuleQuestion}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {data.capsuleAnswer}
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Comparison at a Glance
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[#152F27] text-white">
                  {data.tableHeaders.map((h) => (
                    <th key={h} className="px-5 py-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {data.tableRows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-4 ${
                          ci === 0 ? "font-semibold text-gray-900" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-16 px-4 md:px-36 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Which Should You Choose?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {data.recommendation.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#152F27] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto">
            Not sure which fits your workload? CodetoKloud, an AWS Advanced Tier
            Partner, helps teams choose and then builds it.{" "}
            <Link
              href="/contact"
              className="text-[#152F27] font-semibold underline hover:no-underline"
            >
              Get a free recommendation
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqSection items={data.faq} heading="Frequently Asked Questions" />

      {data.crossLinks && data.crossLinks.length > 0 && (
        <section className="px-4 md:px-36 py-8 bg-white">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
            <span className="text-gray-600 font-medium">Related:</span>
            {data.crossLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#152F27] font-medium underline hover:no-underline"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <RelatedServices currentPath={data.path} />
    </div>
  );
}
