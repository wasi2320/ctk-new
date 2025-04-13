import Link from "next/link";

const TailoredSection = () => {
  return (
    <section className="md:px-20 px-4 pt-16 pb-8 bg-[url('/Images/Tailored_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-5xl text-3xl mb-8 tracking-wide">Get a tailored solution today.</h2>
      <Link href="">
        <button className="rounded-full px-7 py-2 bg-transparent border border-white font-semibold cursor-pointer">
          Scheduale your cloud assessment
        </button>
      </Link>
    </section>
  );
};

export default TailoredSection;
