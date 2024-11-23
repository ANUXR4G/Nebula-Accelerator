"use client"
import React, { useState } from "react";

const Whatwedo = () => {
  const [activeContent, setActiveContent] = useState("venture-studio");

  // Define the content for each heading
  const content = {
    "venture-studio": "Our Venture Studio model combines resources, expertise, and capital to build and scale innovative startups.",
    "pre-incubation": "Pre-incubation programs provide early support for idea validation and concept development.",
    incubation: "Incubation focuses on helping startups build their products and grow sustainably.",
    accelerator: "Accelerators offer fast-tracked support to scale businesses rapidly.",
    "blockchain & ai cohort": "Specialized programs in Blockchain and AI for developing cutting-edge solutions.",
    "pilot projects": "Pilot projects enable testing and validation of concepts in real-world scenarios.",
  };

  return (
    <section className="flex flex-col md:flex-row gap-6 p-6 bg-white font-sans h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-9xl mb-4 text-gray-800 font-black tracking-wide">WHAT WE DO</h2>
        <ul className="text-[#c5e6f4] font-black cursor-pointer text-6xl">
          {Object.keys(content).map((key) => (
            <li
              key={key}
              className={`transition duration-300 text-8xl font-black ease-in-out ${
                activeContent === key 
                  ? "text-[#243f5a] font-black" 
                  : "text-[#c5e6f4] hover:text-[#243f5a]"
              }`}
              onClick={() => setActiveContent(key)}
            >
              {key.replace(/-/g, " ").toUpperCase()}
            </li>
          ))}
        </ul>
        
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <h4 className="text-2xl font-bold mb-4 text-blue-800">Details</h4>
        <p className="text-gray-700 mb-6 leading-relaxed">{content[activeContent]}</p>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300 ease-in-out"
        >
          Learn More
        </a>
        <div className="mt-6">
          <img
            src="https://via.placeholder.com/300"
            alt="Team working"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;