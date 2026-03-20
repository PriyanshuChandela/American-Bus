const WhyChoose = () => {
  return (
    <section id="why-choose-us" className="bg-[#F8FAFC] py-[100px] px-6">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/src/assets/why-choose-us.png"
            alt=""
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* SMALL TITLE */}
          <p className="text-[#E53935] text-[14px] font-semibold uppercase tracking-[2px]">
            WHY CHOOSE US
          </p>

          {/* HEADING */}
          <h2 className="text-[36px] font-bold text-[#0B2A47] mt-4 leading-[46px]">
            Experience the Difference <br />
            with Coach Bus America
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-4 text-[16px] leading-[26px]">
            We don't just transport people; we deliver peace of mind. Our commitment to safety, reliability, and customer service sets us apart in the industry.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-6">

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                👨‍✈️
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2A47]">
                  Professional Drivers
                </h4>
                <p className="text-gray-500 text-sm">
                  Highly trained, background-checked, and experienced drivers focused on your safety.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                🚌
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2A47]">
                  Modern Comfortable Buses
                </h4>
                <p className="text-gray-500 text-sm">
                  Our fleet is regularly updated to ensure you travel in modern comfort and style.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                💰
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2A47]">
                  Affordable Pricing
                </h4>
                <p className="text-gray-500 text-sm">
                  Transparent, competitive pricing with no hidden fees or last-minute surprises.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                ⏱️
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2A47]">
                  On-time Service
                </h4>
                <p className="text-gray-500 text-sm">
                  We value your time. Our punctuality record is industry-leading.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;