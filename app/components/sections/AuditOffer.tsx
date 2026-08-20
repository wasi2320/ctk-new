import BookCall from "@/app/components/sections/BookCall";

/**
 * Free-audit offer. Gives contact-page visitors a concrete reason to fill out
 * the form (a no-obligation review) instead of a generic "contact us". Sits
 * above the contact form.
 */
const includes = [
  {
    title: "AWS cost & right-sizing review",
    body: "Where you're overspending on AWS and the fastest ways to cut it.",
  },
  {
    title: "DevOps & CI/CD maturity check",
    body: "Gaps in your pipelines, automation, and release process.",
  },
  {
    title: "Kubernetes / EKS reliability & security",
    body: "A review of your cluster setup, autoscaling, and hardening.",
  },
  {
    title: "Prioritized action plan",
    body: "Clear, ranked recommendations you can act on right away.",
  },
];

export default function AuditOffer() {
  return (
    <section className="px-4 md:px-36 py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wider text-[#16212e] bg-[#16212e]/10 rounded-full px-4 py-1.5 mb-4">
          FREE · NO OBLIGATION
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What your free audit includes
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Tell us about your setup and our AWS Advanced Tier Partner team will
          review your cloud, pipelines, and Kubernetes environment, then send
          back prioritized recommendations. No cost, no obligation, and we
          reply within 1 business day.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {includes.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16212e] text-white text-sm font-bold"
              >
                ✓
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-gray-800 font-medium">
            👇 Fill out the form below to claim your free audit.
          </p>
          <BookCall label="Prefer to talk now? Book a call →" />
        </div>
      </div>
    </section>
  );
}
