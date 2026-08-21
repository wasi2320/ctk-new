import BookCall from "@/app/components/sections/BookCall";

/**
 * Focused review offer. Gives contact-page visitors a concrete reason to fill
 * out the form instead of a generic "contact us". Sits
 * above the contact form.
 */
const includes = [
  {
    title: "AWS architecture and reliability",
    body: "Review the design decisions that affect availability, recovery, security, and scale.",
  },
  {
    title: "DevOps, CI/CD, and Amazon EKS",
    body: "Identify friction in delivery workflows, automation, Kubernetes operations, and rollback paths.",
  },
  {
    title: "Security and compliance controls",
    body: "Discuss infrastructure gaps related to access, encryption, logging, segmentation, and evidence.",
  },
  {
    title: "AWS cost and next priorities",
    body: "Connect cost visibility and optimization opportunities to the three actions that matter most.",
  },
];

export default function AuditOffer() {
  return (
    <section className="px-4 md:px-36 py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wider text-[#16212e] bg-[#16212e]/10 rounded-full px-4 py-1.5 mb-4">
          FOCUSED REVIEW · NO OBLIGATION
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What the first AWS review covers
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Choose the cloud concern that matters most. We will confirm fit within
          one business day, schedule a focused 30-minute conversation, and use
          the discussion to identify three practical next steps.
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
            Share your AWS priority in the form below.
          </p>
          <BookCall label="Prefer to talk now? Book a call" />
        </div>
      </div>
    </section>
  );
}
