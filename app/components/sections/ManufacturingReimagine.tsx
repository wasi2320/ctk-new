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
          style={{ lineHeight: "45px" }}
        >
          Custom cloud platforms for manufacturers. We modernize legacy
          systems, improve production workflows, and strengthen security so
          your platform stays flexible, scalable, and ready for the future.
        </p>
      </div>
    </section>
  );
};

export default ManufacturingReimagine;
