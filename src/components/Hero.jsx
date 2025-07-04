import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center bg-white pt-24 overflow-hidden">
      <h1 className="text-6xl font-bold">
        <span className="text-blue-500">Boost</span> Your Coverage
        <br />With <span className="text-blue-500">Alliedge Group</span>
      </h1>
      <p className="mt-6 text-lg max-w-3xl text-gray-700">
        Customer satisfaction is at the heart of everything we do. We are committed
        to providing exceptional IT services that exceed your expectations and help
        you business goals.
      </p>

      {/* Darker & more visible background bubbles */}
      <div className="absolute top-20 left-1/4 w-48 h-48 bg-gray-600 opacity-40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-700 opacity-40 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-700 opacity-35 rounded-full blur-xl animate-ping"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-600 opacity-45 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute top-32 right-10 w-36 h-36 bg-blue-800 opacity-40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/5 w-24 h-24 bg-indigo-700 opacity-40 rounded-full blur-xl animate-ping"></div>
      <div className="absolute top-1/2 left-5 w-28 h-28 bg-teal-700 opacity-35 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-600 opacity-40 rounded-full blur-lg animate-ping"></div>
      <div className="absolute top-10 right-1/3 w-16 h-16 bg-red-700 opacity-35 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-green-700 opacity-40 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-3/4 left-3/4 w-28 h-28 bg-cyan-700 opacity-45 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
