import React from "react";

interface Metric {
  category: string;
  description: string;
}

interface CaseStudyMetricsProps {
  metrics: Metric[];
}

const bgColors = ["bg-green-700", "bg-blue-700", "bg-teal-700", "bg-gray-700"];
const descColors = [
  "bg-green-600",
  "bg-blue-600",
  "bg-teal-600",
  "bg-gray-600",
];

const CaseStudyMetrics: React.FC<CaseStudyMetricsProps> = ({ metrics }) => (
  <section className="py-12 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Outcomes & Success Metrics
      </h2>
      <p className="text-center mb-8">
        Significant reduction in scam calls, improved uptime, enhanced
        scalability, and efficient AI integration.
      </p>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="grid grid-cols-4 gap-4">
            <div
              className={`p-4 text-white font-medium ${bgColors[index % 4]}`}
            >
              {metric.category}
            </div>
            <div
              className={`col-span-3 p-4 text-white ${descColors[index % 4]}`}
            >
              {metric.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyMetrics;
