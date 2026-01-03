import React, { useState, useEffect } from "react";

const images = [
  "cake.jpg",
  "cake2.webp",
  "cake3.jpg",
  "cake4.webp",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="w-full h-64 flex justify-center items-center bg-gray-100 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-all duration-500"
        />
      </div>

      <div className="flex absolute z-20 justify-center gap-2 -mt-20 mx-auto w-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
              ? "bg-orange-500 scale-125"
              : "bg-gray-400 scale-100"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
