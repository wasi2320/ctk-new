import Link from "next/link";
import Image from "next/image";

interface FutureHealthcareProps {
  heading?: string;
}

const FutureHealthcare = ({ heading }: FutureHealthcareProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-8 bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-col justify-center">
        <div className="text-center flex flex-col items-center justify-center mb-8 md:mb-0">
          <h3 className="md:text-4xl text-2xl text-Nunito mb-3">
            Empowering the Future of Healthcare
          </h3>
          <Image src="/Images/future-healthcare.png" alt="Center" fill />
          <p className="md:text-2xl text-lg nunito-semiBold md:w-9/12 mx-auto mt-8 text-center font-semibold">
            Deliver impactful healthcare experiences with our innovative
            solutions and dedicated support, helping you shape the next
            generation of patient care.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
          {/* Left Div: Heading + Paragraph */}
          <div className="text-start md:text-left mt-14 md:mt-4">
            <h3 className="text-4xl text-center md:text-start font-bold text-dark mb-4">
              Our Portfolio
            </h3>
            <h3 className="md:text-xl text-lg text-Nunito mb-3">
              Advanced Healthcare Technology Solutions
            </h3>
          </div>

          {/* Right Div: Link/Button */}
          <div>
            <a
              href="#your-link"
              className="inline-block bg-transparent text-Nunito text-dark text-lg md:text-xl font-semibold md:py-2 md:px-6 py-2 px-4 border-3 rounded-2xl transition"
            >
              Explore Healthcare Innovations
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
          {/* Left Div: Heading + Paragraph */}
          <div className="md:w-[564px] md:h-[420px] w-[330px] h-[380px] text-center md:text-center mt-4 bg-[#f6f6f6] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <h3 className="md:text-3xl text-2xl font-bold text-dark mb-1 mt-5">
              Cost Optimization
            </h3>
            <h3 className="md:text-lg text-lg text-Nunito mb-3">
              Reducing healthcare delivery costs while maintaining quality
            </h3>
          </div>

          {/* Right Div: Heading + Paragraph */}
          <div className="md:w-[564px] md:h-[420px] w-[330px] h-[380px] text-center md:text-center mt-4 bg-[#f6f6f6] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <h3 className="md:text-3xl text-2xl font-bold text-dark mb-1 mt-5">
              Security Compliance
            </h3>
            <h3 className="md:text-xl text-lg text-Nunito mb-3">
              Meeting HIPAA requirements and protecting patient data
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureHealthcare;
