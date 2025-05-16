import Link from "next/link";
import Image from "next/image";


interface HealthcareSolutionProps {
  heading?: string;
}

const HealthcareSolution = ({ heading }: HealthcareSolutionProps) => {

  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-center bg-no-repeat text-dark bg-[#f9f8f8]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        
            {/* Left Content */}
            <div className="md:w-[60%] text-start md:text-left mb-8 md:mb-12 md:mt-12 mt-6">
                <h3 className="md:text-3xl text-3xl text-center md:text-start font-bold mb-5">
                How We Help You with HealthTech <br className="hidden md:block"></br> Solutions
                </h3>
                <p className="text-lg font-Nunito text-center md:text-start">
                We empower your healthcare ecosystem with innovative cloud-based HealthTech solutions tailored to your needs. 
                From modernizing legacy systems to enhancing patient experiences and data security, we provide end-to-end support 
                that ensures your platform is agile, scalable, and future-ready.
                </p>
        
                <ul className="mt-10 space-y-4">
                {/* List Item 1 */}
                <li className="flex items-center">
                    <hr className="border-green-900 w-4 mr-3" style={{ borderWidth: '2px' }} />
                    <span className="text-lg font-semibold font-Nunito">Effortless Healthcare Management</span>
                </li>
        
                {/* List Item 2 */}
                <li className="flex items-center">
                    <hr className="border-green-900 w-4 mr-3" style={{ borderWidth: '2px' }} />
                    <span className="text-lg font-semibold font-Nunito">Unlock Deeper Health Insights</span>
                </li>
        
                {/* List Item 3 */}
                <li className="flex items-center">
                    <hr className="border-green-900 w-4 mr-3" style={{ borderWidth: '2px' }} />
                    <span className="text-lg font-semibold font-Nunito">Secure and Reliable Care Environments</span>
                </li>
        
                {/* List Item 4 */}
                <li className="flex items-center">
                    <hr className="border-green-900 w-4 mr-3" style={{ borderWidth: '2px' }} />
                    <span className="text-lg font-semibold font-Nunito">Scale Your Healthcare Platform with Confidence</span>
                </li>
        
                {/* List Item 5 */}
                <li className="flex items-center">
                    <hr className="border-green-900 w-4 mr-3" style={{ borderWidth: '2px' }} />
                    <span className="text-lg font-semibold font-Nunito">Connect Your Healthcare Ecosystem</span>
                </li>
                </ul>
            </div>
        
            {/* Right Content */}
            <div className="md:w-[40%] flex justify-center items-center">
                <Image src="/Images/healthcare-help.png" alt="Center" className="w-[556px] max-h-[325px] object-contain" fill />
            </div>
    
        </div>
    </section>
  

  );
};

export default HealthcareSolution;
