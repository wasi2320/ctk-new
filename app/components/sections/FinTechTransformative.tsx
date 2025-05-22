import Image from "next/image";

const FinTechTransformative = () => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-white text-dark font-Nunito">
      <div className="text-start md:text-left mb-8 md:mb-12">
        <h3 className="md:text-4xl text-3xl text-center md:text-start font-bold mb-8 font-ClashGrotesk">
          Transformative Benefits of FinTech Solutions for{" "}
          <br className="hidden md:block"></br> Financial Institutions
        </h3>
        <p className="text-lg font-Nunito text-center md:text-start w-full">
          Fintech is transforming the financial landscape by offering smarter,
          faster, and more secure solutions. With the integration of cloud
          technology and digital tools, financial institutions can operate more
          efficiently, serve customers better, and adapt quickly to market
          changes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="md:w-[50%] flex flex-row items-center gap-4 md:mt-2">
          <ul className="space-y-4">
            {/* List Item 1 */}
            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={20}
                width={20}
              />
              <span className="text-lg font-semibold font-Nunito">
                Faster and more seamless transactions
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={20}
                width={20}
              />
              <span className="text-lg font-semibold font-Nunito">
                Enhanced data security and fraud protection
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={20}
                width={20}
              />
              <span className="text-lg font-semibold font-Nunito">
                Lower operational and infrastructure costs
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={20}
                width={20}
              />
              <span className="text-lg font-semibold font-Nunito">
                Scalable services for growing demands
              </span>
            </li>

            <li className="flex items-center">
              <Image
                src="/Images/circle-icon.png"
                alt="FinTech Icon"
                height={20}
                width={20}
              />
              <span className="text-lg font-semibold font-Nunito">
                Better customer experience through personalization
              </span>
            </li>
          </ul>
        </div>
        {/* Right Content: Grid Boxes */}
        <div className="md:w-[50%] flex flex-row items-center">
          <div className="flex flex-col gap-4 w-full mr-0">
            <Image
              src="/Images/fin-tech-tranform.png"
              alt="FinTech Image"
              height={500}
              width={500}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinTechTransformative;
