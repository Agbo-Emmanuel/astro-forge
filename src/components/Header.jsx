import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const navs = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact Us", to: "/contact" },
  ];

  // Detect scroll and toggle background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full px-6 md:px-20 py-6 flex justify-between items-center transition-all duration-300 
          ${
            isScrolled
              ? "backdrop-blur-md bg-blue-950/60 border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        {/* LOGO */}
        <div className="w-[250px] h-[60px] rounded-md ml-[-60px]">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navs.map((nav) => (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={({ isActive }) =>
                isActive
                  ? "text-base text-amber-500 font-medium"
                  : "text-base text-gray-100 font-medium hover:text-amber-500 transition"
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex gap-4">
          <button className="px-10 py-3 bg-amber-500 text-base text-gray-800 rounded-full hover:bg-amber-600 transition cursor-pointer">
            Get a Quote
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="md:hidden fixed top-20 left-0 w-full bg-blue-950/90 backdrop-blur-lg z-30 px-6 py-6 border-b border-white/10 shadow-lg"
          >
            <div className="flex flex-col gap-6">
              {navs.map((nav) => (
                <NavLink
                  key={nav.to}
                  to={nav.to}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg text-amber-500 font-semibold"
                      : "text-lg text-gray-100 font-medium hover:text-amber-500 transition"
                  }
                >
                  {nav.name}
                </NavLink>
              ))}

              {/* Mobile CTA Button */}
              <button className="mt-4 px-4 py-3 bg-amber-500 text-center text-base text-gray-800 rounded-full hover:bg-amber-600 transition cursor-pointer">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
