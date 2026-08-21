import Image from "next/image";

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
          <Image
            src="/Images/Ecommerce_Solution.png"
            alt="Ecommerce Solution"
            // className="w-full h-auto mb-4"
            width={500}
            height={500}
          />
        </div>

        {/* Right Content: Grid Boxes */}
        <div className="md:w-[60%] w-full flex flex-col gap-4">
          <p
            className="md:text-2xl text-lg font-Nunito text-center md:text-start w-full"
            style={{ lineHeight: "45px" }}
          >
            We build cloud-based e-commerce platforms sized to how your business
            actually runs. Whether you&apos;re re-platforming an online store,
            improving customer experience, or hardening security, we handle the
            engineering so the platform scales and holds up under load. We
            automate store management, product listings, and reporting so your
            team can focus on growth. We turn customer data into insights that
            personalize shopping and lift conversions. We protect your store and
            customer data with security built in, not bolted on. As you add
            products, customers, and global transactions, the infrastructure
            grows with you and connects to the systems you already run.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolution;
