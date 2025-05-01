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
            <p className="font-Nunito fw-bold md:text-2xl text-center md:w-[80%] w-full" style={{lineHeight: "45px;"}}>
                Manufacturing solutions are revolutionizing industry by enabling personalized, flexible, and efficient production. Leveraging cloud technology and digital tools, manufacturing enterprises can reach greater output, offer engaging processes, and adapt quickly to changing market demands.
            </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-8">
            <div className="flex flex-col items-center justify-center border-1 border-gray-950 text-center p-8 bg-white shadow-lg rounded-3xl w-[342px] h-[461px]" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                <h4 className="text-2xl font-bold mb-2 font-Nunito" style={{lineHeight: "45px;"}}>Customized Production <br></br> to Meet Market <br></br> Demands</h4>
                <Image src="/Images/manufacturing-card1.png" alt="Manufacturing Solution 1" width={206} height={245} className="mb-4" />
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 mt-18">
                <div className="flex flex-col items-center justify-center text-center p-4 mb-5 bg-[#f9f8f8] shadow-lg rounded-3xl w-full md:h-[121px] h-[140px]" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                    <h4 className="text-2xl font-bold mb-2 font-Nunito" style={{lineHeight: "45px;"}}>Strong security for transactions <br></br> and sensitive data</h4>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-4 mb-5 bg-[#f9f8f8] shadow-lg rounded-3xl w-full md:h-[121px] h-[140px]" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                    <h4 className="text-2xl font-bold mb-2 font-Nunito" style={{lineHeight: "45px;"}}>Enhanced Flexibility to Adapt to <br></br> Industry Changes</h4>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-4 mb-5 bg-[#f9f8f8] shadow-lg rounded-3xl w-full md:h-[121px] h-[140px]" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                    <h4 className="text-2xl font-bold mb-2 font-Nunito" style={{lineHeight: "45px;"}}>Optimized Efficiency through Cloud <br></br> Technology</h4>
                </div>
             </div>
            <div className="flex flex-col items-center justify-center border-1 border-gray-950 text-center p-8 bg-white shadow-lg rounded-3xl w-[342px] h-[461px]" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
              <h4 className="text-2xl font-bold mb-2 font-Nunito" style={{lineHeight: "45px;"}}>Increased Productivity <br></br> and Streamlined <br></br> Operations</h4>
              <Image src="/Images/manufacturing-card2.png" alt="Manufacturing Solution 2" width={206} height={245} className="mb-4" />
            </div>          

        </div>
    </section>

  

  );
};

export default ManufacturingSolution;
