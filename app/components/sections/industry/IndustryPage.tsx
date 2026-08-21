import Link from "next/link";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

export type IndustryLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type IndustryPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  visualTitle: string;
  visualLabel: string;
  visualSteps: Array<{
    title: string;
    description: string;
  }>;
  overview: {
    question: string;
    answer: string;
    bestFit: string;
    firstConversation: string;
  };
  problems: Array<{
    title: string;
    description: string;
  }>;
  capabilities: IndustryLink[];
  caveat: {
    title: string;
    description: string;
  };
  engagement: Array<{
    title: string;
    description: string;
  }>;
  related: IndustryLink[];
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10h12m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#ff9900]"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="m4 10 4 4 8-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function IndustryPage({
  content,
}: {
  content: IndustryPageContent;
}) {
  return (
    <main className="overflow-hidden bg-white text-[#16212e]">
      <section className="relative isolate px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_52%,#fff8ee_100%)]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#0972d3]">
              {content.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
              {content.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {content.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#industry-contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff9900] px-7 py-3 font-bold text-[#16212e] shadow-lg transition hover:bg-[#f4a624] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0972d3]"
              >
                {content.primaryCta}
              </Link>
              <Link
                href="#industry-work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-[#16212e] transition hover:border-[#0972d3] hover:text-[#0972d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0972d3]"
              >
                See relevant work
                <ArrowIcon />
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              A focused 30-minute conversation. Fit confirmed within one business day.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-[#0972d3]/10 blur-3xl"
            />
            <div className="rounded-[28px] border border-slate-200 bg-[#101c2b] p-5 shadow-2xl sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffb84d]">
                    Industry priority map
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    {content.visualTitle}
                  </h2>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ff9900] text-[#16212e]">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 18V9m7 9V5m7 13v-6M3 18h18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
              </div>
              <ol aria-label={content.visualLabel} className="space-y-3">
                {content.visualSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid grid-cols-[42px_1fr] items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0972d3] text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0972d3]">
              Direct answer
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              {content.overview.question}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {content.overview.answer}
            </p>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
            <div className="flex gap-3">
              <CheckIcon />
              <div>
                <h3 className="font-bold">Best fit</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {content.overview.bestFit}
                </p>
              </div>
            </div>
            <div className="mt-7 flex gap-3 border-t border-slate-200 pt-7">
              <CheckIcon />
              <div>
                <h3 className="font-bold">First conversation</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {content.overview.firstConversation}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#101c2b] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb84d]">
            Problems we help solve
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            Start with the operational constraint, not a technology shopping list
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.problems.map((problem, index) => (
              <article
                key={problem.title}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-7"
              >
                <span className="text-sm font-bold text-[#ffb84d]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{problem.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0972d3]">
              Relevant capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Engineering support aligned to the work in front of you
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {content.capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#0972d3]/50 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">{capability.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {capability.description}
                </p>
                <Link
                  href={capability.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#0972d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0972d3]"
                >
                  {capability.label}
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>

          <aside className="mt-10 grid gap-5 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:grid-cols-[auto_1fr] sm:p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff9900] text-[#16212e]">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8v5m0 3h.01M5 20h14a2 2 0 0 0 1.73-3L13.73 5a2 2 0 0 0-3.46 0l-7 12A2 2 0 0 0 5 20Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">{content.caveat.title}</h2>
              <p className="mt-2 max-w-5xl leading-7 text-slate-700">
                {content.caveat.description}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0972d3]">
              Practical engagement path
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Move from one priority to a supported production change
            </h2>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {content.engagement.map((step, index) => (
              <li
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#16212e] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="industry-work" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0972d3]">
                Continue your research
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Relevant services and implementation examples
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-[#0972d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0972d3]"
            >
              Discuss your priority
              <ArrowIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#0972d3]/50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0972d3]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0972d3]">
                  {item.label}
                </span>
                <h3 className="mt-4 text-xl font-bold group-hover:text-[#0972d3]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#0972d3]">
                  Read more
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="industry-contact" className="scroll-mt-20">
        <ContactUsSection />
      </div>
    </main>
  );
}
