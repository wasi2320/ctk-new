export default function MetricsDisplay({
  metrics,
}: {
  metrics: {
    category: string;
    description: string;
    bgColor: string;
    width: string;
  }[];
}) {
  return (
    <div className="w-full  p-12 mx-auto shadow-xl bg-[url('/Images/section_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-start">
            Outcomes & Success Metrics
          </h2>
          <p className="text-2xl text-start mb-8">
            Significant reduction in scam calls, improved uptime, enhanced
            scalability, and efficient AI integration.
          </p>
        </div>
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex mb-[30px] flex-col sm:flex-row relative "
          >
            {/* <div className="absolute inset-y-0 left-0 w-1 bg-black/10"></div> */}
            <div
              className={`${metric.bgColor} text-white p-6 sm:w-1/4 flex items-center justify-center sm:justify-start `}
            >
              <h3 className="text-xl font-bold text-center sm:text-left">
                {metric.category}
              </h3>
            </div>
            <div
              className={`relative flex-1 shadow-xl translate-y-1 flex bg-[#ededee] `}
            >
              <div
                className={`${metric.bgColor}   text-white p-6 ${metric.width} h-full flex items-center shadow-xl transition-all duration-300`}
              >
                <p className="text-2xl font-medium">{metric.description}</p>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
