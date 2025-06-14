// src/components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-xl font-semibold mb-6">
        <span className="font-bold">Hello,</span> Tell us about your project.
      </h2>
      <form className="space-y-4">
        <input
          className="w-full border-b p-2 focus:outline-none"
          type="text"
          placeholder="Your name*"
        />
        <input
          className="w-full border-b p-2 focus:outline-none"
          type="text"
          placeholder="Your Phone*"
        />
        <input
          className="w-full border-b p-2 focus:outline-none"
          type="email"
          placeholder="Your email*"
        />
        <input
          className="w-full border-b p-2 focus:outline-none"
          type="text"
          placeholder="Your subject*"
        />
        <textarea
          className="w-full border-b p-2 focus:outline-none"
          rows="4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
