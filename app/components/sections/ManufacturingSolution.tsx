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
                Revolutionizing Manufacturing with Cloud-Based, <br></br> Flexible Solutions
            </h3>
            <p className="font-Nunito fw-bold md:text-2xl text-center" style={{lineHeight: "45px;"}}>
                Manufacturing solutions are revolutionizing industry by enabling personalized, flexible, and efficient production. Leveraging cloud technology and digital tools, manufacturing enterprises can reach greater output, offer engaging processes, and adapt quickly to changing market demands.
            </p>
        </div>
    </section>

  

  );
};

export default ManufacturingSolution;
