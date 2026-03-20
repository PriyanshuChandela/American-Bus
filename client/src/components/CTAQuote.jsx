import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CTAQuote = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to contact page + scroll to form
    navigate("/contact", {
      state: { scrollTo: "contact-form" },
    });
  };

  return (
    <section className="relative bg-[#1F3E6B] py-[60px] md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px] overflow-hidden">

      {/* BACKGROUND SHAPE */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#0B2A47]/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1000px] mx-auto">

        {/* CARD */}
        <div className="relative bg-[#1E3A5F] text-white rounded-2xl px-6 sm:px-10 py-10 text-center shadow-xl overflow-hidden">

          {/* GLASS OVERLAY */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

          {/* CONTENT */}
          <div className="relative z-10">

            {/* TITLE */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold">
              Ready to Book Your Trip?
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mt-3 text-[14px] md:text-[15px] max-w-[600px] mx-auto">
              Contact Coach Bus America today for a custom transportation quote.
              Let us help you plan the perfect journey.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
            >

              {/* INPUTS */}
              <input
                type="text"
                name="pickup"
                placeholder="Pickup Location"
                onChange={handleChange}
                required
                className="w-full md:w-auto flex-1 px-4 py-3 rounded-lg text-black outline-none focus:ring-2 focus:ring-[#E53935]"
              />

              <input
                type="text"
                name="drop"
                placeholder="Drop-off Location"
                onChange={handleChange}
                required
                className="w-full md:w-auto flex-1 px-4 py-3 rounded-lg text-black outline-none focus:ring-2 focus:ring-[#E53935]"
              />

              <input
                type="date"
                name="date"
                onChange={handleChange}
                required
                className="w-full md:w-auto px-4 py-3 rounded-lg text-black outline-none focus:ring-2 focus:ring-[#E53935]"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#E53935] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#c92f2f] hover:scale-105 active:scale-95 shadow-lg"
              >
                Get a Quote Now
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAQuote;