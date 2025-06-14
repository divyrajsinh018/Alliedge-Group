import React, { useEffect, useState } from 'react';
import logo1 from '../assets/Logos/BUILDUP.png';
import logo2 from '../assets/Logos/CV.png';
import logo3 from '../assets/Logos/E444.png';
import logo4 from '../assets/Logos/MM.png';
import logo5 from '../assets/Logos/MonarkUni.png';
import logo6 from '../assets/Logos/MV.png';
import logo7 from '../assets/Logos/Reeja.png';
import logo8 from '../assets/Logos/TheSkyView.png';
import logo9 from '../assets/Logos/TS.png';
import logo10 from '../assets/Logos/USA.png';

const clientLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10
];
export default function ClientsSection() {
  const [currentLogos, setCurrentLogos] = useState(clientLogos.slice(0, 6));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prev) => {
        const start = (clientLogos.indexOf(prev[0]) + 1) % clientLogos.length;
        return clientLogos.slice(start, start + 6).concat(
          clientLogos.slice(0, Math.max(0, 6 - (clientLogos.length - start)))
        );
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-20 font-sans">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <h1 className="text-blue-500 text-7xl font-extrabold">Clients</h1>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900">Our Clients</h2>
          <div className="inline-block bg-black text-white text-sm font-semibold px-4 py-1 rounded mt-2">
            YOUR GROWTH, OUR COMMITMENT
          </div>
          <p className="mt-4 text-gray-700 text-lg">
            We are grateful for the opportunity to work with our valued partners and clients. 
            Our strong relationships are a testament to our dedication and expertise in the digital realm.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center transition-all duration-700">
        {currentLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="w-28 h-auto object-contain transition-opacity duration-700"
          />
        ))}
      </div>
    </div>
  );
}
