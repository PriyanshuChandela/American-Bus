import whychoose from "../assets/why-choose-us.png";

const WhyChoose = () => {
  return (
    <section id="why-choose-us" className="bg-[#F8FAFC] py-[80px] lg:py-[100px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[1280px] mx-auto">

        {/* ================= MOBILE DESIGN ================= */}
        <div className="lg:hidden space-y-8">

          {/* IMAGE WITH OVERLAY */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">

            <img
              src={whychoose}
              alt=""
              className="w-full h-[260px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-4 left-4 right-4 text-white">

              <p className="text-[#E53935] text-xs font-semibold uppercase tracking-[2px]">
                WHY CHOOSE US
              </p>

              <h2 className="text-[22px] font-bold mt-2 leading-tight">
                Experience the Difference
              </h2>

            </div>

          </div>

          {/* CONTENT */}
          <p className="text-gray-500 text-[14px] leading-[22px]">
            We don't just transport people; we deliver peace of mind. Our commitment to safety, reliability, and customer service sets us apart.
          </p>

          {/* FEATURES */}
          <div className="space-y-5">

            {[
              {
                icon: "👨‍✈️",
                title: "Professional Drivers",
                desc: "Highly trained, background-checked drivers focused on safety."
              },
              {
                icon: "🚌",
                title: "Modern Comfortable Buses",
                desc: "Travel in comfort with regularly updated modern fleet."
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "Transparent pricing with no hidden fees."
              },
              {
                icon: "⏱️",
                title: "On-time Service",
                desc: "We ensure punctuality for every trip."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">

                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-[#0B2A47] text-[15px]">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ================= DESKTOP DESIGN ================= */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={whychoose}
              alt=""
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-[#E53935] text-[14px] font-semibold uppercase tracking-[2px]">
              WHY CHOOSE US
            </p>

            <h2 className="text-[36px] font-bold text-[#0B2A47] mt-4 leading-[46px]">
              Experience the Difference <br />
              with Coach Bus America
            </h2>

            <p className="text-gray-500 mt-4 text-[16px] leading-[26px]">
              We don't just transport people; we deliver peace of mind. Our commitment to safety, reliability, and customer service sets us apart in the industry.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-6">

              {[
                {
                  icon: "👨‍✈️",
                  title: "Professional Drivers",
                  desc: "Highly trained, background-checked, and experienced drivers focused on your safety."
                },
                {
                  icon: "🚌",
                  title: "Modern Comfortable Buses",
                  desc: "Our fleet is regularly updated to ensure you travel in modern comfort and style."
                },
                {
                  icon: "💰",
                  title: "Affordable Pricing",
                  desc: "Transparent, competitive pricing with no hidden fees or last-minute surprises."
                },
                {
                  icon: "⏱️",
                  title: "On-time Service",
                  desc: "We value your time. Our punctuality record is industry-leading."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">

                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0B2A47]">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;