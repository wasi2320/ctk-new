import Image from "next/image";

interface EdTechEmpoweringEducationProps {
  heading?: string;
}

const EdTechEmpoweringEducation = ({}: EdTechEmpoweringEducationProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-[#f9f8f8] bg-center bg-no-repeat text-dark">
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Content */}
        <div className="md:w-1/3 text-start md:text-left mb-8 md:mb-0">
          <h3 className="md:text-3xl text-3xl text-center md:text-start font-bold mb-5">
            Empowering Education with Customized, Scalable Cloud Solutions
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
            height={100}
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
                Effortless Learning Management
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Automate course creation, scheduling, and reporting. Gain clear
                visibility of student progress and free up valuable time for
                teaching and engagement.
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
                Secure and Reliable Learning Environments
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Ensure your digital classrooms and student data are protected
                with industry-grade security standards and privacy controls.
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
                Connect Your Learning Ecosystem
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Integrate effortlessly with existing tools like LMS platforms,
                virtual classrooms, and content libraries for a unified
                educational experience.
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
                Deeper Learning Insights
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Transform student data into actionable intelligence. Identify
                learning gaps, track progress, and personalize learning journeys
                for better outcomes.
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
                Scale Your Educational Platform with Confidence
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Our flexible solutions evolve with your growth, providing the
                infrastructure to support more students, courses, and
                interactive content seamlessly.
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
                Empowering the Future of Education
              </h6>
              <p className="text-lg text-Nunito mb-2">
                Deliver impactful learning experiences with our innovative
                solutions and dedicated support, helping you shape the next
                generation of learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdTechEmpoweringEducation;
