import { useNavigate } from "react-router-dom";

const PlanTripCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#2F4B73] py-[80px] md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px] overflow-hidden">

      {/* TOP RIGHT SHAPE */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>

      {/* BOTTOM LEFT SHAPE */}
      <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[800px] mx-auto text-center text-white">

        {/* HEADING */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-tight">
          Ready to Plan Your Trip?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-300 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] max-w-[600px] mx-auto">
          Contact Coach Bus America today and get a custom transportation
          quote tailored to your needs.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          {/* GET QUOTE */}
          <button
            onClick={() =>
              navigate("/contact", {
                state: { scrollTo: "contact-form" },
              })
            }
            className="bg-[#E53935] px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#c92f2f] hover:scale-105"
          >
            Get a Quote
          </button>

          {/* CALL BUTTON */}
          <a
            href="tel:+16625055060"
            className="border border-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300 hover:bg-white hover:text-[#2F4B73] hover:scale-105"
          >
            📞 Call +1(662) 505-5060
          </a>

        </div>

      </div>
    </section>
  );
};

export default PlanTripCTA;