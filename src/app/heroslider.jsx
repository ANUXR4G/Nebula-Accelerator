"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import img1 from "@/app/assets/about1.jpeg";
import img2 from "@/app/assets/about2.jpeg";
import img3 from "@/app/assets/about3.png";

const Heroslider = () => {
  const slides = [
    { id: 1, title: "Slide 1", description: "Description for Slide 1", imgSrc: img1 },
    { id: 2, title: "Slide 2", description: "Description for Slide 2", imgSrc: img2 },
    { id: 3, title: "Slide 3", description: "Description for Slide 3", imgSrc: img3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row items-center justify-center bg-white text-nowrap mb-2">
        <h1 className="text-black font-black text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl leading-none tracking-tight">
          ( NEBULA &nbsp; ACCELERATOR )
        </h1>
        <p className="text-black text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 sm:mt-0 sm:ml-4">
          EST.<br/> 2024
        </p>
      </div>
      <div className="relative w-full h-[calc(100vh-12rem)] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative min-w-full h-full">
              <Image
                src={slide.imgSrc}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-base sm:text-lg md:text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full text-2xl sm:text-3xl z-10 hover:bg-opacity-75"
          onClick={goToPrevious}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full text-2xl sm:text-3xl z-10 hover:bg-opacity-75"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Heroslider;