const LocationSection = () => {
  const info = [
    {
      title: "Business Hours",
      desc: "Monday - Friday: 8AM - 8PM\nSaturday - Sunday: 9AM - 6PM",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Parking Available",
      desc: "Free parking for visitors\nEasy access from main road",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 3h8a4 4 0 010 8H6z" />
          <path d="M6 11v10" />
        </svg>
      ),
    },
    {
      title: "Fleet Viewing",
      desc: "Schedule a tour of our buses\nSee our vehicles in person",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="10" rx="2" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-[60px] md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-[#E53935] text-[12px] font-semibold uppercase tracking-[2px]">
            FIND US
          </p>

          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47] mt-2">
            Our Location
          </h2>

          <p className="text-gray-500 mt-2 text-[14px] md:text-[15px]">
            Visit our office or stop by to see our fleet in person
          </p>

        </div>

        {/* MAP */}
        <div className="mt-10 md:mt-[48px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition duration-300">

          <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] border-0"
            loading="lazy"
          ></iframe>

        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 md:mt-[48px] divide-y sm:divide-y-0 md:divide-x divide-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">

          {info.map((item, i) => (
            <div
              key={i}
              className="text-center py-6 px-4 transition duration-300 hover:bg-gray-50"
            >

              {/* ICON */}
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100 text-[#0B2A47] transition duration-300 hover:bg-[#E53935] hover:text-white">
                {item.icon}
              </div>

              {/* TITLE */}
              <h4 className="font-semibold text-[#0B2A47] text-sm">
                {item.title}
              </h4>

              {/* DESC */}
              <p className="text-gray-500 text-sm mt-2 whitespace-pre-line">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LocationSection;