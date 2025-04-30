// src/components/recursos/EnlacesOficiales.jsx
"use client";
import { Globe, ExternalLink } from "lucide-react";

const enlaces = [
  {
    id: 1,
    nombre: "Vatican News",
    descripcion: "Sección oficial dedicada al Papa Francisco.",
    url: "https://www.vaticannews.va/es/papa.html",
    icono: "/img/icons/vatican-news.svg"
  },
  {
    id: 2,
    nombre: "Sitio oficial del Vaticano",
    descripcion: "Portal oficial de la Santa Sede.",
    url: "https://www.vatican.va/content/vatican/es.html",
    icono: "/img/icons/vatican.svg"
  },
  {
    id: 3,
    nombre: "Pacto Educativo Global",
    descripcion: "Iniciativa para transformar la educación mundial.",
    url: "https://www.educationglobalcompact.org/es/",
    icono: "/img/icons/pacto-educativo.svg"
  },
  {
    id: 4,
    nombre: "Documento sobre la Fraternidad Humana",
    descripcion: "Por la paz mundial y la convivencia común.",
    url: "https://www.vatican.va/content/francesco/es/travels/2019/outside/documents/papa-francesco_20190204_documento-fratellanza-umana.html",
    icono: "/img/icons/fraternity.svg"
  },
  {
    id: 5,
    nombre: "Jornada Mundial de la Juventud",
    descripcion: "Portal oficial de las JMJ.",
    url: "https://www.lisboa2023.org/es/",
    icono: "/img/icons/jmj.svg"
  }
];

export default function EnlacesOficiales() {
  return (
    <div id="enlaces-oficiales" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Globe className="w-6 h-6 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Enlaces Oficiales</h2>
      </div>
      
      <div className="space-y-4">
        {enlaces.map((enlace) => (
          <a
            key={enlace.id}
            href={enlace.url}
            className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-yellow-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {enlace.icono ? (
                <img src={enlace.icono} alt="" className="w-6 h-6" />
              ) : (
                <Globe className="w-5 h-5 text-yellow-600" />
              )}
            </div>
            
            <div className="ml-3 flex-grow">
              <h3 className="text-sm font-medium text-gray-800">{enlace.nombre}</h3>
              <p className="text-xs text-gray-500">{enlace.descripcion}</p>
            </div>
            
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        ))}
      </div>
    </div>
  );
}