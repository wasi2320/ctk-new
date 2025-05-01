interface FinTechEmpoweringEducationProps {
  heading?: string;
}

const FinTechEmpoweringEducation = ({}: FinTechEmpoweringEducationProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-[#f9f8f8] text-dark font-Nunito">
      <div className="text-start md:text-left mb-8 md:mb-12">
        <h3 className="md:text-4xl text-3xl text-center md:text-start font-bold mb-8 font-ClashGrotesk">
          How we Empowering Tomorrow&apos;s Finance with{" "}
          <br className="hidden md:block"></br> Today&apos;s Innovation
        </h3>
        <p className="text-lg font-Nunito text-center md:text-start w-full">
          We deliver innovative, cloud-based FinTech solutions tailored to your
          needs, from modernizing legacy systems to enhancing security and
          customer experience. Our end-to-end support ensures your operations
          are agile, scalable, and future-ready.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="md:w-[50%] flex flex-col items-center gap-4 md:mt-2">
          <div className="flex items-start gap-4 p-4">
            {/* Image on top-left */}
            <img
              src="/images/fin-empowering1.png"
              alt="Icon"
              className="mt-1"
            />

            {/* Text content on the right */}
            <div>
              <h3 className="text-2xl mb-1 nunito-bold font-bold">
                Effortless Financial Management
              </h3>
              <p className="text-[##152F27] text-lg nunito-normal">
                Automate invoicing, tracking, and reporting. Gain a clear
                financial overview and reclaim valuable time for your core
                business activities.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            {/* Image on top-left */}
            <img
              src="/images/fin-empowering1.png"
              alt="Icon"
              className="mt-1"
            />

            {/* Text content on the right */}
            <div>
              <h3 className="text-2xl mb-1 nunito-bold font-bold">
                Secure and Reliable Transactions
              </h3>
              <p className="text-[##152F27] text-lg nunito-normal">
                Ensure your sensitive data and transactions are always protected
                with robust security measures and adherence to industry
                standards.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            {/* Image on top-left */}
            <img
              src="/images/fin-empowering3.png"
              alt="Icon"
              className="mt-1"
            />

            {/* Text content on the right */}
            <div>
              <h3 className="text-2xl mb-1 nunito-bold font-bold">
                Connect Your Financial Ecosystem
              </h3>
              <p className="text-[##152F27] text-lg nunito-normal">
                Integrate with your existing tools like accounting software and
                payment gateways for a unified and streamlined financial
                workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col items-center gap-8 md:mt-2">
          <div className="flex items-start gap-4 p-4">
            {/* Image on top-left */}
            <img
              src="/images/fin-empowering4.png"
              alt="Icon"
              className="mt-1"
            />

            {/* Text content on the right */}
            <div>
              <h3 className="text-2xl mb-1 nunito-bold font-bold">
                Unlock Deeper Financial Insights
              </h3>
              <p className="text-[##152F27] text-lg nunito-normal">
                Transform data into insights to identify trends, forecast
                performance, and drive business growth with excellence.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            {/* Image on top-left */}
            <img
              src="/images/fin-empowering1.png"
              alt="Icon"
              className="mt-1"
            />

            {/* Text content on the right */}
            <div>
              <h3 className="text-2xl mb-1 nunito-bold font-bold">
                Scale Your Business with Confidence
              </h3>
              <p className="text-[##152F27] text-lg nunito-normal">
                Our flexible solutions scale with your growth, ensuring seamless
                handling of increasing volumes and operations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            {/* Image on top-left */}
            <img
              src="/images/fin-empowering6.png"
              alt="Icon"
              className="mt-1"
            />

            {/* Text content on the right */}
            <div>
              <h3 className="text-2xl mb-1 nunito-bold font-bold">
                Empowering Your Financial Future
              </h3>
              <p className="text-[##152F27] text-lg nunito-normal">
                Gain control of your finances with our innovative solutions and
                dedicated support to achieve your business goals efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinTechEmpoweringEducation;
