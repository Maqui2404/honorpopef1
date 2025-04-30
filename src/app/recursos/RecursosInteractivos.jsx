// src/components/recursos/RecursosInteractivos.jsx
"use client";
import { useState } from "react";
import { LineChart, Clock } from "lucide-react";

const eventos = [
  { id: 1, tipo: "Encíclica", nombre: "Lumen Fidei", fecha: "Junio 2013" },
  { id: 2, tipo: "Exhortación", nombre: "Evangelii Gaudium", fecha: "Noviembre 2013" },
  { id: 3, tipo: "Bula", nombre: "Misericordiae Vultus", fecha: "Abril 2015" },
  { id: 4, tipo: "Encíclica", nombre: "Laudato Si'", fecha: "Mayo 2015" },
  { id: 5, tipo: "Exhortación", nombre: "Amoris Laetitia", fecha: "Marzo 2016" },
  { id: 6, tipo: "Exhortación", nombre: "Gaudete et Exsultate", fecha: "Marzo 2018" },
  { id: 7, tipo: "Exhortación", nombre: "Christus Vivit", fecha: "Marzo 2019" },
  { id: 8, tipo: "Exhortación", nombre: "Querida Amazonia", fecha: "Febrero 2020" },
  { id: 9, tipo: "Encíclica", nombre: "Fratelli Tutti", fecha: "Octubre 2020" },
  { id: 10, tipo: "Constitución", nombre: "Praedicate Evangelium", fecha: "Marzo 2022" }
];

export default function RecursosInteractivos() {
  const [activePoint, setActivePoint] = useState(null);
  
  return (
    <div id="recursos-interactivos" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <LineChart className="w-6 h-6 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Línea del Tiempo</h2>
      </div>
      
      <div className="relative">
        {/* Línea de tiempo */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-200"></div>
        
        <div className="space-y-8 relative">
          {eventos.map((evento, index) => (
            <div 
              key={evento.id}
              className="ml-10 relative"
              onMouseEnter={() => setActivePoint(index)}
              onMouseLeave={() => setActivePoint(null)}
            >
              {/* Punto en la línea */}
              <div className={`absolute left-[-2rem] top-0 w-4 h-4 rounded-full border-2 border-yellow-400 ${activePoint === index ? 'bg-yellow-500' : 'bg-white'} transition-colors`}></div>
              
              {/* Fecha */}
              <div className="flex items-center mb-1">
                <Clock className="w-4 h-4 text-yellow-600 mr-1" />
                <span className="text-sm text-yellow-700">{evento.fecha}</span>
              </div>
              
              {/* Contenido */}
              <div className={`pl-4 border-l-2 ${activePoint === index ? 'border-yellow-400' : 'border-gray-100'} transition-colors`}>
                <p className="text-xs text-gray-500">{evento.tipo}</p>
                <h3 className="text-base font-medium text-gray-800">{evento.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}