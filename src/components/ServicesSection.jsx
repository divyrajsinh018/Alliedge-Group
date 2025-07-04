import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your service images
import UXImg from "../assets/Most Services/UIUX.jpg";
import EcomImg from "../assets/Most Services/Net.jpg";
import CRMImg from "../assets/Most Services/CRM.jpg";
import WebImg from "../assets/Most Services/WEBDEV.jpg";
import HealthImg from "../assets/Most Services/MEDICAL.jpg";
import ERPImg from "../assets/Most Services/ERP.jpg";

const services = [
  {
    id: "01",
    title: "UX Design",
    desc: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    image: UXImg,
  },
  {
    id: "02",
    title: "E-commerce",
    desc: "We create seamless, intuitive e-commerce solutions that make shopping easy and enjoyable, boosting sales and customer satisfaction.",
    image: EcomImg,
  },
  {
    id: "03",
    title: "CRM Development",
    desc: "Our tailored CRM systems streamline operations, enhance customer relationships, and provide valuable insights to drive long-term growth.",
    image: CRMImg,
  },
  {
    id: "04",
    title: "Web Development",
    desc: "We develop high-performance, scalable websites that are visually stunning, fast, secure, and user-friendly, ensuring a standout web presence.",
    image: WebImg,
  },
  {
    id: "05",
    title: "Healthcare Product Development",
    desc: "Our healthcare product development services leverage cutting-edge technology and deep industry knowledge to deliver innovative, reliable, and efficient solutions.",
    image: HealthImg,
  },
  {
    id: "06",
    title: "ERP Development",
    desc: "Our ERP development services streamline business operations by integrating essential processes into a unified system and providing real-time insights.",
    image: ERPImg,
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Top Most Services</h2>
      <div className="space-y-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-t border-blue-800 pt-8 group transition-all duration-300 ease-in-out overflow-hidden"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                  <span className="text-xl md:text-2xl text-blue-400 font-bold">{service.id}</span>
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
                <button className="mt-4 opacity-0 group-hover:opacity-100 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
                  Learn More →
                </button>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="w-40 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
