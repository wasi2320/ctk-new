import Link from "next/link";

interface EdTechExpertiseTailoredSectionProps {
  heading?: string;
}

const EdTechExpertiseTailoredSection = ({ heading }: EdTechExpertiseTailoredSectionProps) => {

  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-[url('/Images/Tailored_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
        <div className="flex flex-col md:flex-row gap-24 justify-between items-center">
            
            {/* Card 1 */}
            <div className="text-center">
            <hr className="border-white w-9 mx-auto mb-4" style={{ borderWidth: '2px' }}/>
            <h3 className="text-4xl mb-2">$400B+</h3>
            <p className="text-sm nunito-extraLight">Projected global market size <br></br> by 2025</p>
            </div>

            {/* Card 2 */}
            <div className="text-center" style={{ marginTop: '-60px' }}>
            <h6 className="text-4xl mb-2 text-Nunito">{heading="EdTech now"}</h6>
            <hr className="border-white w-9 mx-auto mb-4" style={{ borderWidth: '2px' }}/>
            <h3 className="text-4xl mb-2">80%</h3>
            <p className="text-sm nunito-extraLight">Educational institutions adopt cloud</p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
            <h6 className="text-sm mb-2"></h6>
            <hr className="border-white w-9 mx-auto mb-4" style={{ borderWidth: '2px' }}/>
            <h3 className="text-4xl mb-2">18%</h3>
            <p className="text-sm nunito-extraLight">Increase of investor in Educational <br></br> institutions adopt cloud</p>
            </div>

        </div>
    </section>

  );
};

export default EdTechExpertiseTailoredSection;
