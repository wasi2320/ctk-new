import Link from "next/link";

interface TailoredSectionProps {
  heading?: string;
}

const TailoredSection = ({ heading }: TailoredSectionProps) => {
  const defaultHeading = "Get a tailored solution today.";

  return (
    <section className="md:px-20 px-4 pt-16 pb-8 bg-[url('/Images/Tailored_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-5xl text-3xl mb-8 tracking-wide">
        {heading || defaultHeading}
      </h2>
      <Link href="">
        <button className="rounded-full px-7 py-2 bg-transparent border border-white font-semibold cursor-pointer">
          Schedule your cloud assessment
        </button>
      </Link>
    </section>
  );
};

export default TailoredSection;
