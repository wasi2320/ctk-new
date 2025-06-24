import Image from "next/image";

interface ManufacturingFutureHealthcareProps {
  heading?: string;
}

const ManufacturingFutureHealthcare = ({
  heading,
}: ManufacturingFutureHealthcareProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-8 bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
          {/* Left Div: Heading + Paragraph */}
          <div className="text-start md:text-left mt-14 md:mt-4">
            <h3 className="text-4xl text-center md:text-start font-bold text-dark mb-4">
              Our Portfolio
            </h3>
            <h3 className="md:text-xl text-lg text-Nunito mb-3">
              Innovative Manufacturing Technology
            </h3>
          </div>

          {/* Right Div: Link/Button */}
          <div>
            <a
              href="/monolithic-structure"
              className="inline-block bg-transparent text-Nunito text-dark text-lg md:text-xl font-semibold md:py-2 md:px-6 py-2 px-4 border-3 rounded-2xl transition hover:bg-gray-100"
            >
              Explore Manufacturing Solutions
              <Image
                src="/Images/arrow-right.png"
                alt="Arrow"
                width={20}
                height={20}
                className="inline-block ml-2"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          {/* Left Card: Cost Optimization Case Study */}
          <a
            href="/monolithic-structure"
            className="md:w-[564px] md:h-[420px] w-[330px] h-[380px] text-center md:text-center mt-4 bg-[#f6f6f6] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer group"
          >
            <h3 className="md:text-3xl text-2xl font-bold text-dark mb-1 mt-5">
              Cost Optimization
            </h3>
            <h3 className="md:text-lg text-lg text-Nunito mb-3">
              Monolithic AWS architecture reducing manufacturing overhead
            </h3>

            <div className="flex justify-center">
              <Image
                src="/services/aws_mono2.png"
                alt="Manufacturing AWS Architecture Case Study"
                width={280}
                height={180}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Right Card: Security Compliance Case Study */}
          <a
            href="/helm-pipeline"
            className="md:w-[564px] md:h-[420px] w-[330px] h-[380px] text-center md:text-center mt-4 bg-[#f6f6f6] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer group"
          >
            <h3 className="md:text-3xl text-2xl font-bold text-dark mb-1 mt-5">
              Automated Deployment
            </h3>
            <h3 className="md:text-xl text-lg text-Nunito mb-3">
              CI/CD pipeline for manufacturing applications with Kubernetes
            </h3>
            <div className="flex justify-center">
              <Image
                src="/services/ci_cd_eks2.png"
                alt="Manufacturing CI/CD Pipeline Case Study"
                width={280}
                height={180}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingFutureHealthcare;
