"use client";

import React, { useEffect, useState } from "react";
import ArrowLeft from "./svg/ArrowLeft";
import ArrowRight from "./svg/ArrowRight";

type CarouselProps = {
  items: {
    title: string;
    description: string;
    imgUrl: string;
  }[];
};

const Carousel2 = ({ items: slides }: CarouselProps) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides.map((item, index) => (
          <>
            <img key={index} src={item.imgUrl} alt={`img${index}`} />
          </>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-2 rounded-full bg-white">
          <ArrowLeft />
        </button>
        <button onClick={next} className="p-2 rounded-full bg-white">
          <ArrowRight />
        </button>
      </div>

      <div className="absolute bottom-6 text-xs text-white p-4">
        <h2 className="mb-2 font-semibold">Latest News & Updates</h2>
        <p>
          Turpis interdum nunc varius ornare dignissim pretium. Massa ornare
          quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla
          purus, erat fringilla tincidunt quisque non. Pellentesque in ut
          tellus.
        </p>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`
               transition-all w-6 h-2 bg-white rounded-full ${
                 curr === index ? "p-0" : "bg-opacity-50"
               }    
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
