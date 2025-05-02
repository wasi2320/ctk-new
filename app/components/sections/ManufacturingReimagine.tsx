import Link from "next/link";
import Image from "next/image";

interface ManufacturingReimagineProps {
  heading?: string;
}

const ManufacturingReimagine = ({ heading }: ManufacturingReimagineProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-[#f9f8f8] text-dark font-Nunito">
      <div className="flex flex-col items-center justify-center">
        <h3 className="md:text-5xl text-4xl text-center md:text-center font-bold mb-8 font-ClashGrotesk">
          We Help You Reimagine the Manufacturing Industry
        </h3>
        <p
          className="font-Nunito fw-bold md:text-2xl"
          style={{ lineHeight: "45px;" }}
        >
          Empowering Your Industrial Ecosystem with Custom Cloud-Based
          Manufacturing Solutions;We offer cloud-based manufacturing solutions
          tailored to your specific needs. From upgrading old systems to
          improving production processes and security, we provide full support
          to ensure your platform is flexible, scalable, and ready for the
          future.
        </p>
      </div>
    </section>
  );
};

export default ManufacturingReimagine;
