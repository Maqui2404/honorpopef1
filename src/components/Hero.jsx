"use client";
// src/components/Hero.jsx
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center">
          {/* Imagen lateral */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-100 rounded-full opacity-20 transform scale-110"></div>
              <img
                src="/img/papafrancisco.jpg"
                alt="Papa Francisco"
                className="relative rounded-full h-64 w-64 sm:h-80 sm:w-80 object-cover shadow-md border-2 border-gray-100"
              />
            </div>
          </div>
          
          {/* Contenido textual */}
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800">
              Su Santidad
              <span className="block mt-2 font-semibold text-yellow-700">
                Papa Francisco
              </span>
            </h1>
            
            <p className="mt-4 text-md md:text-lg italic text-gray-600 max-w-xl mx-auto lg:mx-0">
              &ldquo;Quien no vive para servir, no sirve para vivir.&rdquo;
            </p>
            
            <p className="mt-6 text-gray-700 max-w-xl mx-auto lg:mx-0">
              Bienvenido a este humilde homenaje a Jorge Mario Bergoglio, 
              Su Santidad el Papa Francisco (2013–2025), un pastor de corazón 
              misericordioso que ha dedicado su vida a caminar junto a los más 
              vulnerables, mostrando al mundo el rostro compasivo de Dios.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/biografia"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
              >
                Su vida y testimonio
              </Link>
              <Link
                href="/frases"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
              >
                Enseñanzas espirituales
              </Link>
            </div>
          </div>
        </div>
        
        {/* Cita inspiradora */}
        <div className="text-center py-8 border-t border-gray-200 max-w-3xl mx-auto">
          <p className="text-sm text-gray-500">
            &ldquo;No olvidemos nunca que el verdadero poder es el servicio. Es necesario custodiar a la gente, 
            cuidar a cada persona, con amor, especialmente a los niños, a los ancianos, a quienes son más frágiles.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;