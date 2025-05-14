const MissionSection = () => {
  return (
    <header className="w-[100vw] h-screen bg-[url('/Images/aboutus/vision-misssion.png')] bg-cover bg-center overflow-hidden relative">
      <div className="relative w-full h-full flex items-center justify-end md:justify-center lg:justify-end px-5 md:px-5 lg:px-[120px]">
        <div className="max-w-[800px] md:max-w-[600px] lg:max-w-[900px] text-white text-right md:text-center lg:text-center px-5 md:px-0 lg:w-[60%]">
          <h1 className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold mb-4 md:mb-6 lg:mb-8 leading-[1.2]">
            Our Vision and Mission
          </h1>
          <p className="text-base text-center md:text-[1.1rem] lg:text-[1.25rem] leading-[1.6] opacity-90">
            As architects of connection, we empower business across the globe to
            envision a future where legacy technology serves as a foundational
            stepping stone towards progress. Our mission is to connect the dots
            between where your business is today and the dynamic, multi-cloud
            future that awaits.
          </p>
        </div>
      </div>
    </header>

    // <section className="flex justify-between items-center md:gap-5 bg-[url('/Images/Mission_Bg.png')] bg-cover bg-center bg-no-repeat md:h-[60vh] h-[35vh] mt-12 md:mt-0">
    //   <div className="md:w-1/2 w-[45%] h-full">
    //     <Image
    //       src={MISSION_SECTION.leftImage}
    //       alt=""
    //       height={500}
    //       width={500}
    //       className="w-full h-full"
    //     />
    //   </div>
    //   <div className="md:w-1/2 w-[60%] text-white md:mr-20 mr-4">
    //     <h2 className="md:text-5xl text-xl text-center md:text-start">{MISSION_SECTION.heading}</h2>
    //     <p className="md:text-xl md:mt-7 mt-3 text-xs text-center md:text-start">{MISSION_SECTION.description}</p>
    //   </div>
    // </section>
  );
};

export default MissionSection;
