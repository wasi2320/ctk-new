import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  cover?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  description,
  imageSrc,
  cover = false,
  buttonText = "Let’s connect", // default value
  buttonLink = "/",
}: HeroSectionProps) => {
  return (
    <section className="md:px-36 px-4 flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-[90vh] gap-10 my-10 md:my-0">
      <div className="md:w-[55%] text-center md:text-left">
        <h1 className="md:text-7xl text-4xl text-shadow-lg">{title}</h1>
        <p className="md:text-xl text-base md:w-11/12 my-8 text-gray-700">
          {description}
        </p>

        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <button className="rounded-full px-8 py-3 bg-black hover:bg-white text-white hover:text-black hover:border hover:border-black cursor-pointer shadow-2xl">
              {buttonText}
            </button>
          </Link>
        )}
      </div>

      <div className="md:w-[45%] w-full flex justify-center">
        <Image
          src={imageSrc}
          alt="Hero"
          height={300}
          width={300}
          className={`md:h-[300px] h-[350px] w-full ${
            cover ? "object-contain" : ""
          }`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
