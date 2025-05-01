import Link from "next/link";

interface EmpoweringEducationProps {
  heading?: string;
}

const EmpoweringEducation = ({ heading }: EmpoweringEducationProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Content */}
        <div className="md:w-1/3 text-start md:text-left mb-8 md:mb-0">
          <h3 className="md:text-3xl text-3xl text-center md:text-start font-bold mb-5">
            Empowering Education with Customized, Scalable Cloud Solutions
          </h3>
          <p className="text-lg text-Nunito md:text-start text-center">
            We empower your educational ecosystem with innovative cloud-based
            EdTech solutions tailored to your needs. From modernizing legacy
            systems to enhancing learning experiences and security, we provide
            end-to-end support that ensures your platform is agile, scalable,
            and future-read
          </p>
        </div>

        {/* Center Image */}
        <div className="md:w-1/3 hidden md:flex justify-center mb-8 md:mb-0">
          <img src="/Images/line.png" alt="Center" className="h-full w-auto" />
        </div>

        {/* Right Content */}
        <div className="md:w-1/3 text-start md:text-left">
          <div className="flex items-start">
            <hr
              className="border-green-900 w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Personalized Care and Remote Monitoring
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Provide personalized care plans tailored to each patient and
                monitor their health remotely. This allows for timely
                interventions and ensures that care is specific to individual
                needs.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-green-900 w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Enhanced Security for Patient Data
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Ensure that patient data and health records are protected with
                advanced security measures. This helps maintain privacy and
                ensures compliance with healthcare regulations.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-green-900 w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Lower Costs and Less Infrastructure
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Reduce operational and infrastructure costs by adopting digital
                solutions that eliminate the need for expensive physical setups
                and simplify maintenance.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-green-900 w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Scalable Platforms for Growth
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Our solutions are built to scale, allowing your platform to
                handle a growing number of patients without compromising on
                performance or quality.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-green-900 w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Improved Communication with Patient Portals
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Enhance communication and patient engagement through
                user-friendly portals where patients can access their health
                information, book appointments, and communicate directly with
                healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringEducation;
