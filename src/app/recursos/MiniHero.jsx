// src/components/recursos/MiniHero.jsx
"use client";
import { useEffect, useRef } from "react";

export default function MiniHero() {
  const heroRef = useRef(null);

  const scrollToResources = () => {
    const resourcesSection = document.getElementById("recursos-section");
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add any animation or effect logic here if needed
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-gradient-to-r from-yellow-50 to-gray-50 py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/img/pattern-vatican.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Descubre el Legado Vivo del
              <span className="block mt-2 font-semibold text-yellow-700">
                Papa Francisco
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Libros, documentos, discursos y materiales para reflexionar,
              estudiar y compartir.
            </p>

            <button
              onClick={scrollToResources}
              className="mt-8 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            >
              Explorar Recursos
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-100 rounded-lg opacity-40 transform rotate-3 scale-105"></div>
              <img
                src="/img/papafrancisco.jpg"
                alt="Papa Francisco leyendo"
                className="relative rounded-lg shadow-lg h-64 w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
