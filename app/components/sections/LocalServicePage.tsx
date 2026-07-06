import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import RelatedServices from "@/app/components/sections/RelatedServices";
import JsonLd from "@/app/components/JsonLd";
import { localBusinessSchema, type FaqItem } from "@/lib/structured-data";

export interface LocalData {
  path: string;
  /** City label, e.g. "Naperville, IL" */
  city: string;
  heroTitle: string;
  intro: string;
  heroImage: string;
  metaDescription: string;
  localIntro: string[];
  services: { name: string; href: string }[];
  whyLocal: { title: string; body: string }[];
  caseStudies: { href: string; title: string; blurb: string }[];
  faq: FaqItem[];
}

export default function LocalServicePage({ data }: { data: LocalData }) {
  return (
    <div>
      <JsonLd
        data={localBusinessSchema({
          city: data.city,
          path: data.path,
          description: data.metaDescription,
        })}
      />

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

      {/* Local intro */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            DevOps &amp; Kubernetes consulting in {data.city}
          </h2>
          {data.localIntro.map((p, i) => (
            <p
              key={i}
              className="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            What we help {data.city} businesses with
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between rounded-2xl border border-gray-200 px-6 py-5 hover:border-[#152F27] hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-gray-900">{s.name}</span>
                <span aria-hidden="true" className="text-[#152F27]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="py-16 px-4 md:px-36 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Why work with us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {data.whyLocal.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {w.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Recent results
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {data.caseStudies.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block rounded-2xl border border-gray-200 p-6 hover:border-[#152F27] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={data.faq}
        heading={`DevOps & Kubernetes consulting in ${data.city}: FAQs`}
      />

      {/* CTA */}
      <section className="py-16 px-4 md:px-36 bg-[#000209] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s talk about your {data.city} project
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us what you are building and we will review your setup and
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
