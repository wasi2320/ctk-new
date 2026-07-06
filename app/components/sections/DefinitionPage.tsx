import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import { type FaqItem } from "@/lib/structured-data";

export interface DefinitionData {
  path: string;
  heroTitle: string;
  intro: string;
  heroImage: string;
  /** The exact question this page answers (H2). */
  capsuleQuestion: string;
  /** A self-contained, citable definition (40-80 words), names CodetoKloud. */
  capsuleAnswer: string;
  /** Expanded explanation sections. */
  sections: { title: string; body: string }[];
  faq: FaqItem[];
  crossLinks?: { name: string; href: string }[];
  ctaHeading?: string;
}

export default function DefinitionPage({ data }: { data: DefinitionData }) {
  return (
    <div>
      <HeroSection
        title={data.heroTitle}
        description={data.intro}
        imageSrc={data.heroImage}
        cover
        buttonText="Book a free consultation"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule — the citable definition, first thing on the page. */}
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

      {/* Expanded sections */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          {data.sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {s.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection items={data.faq} heading="Frequently Asked Questions" />

      {data.crossLinks && data.crossLinks.length > 0 && (
        <section className="px-4 md:px-36 py-8 bg-white">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-3">
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

      {/* CTA */}
      <section className="py-16 px-4 md:px-36 bg-[#000209] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.ctaHeading || "Talk to an AWS expert"}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us what you are working on and we will review your setup and
            recommend the highest-impact next steps, with no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#000209] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </section>

      <RelatedServices currentPath={data.path} />
    </div>
  );
}
