"use client"
import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Heroslider = () => {
  return (
    <div className="relative p-8 h-screen">
      <div className="absolute bottom-4 left-4 z-10 text-left flex">
        <h1 className="text-white font-black text-2xl sm:text-4xl md:text-5xl lg:text-[88px] xl:text-8xl 2xl:text-[150px] leading-none tracking-tight">
          NEBULA{' '}
          <span className="text-white">
            <Typewriter
              words={['VENTURE', 'INCUBATOR', 'ACCELERATOR']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2">
          EST.<br /> 2021
        </p>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <video className="w-full h-full object-cover" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dxwea32ih/video/upload/v1731327818/qb301sp1orhuhu1fzoyl.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
};

export default Heroslider;