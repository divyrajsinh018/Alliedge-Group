import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img src="https://alliedge.in/assets/img/alliedgelogo.png" alt="Alliedge Logo" className="h-10 mr-2" />
      </div>
      <ul className="flex space-x-6 font-medium text-gray-800">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>

         {/* Our Group with Dropdown */}
        <li className="group relative">
          <span className="hover:text-blue-500 cursor-pointer">Our Group</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 w-56 z-50">
            <li>
              <Link to="/our-group/alliedge-technologies" className="block px-4 py-2 hover:bg-blue-100">Alliedge Technologies Pvt Ltd</Link>
            </li>
            <li>
              <Link to="/our-group/alliedge-digital" className="block px-4 py-2 hover:bg-blue-100">Alliedge Digital</Link>
            </li>
            <li>
              <Link to="/our-group/vision-softronics" className="block px-4 py-2 hover:bg-blue-100">Vision Softronics</Link>
            </li>
          </ul>
        </li>

         {/* Our Group with Dropdown */}
        <li className="group relative">
          <span className="hover:text-blue-500 cursor-pointer">Company</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 w-56 z-50">
            <li>
              <Link to="/company/About-Us" className="block px-4 py-2 hover:bg-blue-100">About Us</Link>
            </li>
            <li>
              <Link to="/company/Why-Choose-Us" className="block px-4 py-2 hover:bg-blue-100">Why Choose Us</Link>
            </li>
            <li>
              <Link to="/company/Our-Team" className="block px-4 py-2 hover:bg-blue-100">Our Team</Link>
            </li>
            <li>
              <Link to="/company/Life-At-Alliedge" className="block px-4 py-2 hover:bg-blue-100">Life At Alliedge</Link>
            </li>
            <li>
              <Link to="/company/Gallery" className="block px-4 py-2 hover:bg-blue-100">Gallery</Link>
            </li>
          </ul>
        </li>
        
        {/* <li><Link to="/company" className="hover:text-blue-500">Company</Link></li> */}

        <li><Link to="/career" className="hover:text-blue-500">Career</Link></li>
        <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
        <li><Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link></li>
          {/* 🔁 Updated Consultant button to open external link */}
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
        <li><Link to="/contact" className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600">Contact Us</Link></li>
      </ul>
    </nav>
  );    
};

export default Navbar;