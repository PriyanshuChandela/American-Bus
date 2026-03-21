import safetyImg from "../assets/Safety-image.png";

const Safety = () => {
  const features = [
    {
      title: "DOT Certified Vehicles",
      desc: "All buses meet or exceed Department of Transportation safety requirements",
    },
    {
      title: "Regular Safety Inspections",
      desc: "Comprehensive pre-trip and routine maintenance checks on every vehicle",
    },
    {
      title: "Professional Licensed Drivers",
      desc: "Experienced, background-checked drivers with commercial licenses",
    },
    {
      title: "Clean and Sanitized Interiors",
      desc: "Thorough cleaning and sanitization after every trip",
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[80px] lg:py-[96px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[48px] items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* LABEL */}
          <p className="text-[#E53935] text-[12px] font-semibold uppercase tracking-[2px]">
            SAFETY FIRST
          </p>

          {/* HEADING */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47] mt-2 leading-[34px] md:leading-[42px]">
            Safety and Maintenance <br className="hidden md:block" />
            Standards
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-4 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
            Our fleet undergoes regular inspections and maintenance to ensure the highest safety standards. All buses are DOT certified and operated by experienced professional drivers trained to deliver a smooth and secure travel experience.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">

            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transition duration-300 hover:shadow-md hover:-translate-y-1"
              >

                {/* ICON */}
                <div className="w-6 h-6 bg-[#0B2A47] text-white rounded-full flex items-center justify-center text-sm shrink-0">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* TEXT */}
                <div>
                  <p className="font-semibold text-[#0B2A47] text-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">

          <img
            src={safetyImg}
            alt="Safety"
            className="rounded-2xl w-full h-[300px] sm:h-[380px] md:h-[450px] object-cover transition duration-500 group-hover:scale-[1.02]"
          />

          {/* GRADIENT OVERLAY (SUBTLE DEPTH) */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* FLOATING BADGE */}
          <div className="absolute bottom-4 left-4 bg-[#E53935] text-white px-4 py-3 rounded-lg shadow-xl backdrop-blur-sm transition duration-300 group-hover:scale-105">

            <p className="text-lg font-bold leading-none">100%</p>
            <p className="text-xs text-white/90">Safety Record</p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Safety;