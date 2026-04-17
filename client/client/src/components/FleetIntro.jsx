const FleetIntro = () => {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[96px] px-4 sm:px-6 md:px-10 lg:px-[80px] bg-white">

      <div className="max-w-[700px] mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47] leading-tight">
          Travel in Comfort and Style
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-500 text-[14px] md:text-[16px] leading-[24px] md:leading-[26px]">
          At Coach Bus America, our fleet is regularly maintained and upgraded to ensure safety, comfort, and reliability. Each vehicle is equipped with modern amenities designed to enhance your travel experience whether you're planning a corporate trip, airport transfer, or group tour.
        </p>

      </div>
    </section>
  );
};

export default FleetIntro;