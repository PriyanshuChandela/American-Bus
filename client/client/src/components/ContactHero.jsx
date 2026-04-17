import { useNavigate } from "react-router-dom";
import contactHero from "../assets/contact-hero.png";

const ContactHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={contactHero}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY (FIX CLICK ISSUE) */}
        <div className="absolute inset-0 bg-[#0B2A47]/80 pointer-events-none"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[800px] px-4 sm:px-6 text-white">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-[12px] md:text-sm backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#E53935] rounded-full animate-pulse"></span>
          WE'RE HERE TO HELP
        </div>

        {/* HEADING */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mt-6 leading-[38px] md:leading-[58px]">
          Contact Coach Bus America
        </h1>

        {/* TEXT */}
        <p className="mt-4 text-gray-300 text-[14px] md:text-[16px] leading-[24px] md:leading-[26px]">
          Have questions or need a transportation quote? Our team is ready to help you plan your journey.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">

          {/* QUOTE BUTTON */}
          <button
            onClick={() => navigate("/contact", { state: { scrollTo: "contact-form" } })}
            className="bg-[#E53935] px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#c92f2f] hover:scale-105 active:scale-95"
          >
            Get a Quote
          </button>

          {/* CALL BUTTON */}
          <a
            href="tel:+18001234567"
            className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300 hover:bg-white hover:text-[#0B2A47] hover:scale-105"
          >
            {/* PHONE ICON */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.33a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.75-1.27a2 2 0 0 1 2.11-.45c.73.35 1.52.6 2.33.72a2 2 0 0 1 1.72 2z" />
            </svg>

            Call Us Now
          </a>

        </div>

      </div>

      {/* WAVE SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[60px] md:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

    </section>
  );
};

export default ContactHero;