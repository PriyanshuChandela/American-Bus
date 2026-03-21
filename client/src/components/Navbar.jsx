import { useState } from "react";
import {
  Link as RouterLink,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <nav className="bg-white px-4 md:px-[80px] py-4 shadow-sm relative">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* LEFT → LOGO */}
        <RouterLink to="/" className="flex items-center gap-2">
          <div className="bg-[#0B2A47] p-2 rounded-md">
            <img src={logo} alt="logo" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-[18px] leading-none">COACH BUS</h1>
            <p className="text-[#E53935] text-xs">AMERICA</p>
          </div>
        </RouterLink>

        {/* CENTER → MENU (DESKTOP ONLY) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center absolute left-1/2 transform -translate-x-1/2">

          <li>
            <RouterLink to="/" className="hover:text-[#E53935] transition">
              Home
            </RouterLink>
          </li>

          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#E53935] transition"
              >
                Services
              </ScrollLink>
            ) : (
              <button
                onClick={() => handleScroll("services")}
                className="hover:text-[#E53935] transition"
              >
                Services
              </button>
            )}
          </li>

          <li>
            <NavLink
              to="/fleet"
              className={({ isActive }) =>
                `hover:text-[#E53935] transition ${
                  isActive ? "text-[#E53935]" : ""
                }`
              }
            >
              Our Fleet
            </NavLink>
          </li>

          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="why-choose-us"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#E53935] transition"
              >
                Why Choose Us
              </ScrollLink>
            ) : (
              <button
                onClick={() => handleScroll("why-choose-us")}
                className="hover:text-[#E53935] transition"
              >
                Why Choose Us
              </button>
            )}
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#E53935] transition ${
                  isActive ? "text-[#E53935]" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* RIGHT → BUTTON (DESKTOP) */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact", { state: { scrollTo: "contact-form" } })}
            className="bg-[#E53935] text-white px-5 py-2 rounded-full transition duration-300 hover:bg-[#c92f2f] hover:scale-105"
          >
            Get a Quote
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        {/* MOBILE MENU BUTTON */}
<button
  className="md:hidden text-2xl transition-transform duration-300 hover:scale-110"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>

</div>

{/* MOBILE MENU */}
<div
  className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-50 transform transition-all duration-500 ease-in-out ${
    menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
  }`}
>
  <div className="flex flex-col items-center justify-center h-full gap-8 text-gray-800 font-semibold text-lg">

    {/* Home */}
    <RouterLink
      to="/"
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#E53935] transition duration-300 hover:scale-105"
    >
      Home
    </RouterLink>

    {/* Services */}
    <button
      onClick={() => {
        handleScroll("services");
        setMenuOpen(false);
      }}
      className="hover:text-[#E53935] transition duration-300 hover:scale-105"
    >
      Services
    </button>

    {/* Fleet */}
    <RouterLink
      to="/fleet"
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#E53935] transition duration-300 hover:scale-105"
    >
      Our Fleet
    </RouterLink>

    {/* Why Choose Us */}
    <button
      onClick={() => {
        handleScroll("why-choose-us");
        setMenuOpen(false);
      }}
      className="hover:text-[#E53935] transition duration-300 hover:scale-105"
    >
      Why Choose Us
    </button>

    {/* Contact */}
    <RouterLink
      to="/contact"
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#E53935] transition duration-300 hover:scale-105"
    >
      Contact
    </RouterLink>

    {/* CTA BUTTON */}
    <button
      onClick={() => {
        navigate("/contact");
        setMenuOpen(false);
      }}
      className="mt-4 bg-gradient-to-r from-[#E53935] to-[#ff6a6a] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
    >
      Get a Quote 🚀
    </button>

  </div>
</div>
    </nav>
  );
};

export default Navbar;