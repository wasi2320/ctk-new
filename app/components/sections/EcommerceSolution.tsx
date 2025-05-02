interface EcommerceSolutionProps {
  heading?: string;
}

const EcommerceSolution = ({}: EcommerceSolutionProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-gray-950 text-white">
      <div className="flex flex-row items-center justify-center md:mb-14 mb-8">
        <h3 className="md:text-4xl text-3xl text-center md:text-start font-semibold font-ClashGrotesk">
          How We Help You with E-Commerce Solutions
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        {/* Left Content */}
        <div className="md:w-[40%] text-center md:text-center mb-8 md:mb-12">
          <img
            src="/Images/Ecommerce_Solution.png"
            alt="Ecommerce Solution"
            className="w-full h-auto mb-4"
          />
        </div>

        {/* Right Content: Grid Boxes */}
        <div className="md:w-[60%] w-full flex flex-col gap-4">
          <p
            className="md:text-2xl text-lg font-Nunito text-center md:text-start w-full"
            style={{ lineHeight: "45px" }}
          >
            We offer user-friendly cloud-based E-Commerce solutions tailored to
            your business needs. Whether updating your online store, improving
            customer experience, or ensuring security, we provide full support
            to make your platform scalable and future-ready. Our solutions
            automate store management, product listings, and reports, helping
            you focus on growth. We turn customer data into insights to
            personalize shopping and boost conversions. With strong security, we
            protect your store and data. Our scalable solutions grow with your
            business, supporting more products, customers, and global
            transactions. We also ensure easy integration with existing systems
            for a seamless commerce experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolution;
