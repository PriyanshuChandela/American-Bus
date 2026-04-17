import { useNavigate } from "react-router-dom";
import fleet1 from "../assets/available-vehicles-1.jpg";
import fleet2 from "../assets/available-vehicles-2.jpg";
import fleet3 from "../assets/available-vehicles-3.jpg";

const FleetList = () => {
  const navigate = useNavigate();

  const vehicles = [
    {
      img: fleet1,
      title: "56 Passenger Coach Bus",
      badge: "Most Popular",
      badgeColor: "bg-blue-900",
      desc: "Ideal for large group travel and long-distance journeys.",
      features: [
        "Reclining seats",
        "Free WiFi & power outlets",
        "Climate control",
        "Large luggage bays",
        "Reading lights",
        "Overhead storage",
      ],
    },
    {
      img: fleet2,
      title: "40 Passenger Mini Coach",
      desc: "Perfect for medium-sized groups and short to mid-distance travel.",
      features: [
        "Comfortable seating",
        "TV/DVD entertainment system",
        "Air conditioning",
        "Overhead storage",
        "PA system",
      ],
    },
    {
      img: fleet3,
      title: "Executive Coach",
      badge: "Premium",
      badgeColor: "bg-gray-800",
      desc: "Luxury travel experience designed for business and VIP groups.",
      features: [
        "Leather captain chairs",
        "Conference tables",
        "Kitchenette / refreshment bar",
        "Power outlets at every seat",
        "Extra legroom",
      ],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-[60px] md:py-[80px] lg:py-[96px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47]">
            Our Available Vehicles
          </h2>

          <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
            Choose the perfect bus for your group size and travel needs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

          {vehicles.map((bus, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden transition duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={bus.img}
                  alt={bus.title}
                  className="w-full h-[180px] md:h-[200px] object-cover transition duration-500 group-hover:scale-110"
                />

                {bus.badge && (
                  <span className={`absolute top-3 right-3 ${bus.badgeColor} text-white text-xs px-3 py-1 rounded-full shadow`}>
                    {bus.badge}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-[18px] font-semibold text-[#0B2A47]">
                  {bus.title}
                </h3>

                <p className="text-[#E53935] text-sm mt-1">
                  {bus.desc}
                </p>

                {/* FEATURES */}
                <ul className="mt-4 text-sm text-gray-600 space-y-2">
                  {bus.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#E53935]">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 w-full bg-[#E53935] text-white py-3 rounded-lg transition duration-300 hover:bg-[#c92f2f] hover:scale-[1.02] active:scale-95"
                >
                  Request Quote
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FleetList;