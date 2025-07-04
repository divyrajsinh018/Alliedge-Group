  // src/pages/Contact.jsx
  import React, { useEffect } from "react";
  import ContactForm from "../components/ContactForm";
  import AOS from "aos";
  import "aos/dist/aos.css";

  const Contact = () => {
    useEffect(() => {
      AOS.init({ once: true });
    }, []);

    return (
      <div className="pt-28 min-h-screen bg-white px-4 md:px-20">
        {/* Center Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-black">Contact Us</h1>
          <p className="text-gray-500 mt-2 text-lg">We'd love to hear from you</p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Animated Blue "Contact" */}
          <div
            className="md:w-1/2 text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-8xl font-extrabold text-blue-400 leading-none">
              Contact
            </h1>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-20">
          <iframe
            title="Company Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3877633622666!2d72.50195387484857!3d23.009875016476204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b1f14e61ad1%3A0x989181be71327d13!2sAlliedge%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718343300633!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    );
  };

  export default Contact;
