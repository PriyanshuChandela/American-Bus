import { useNavigate } from "react-router-dom";
import fleetHero from "../assets/fleet-hero.png";

const FleetHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={fleetHero}
          alt="Fleet Background"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY (FIX CLICK ISSUE) */}
        <div className="absolute inset-0 bg-[#0B2A47]/80 pointer-events-none"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[800px] px-4 sm:px-6 text-white">

        {/* HEADING */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[38px] md:leading-[58px]">
          Our Modern Fleet
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-300 text-[14px] md:text-[16px] leading-[24px] md:leading-[26px]">
          Explore our range of modern, comfortable, and fully equipped buses designed to deliver a safe and premium travel experience for groups of all sizes.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-[#E53935] px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#c92f2f] hover:scale-105 active:scale-95"
        >
          Request a Quote
        </button>

      </div>
    </section>
  );
};

export default FleetHero;