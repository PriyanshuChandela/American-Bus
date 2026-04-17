const ContactInfo = () => {
  const contacts = [
    {
      type: "Phone",
      value: "+1(662) 505-5060",
      link: "tel:+16625055060",
      desc: "Available 24/7 for bookings and inquiries",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.33a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.75-1.27a2 2 0 0 1 2.11-.45c.73.35 1.52.6 2.33.72a2 2 0 0 1 1.72 2z" />
        </svg>
      ),
      bg: "bg-gray-100",
    },
    {
      type: "Email",
      value: "info@coachbusamerica.com",
      link: "mailto:info@coachbusamerica.com",
      desc: "Send us your travel details and we will respond quickly",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
      bg: "bg-red-100",
    },
    {
      type: "Office Location",
      value: "1234 Transportation Way, New York, NY 10001",
      link: "https://maps.google.com",
      desc: "Visit us during business hours",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      ),
      bg: "bg-gray-100",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-[60px] md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-[#E53935] text-[12px] font-semibold uppercase tracking-[2px]">
            CONTACT INFORMATION
          </p>

          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47] mt-2">
            Get in Touch
          </h2>

          <p className="text-gray-500 mt-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] max-w-[600px] mx-auto">
            Choose your preferred way to reach us. We're available 24/7 to assist with your transportation needs.
          </p>

        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div className="flex gap-4 mt-10 overflow-x-auto lg:hidden pb-4">

          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target={item.type === "Office Location" ? "_blank" : ""}
              rel="noreferrer"
              className="min-w-[85%] bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm"
            >

              <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 text-[#0B2A47]`}>
                {item.icon}
              </div>

              <h3 className="text-[14px] font-semibold text-[#0B2A47]">
                {item.type}
              </h3>

              <p className="text-[#E53935] font-semibold mt-2 text-sm break-words">
                {item.value}
              </p>

              <p className="text-gray-400 text-[13px] mt-2">
                {item.desc}
              </p>

            </a>
          ))}

        </div>

        {/* ================= DESKTOP VERSION ================= */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-[64px]">

          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target={item.type === "Office Location" ? "_blank" : ""}
              rel="noreferrer"
              className="group bg-white p-6 md:p-8 rounded-xl border border-gray-100 text-center transition duration-300 shadow-sm hover:shadow-lg hover:-translate-y-2"
            >

              <div className={`w-12 h-12 md:w-14 md:h-14 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 text-[#0B2A47] transition duration-300 group-hover:bg-[#E53935] group-hover:text-white`}>
                {item.icon}
              </div>

              <h3 className="text-[15px] md:text-[16px] font-semibold text-[#0B2A47]">
                {item.type}
              </h3>

              <p className="text-[#E53935] font-semibold mt-2 break-words">
                {item.value}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;