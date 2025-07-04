import { useState } from "react";
import client from "../assets/images/client.jpg";
import idea from "../assets/images/idea.jpg";
import solution from "../assets/images/solution.jpg";

const benefits = [
  {
    title: "Tailored Solutions for Your Business",
    image: client,
  },
  {
    title: "Creative Excellence Elevates Every Project",
    image: idea,
  },
  {
    title: "Client Satisfaction is Our Main Focus",
    image: solution,
  },
];

export default function AlliedgeBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Reasons to Choose <span className="text-blue-500">Alliedge Group</span>
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility,
        improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your
        unique business needs, ensuring lasting success.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Buttons */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full flex items-center gap-4 px-6 py-4 text-left rounded-lg transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <div className="text-lg font-medium">{benefit.title}</div>
            </button>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={benefits[activeIndex].image}
            alt="Benefit"
            className="rounded-xl shadow-lg max-w-full h-auto w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
