interface ExpertiseTailoredSectionProps {
  heading?: string;
}

const ExpertiseTailoredSection = ({
  heading,
}: ExpertiseTailoredSectionProps) => {
  return (
    <section className="md:px-36 px-4 md:pt-16 pt-8 pb-8 bg-[url('/Images/Tailored_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="flex flex-col md:flex-row gap-24 justify-between items-center">
        {/* Card 1 */}
        <div className="text-center">
          <h6 className="text-sm text-[#656c6e] mb-2">Frame 207</h6>
          <hr
            className="border-white w-9 mx-auto mb-4"
            style={{ borderWidth: "2px" }}
          />
          <h3 className="text-4xl mb-2">$500B+</h3>
          <p className="text-sm nunito-extraLight">
            Accelerated growth driven by digital-first <br></br> healthcare
            delivery.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center" style={{ marginTop: "-60px" }}>
          <h6 className="text-4xl mb-2 text-Nunito">
            {heading || "HealthCare"}
          </h6>
          <hr
            className="border-white w-9 mx-auto mb-4"
            style={{ borderWidth: "2px" }}
          />
          <h3 className="text-4xl mb-2">65%</h3>
          <p className="text-sm nunito-extraLight">
            prefer hybrid / telehealth care
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <h6 className="text-sm mb-2"></h6>
          <hr
            className="border-white w-9 mx-auto mb-4"
            style={{ borderWidth: "2px" }}
          />
          <h3 className="text-4xl mb-2">32%</h3>
          <p className="text-sm nunito-extraLight">YoY investment growth</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseTailoredSection;
