import Link from "next/link";

export type ServiceContentItem = {
  title: string;
  body: string;
};

export type ServiceProofItem = {
  href: string;
  title: string;
  body: string;
  metrics?: string[];
};

type ServiceBuyerSectionsProps = {
  definition: {
    heading: string;
    answer: string;
    detail?: string;
  };
  deliverables: {
    heading: string;
    intro: string;
    items: ServiceContentItem[];
  };
  process: {
    heading: string;
    intro: string;
    steps: ServiceContentItem[];
  };
  bestFit: {
    heading: string;
    intro: string;
    scenarios: string[];
  };
  proof?: {
    heading: string;
    intro: string;
    items: ServiceProofItem[];
  };
  cta: {
    heading: string;
    body: string;
    label: string;
  };
};

function getBalancedGridSpan(itemCount: number, index: number) {
  const isLastItem = index === itemCount - 1;
  const mediumSpan = itemCount % 2 === 1 && isLastItem
    ? "md:col-span-12"
    : "md:col-span-6";

  let largeSpan = "lg:col-span-4";

  if (itemCount === 1) {
    largeSpan = "lg:col-span-12";
  } else if (itemCount === 2) {
    largeSpan = "lg:col-span-6";
  } else if (itemCount % 3 === 1 && index >= itemCount - 4) {
    largeSpan = "lg:col-span-6";
  } else if (itemCount % 3 === 2 && index >= itemCount - 2) {
    largeSpan = "lg:col-span-6";
  }

  return `${mediumSpan} ${largeSpan}`;
}

export default function ServiceBuyerSections({
  definition,
  deliverables,
  process,
  bestFit,
  proof,
  cta,
}: ServiceBuyerSectionsProps) {
  return (
    <>
      <section className="bg-gray-50 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
            {definition.heading}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {definition.answer}
          </p>
          {definition.detail && (
            <p className="mt-3 leading-relaxed text-gray-600">
              {definition.detail}
            </p>
          )}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
              {deliverables.heading}
            </h2>
            <p className="text-lg text-gray-600">{deliverables.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {deliverables.items.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-gray-200 p-5 transition-colors hover:border-[#16212e] ${getBalancedGridSpan(deliverables.items.length, index)}`}
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-10">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
              {process.heading}
            </h2>
            <p className="mb-6 text-lg text-gray-600">{process.intro}</p>
            <ol className="space-y-5">
              {process.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16212e] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-gray-600">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit rounded-3xl bg-[#16212e] p-6 text-white md:p-7">
            <h2 className="text-2xl font-bold md:text-3xl">
              {bestFit.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-white/80">
              {bestFit.intro}
            </p>
            <ul className="mt-5 space-y-3">
              {bestFit.scenarios.map((scenario) => (
                <li key={scenario} className="flex gap-3 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff9900]"
                  />
                  <span>{scenario}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {proof && proof.items.length > 0 && (
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                {proof.heading}
              </h2>
              <p className="text-lg text-gray-600">{proof.intro}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
              {proof.items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group rounded-2xl border border-gray-200 p-6 transition-colors hover:border-[#16212e] ${getBalancedGridSpan(proof.items.length, index)} ${proof.items.length === 1 ? "bg-gray-50 lg:p-8" : ""}`}
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#b85f00]">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    {item.body}
                  </p>
                  {item.metrics && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-800"
                        >
                          {metric}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-4 inline-block font-semibold text-[#16212e]">
                    Read the case study
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#16212e] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">{cta.heading}</h2>
            <p className="mt-3 text-lg leading-relaxed text-white/80">
              {cta.body}
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-[#ff9900] px-7 py-3 font-bold text-[#16212e] transition-colors hover:bg-white"
          >
            {cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
