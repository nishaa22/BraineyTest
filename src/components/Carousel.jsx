import { useEffect, useState } from "react";

const slides = [
  {
    title: "VEGGIE FRIENDLY\nEATERIES",
    button: "TRY NOW",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600",
  },
  {
    title: "HEALTHY\nMEALS",
    button: "EXPLORE",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600",
  },
  {
    title: "FRESH\nINGREDIENTS",
    button: "ORDER NOW",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 text-white">
          <h2 className="text-xl sm:text-2xl font-bold leading-snug whitespace-pre-line">
            {slides[current].title}
          </h2>

          <button className="mt-4 w-fit bg-green-600 hover:bg-green-700 text-sm font-semibold px-4 py-2 rounded">
            {slides[current].button}
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition ${current === index ? "bg-gray-800" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
