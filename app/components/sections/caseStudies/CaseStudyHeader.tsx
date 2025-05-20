import React from "react";
import { Badge } from "@/components/ui/badge";
import CaseStudyImage from "./CaseStudyImage";

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  services: string[];
  arcSrc: string;
  alt: string;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  subtitle,
  services,
  arcSrc,
  alt,
}) => (
  <header className="text-center p-7 shadow-2xl rounded-[20px] m-5 ">
    <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
    <p className="text-gray-600 text-2xl mb-4">{subtitle}</p>
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {services.map((service, idx) => (
        <Badge
          key={idx}
          variant="outline"
          className="text-sm py-2 px-4 rounded-full"
        >
          {service}
        </Badge>
      ))}
    </div>
    <CaseStudyImage src={arcSrc} alt={alt} />
  </header>
);

export default CaseStudyHeader;
