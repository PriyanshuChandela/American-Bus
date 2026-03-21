import { useNavigate } from "react-router-dom";
import fleet1 from "../assets/modern-fleet-1.jpg";
import fleet2 from "../assets/modern-fleet-2.jpg";
import fleet3 from "../assets/modern-fleet-3.jpg";

const Fleet = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8FAFC] py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <div>
          <p className="text-[#E53935] text-[12px] md:text-[14px] font-semibold uppercase tracking-[2px]">
            OUR VEHICLES
          </p>

          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0B2A47] mt-3">
            Our Modern Fleet
          </h2>

          <p className="text-gray-500 mt-3 max-w-[500px] text-[14px] md:text-[16px]">
            Choose from our wide range of modern, well-maintained vehicles equipped with premium amenities for your comfort.
          </p>
        </div>

        <button
          onClick={() => navigate("/fleet")}
          className="border border-gray-300 px-5 py-2 rounded-lg text-sm transition hover:bg-[#0B2A47] hover:text-white"
        >
          View Full Fleet
        </button>

      </div>

      {/* CARDS */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">

        {/* CARD */}
        {[{
          img: fleet1,
          title: "56 Passenger Coach Bus",
          badge: "Most Popular",
          badgeColor: "bg-blue-900",
          desc: "The standard for large group travel with maximum comfort and luggage capacity.",
          features: ["Reclining Seats", "Free WiFi & Power Outlets", "Climate Control", "Large Luggage Bays"]
        },
        {
          img: fleet2,
          title: "40 Passenger Mini Coach",
          desc: "Ideal for medium-sized groups for local transfers and short-distance trips.",
          features: ["Comfortable Seating", "TV/DVD System", "Air Conditioning", "Overhead Storage"]
        },
        {
          img: fleet3,
          title: "Executive Coach",
          badge: "Premium",
          badgeColor: "bg-gray-800",
          desc: "Premium travel experience with luxury seating and conference capabilities.",
          features: ["Leather Captain Chairs", "Conference Tables", "Kitchenette / Bar", "Power At Every Seat"]
        }].map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden transition duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={card.img}
                alt=""
                className="w-full h-[200px] md:h-[220px] object-cover transition duration-500 hover:scale-105"
              />

              {card.badge && (
                <span className={`absolute top-3 right-3 ${card.badgeColor} text-white text-xs px-3 py-1 rounded-full`}>
                  {card.badge}
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-[18px] font-semibold text-[#0B2A47]">
                {card.title}
              </h3>

              <p className="text-gray-500 mt-2 text-[14px] leading-[22px]">
                {card.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-4 text-[14px] text-gray-600 space-y-2">
                {card.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/contact")}
                className="w-full mt-6 border border-gray-300 py-2 rounded-lg transition duration-300 hover:bg-[#E53935] hover:text-white hover:border-[#E53935]"
              >
                Request Quote
              </button>

            </div>
          </div>

        ))}

      </div>
    </section>
  );
};

export default Fleet;