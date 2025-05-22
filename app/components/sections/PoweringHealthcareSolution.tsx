import Link from "next/link";
import Image from "next/image";

interface PoweringHealthcareSolutionProps {
  heading?: string;
}

const PoweringHealthcareSolution = ({
  heading,
}: PoweringHealthcareSolutionProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-row items-center justify-center gap-14">
        {/* Left Content */}
        <div className="md:w-[40%] flex justify-center items-center">
          <Image
            src="/Images/powering-healthcare.png"
            alt="Center"
            className="w-[556px] max-h-[325px] object-contain"
            width={50}
            height={50}
          />
        </div>

        {/* Right Content */}
        <div className="md:w-[60%] text-start md:text-left mb-8 md:mb-12 md:mt-12 mt-6">
          <h3 className="md:text-3xl text-3xl text-center md:text-start Nunito-bold mb-5">
            Key Benefits of Professional <br className="hidden md:block"></br>{" "}
            Services:
          </h3>
          <p className="text-lg font-Nunito text-start md:text-start md:w-[80%] w-full mb-8">
            Professional Services are redefining how businesses operate,
            delivering high-impact solutions with agility, efficiency, and
            precision. Through digital tools and expert strategies,
            organizations can streamline operations, enhance client experiences,
            and accelerate innovation. Benefits of Professional Services:
          </p>

          <ul className="mt-10 space-y-4">
            {/* List Item 1 */}
            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={10}
                width={10}
              />
              <span className="text-lg font-semibold font-Nunito">
                Customized strategies tailored to business objectives
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={10}
                width={10}
              />
              <span className="text-lg font-semibold font-Nunito">
                Robust cybersecurity for sensitive operations and data
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={10}
                width={10}
              />
              <span className="text-lg font-semibold font-Nunito">
                Reduced overheads through automation and outsourcing
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={10}
                width={10}
              />
              <span className="text-lg font-semibold font-Nunito">
                Scalable solutions to support growth and innovation
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={10}
                width={10}
              />
              <span className="text-lg font-semibold font-Nunito">
                Enhanced experiences through digital-first engagement
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PoweringHealthcareSolution;
