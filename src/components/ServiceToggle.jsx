import React, { useState } from "react";
import mobileImg from "../assets/appdevelopment.jpg"; 
import webImg from "../assets/webdevelopment.jpg"; 

const ServiceToggle = () => {
  const [activeTab, setActiveTab] = useState("app");

  const content = {
    app: {
      title: "Mobile App Development",
      desc: `Transforming ideas into reality through our premier mobile application development services. Our dedicated team of experienced developers specializes in crafting dynamic and user-centric mobile applications that seamlessly blend innovation with functionality. We utilize the latest technologies to ensure your app stands out in the competitive market, providing an exceptional user experience that drives engagement and growth. Trust us to bring your vision to life with precision and excellence.`,
      image: mobileImg,
    },
    web: {
      title: "Web App Development",
      desc: `We specialize in providing top-notch web development services to help businesses establish a strong online presence and reach their target audience effectively. Our expert team leverages the latest technologies to create responsive, user-friendly, and high-performing web applications tailored to your specific needs. Trust us to elevate your digital presence and drive your business success.`,
      image: webImg,
    },
  };

  return (
    <section className="py-16 px-4 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Our <span className="text-sky-500">Services</span>
      </h2>
      <p className="max-w-3xl mx-auto mb-6 text-gray-700">
        Partnering with Alliedge offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("app")}
          className={`px-6 py-2 rounded-full font-medium ${
            activeTab === "app"
              ? "bg-sky-500 text-white"
              : "bg-blue-100 text-black"
          }`}
        >
          For App
        </button>
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-full font-medium ${
            activeTab === "web"
              ? "bg-sky-500 text-white"
              : "bg-blue-100 text-black"
          }`}
        >
          For Web
        </button>
        
      </div>

      <div className="bg-[#0b2b5d] text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {content[activeTab].title}
          </h3>
          <p className="text-md md:text-lg">{content[activeTab].desc}</p>
        </div>
        <div className="md:w-1/2">
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceToggle;
