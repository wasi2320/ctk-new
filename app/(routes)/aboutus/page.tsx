import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import { pageMetadata } from "@/lib/page-metadata";
import { pageFaqs } from "@/lib/faqs";

export const metadata = pageMetadata("/aboutus");

/** Real, verifiable proof points (sourced from case studies + partner status). */
const stats = [
  { value: "AWS", label: "Advanced Tier Partner" },
  { value: "4.9 / 5", label: "on Clutch, 9 verified reviews" },
  { value: "99.99%", label: "uptime delivered on a SOC 2 healthcare platform" },
  { value: "~35%", label: "cloud cost cut on an Amazon EKS migration" },
  { value: "850ms → 320ms", label: "API latency improvement for a healthcare client" },
  { value: "SOC 2 · HIPAA · PCI DSS", label: "compliance built into the infrastructure" },
];

const values = [
  {
    title: "Engineering-first",
    body: "We are engineers, not resellers. We build and operate real production infrastructure, and we explain the tradeoffs in plain terms.",
  },
  {
    title: "Security & compliance by default",
    body: "Encryption, least-privilege access, and audit evidence go into the infrastructure from day one, not bolted on the week before an audit.",
  },
  {
    title: "Measurable outcomes",
    body: "We tie our work to numbers you can see: lower cloud cost, faster releases, higher uptime, and shorter recovery times.",
  },
  {
    title: "Partnership beyond launch",
    body: "We stay after go-live with managed operations, version upgrades, monitoring, and cost optimization.",
  },
];

const whatWeDo = [
  { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
  { name: "DevOps & CI/CD", href: "/devops" },
  { name: "Kubernetes & Amazon EKS", href: "/kubernetes" },
  { name: "Security & Compliance", href: "/security-and-compliance" },
  { name: "AI Automation", href: "/ai" },
  { name: "Full-Stack Development", href: "/web-solutions" },
];

const featured = [
  {
    href: "/goagalia-healthcare-workforce-management",
    title: "HIPAA-Compliant EKS for a Healthcare Platform",
    blurb: "~35% lower cost, 850ms to 320ms latency, 99.7% uptime on Amazon EKS.",
  },
  {
    href: "/soc-2-healthcare-aws-case-study",
    title: "SOC 2 Multi-AZ Healthcare Platform",
    blurb: "Passed a SOC 2 audit and reached 99.99% uptime on AWS.",
  },
  {
    href: "/hybrid-cloud-kubernetes-case-study",
    title: "Hybrid On-Prem + Cloud Kubernetes",
    blurb: "99.9% uptime and sub-35ms latency across on-premise and cloud.",
  },
];

export default function AboutUsPage() {
  return (
    <div>
      <HeroSection
        title="About CodetoKloud"
        description="CodetoKloud is a US-registered IT consulting company and AWS Advanced Tier Partner based in Naperville, Illinois. We help businesses design, build, secure, and run production cloud infrastructure."
        imageSrc="/Images/aboutus/aboutHeader.png"
        cover
        buttonText="Book a free consultation"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Who we are */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Who we are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a team of cloud and DevOps engineers who build infrastructure
            that is scalable, secure, and cost-efficient. As an AWS Advanced Tier
            Partner, we work with startups and established companies to modernize
            on AWS, automate delivery, run Kubernetes, and meet compliance
            requirements like SOC 2, HIPAA, and PCI DSS.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            The difference shows up in the results: real production platforms,
            with real numbers behind them.
          </p>
        </div>
      </section>

      {/* Real proof stats */}
      <section className="py-20 px-4 md:px-36 bg-[#081617] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            The proof is in the work
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-14">
            Verifiable results from real client engagements.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {s.value}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            How we work
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#152F27] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-4 md:px-36 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            What we do
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-5 hover:border-[#152F27] hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-gray-900">{w.name}</span>
                <span aria-hidden="true" className="text-[#152F27]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Proven results
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="block rounded-2xl border border-gray-200 p-6 hover:border-[#152F27] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={pageFaqs["/aboutus"]}
        heading="About CodetoKloud: FAQs"
        description="Common questions about who we are and how we work."
      />

      {/* CTA */}
      <section className="py-16 px-4 md:px-36 bg-[#000209] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s build something reliable
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us what you are working on and we will show you how we would
            approach it, with a free, no-obligation review.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#000209] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
