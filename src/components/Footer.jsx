import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-blue-950 text-gray-100">
        <section className="w-full px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <article>
            <div className="flex items-center gap-3">
              <div className="w-[200px] h-[50px] rounded-md ml-[-60px]">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-semibold ml-[-60px]">Astroforge</h1>
            </div>
            <p className="text-gray-300 text-lg mt-3 leading-relaxed">
              Forging the Future of Digital Work.
            </p>
          </article>

          {/* Quick Links */}
          <article>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-amber-400 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Services
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Portfolio
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </article>

          {/* Contact */}
          <article>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                <span>astroforge@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-amber-400" />
                <span>+234 801 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-400" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </article>

          {/* Social */}
          <article>
            <h2 className="text-xl font-semibold mb-4">Social</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3 cursor-pointer hover:text-amber-400 transition">
                <FaWhatsapp className="text-amber-400" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:text-amber-400 transition">
                <FaLinkedin className="text-amber-400" />
                <span>LinkedIn</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:text-amber-400 transition">
                <FaTwitter className="text-amber-400" />
                <span>Twitter</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:text-amber-400 transition">
                <FaInstagram className="text-amber-400" />
                <span>Instagram</span>
              </li>
            </ul>
          </article>
        </section>

        {/* Bottom Bar */}
        <section className="w-full py-6 text-center border-t border-gray-700">
          <p className="text-gray-300 text-sm">
            © 2025 Astroforge. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
