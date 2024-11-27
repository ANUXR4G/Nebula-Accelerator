"use client"
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Page = () => {
  return (
    <div>
        <Navbar/>
    <section className="bg-black text-white min-h-screen">
      {/* Title Section */}
      <div className="px-6 md:px-16 py-10">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">Services</h1>
      </div>

      {/* Content Section */}
      <div className="bg-white text-black px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Services List */}
          <div>
            <ul className="space-y-4 text-2xl md:text-3xl font-bold text-red-500">
              <li className="hover:text-red-700 transition">Service1</li>
              <li className="hover:text-red-700 transition">Service2</li>
              <li className="hover:text-red-700 transition">Service3</li>
              <li className="hover:text-red-700 transition">Service4</li>
              <li className="hover:text-red-700 transition">Service5</li>
            </ul>
          </div>

          {/* Middle Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Donec sit amet magna auctor
              orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet
              lorem sed eleifend.
            </p>
            <p className="text-lg leading-relaxed">
              Pellentesque pharetra consequat quam, nec pellentesque tortor
              dapibus sed. Fusce cursus leo et cursus molestie. Phasellus
              fermentum leo nec elit malesuada aliquet.
            </p>
            <p className="text-lg leading-relaxed">
              Vivamus ornare pharetra massa eu feugiat. Morbi ullamcorper eros
              ac urna dapibus, sit amet porttitor mi luctus. Mauris id mi eu
              risus scelerisque lobortis.
            </p>
            <a
              href="#"
              className="text-red-500 font-bold hover:underline transition"
            >
              Learn More
            </a>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="flex justify-center items-center">
            <div className="bg-gray-300 h-40 md:h-60 w-full"></div>
          </div>
        </div>

        {/* Bottom Images Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          <div className="bg-gray-300 h-20"></div>
          <div className="bg-gray-300 h-20"></div>
          <div className="bg-gray-300 h-20"></div>
          <div className="bg-gray-300 h-20"></div>
          <div className="bg-gray-300 h-20"></div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Page;
