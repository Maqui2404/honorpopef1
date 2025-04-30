// src/components/recursos/RecursosDescarga.jsx
"use client";
import { Download, Award, Users, Heart } from "lucide-react";

const recursos = [
  {
    id: 1,
    tipo: "Infografía",
    titulo: "Principales puntos de Laudato Si'",
    descripcion: "Resumen visual de la encíclica sobre el cuidado de la creación.",
    icono: <Award className="w-5 h-5" />,
    urlDescarga: "/downloads/infografia-laudato-si.pdf"
  },
  {
    id: 2,
    tipo: "Póster",
    titulo: "Frases inspiradoras del Papa Francisco",
    descripcion: "Colección de 10 frases motivacionales para imprimir.",
    icono: <Heart className="w-5 h-5" />,
    urlDescarga: "/downloads/poster-frases-francisco.pdf"
  },
  {
    id: 3,
    tipo: "Material educativo",
    titulo: "Guía para colegios sobre Fratelli Tutti",
    descripcion: "Recursos para trabajar la fraternidad en el aula.",
    icono: <Users className="w-5 h-5" />,
    urlDescarga: "/downloads/guia-fratelli-tutti.zip"
  }
];

export default function RecursosDescarga() {
  return (
    <div id="recursos-descarga" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Download className="w-6 h-6 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Recursos para Descargar</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {recursos.map((recurso) => (
          <div 
            key={recurso.id}
            className="border border-gray-100 rounded-lg p-4 hover:border-yellow-200 transition-colors"
          >
            // src/components/recursos/RecursosDescarga.jsx (continuación)
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                {recurso.icono}
              </div>
              
              <div className="ml-3 flex-grow">
                <p className="text-xs text-yellow-600 font-medium">{recurso.tipo}</p>
                <h3 className="text-base font-medium text-gray-800">{recurso.titulo}</h3>
                <p className="text-sm text-gray-600 mt-1">{recurso.descripcion}</p>
              </div>
            </div>
            
            <div className="mt-3 text-right">
              <a
                href={recurso.urlDescarga}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                download
              >
                <Download className="w-3 h-3 mr-1" />
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}