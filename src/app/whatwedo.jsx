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
    "AIF": "Specialized programs in Blockchain and AI for developing cutting-edge solutions.",
  };

  return (
    <section className="flex flex-col md:flex-row gap-6 p-6 bg-white font-sans min-h-screen transition-transform duration-1000 ease-in-out">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl xl:text-8xl 2xl:text-9xl mb-4 text-gray-800 font-black tracking-wide">WHAT WE DO</h2>
        <ul className="text-[#c5e6f4] font-black cursor-pointer text-2xl md:text-3xl xl:text-6xl 2xl:text-7xl">
          {Object.keys(content).map((key) => (
            <li
              key={key}
              className={`transition duration-300 text-[80px] 2xl:text-7xl font-black ease-in-out md:mt-14 ${
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
      <div className="w-full md:w-1/2 md:translate-y-20 xl:translate-y-40 text-center lg:text-left items-center transition-transform duration-1000 ease-in-out">
        <p className="text-gray-700 mb-2 text-lg md:text-2xl lg:text-4xl leading-relaxed">{content[activeContent]}</p>
        <a
          href="#"
          className="text-[#f47441] text-xl md:text-2xl lg:text-3xl font-semibold transition duration-300 ease-in-out"
        >
          Learn More
        </a>
        <div className="mt-2">
          <img
            src="https://via.placeholder.com/300"
            alt="Team working"
            className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;