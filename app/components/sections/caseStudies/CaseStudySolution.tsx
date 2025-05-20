import React from "react";
import Image from "next/image";

interface SolutionComponent {
  title: string;
  description: string;
}

interface CaseStudySolutionProps {
  solutions: SolutionComponent[];
  illustration?: string;
  illustrationAlt?: string;
  description?: string;
}

const CaseStudySolution: React.FC<CaseStudySolutionProps> = ({
  solutions,
  illustration,
  illustrationAlt,
  description,
}) => (
  <section className="py-12 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Proposed Solution</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {solutions.map((component, index) => (
            <div
              key={index}
              className="mb-6 p-4 border rounded-lg bg-white shadow-sm"
            >
              <p className="font-medium text-xl">
                <span className="font-bold">{component.title}</span>{" "}
                {component.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          {illustration && (
            <Image
              src={illustration}
              alt={illustrationAlt || "Solution Illustration"}
              width={450}
              height={450}
            />
          )}
          {description && (
            <p className="mt-6 text-start text-gray-700 text-xl ">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  </section>

  // <section className="bg-white rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-6 items-center">
  //   <div className="flex-1">
  //     <h2 className="text-xl font-semibold mb-2">Proposed Solution</h2>
  //     <ul className="list-disc pl-5 mb-4 space-y-1">
  //       {solutions.map((sol, idx) => (
  //         <li key={idx}>{sol}</li>
  //       ))}
  //     </ul>
  //     {description && <p className="text-gray-600 mt-2">{description}</p>}
  //   </div>
  //   {illustration && (
  //     <div className="flex-1 flex justify-center">
  //       <img
  //         src={illustration}
  //         alt={illustrationAlt || "Solution Illustration"}
  //         className="max-h-48 object-contain"
  //       />
  //     </div>
  //   )}
  // </section>
);

export default CaseStudySolution;
