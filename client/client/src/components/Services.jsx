import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 md:px-10 lg:px-[80px]"
    >

      {/* CONTAINER */}
      <div className="max-w-[1200px] mx-auto text-center">

        {/* SMALL TITLE */}
        <p className="text-[#E53935] text-[12px] md:text-[14px] font-semibold tracking-[2px] uppercase">
          WHAT WE OFFER
        </p>

        {/* MAIN TITLE */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0B2A47] mt-4">
          Our Transportation Services
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-4 max-w-[700px] mx-auto text-[14px] md:text-[16px] leading-[24px] md:leading-[26px]">
          We provide comprehensive charter bus solutions tailored to meet the specific needs of your group, ensuring a seamless journey from start to finish.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">

          {/* CARD 1 */}
          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 text-left transition duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 md:mb-6">
              🚌
            </div>

            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0B2A47]">
              Charter Bus Rentals
            </h3>

            <p className="text-gray-500 mt-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
              Comfortable and reliable transportation for weddings, church groups, sports teams, and private group travel across the states.
            </p>

            <button
              onClick={() => navigate("/fleet")}
              className="text-[#E53935] mt-6 font-medium hover:underline transition"
            >
              Learn more →
            </button>

            <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-blue-50 rounded-full"></div>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 text-left transition duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="w-12 h-12 md:w-14 md:h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5 md:mb-6">
              💼
            </div>

            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0B2A47]">
              Corporate Transportation
            </h3>

            <p className="text-gray-500 mt-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
              Professional travel solutions for company outings, conventions, employee shuttles, and business events requiring punctuality.
            </p>

            <button
              onClick={() => navigate("/fleet")}
              className="text-[#E53935] mt-6 font-medium hover:underline transition"
            >
              Learn more →
            </button>

            <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-red-50 rounded-full"></div>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 text-left transition duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5 md:mb-6">
              ✈️
            </div>

            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0B2A47]">
              Airport Transfers
            </h3>

            <p className="text-gray-500 mt-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
              Efficient group transportation to and from all major airports. We track your flights to ensure timely pickups and drop-offs.
            </p>

            <button
              onClick={() => navigate("/fleet")}
              className="text-[#E53935] mt-6 font-medium hover:underline transition"
            >
              Learn more →
            </button>

            <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;