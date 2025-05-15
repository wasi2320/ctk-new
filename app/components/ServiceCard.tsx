import Image from "next/image";

type ServiceCardProps = {
    title: string;
    description: string;
    image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
    return (
      <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8 lg:p-10 bg-white rounded-lg  flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-gray-800">{title}</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8">{description}</p>
          <button className="w-fit px-6 py-1.5 bg-[#081617] rounded-full text-white transition-colors duration-300">
            Let&apos;s connect
          </button>
        </div>
        <div className="flex-1">
          <Image src={image} alt={title} className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    );
  };

export default ServiceCard;