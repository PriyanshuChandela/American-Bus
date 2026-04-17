import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 md:px-10 lg:px-[80px]"
    >

      {/* CONTAINER */}
      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-[700px] mx-auto">

          <p className="text-[#E53935] text-[12px] md:text-[14px] font-semibold tracking-[2px] uppercase">
            WHAT WE OFFER
          </p>

          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0B2A47] mt-4">
            Our Transportation Services
          </h2>

          <p className="text-gray-500 mt-4 text-[14px] md:text-[16px] leading-[24px] md:leading-[26px]">
            We provide comprehensive charter bus solutions tailored to meet the specific needs of your group, ensuring a seamless journey from start to finish.
          </p>

        </div>

        {/* ================= MOBILE DESIGN ================= */}
        <div className="mt-10 space-y-6 lg:hidden">

          {/* CARD */}
          {[ 
            {
              icon: "🚌",
              title: "Charter Bus Rentals",
              desc: "Comfortable and reliable transportation for weddings, church groups, sports teams, and private travel."
            },
            {
              icon: "💼",
              title: "Corporate Transportation",
              desc: "Professional travel solutions for company outings, conventions, and employee transport."
            },
            {
              icon: "✈️",
              title: "Airport Transfers",
              desc: "Efficient group transportation to and from major airports with timely pickups."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-md flex flex-col gap-3"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                {item.icon}
              </div>

              <h3 className="text-[18px] font-semibold text-[#0B2A47]">
                {item.title}
              </h3>

              <p className="text-gray-500 text-[14px] leading-[22px]">
                {item.desc}
              </p>

              <button
                onClick={() => navigate("/fleet")}
                className="text-[#E53935] font-medium mt-2"
              >
                Learn more →
              </button>
            </div>
          ))}

        </div>

        {/* ================= DESKTOP DESIGN ================= */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="relative bg-white p-8 rounded-2xl border border-gray-100 text-left transition duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              🚌
            </div>

            <h3 className="text-[20px] font-semibold text-[#0B2A47]">
              Charter Bus Rentals
            </h3>

            <p className="text-gray-500 mt-3 text-[15px] leading-[24px]">
              Comfortable and reliable transportation for weddings, church groups, sports teams, and private group travel across the states.
            </p>

            <button
              onClick={() => navigate("/fleet")}
              className="text-[#E53935] mt-6 font-medium hover:underline transition"
            >
              Learn more →
            </button>

            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full"></div>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white p-8 rounded-2xl border border-gray-100 text-left transition duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              💼
            </div>

            <h3 className="text-[20px] font-semibold text-[#0B2A47]">
              Corporate Transportation
            </h3>

            <p className="text-gray-500 mt-3 text-[15px] leading-[24px]">
              Professional travel solutions for company outings, conventions, employee shuttles, and business events requiring punctuality.
            </p>

            <button
              onClick={() => navigate("/fleet")}
              className="text-[#E53935] mt-6 font-medium hover:underline transition"
            >
              Learn more →
            </button>

            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full"></div>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-white p-8 rounded-2xl border border-gray-100 text-left transition duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              ✈️
            </div>

            <h3 className="text-[20px] font-semibold text-[#0B2A47]">
              Airport Transfers
            </h3>

            <p className="text-gray-500 mt-3 text-[15px] leading-[24px]">
              Efficient group transportation to and from all major airports. We track your flights to ensure timely pickups and drop-offs.
            </p>

            <button
              onClick={() => navigate("/fleet")}
              className="text-[#E53935] mt-6 font-medium hover:underline transition"
            >
              Learn more →
            </button>

            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-full"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;