import React from "react";
import Image from "next/image";

interface Tech {
  name: string;
  icon: string;
}

interface CaseStudyTechStackProps {
  techs: Tech[];
}

const CaseStudyTechStack: React.FC<CaseStudyTechStackProps> = ({ techs }) => (
  <section className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2">Core tech stack we work with</h2>
      <p className="text-2xl w-[80%] mx-auto text-gray-600 mb-8">
        Leveraging the Leading Programming Languages and Frameworks to Deliver
        Reliable, Scalable Solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm object-fill"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={80}
              height={80}
              objectFit="cover"
            />
            {/* <p className="text-sm font-medium">{tech.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyTechStack;
