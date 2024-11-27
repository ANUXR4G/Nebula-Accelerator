"use client"

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Page = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <section className="px-6 md:px-16 py-10 min-h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Featured Images */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-6">
              Featured
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
              <div className="bg-gray-300 w-32 h-32"></div>
              <div className="bg-gray-300 w-32 h-32"></div>
              <div className="bg-gray-300 w-32 h-32"></div>
              <div className="bg-gray-300 w-32 h-32"></div>
              <div className="bg-gray-300 w-32 h-32"></div>
              <div className="bg-gray-300 w-32 h-32"></div>
            </div>
          </div>

          {/* Right Side: Description and All Work */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            {/* Description */}
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Donec sit amet
                magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi
                iaculis sit amet lorem sed eleifend. Pellentesque pharetra
                consequat quam, nec pellentesque tortor dapibus sed.
              </p>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* All Work */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold uppercase my-6">
                All Work
              </h2>
              <ul className="space-y-2 text-lg">
                <li className="hover:underline cursor-pointer">work1</li>
                <li className="hover:underline cursor-pointer">work2</li>
                <li className="hover:underline cursor-pointer">work3</li>
                <li className="hover:underline cursor-pointer">work4</li>
                <li className="hover:underline cursor-pointer">work5</li>
                <li className="hover:underline cursor-pointer">work6</li>
                <li className="hover:underline cursor-pointer">work7</li>
                <li className="hover:underline cursor-pointer">work8</li>
                <li className="hover:underline cursor-pointer">work9</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;