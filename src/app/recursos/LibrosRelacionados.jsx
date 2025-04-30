// src/components/recursos/LibrosRelacionados.jsx
"use client";
import { useState } from "react";
import { BookOpen } from "lucide-react";

const libros = [
  {
    id: 1,
    titulo: "El nombre de Dios es Misericordia",
    autor: "Papa Francisco",
    descripcion: "Una conversación con Andrea Tornielli sobre la misericordia.",
    portada: "/img/libros/nombre-dios-misericordia.jpg",
    enlaceCompra: "https://www.amazon.es/nombre-Dios-Misericordia-PLANETA-FRANCISCO/dp/8408149539",
    fragmento: "/docs/fragmentos/nombre-dios-misericordia.pdf"
  },
  {
    id: 2,
    titulo: "Soñemos Juntos",
    autor: "Papa Francisco",
    descripcion: "El camino a un futuro mejor.",
    portada: "/img/libros/sonemos-juntos.jpg",
    enlaceCompra: "https://www.amazon.es/So%C3%B1emos-juntos-futuro-mejor-Francisco/dp/8401026741",
    fragmento: "/docs/fragmentos/sonemos-juntos.pdf"
  },
  {
    id: 3,
    titulo: "Francisco: Vida y revolución",
    autor: "Elisabetta Piqué",
    descripcion: "Biografía del Papa por la periodista que más lo conoce.",
    portada: "/img/libros/francisco-vida-revolucion.jpg",
    enlaceCompra: "https://www.amazon.es/Francisco-Vida-revoluci%C3%B3n-Elisabetta-Piqu%C3%A9/dp/8415880375",
    fragmento: null
  },
  {
    id: 4,
    titulo: "La encíclica verde",
    autor: "Varios autores",
    descripcion: "Comentarios sobre Laudato Si' y la ecología integral.",
    portada: "/img/libros/enciclica-verde.jpg",
    enlaceCompra: "https://www.amazon.es/enc%C3%ADclica-verde-ESTUDIOS-SOCIEDAD-COMUNICACI%C3%93N/dp/8416842043",
    fragmento: null
  }
];

export default function LibrosRelacionados() {
  const [expanded, setExpanded] = useState(false);
  
  const displayedLibros = expanded ? libros : libros.slice(0, 2);
  
  return (
    <div id="libros-relacionados" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <BookOpen className="w-6 h-6 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Libros Relacionados</h2>
      </div>
      
      <div className="space-y-6">
        {displayedLibros.map((libro) => (
          <div key={libro.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <img
                  src={libro.portada}
                  alt={`Portada de ${libro.titulo}`}
                  className="w-full h-auto rounded-md shadow-sm"
                />
              </div>
              
              <div className="w-full sm:w-2/3 sm:pl-4">
                <h3 className="text-lg font-medium text-gray-800">{libro.titulo}</h3>
                <p className="text-sm text-yellow-600 mt-1">{libro.autor}</p>
                <p className="text-sm text-gray-600 mt-2">{libro.descripcion}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={libro.enlaceCompra}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar libro
                  </a>
                  
                  {libro.fragmento && (
                    <a
                      href={libro.fragmento}
                      className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Descargar fragmento
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {libros.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-800"
        >
          {expanded ? "Ver menos" : "Ver todos los libros"}
        </button>
      )}
    </div>
  );
}