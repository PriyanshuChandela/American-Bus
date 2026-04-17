import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import heroBg from "../assets/hero-background.png";
import heroimg from "../assets/hero-image.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full lg:h-[823px] flex items-center">

      {/* BACKGROUND (FIXED WITHOUT CHANGING STYLE) */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-[center_60%] scale-110 lg:scale-100"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-[#0B2A47]/70"></div>

      {/* CONTAINER */}
      <div className="max-w-[1280px] w-full mx-auto px-[32px] py-[60px] lg:py-[96px]">

        {/* ================= MOBILE VERSION ================= */}
        <div className="lg:hidden text-white max-w-[500px]">

          <div className="relative rounded-[20px] overflow-hidden shadow-lg border border-white/10 mb-6">
            <img
              src={heroimg}
              alt="Coach Bus Interior"
              className="w-full h-[200px] object-cover"
            />

            <div className="absolute bottom-3 left-3 bg-white text-black px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                🛡️
              </div>
              <div>
                <p className="text-[10px] text-gray-500">SAFETY FIRST</p>
                <p className="text-xs font-semibold">DOT Certified</p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-[#E53935] rounded-full"></span>
            <span className="text-sm tracking-wide">
              PREMIUM CHARTER SERVICES
            </span>
          </div>

          <h1 className="mt-6 text-[28px] leading-[1.1] font-bold">
            Reliable Coach <br />
            Bus Transportation <br />
            Across America
          </h1>

          <p className="mt-4 text-gray-300 text-[14px] leading-[22px]">
            Safe, comfortable, and reliable bus travel for groups across the nation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-[#E53935] px-6 py-3 rounded-lg font-semibold w-full"
          >
            Learn More
          </button>

        </div>

        {/* ================= DESKTOP VERSION ================= */}
        <div className="hidden lg:flex items-center justify-between gap-10">

          <div className="w-[52%] text-white">

            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#E53935] rounded-full"></span>
              <span className="text-sm tracking-wide">
                PREMIUM CHARTER SERVICES
              </span>
            </div>

            <h1 className="mt-6 text-[56px] leading-[1.1] font-bold">
              Reliable Coach <br />
              Bus Transportation <br />
              Across America
            </h1>

            <p className="mt-5 text-gray-300 text-[15px] leading-[24px] max-w-[520px]">
              Comfortable, safe, and professional charter bus services for
              corporate travel, tours, airport transfers, and group
              transportation nationwide.
            </p>

            <div className="flex gap-4 mt-7">

              <button
                onClick={() => navigate("/contact")}
                className="bg-[#E53935] px-6 py-3 rounded-lg font-semibold hover:bg-[#c92f2f] transition"
              >
                Get a Quote
              </button>

              <ScrollLink to="services" smooth duration={500}>
                <button className="px-6 py-3 rounded-lg border border-white/40 hover:bg-white hover:text-[#0B2A47] transition">
                  View Our Services
                </button>
              </ScrollLink>

            </div>

            <div className="flex gap-6 mt-8 text-sm text-gray-300">
              <span>✔ Nationwide</span>
              <span>✔ 24/7 Support</span>
              <span>✔ Top Rated</span>
            </div>

          </div>

          <div className="w-[48%] flex justify-end">

            <div className="relative w-[95%] rounded-[20px] overflow-hidden shadow-xl border border-white/10">

              <img
                src={heroimg}
                alt="Coach Bus Interior"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg shadow-md flex items-center gap-2">

                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  🛡️
                </div>

                <div>
                  <p className="text-xs text-gray-500">SAFETY FIRST</p>
                  <p className="text-sm font-semibold">DOT Certified</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;