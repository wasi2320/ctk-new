import Link from "next/link";
import Image from "next/image";


interface ManufacturingTransformativeProps {
  heading?: string;
}

const ManufacturingTransformative = ({ heading }: ManufacturingTransformativeProps) => {

  return (
    <section className="md:px-36 px-4 md:pt-12 pt-8 pb-12 bg-white text-dark font-Nunito">
        <div className="flex flex-row items-center justify-center">
            <h3 className="md:text-4xl text-4xl text-center md:text-center font-SemiBold mb-8 font-Nunito">
                Transforming Manufacturing with Tailored Cloud Solutions for <br className="hidden md:block"></br> the Future
            </h3>
        </div>
        <div className="grid md:grid-cols-2 grids-cols-1 gap-16 md:mt-6 mt-4">

            <div className="bg-[#f9f8f8] text-dark rounded-2xl md:px-4 px-3 md:py-3 py-2 font-semibold font-Nunito text-center" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                <h5 className="text-2xl font-bold font-Nunito mb-3">
                    Efficient Production Management
                </h5>
                <p className="md:text-2xl text-xl font-normal font-Nunito" style={{lineHeight: "45px;"}}>Automate processes and get clear visibility <br className="hidden md:block"></br> into progress, saving time for better <br className="hidden md:block"></br> management.</p>
            </div>
            <div className="bg-[#f9f8f8] text-dark rounded-2xl md:px-4 px-3 md:py-3 py-2 font-semibold font-Nunito text-center" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                <h5 className="text-2xl font-bold font-Nunito mb-3">
                Gain Insights to Improve Production
                </h5>
                <p className="md:text-2xl text-xl font-normal font-Nunito" style={{lineHeight: "45px;"}}>Turn data into actionable insights to spot <br className="hidden md:block"></br> issues, track progress, and improve your  <br className="hidden md:block"></br> results.</p>
            </div>
            <div className="bg-[#f9f8f8] text-dark rounded-2xl md:px-4 px-3 md:py-3 py-2 font-semibold font-Nunito text-center" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                <h5 className="text-2xl font-bold font-Nunito mb-3">
                Safe and Reliable Production
                </h5>
                <p className="md:text-2xl text-xl font-normal font-Nunito" style={{lineHeight: "45px;"}}>Keep your digital operations and sensitive <br className="hidden md:block"></br> data secure with strong security and  <br className="hidden md:block"></br> privacy standards.</p>
            </div>
            <div className="bg-[#f9f8f8] text-dark rounded-2xl md:px-4 px-3 md:py-3 py-2 font-semibold font-Nunito text-center" style={{boxShadow: "1px 9px 22px 6px #00000029;"}}>
                <h5 className="text-2xl font-bold font-Nunito mb-3">
                Solutions for Your Growing Business
                </h5>
                <p className="md:text-2xl text-xl font-normal font-Nunito" style={{lineHeight: "45px;"}}>Our solutions grow with your business, <br className="hidden md:block"></br> giving you the support to handle more  <br className="hidden md:block"></br> output, processes, and content smoothly.</p>
            </div>

        </div>
    </section>

  

  );
};

export default ManufacturingTransformative;
