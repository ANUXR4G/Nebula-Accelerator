"use client"
import React, { useState } from "react";

const Whatwedo = () => {
  const [activeContent, setActiveContent] = useState("pre-incubation");

  // Define the content for each heading
  const content = {
    "pre-incubation": "Pre-incubation programs provide early support for idea validation.",
    incubation: "Incubation focuses on helping startups build and grow sustainably.",
    accelerator: "Accelerators offer fast-tracked support to scale businesses.",
    "blockchain & ai cohort": "Specialized programs in Blockchain and AI for cutting-edge solutions.",
    "pilot projects": "Pilot projects enable testing and validation in real-world scenarios.",
  };

  return (
    <section className="flex flex-col md:flex-row gap-6 p-6 bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">WHAT WE DO</h2>
        <h3 className="text-5xl font-bold text-blue-800">
          VENTURE STUDIOS
        </h3>
        <ul className="mt-4 space-y-2 text-blue-300 font-bold cursor-pointer">
          {Object.keys(content).map((key) => (
            <li
              key={key}
              className={`${
                activeContent === key ? "text-blue-700" : "hover:text-blue-500"
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
        <h4 className="text-xl font-bold mb-2">Details</h4>
        <p className="text-gray-600 mb-4">{content[activeContent]}</p>
        <a
          href="#"
          className="text-red-600 hover:text-red-800 underline"
        >
          Learn More
        </a>
        <div className="mt-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Team working"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
