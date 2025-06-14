import React from "react";
import { FaInstagram, FaFacebook, FaMedium, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e6f7ff] text-black py-12 px-6 md:px-20 font-sans text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Socials */}
        <div>
          <img
            src="https://alliedge.in/assets/img/alliedgelogo.png"
            alt="Alliedge Logo"
            className="h-12 mb-5"
          />
          <div className="flex space-x-3 text-lg">
            <a
              href="https://www.instagram.com/alliedge_technologies"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow hover:bg-blue-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/p/Alliedge-Technologies-100090423940209/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow hover:bg-blue-200 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://medium.com/@alliedge.technology"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow hover:bg-blue-200 transition"
            >
              <FaMedium />
            </a>
            <a
              href="https://www.linkedin.com/company/alliedge-technologyptld/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow hover:bg-blue-200 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Career</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-base font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>E-commerce Development</li>
            <li>Hardware Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              📍 D-403 & 404, Ganesh Glory 11, SG Highway, Jagatpur, Gota,
              Ahmedabad, Gujarat
            </li>
            <li>📞 +91 9913204659</li>
            <li>📞 +91 9429277139</li>
            <li>📧 info@alliedge.in</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs mt-12 border-t border-blue-100 pt-5">
        © 2025 <strong>Alliedge Technologies Pvt Ltd | Alliedge Group</strong>. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
