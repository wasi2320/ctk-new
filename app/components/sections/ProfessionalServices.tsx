import { PROFESSIONAL_SERVICES_SECTION } from "@/utils/data/professionalServicesSection";
import Image from "next/image";
import Link from "next/link";

interface ProfessionalServicesProps {
  heading?: string;
  description?: string;
}

const ProfessionalServices = ({
  heading,
  description,
}: ProfessionalServicesProps) => {
  return (
    <section className="text-dark py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-Nunito mb-12">
          {heading || PROFESSIONAL_SERVICES_SECTION.heading}
        </h2>
        <p className="text-lg font-Nunito text-center md:w-[90%] mx-auto mb-12">
          {description || PROFESSIONAL_SERVICES_SECTION.description}
        </p>
      </div>
    </section>
  );
};

export default ProfessionalServices;
