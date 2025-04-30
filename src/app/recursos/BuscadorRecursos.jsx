// src/components/recursos/BuscadorRecursos.jsx
"use client";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const tiposRecursos = [
  { id: "todos", nombre: "Todos" },
  { id: "documentos", nombre: "Documentos" },
  { id: "libros", nombre: "Libros" },
  { id: "videos", nombre: "Videos" }
];

const temasRecursos = [
  { id: "todos", nombre: "Todos los temas" },
  { id: "ecologia", nombre: "Ecología" },
  { id: "familia", nombre: "Familia" },
  { id: "juventud", nombre: "Juventud" },
  { id: "paz", nombre: "Paz y Fraternidad" },
  { id: "misericordia", nombre: "Misericordia" }
];

export default function BuscadorRecursos() {
  const [busqueda, setBusqueda] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("todos");
  const [temaSeleccionado, setTemaSeleccionado] = useState("todos");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  
  // En un componente real, aquí implementarías la lógica de búsqueda
  const handleBuscar = (e) => {
    e.preventDefault();
    console.log("Búsqueda:", {
      termino: busqueda,
      tipo: tipoSeleccionado,
      tema: temaSeleccionado
    });
    
    // Lógica para filtrar y mostrar resultados
  };
  
  return (
    <div id="recursos-section" className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleBuscar}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Buscar recursos por título o tema..."
            />
          </div>
          
          <button
            type="button"
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:w-auto"
          >
            <Filter className="h-5 w-5 mr-2 text-gray-400" />
            Filtros
          </button>
          
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:w-auto"
          >
            Buscar
          </button>
        </div>
        
        {mostrarFiltros && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
                Tipo de recurso
              </label>
              <select
                id="tipo"
                name="tipo"
                value={tipoSeleccionado}
                onChange={(e) => setTipoSeleccionado(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
              >
                {tiposRecursos.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="tema" className="block text-sm font-medium text-gray-700">
                Tema
              </label>
              <select
                id="tema"
                name="tema"
                value={temaSeleccionado}
                onChange={(e) => setTemaSeleccionado(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
              >
                {temasRecursos.map((tema) => (
                  <option key={tema.id} value={tema.id}>
                    {tema.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}