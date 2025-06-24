import Image from "next/image";

interface PoweringFutureHealthCareProps {
  heading?: string;
}

const PoweringFutureHealthCare = ({
  heading,
}: PoweringFutureHealthCareProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-2 pt-8 pb-8 bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Div: Heading + Paragraph */}
          <div className="text-start md:text-left mt-14 md:mt-4">
            <h3 className="text-4xl text-center md:text-start font-bold text-dark mb-4">
              Our Portfolio
            </h3>
            <h3 className="md:text-xl text-lg text-Nunito mb-3">
              Cutting-Edge Healthcare Solutions
            </h3>
          </div>

          {/* Right Div: Link/Button */}
          <div>
            <a
              href="/security-and-deployment"
              className="inline-block bg-transparent text-Nunito text-dark text-lg md:text-xl font-semibold md:py-2 md:px-6 py-2 px-4 border-3 rounded-2xl transition hover:bg-gray-100"
            >
              Discover Healthcare Innovations
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
          {/* Left Card: Healthcare Security Case Study */}
          <a
            href="/security-and-deployment"
            className="md:w-[564px] md:h-[420px] w-[330px] h-[380px] text-center md:text-center mt-4 bg-[#f6f6f6] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer group"
          >
            <h3 className="md:text-3xl text-2xl font-bold text-dark mb-1 mt-5">
              Healthcare Security
            </h3>
            <h3 className="md:text-lg text-lg text-Nunito mb-3">
              HIPAA-compliant healthcare platform with AWS security
            </h3>
            <div className="flex justify-center">
              <Image
                src="/services/awsDeployment2.png"
                alt="Healthcare Security Case Study"
                width={280}
                height={180}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Right Card: Healthcare Infrastructure Case Study */}
          <a
            href="/strengthening-aws"
            className="md:w-[564px] md:h-[420px] w-[330px] h-[380px] text-center md:text-center mt-4 bg-[#f6f6f6] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer group"
          >
            <h3 className="md:text-3xl text-2xl font-bold text-dark mb-1 mt-5">
              Data Protection
            </h3>
            <h3 className="md:text-xl text-lg text-Nunito mb-3">
              Patient data encryption and regulatory compliance in healthcare
            </h3>
            <div className="flex justify-center">
              <Image
                src="/services/strength_aws2.png"
                alt="Healthcare Data Protection Case Study"
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

export default PoweringFutureHealthCare;
