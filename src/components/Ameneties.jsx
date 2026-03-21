const Amenities = () => {
  const amenities = [
    { icon: "wifi", label: "WiFi Connectivity" },
    { icon: "seat", label: "Reclining Seats" },
    { icon: "ac", label: "Climate Control" },
    { icon: "usb", label: "USB Charging Ports" },
    { icon: "luggage", label: "Large Luggage Storage" },
    { icon: "tv", label: "Entertainment Systems" },
    { icon: "driver", label: "Professional Drivers" },
    { icon: "safety", label: "Safety Monitoring" },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "wifi":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12a11 11 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" />
          </svg>
        );
      case "seat":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 10h12v6H6zM6 10V6h4v4" />
          </svg>
        );
      case "ac":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M4 8h16M4 16h16" />
          </svg>
        );
      case "usb":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M8 6l4-4 4 4" />
          </svg>
        );
      case "luggage":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 7h12v13H6zM9 7V4h6v3" />
          </svg>
        );
      case "tv":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="12" rx="2" />
          </svg>
        );
      case "driver":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a6.5 6.5 0 0113 0" />
          </svg>
        );
      case "safety":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-[60px] md:py-[80px] lg:py-[96px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      {/* INNER BOX */}
      <div className="max-w-[1200px] mx-auto bg-[#1E3A5F] rounded-2xl px-6 md:px-[32px] py-10 md:py-[48px] text-center text-white relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)]">

        {/* HEADING */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold">
          Premium Amenities Included
        </h2>

        <p className="text-gray-300 mt-2 text-[13px] md:text-sm">
          Every journey enhanced with modern comfort and convenience
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 md:gap-y-10 mt-8 md:mt-10">

          {amenities.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center group transition duration-300"
            >

              {/* ICON BOX */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center mb-3 transition duration-300 group-hover:bg-[#E53935] group-hover:scale-110">
                {renderIcon(item.icon)}
              </div>

              <p className="text-[13px] md:text-sm text-gray-200 group-hover:text-white transition">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Amenities;