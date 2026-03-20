import client from "../assets/client-1.jpg";
import clientt from "../assets/client-2.jpg";
import clienttt from "../assets/client-3.jpg";

const Testimonials = () => {
  return (
    <section className="bg-[#0B2A47] py-[100px] px-6 relative overflow-hidden">

      {/* BACKGROUND SHAPE */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-white/5 rounded-full"></div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">

        {/* SMALL TITLE */}
        <p className="text-[#E53935] text-[14px] font-semibold uppercase tracking-[2px]">
          TESTIMONIALS
        </p>

        {/* HEADING */}
        <h2 className="text-[36px] font-bold text-white mt-3">
          What Our Customers Say
        </h2>

        {/* RED LINE */}
        <div className="w-16 h-[3px] bg-[#E53935] mx-auto mt-4"></div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-2xl text-left shadow-md relative">

            <p className="text-yellow-400 text-lg">★★★★★</p>

            <p className="text-gray-600 mt-4 text-[14px] leading-[24px]">
              "Coach Bus America made our corporate retreat logistics effortless. The driver was professional and the bus was immaculate. Highly recommended!"
            </p>

            {/* PROFILE */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={client}
                className="w-10 h-10 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <p className="font-semibold text-[#0B2A47] text-sm">
                  James Wilson
                </p>
                <p className="text-gray-400 text-xs">
                  Event Coordinator, TechCorp
                </p>
              </div>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-2xl text-left shadow-md">

            <p className="text-yellow-400 text-lg">★★★★★</p>

            <p className="text-gray-600 mt-4 text-[14px] leading-[24px]">
              "We rented a 56-passenger coach for our church youth group trip. Safe driving, clean bus, and excellent communication throughout the process."
            </p>

            <div className="flex items-center gap-3 mt-6">
              <img
                src={clientt}
                className="w-10 h-10 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <p className="font-semibold text-[#0B2A47] text-sm">
                  Sarah Jenkins
                </p>
                <p className="text-gray-400 text-xs">
                  Youth Director
                </p>
              </div>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-2xl text-left shadow-md">

            <p className="text-yellow-400 text-lg">★★★★★</p>

            <p className="text-gray-600 mt-4 text-[14px] leading-[24px]">
              "Used their airport transfer service for our large family reunion. They were right on time and handled all our luggage with care. A stress-free experience."
            </p>

            <div className="flex items-center gap-3 mt-6">
              <img
                src={clienttt}
                className="w-10 h-10 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <p className="font-semibold text-[#0B2A47] text-sm">
                  Robert Chen
                </p>
                <p className="text-gray-400 text-xs">
                  Family Reunion Organizer
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;