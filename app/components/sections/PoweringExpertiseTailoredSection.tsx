import Link from "next/link";

interface PoweringExpertiseTailoredSectionProps {
  heading?: string;
}

const PoweringExpertiseTailoredSection = ({ heading }: PoweringExpertiseTailoredSectionProps) => {

  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-[url('/Images/Tailored_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
        <div className="flex flex-col md:flex-row gap-24 justify-between items-center">
            
            {/* Card 1 */}
            <div className="text-center">
            <hr className="border-white w-9 mx-auto mb-4" style={{ borderWidth: '2px' }}/>
            <h3 className="text-4xl mb-2">$1.2T+</h3>
            <h6 className="text-sm text-[#fff] mb-2">Market Size</h6>
            <p className="text-sm nunito-extraLight md:w-[55%] w-100 m-auto">Accelerated demand for expert-led consulting and digital enablement.
            Signifies a strong shift to flexible, cloud-native service delivery.</p>
            </div>

            {/* Card 2 */}
            <div className="text-center" >
            <h6 className="text-4xl mb-2 text-Nunito">{heading=""}</h6>
            <hr className="border-white w-9 mx-auto mb-4" style={{ borderWidth: '2px' }}/>
            <h3 className="text-4xl mb-2">6000+ </h3>
            <h6 className="text-sm text-[#fff] mb-2">Security Threats per year</h6>
            <p className="text-sm nunito-extraLight">Underlines the importance of cybersecurity in service engagements.</p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
            <h6 className="text-sm mb-2"></h6>
            <hr className="border-white w-9 mx-auto mb-4" style={{ borderWidth: '2px' }}/>
            <h3 className="text-4xl mb-2">20%</h3>
            <h6 className="text-sm text-[#fff] mb-2">YoY increase</h6>
            <p className="text-sm nunito-extraLight">Continued confidence from stakeholders in scalable service models.</p>
            </div>

        </div>
    </section>

  );
};

export default PoweringExpertiseTailoredSection;
