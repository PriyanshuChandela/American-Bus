import { useState } from "react";

const faqData = [
  {
    question: "How far in advance should I book a charter bus?",
    answer:
      "We recommend booking at least a few weeks in advance for best availability, especially during peak seasons.",
  },
  {
    question: "Do your buses include WiFi and power outlets?",
    answer:
      "Yes, many of our buses include WiFi, charging ports, and other modern amenities.",
  },
  {
    question: "Do you provide nationwide transportation?",
    answer:
      "Yes, we offer charter bus services across the United States.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the booking. Generally, cancellations made 14 days in advance are eligible.",
  },
  {
    question: "Are your drivers professionally licensed and insured?",
    answer:
      "Absolutely. All our drivers hold proper commercial licenses and undergo regular training.",
  },
  {
    question: "Can I bring luggage and equipment on the bus?",
    answer:
      "Yes, our buses feature spacious luggage bays and overhead storage.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[60px] md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[800px] mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-[#E53935] text-[12px] font-semibold uppercase tracking-[2px]">
            FAQ
          </p>

          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47] mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-3 text-[14px] md:text-[15px]">
            Find answers to common questions about our charter bus services
          </p>

        </div>

        {/* ACCORDION */}
        <div className="mt-10 md:mt-[64px] space-y-4">

          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition duration-300 hover:shadow-md"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left group"
                >

                  <span className="font-medium text-[#0B2A47] text-[14px] md:text-[15px] group-hover:text-[#E53935] transition">
                    {item.question}
                  </span>

                  {/* ICON */}
                  <span className="text-[#E53935] transition duration-300">
                    {isOpen ? (
                      <svg className="w-5 h-5 rotate-180 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 15l-7-7-7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>

                </button>

                {/* ANSWER */}
                <div
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-500 text-[13px] md:text-[14px] leading-[22px]">
                    {item.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FAQ;