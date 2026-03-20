import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-background.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B2A47]/80 pointer-events-none"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[80px] h-full flex items-center justify-between gap-6">

        {/* LEFT */}
        <div className="w-[55%] text-white">

          {/* BADGE */}
          <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-[10px] sm:text-sm tracking-wide">
              PREMIUM CHARTER SERVICES
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[20px] sm:text-[28px] md:text-[48px] lg:text-[56px] leading-[28px] sm:leading-[36px] md:leading-[58px] font-bold mt-4 sm:mt-6">
            Reliable Coach <br />
            Bus Transportation <br />
            Across America
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-4 sm:mt-6 text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[22px] md:leading-[26px]">
            Comfortable, safe, and professional charter bus services for corporate travel, tours, airport transfers, and group transportation nationwide.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-8">

            <button
              onClick={() => navigate("/contact")}
              className="bg-[#E53935] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#c92f2f] transition"
            >
              Get a Quote
            </button>

            <ScrollLink to="services" smooth duration={500}>
              <button className="border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-white hover:text-[#0B2A47] transition">
                View Services
              </button>
            </ScrollLink>

          </div>

          {/* FEATURES */}
          <div className="hidden sm:flex gap-4 mt-6 text-xs sm:text-sm text-gray-300">
            <span>✔ Nationwide</span>
            <span>✔ 24/7</span>
            <span>✔ Top Rated</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[45%] h-[250px] sm:h-[350px] md:h-[500px] relative">

          <img
            src="/src/assets/hero-image.png"
            alt=""
            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white text-black px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl shadow-md flex items-center gap-2 sm:gap-3">

            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center text-xs sm:text-sm">
              🛡️
            </div>

            <div>
              <p className="text-[10px] sm:text-xs text-gray-500">
                SAFETY FIRST
              </p>
              <p className="text-[12px] sm:text-sm font-semibold">
                DOT Certified
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;