import React from "react";

interface ProjectDetail {
  label: string;
  value: string;
}

interface ProjectDetails {
  client: string;
  schedule: string;
  size: string;
}

interface CaseStudyProblemStatementProps {
  statement: string;
  details: ProjectDetails;
}

const CaseStudyProblemStatement: React.FC<CaseStudyProblemStatementProps> = ({
  statement,
  details,
}) => {
  const projectDetails: ProjectDetail[] = [
    { label: "CLIENT", value: details.client },
    { label: "PROJECT SCHEDULE", value: details.schedule },
    { label: "PROJECT SIZE", value: details.size },
  ];

  return (
    <section
      // mt-[calc(-12vh-2rem)] md:mt-[calc(130px-2rem)]
      className="p-8 rounded-[14px] min-h-[700px]  flex justify-center items-center bg-gray-50 py-12 m-5 relative"
      style={{
        backgroundImage: 'url("/section_bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl w-[80%] text-white mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <div className="md:col-span-2 flex flex-col h-full justify-between">
          <h2 className="text-4xl font-bold mb-6">Problem Statement</h2>
          <p className="mb-4 w-full text-xl md:text-2xl md:w-[80%]">
            {statement}
          </p>
        </div>
        <div>
          {projectDetails.map((detail, index) => (
            <div
              key={detail.label}
              className={`backdrop-blur-md bg-[#677F76]/30 text-white p-4 py-7 rounded-lg border border-white/20 ${
                index !== projectDetails.length - 1 ? "mb-6" : ""
              }`}
            >
              <h3 className="text-xl font-extralight text-gray-200">
                {detail.label}
              </h3>
              <p className="text-xl font-extrabold">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyProblemStatement;
