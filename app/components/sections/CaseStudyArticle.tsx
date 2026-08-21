import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import RelatedServices from "@/app/components/sections/RelatedServices";
import JsonLd from "@/app/components/JsonLd";
import { caseStudySchema } from "@/lib/structured-data";

export interface CaseStudyData {
  /** Route path, e.g. "/soc-2-healthcare-aws-case-study" */
  path: string;
  /** Schema headline. */
  title: string;
  /** On-page H1. */
  heroTitle: string;
  /** Hero description / anonymized client framing. */
  intro: string;
  heroImage: string;
  /** Concise, descriptive alternative text for the architecture diagram. */
  heroImageAlt?: string;
  /** Description used for Article schema + metadata. */
  metaDescription: string;
  /** Problem paragraphs. */
  problem: string[];
  /** Solution items (keyworded H3 + prose). */
  solution: { title: string; body: string }[];
  /** Optional heading for the solution section. */
  solutionHeading?: string;
  /** Result bullets (concrete, real outcomes only). */
  results: string[];
  /** Optional heading for the result section. */
  resultHeading?: string;
  /** Optional metric pills, real, published numbers/labels only. */
  metrics?: string[];
  /** Technology chips. */
  stack: string[];
  /** Contextual internal links (service/compliance pages). */
  crossLinks?: { name: string; href: string }[];
}

export default function CaseStudyArticle({ data }: { data: CaseStudyData }) {
  return (
    <div>
      <JsonLd
        data={caseStudySchema({
          title: data.title,
          description: data.metaDescription,
          path: data.path,
          image: data.heroImage,
        })}
      />

      <HeroSection
        title={data.heroTitle}
        description={data.intro}
        imageSrc={data.heroImage}
        imageAlt={data.heroImageAlt}
        buttonText="Discuss this architecture"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {data.metrics && data.metrics.length > 0 && (
        <section className="px-4 md:px-36 pb-6">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
            {data.metrics.map((m) => (
              <span
                key={m}
                className="text-sm font-semibold text-[#16212e] bg-[#16212e]/10 rounded-full px-4 py-2"
              >
                {m}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Problem */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            The Challenge
          </h2>
          {data.problem.map((p, i) => (
            <p
              key={i}
              className="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            {data.solutionHeading || "What We Built"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.solution.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#16212e] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {data.resultHeading || "The Result"}
          </h2>
          <ul className="space-y-4">
            {data.results.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16212e] text-white text-sm font-bold"
                >
                  ✓
                </span>
                <span className="text-lg text-gray-700 leading-relaxed">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack */}
      <section className="py-14 px-4 md:px-36 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Technology
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.stack.map((t) => (
              <span
                key={t}
                className="text-sm font-medium text-gray-700 border border-gray-300 rounded-full px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      {data.crossLinks && data.crossLinks.length > 0 && (
        <section className="px-4 md:px-36 pb-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
            <span className="text-gray-600 font-medium">Related:</span>
            {data.crossLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#16212e] font-medium underline hover:no-underline"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Single CTA */}
      <section className="py-16 px-4 md:px-36 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planning a similar platform?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Share the constraint behind your cloud, delivery, Kubernetes, or
            compliance project. We will confirm fit and identify three useful
            priorities for the first conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book an AWS review
          </Link>
        </div>
      </section>

      <RelatedServices currentPath={data.path} />
    </div>
  );
}
