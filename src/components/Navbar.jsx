import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Group", dropdown: [
        { label: "Alliedge Technologies Pvt Ltd", path: "/our-group/alliedge-technologies" },
        { label: "Alliedge Digital", path: "/our-group/alliedge-digital" },
        { label: "Vision Softronics", path: "/our-group/vision-softronics" },
      ]
    },
    { label: "Company", dropdown: [
        { label: "About Us", path: "/company/About-Us" },
        { label: "Why Choose Us", path: "/company/Why-Choose-Us" },
        { label: "Our Team", path: "/company/Our-Team" },
        { label: "Life At Alliedge", path: "/company/Life-At-Alliedge" },
        { label: "Gallery", path: "/company/Gallery" },
      ]
    },
    { label: "Career", path: "/career" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
  ];

  return (
    <div className="relative overflow-visible bg-white fixed top-0 w-full z-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* <div className="absolute top-6 left-1/4 w-32 h-32 bg-gray-600 opacity-30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-gray-600 opacity-30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-gray-600 opacity-25 rounded-full blur-xl animate-ping"></div> */}
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-4 shadow-none border border-transparent">
        <div className="flex items-center">
          <img
            src="https://alliedge.in/assets/img/alliedgelogo.png"
            alt="Alliedge Logo"
            className="h-10 mr-2"
          />
        </div>

        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <span className="cursor-pointer hover:text-blue-500">
                    {item.label}
                  </span>
                  <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 w-56">
                    {item.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-blue-100"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`hover:text-blue-500 ${pathname === item.path ? "text-blue-600 font-semibold" : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          <li>
            <a
              href="https://topmate.io/deeppanchal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200"
            >
              Consultant
            </a>
          </li>

          <li>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile menu button (simplified) */}
        <div className="md:hidden">
          {/* You can add a hamburger icon here */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
