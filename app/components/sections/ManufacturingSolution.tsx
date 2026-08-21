import Link from "next/link";
import Image from "next/image";

interface ManufacturingSolutionProps {
  heading?: string;
}

const ManufacturingSolution = ({ heading }: ManufacturingSolutionProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 mb-1 text-dark font-Nunito">
      <div className="flex flex-col items-center justify-center">
        <h3 className="md:text-5xl text-4xl text-center md:text-center font-semibold mb-8 font-ClashGrotesk">
          Cloud Infrastructure for Modern, <br></br> Flexible
          Manufacturing
        </h3>
        <p
          className="font-Nunito fw-bold md:text-2xl text-center"
          style={{ lineHeight: "45px" }}
        >
          We build the cloud platforms and automation that manufacturing
          companies run on. With AWS infrastructure and modern DevOps,
          production teams get higher output, clearer visibility into
          operations, and systems that adapt quickly as demand shifts.
        </p>
      </div>
    </section>
  );
};

export default ManufacturingSolution;
