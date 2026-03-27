import { useState } from "react";
import {
  Link as RouterLink,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.jpeg";

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
    <nav className="bg-white px-4 md:px-[80px] py-3 shadow-sm relative">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* LOGO */}
        <RouterLink to="/" className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <div>
            <h1 className="font-bold text-[18px] leading-none">COACH BUS</h1>
            <p className="text-[#E53935] text-xs">AMERICA</p>
          </div>
        </RouterLink>

        {/* DESKTOP MENU */}
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
                smooth
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
                smooth
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

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() =>
              navigate("/contact", { state: { scrollTo: "contact-form" } })
            }
            className="bg-[#E53935] text-white px-5 py-2 rounded-full hover:bg-[#c92f2f] hover:scale-105 transition"
          >
            Get a Quote
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-50 transition-all duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >

        {/* CROSS BUTTON (NEW) */}
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-gray-800 font-semibold text-lg">

          <RouterLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#E53935] transition duration-300 active:scale-95"
          >
            Home
          </RouterLink>

          <button
            onClick={() => {
              handleScroll("services");
              setMenuOpen(false);
            }}
            className="hover:text-[#E53935] transition duration-300 active:scale-95"
          >
            Services
          </button>

          <RouterLink
            to="/fleet"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#E53935] transition duration-300 active:scale-95"
          >
            Our Fleet
          </RouterLink>

          <button
            onClick={() => {
              handleScroll("why-choose-us");
              setMenuOpen(false);
            }}
            className="hover:text-[#E53935] transition duration-300 active:scale-95"
          >
            Why Choose Us
          </button>

          <RouterLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#E53935] transition duration-300 active:scale-95"
          >
            Contact
          </RouterLink>

          {/* CTA */}
          <button
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
            className="mt-4 bg-[#E53935] text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition"
          >
            Get a Quote
          </button>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;