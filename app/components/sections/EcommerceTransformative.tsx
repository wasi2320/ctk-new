import Link from "next/link";
import Image from "next/image";


interface EcommerceTransformativeProps {
  heading?: string;
}

const EcommerceTransformative = ({ heading }: EcommerceTransformativeProps) => {

  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-white text-dark font-Nunito">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            {/* Left Content */}
            <div className="md:w-[60%] text-start md:text-left mb-8 md:mb-12">
                <h3 className="md:text-4xl text-3xl text-center md:text-start font-bold mb-8 font-ClashGrotesk">
                The Impact of E-Commerce on <br className="hidden md:block"></br> Retail Transformation
                </h3>
                <p className="md:text-2xl text-lg font-Nunito text-center md:text-start md:w-[70%] w-full">
                    E-Commerce is revolutionizing retail by providing personalized, flexible, and accessible shopping experiences. By leveraging cloud technology and digital tools, businesses can expand their reach, offer engaging customer experiences, and quickly respond to market changes.
                </p>
        
            </div>

            {/* Right Content: Grid Boxes */}
            <div className="md:w-[35%] w-full flex flex-col gap-4 md:mt-2">

                <div className="bg-[#f9f8f8] border-2 border-[#DEDCDC] text-dark rounded-xl px-12 py-3 text-xl shadow-md font-semibold font-Nunito text-center">
                    Personalized Shopping
                </div>
                <div className="bg-[#f9f8f8] border-2 border-[#DEDCDC] text-dark rounded-xl px-3 py-3 text-xl shadow-md font-semibold font-Nunito text-center">
                    Transaction Security
                </div>
                <div className="bg-gray-950 border-2 border-[#DEDCDC] text-white rounded-xl px-3 py-3 text-xl shadow-md font-semibold font-Nunito text-center">
                    Cost Efficiency
                </div>
                <div className="bg-[#f9f8f8] border-2 border-[#DEDCDC] text-dark rounded-xl px-3 py-3 text-xl shadow-md font-semibold font-Nunito text-center">
                    Scalable Platform
                </div>
                <div className="bg-[#f9f8f8] border-2 border-[#DEDCDC] text-dark rounded-xl px-3 py-3 text-xl shadow-md font-semibold font-Nunito text-center">
                    Engaging Displays
                </div>

            </div>

        </div>
    </section>

  

  );
};

export default EcommerceTransformative;
