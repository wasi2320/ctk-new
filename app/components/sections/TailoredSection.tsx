import Link from "next/link";

interface TailoredSectionProps {
  heading?: string;
}

const TailoredSection = ({ heading }: TailoredSectionProps) => {
  const defaultHeading = "Get a tailored solution today.";

  return (
    <section className="md:px-28 px-4 md:pt-16 pt-8 pb-8 bg-[url('/Images/Tailored_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-5xl text-2xl md:mb-8 mb-5 tracking-wide">
        {heading || defaultHeading}
      </h2>
      <Link href="/contact">
        <button className="rounded-full nunito-extraLight md:px-7 px-4 py-2 text-sm md:text-base bg-transparent border border-white font-semibold cursor-pointer">
          Schedule your cloud assessment
        </button>
      </Link>
    </section>
  );
};

export default TailoredSection;
