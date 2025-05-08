import Link from "next/link";

interface ProfessionalServicesProps {
  heading?: string;
}
     

const ProfessionalServices = ({ heading }: ProfessionalServicesProps) => {

  return (
    <section className="text-dark py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-Nunito mb-12">
                How We Help You with Professional Services
            </h2>
            <p className="text-lg font-Nunito text-center md:w-[60%] m-auto mb-8">
             We deliver tailored professional service solutions that align with your business goals. Whether modernizing legacy systems, enhancing workflows, or optimizing performance, we offer end-to-end support that makes your organization more adaptive, secure, and ready for tomorrow.
            </p>          
        </div>
  </section>

  );
};

export default ProfessionalServices;
