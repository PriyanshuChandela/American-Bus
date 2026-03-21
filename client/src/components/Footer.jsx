import { useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0B2A47] text-white pt-[60px] md:pt-[80px] lg:pt-[96px] pb-[40px] px-4 sm:px-6 md:px-10 lg:px-[80px]">

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

        {/* COLUMN 1 */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-[#0B2A47] p-2 rounded-md">
              <img src={logo} alt="logo" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-[18px] leading-none">
                COACH BUS
              </h1>
              <p className="text-[#E53935] text-xs">AMERICA</p>
            </div>
          </div>

          <p className="text-gray-400 mt-5 text-[14px] leading-[22px] max-w-[260px]">
            Premier charter bus transportation services across the United States.
            Safety, comfort, and reliability are our core values.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">

            {/* FACEBOOK */}
            <div className="social-icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22 12A10 10 0 1 0 12 22V14.5H9.5V12H12V10C12 7.8 13.3 6.5 15.3 6.5C16.2 6.5 17.2 6.7 17.2 6.7V9H16.1C15 9 14.7 9.7 14.7 10.4V12H17.1L16.7 14.5H14.7V22A10 10 0 0 0 22 12Z"/>
              </svg>
            </div>

            {/* TWITTER */}
            <div className="social-icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.1-1.6-5.6 0-1.1 1.1-1.4 2.7-.8 4.1-3.4-.2-6.4-1.8-8.4-4.3-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2.1 3.9-.6 0-1.2-.2-1.7-.5v.1c0 2.2 1.6 4.1 3.7 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.7 2-5.9 2H2c2.1 1.4 4.6 2.2 7.3 2.2 8.8 0 13.6-7.3 13.6-13.6v-.6c.9-.6 1.6-1.3 2.1-2.2z"/>
              </svg>
            </div>

            {/* INSTAGRAM */}
            <div className="social-icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm5.5-.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/>
              </svg>
            </div>

            {/* LINKEDIN */}
            <div className="social-icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56a1.94 1.94 0 0 1 1.94 1.94zM5.5 8.5h2.9V20h-2.9zm5.4 0h2.8v1.6h.04a3.07 3.07 0 0 1 2.77-1.52c3 0 3.55 2 3.55 4.59V20h-2.9v-5.3c0-1.27 0-2.9-1.77-2.9s-2 1.38-2 2.8V20h-2.9z"/>
              </svg>
            </div>

          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-[16px] font-semibold mb-5 flex items-center gap-2">
            <span className="w-[3px] h-4 bg-[#E53935]"></span>
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-[14px]">
            {[
              { name: "Home", path: "/" },
              { name: "Why Choose Us", path: "/" },
              { name: "Our Fleet", path: "/fleet" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li
                key={i}
                onClick={() => {
                   navigate(item.path);
                   window.scrollTo({ top: 0, behavior: "smooth" });
                 }}
                className="cursor-pointer hover:text-white transition duration-300 hover:translate-x-1"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-[16px] font-semibold mb-5 flex items-center gap-2">
            <span className="w-[3px] h-4 bg-[#E53935]"></span>
            Services
          </h3>

          <ul className="space-y-3 text-gray-400 text-[14px]">
            {[
              "Charter Bus Rental",
              "Corporate Travel",
              "Wedding Shuttles",
              "Sports Team Travel",
              "School Field Trips",
              "Airport Transfers",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition duration-300 cursor-pointer hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="text-[16px] font-semibold mb-5 flex items-center gap-2">
            <span className="w-[3px] h-4 bg-[#E53935]"></span>
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-400 text-[14px]">
            <li className="flex gap-2">📍 1234 Transportation Way, New York</li>
            <li className="flex gap-2">📞 (800) 123-4567</li>
            <li className="flex gap-2">✉️ info@coachbusamerica.com</li>
          </ul>

          {/* NEWSLETTER */}
          <div className="mt-6">
            <p className="text-sm mb-3 text-gray-300">
              Subscribe to our newsletter
            </p>

            <div className="flex overflow-hidden rounded-lg border border-white/20 focus-within:border-[#E53935] transition">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-sm text-black outline-none"
              />
              <button className="bg-[#E53935] px-4 flex items-center justify-center hover:bg-[#c92f2f] transition">
                ➤
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">

        <p>© 2026 Coach Bus America. All rights reserved.</p>

        <div className="flex gap-2">
          {["VISA", "MC", "AMEX"].map((card, i) => (
            <div
              key={i}
              className="bg-white/10 px-2 py-1 rounded text-xs hover:bg-white/20 transition"
            >
              {card}
            </div>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;