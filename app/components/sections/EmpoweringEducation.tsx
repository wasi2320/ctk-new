import Image from "next/image";
import Link from "next/link";

interface EmpoweringEducationProps {
  heading?: string;
}

const EmpoweringEducation = ({}: EmpoweringEducationProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Content */}
        <div className="md:w-1/3 text-start md:text-left mb-8 md:mb-0">
          <h3 className="md:text-3xl text-3xl text-center md:text-start font-bold mb-5">
            Customized, Scalable Cloud Solutions for Education
          </h3>
          <p className="text-lg text-Nunito md:text-start text-center">
            We build and run secure cloud infrastructure for education teams.
            From modernizing legacy systems to improving learning experiences
            and security, we provide the engineering support that keeps your
            platform reliable, scalable, and ready to grow.
          </p>
        </div>

        {/* Center Image */}
        <div className="md:w-1/3 hidden md:flex justify-center mb-8 md:mb-0">
          <Image
            src="/Images/line.png"
            alt="Center"
            className="h-full w-auto"
            width={100}
            height={150}
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/3 text-start md:text-left">
          <div className="flex items-start">
            <hr
              className="border-[#16212e] w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Personalized Learning and Remote Access
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Support personalized learning paths for each student and deliver
                them reliably from any location. Cloud delivery keeps coursework
                available on demand across devices.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-[#16212e] w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Enhanced Security for Student Data
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Protect student records and learning data with strong access
                controls and encryption. This helps maintain privacy and
                supports compliance with data protection requirements.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-[#16212e] w-9 mt-4"
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
              className="border-[#16212e] w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Scalable Platforms for Growth
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Our solutions are built to scale, letting your platform handle a
                growing number of students and users without compromising on
                performance or quality.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <hr
              className="border-[#16212e] w-9 mt-4"
              style={{ borderWidth: "2px" }}
            />
            <div className="ml-4">
              {" "}
              {/* Adds margin-left */}
              <h6 className="text-lg font-semibold mb-2 text-Nunito">
                Improved Communication with Student Portals
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Improve engagement through user-friendly portals where students
                and staff can access learning materials, track progress, and
                communicate directly with instructors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringEducation;
