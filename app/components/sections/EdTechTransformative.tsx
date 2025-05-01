import Link from "next/link";
import Image from "next/image";


interface EdTechTransformativeProps {
  heading?: string;
}

const EdTechTransformative = ({ heading }: EdTechTransformativeProps) => {

  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-white text-dark font-Nunito">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            {/* Left Content */}
            <div className="md:w-[50%] text-start md:text-left mb-8 md:mb-12">
                <h3 className="md:text-4xl text-3xl text-center md:text-start font-bold mb-8 font-ClashGrotesk">
                The Transformative Impact of EdTech <br className="hidden md:block"></br> on Modern Education
                </h3>
                <p className="text-lg font-Nunito text-center md:text-start md:w-[70%] w-full">
                    EdTech is revolutionizing education by enabling personalized, flexible, and accessible learning. Leveraging cloud technology and digital tools, educational institutions can reach more students, offer engaging experiences, and adapt quickly to changing learning demands.
                </p>
        
            </div>

            {/* Right Content: Grid Boxes */}
            <div className="md:w-[50%] flex flex-row items-center gap-4 md:mt-2">

                {/* First row: 2 items */}
                <div className="flex flex-col gap-4 w-full md:ml-[-120px] ml-0">
                    <div className="bg-[#114134] text-white rounded-3xl py-8 text-xl shadow-md font-semibold font-Nunito text-center">
                    Reduced infrastructure<br />and operational costs
                    </div>
                    <div className="bg-white text-black rounded-3xl py-8 text-xl shadow-md w-full font-semibold font-Nunito text-center">
                    Scalable platforms to support<br />growing user bases
                    </div>
                </div>

                {/* Second row: 3 items centered */}
                <div className="flex flex-col gap-4 w-full justify-items-center">
                    <div className="bg-[#114134] text-white rounded-3xl py-8 text-xl shadow-md font-semibold font-Nunito text-center">
                    Personalized learning paths<br />and adaptive content
                    </div>
                    <div className="bg-white text-black rounded-3xl py-8 text-xl shadow-md w-full font-semibold font-Nunito text-center">
                    Engaging experiences through<br />interactive learning tools
                    </div>
                    <div className="bg-[#114134] text-white rounded-3xl py-8 text-xl shadow-md w-full font-semibold font-Nunito text-center">
                    Enhanced security for student<br />data and digital assets
                    </div>
                </div>

            </div>

        </div>
    </section>

  

  );
};

export default EdTechTransformative;
