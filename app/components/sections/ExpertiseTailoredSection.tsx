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
          <h6 className="text-sm text-[#93a3b8] mb-2">Delivered on AWS</h6>
          <hr
            className="border-white w-9 mx-auto mb-4"
            style={{ borderWidth: "2px" }}
          />
          <h3 className="text-4xl mb-2">35%</h3>
          <p className="text-sm nunito-extraLight">
            Cloud cost cut on a recent <br></br> AWS migration.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center" style={{ marginTop: "-60px" }}>
          <h6 className="text-4xl mb-2 text-Nunito">
            {heading || "Cloud & DevOps"}
          </h6>
          <hr
            className="border-white w-9 mx-auto mb-4"
            style={{ borderWidth: "2px" }}
          />
          <h3 className="text-4xl mb-2">99.7%</h3>
          <p className="text-sm nunito-extraLight">
            Uptime delivered on production AWS
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <h6 className="text-sm mb-2">&nbsp;</h6>
          <hr
            className="border-white w-9 mx-auto mb-4"
            style={{ borderWidth: "2px" }}
          />
          <h3 className="text-4xl mb-2">4.9/5</h3>
          <p className="text-sm nunito-extraLight">Client rating on Clutch (9 reviews)</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseTailoredSection;
