import React from 'react';
import Card from "../assets/Services/card.jpg";

const CareerPageOne = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-400">
      {/* Section 1: Hero */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-white text-black rounded-full px-4 py-1 text-sm font-semibold mb-4">
              Career
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Join Alliedge, Be a Part of the Future of Tech
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              We're always looking for talented individuals to join our team. If you're passionate about technology and want to make a difference, we'd love to hear from you!
            </p>
          </div>

          {/* Right Image */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={Card}
              alt="Hiring Card" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Section 2: Apply Now Form */}
      <div className="flex items-center justify-center px-4 py-20 bg-white text-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-black">Apply Now</h2>
          <p className="text-gray-600 text-lg mb-12">
            We're always looking for talented individuals to join our team.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Full Name*"
              className="border-b p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone*"
              className="border-b p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border-b p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Applying For The Role*"
              className="border-b p-2 focus:outline-none"
            />
            <select className="border-b p-2 focus:outline-none">
              <option>Select Experience</option>
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3+ Years</option>
            </select>
            <input
              type="file"
              className="border-b p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-black file:text-white file:rounded-md"
            />
            <textarea
              placeholder="Message*"
              className="md:col-span-2 border-b p-2 focus:outline-none"
            />
            <button
              type="submit"
              className="md:col-span-2 mt-6 bg-black text-white py-4 rounded-md text-lg hover:bg-gray-800 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerPageOne;
