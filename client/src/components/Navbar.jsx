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
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4 rounded-xl py-6 flex flex-col items-center gap-5 text-gray-700 font-medium">

          <RouterLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </RouterLink>

          <button
            onClick={() => {
              handleScroll("services");
              setMenuOpen(false);
            }}
          >
            Services
          </button>

          <RouterLink to="/fleet" onClick={() => setMenuOpen(false)}>
            Our Fleet
          </RouterLink>

          <button
            onClick={() => {
              handleScroll("about");
              setMenuOpen(false);
            }}
          >
            About
          </button>

          <RouterLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </RouterLink>

          <button
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
            className="bg-[#E53935] text-white px-6 py-2 rounded-full"
          >
            Get a Quote
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;