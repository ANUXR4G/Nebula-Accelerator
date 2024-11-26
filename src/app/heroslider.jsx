"use client"
import React from "react";

const Heroslider = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row items-center justify-center bg-white text-nowrap mb-2">
        <h1 className="text-black font-black text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl leading-none tracking-tight">
          NEBULA ACCELERATOR
        </h1>
        <p className="text-black text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 sm:mt-0 sm:ml-4">
          &nbsp;EST.<br /> 2021
        </p>
      </div>
      <div className="relative w-full h-[calc(100vh-12rem)] overflow-hidden">
        <div className="relative">
          <video className="w-full h-[90vh] object-cover object-center" loop autoPlay muted>
            <source src="https://res.cloudinary.com/dxwea32ih/video/upload/v1731327818/qb301sp1orhuhu1fzoyl.mp4" type="video/mp4" />
          </video>
          <div className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-screen xl:h-full lg:bg-black lg:opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Heroslider;