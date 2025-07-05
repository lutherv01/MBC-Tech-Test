'use client';

import React, { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/1.jpg',
    '/2.jpg',
    '/3.webp',
    '/4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${montserrat.className} relative flex flex-col justify-center items-center text-white min-h-[calc(100vh-90px)] overflow-hidden bg-black`}>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          We're more than a <span className="text-red-600">Laboratory</span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-2 px-4 ml-140">
        {['#GoGoMBC', '#WeAttack', '#WeProtect'].map((tag, index) => (
          <span key={index} className="text-lg md:text-2xl font-semibold text-gray-500">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};
