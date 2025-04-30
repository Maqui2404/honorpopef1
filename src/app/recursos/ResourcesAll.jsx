"use client";
import { useState, useEffect } from "react";
import { Search, Filter, Book, Video, FileText, X } from "lucide-react";

const ResourcesAll = ({ data }) => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    tipo: [],
    subtipo: [],
    tags: [],
    fecha: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [activeResource, setActiveResource] = useState(null);

  // Inicializar datos
  useEffect(() => {
    if (data && data.length) {
      setResources(data);
      setFilteredResources(data);
    }
  }, [data]);

  // Obtener valores únicos para filtros
  const getUniqueValues = (key) => {
    const values = new Set();
    resources.forEach((resource) => {
      if (resource[key]) {
        if (Array.isArray(resource[key])) {
          resource[key].forEach((val) => values.add(val));
        } else {
          values.add(resource[key]);
        }
      }
    });
    return Array.from(values).sort();
  };

  // Obtener años únicos para filtro de fecha
  const getUniqueYears = () => {
    const years = new Set();
    resources.forEach((resource) => {
      if (resource.fecha) {
        const year = resource.fecha.split("–")[0].split("-")[0].trim();
        years.add(year);
      }
    });
    return Array.from(years).sort((a, b) => b - a); // Orden descendente
  };

  // Aplicar filtros
  useEffect(() => {
    let results = resources;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (item) =>
          item.titulo?.toLowerCase().includes(term) ||
          item.autor?.toLowerCase().includes(term) ||
          item.descripcion?.toLowerCase().includes(term) ||
          (item.tags &&
            item.tags.some((tag) => tag.toLowerCase().includes(term)))
      );
    }

    // Aplicar filtros por categoría
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey].length > 0) {
        if (filterKey === "tags") {
          results = results.filter(
            (item) =>
              item.tags && filters.tags.some((tag) => item.tags.includes(tag))
          );
        } else if (filterKey === "fecha") {
          results = results.filter(
            (item) =>
              item.fecha &&
              filters.fecha.some((year) => item.fecha.includes(year))
          );
        } else {
          results = results.filter((item) =>
            filters[filterKey].includes(item[filterKey])
          );
        }
      }
    });

    setFilteredResources(results);
  }, [searchTerm, filters, resources]);

  // Manejar cambios en filtros
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentValues = [...prevFilters[filterType]];
      if (currentValues.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentValues, value],
        };
      }
    });
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    setFilters({
      tipo: [],
      subtipo: [],
      tags: [],
      fecha: [],
    });
    setSearchTerm("");
  };

  // Obtener icono según tipo de recurso
  const getResourceIcon = (tipo) => {
    switch (tipo) {
      case "Libro":
        return <Book className="h-6 w-6 text-amber-700" />;
      case "Video":
        return <Video className="h-6 w-6 text-amber-700" />;
      case "Documento":
      case "Película":
      default:
        return <FileText className="h-6 w-6 text-amber-700" />;
    }
  };

  // Mostrar detalles de un recurso
  const showResourceDetails = (resource) => {
    setActiveResource(resource);
  };

  // Determinar color de fondo basado en tipo
  const getTagBackground = (tipo) => {
    switch (tipo) {
      case "Libro":
        return "bg-amber-100 text-amber-800";
      case "Video":
        return "bg-amber-100 text-amber-800";
      case "Documento":
        return "bg-amber-100 text-amber-800";
      case "Película":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección de título similar al MiniHero */}
        <div className="mb-12 mt-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Descubre el Legado Vivo
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4">
            en Recursos y Documentos
          </h3>
          <p className="text-lg text-gray-600">
            Libros, documentos, discursos y materiales para reflexionar,
            estudiar y compartir.
          </p>
        </div>

        {/* Buscador y Filtros */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative w-full md:w-2/3">
              <input
                type="text"
                placeholder="Buscar por título, autor o descripción..."
                className="pl-10 pr-4 py-3 border-2 border-amber-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-amber-600" />
            </div>

            <button
              className="flex items-center px-5 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
            </button>
          </div>

          {/* Panel de filtros avanzados */}
          {showFilters && (
            <div className="mt-6 p-6 bg-amber-50 rounded-lg border border-amber-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-amber-800">
                  Filtros avanzados
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-amber-700 hover:text-amber-900 flex items-center font-medium"
                >
                  <X className="h-4 w-4 mr-1" />
                  Limpiar filtros
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Filtro por Tipo */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Tipo</h4>
                  <div className="space-y-2">
                    {getUniqueValues("tipo").map((tipo) => (
                      <label
                        key={tipo}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-amber-600 rounded focus:ring-amber-500 border-amber-300"
                          checked={filters.tipo.includes(tipo)}
                          onChange={() => handleFilterChange("tipo", tipo)}
                        />
                        <span className="ml-2 text-gray-700">{tipo}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por Subtipo */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Subtipo</h4>
                  <div className="space-y-2">
                    {getUniqueValues("subtipo").map((subtipo) => (
                      <label
                        key={subtipo}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-amber-600 rounded focus:ring-amber-500 border-amber-300"
                          checked={filters.subtipo.includes(subtipo)}
                          onChange={() =>
                            handleFilterChange("subtipo", subtipo)
                          }
                        />
                        <span className="ml-2 text-gray-700">{subtipo}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por Etiquetas */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Etiquetas</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {getUniqueValues("tags").map((tag) => (
                      <label
                        key={tag}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-amber-600 rounded focus:ring-amber-500 border-amber-300"
                          checked={filters.tags.includes(tag)}
                          onChange={() => handleFilterChange("tags", tag)}
                        />
                        <span className="ml-2 text-gray-700">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por Año */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Año</h4>
                  <div className="space-y-2">
                    {getUniqueYears().map((year) => (
                      <label
                        key={year}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-amber-600 rounded focus:ring-amber-500 border-amber-300"
                          checked={filters.fecha.includes(year)}
                          onChange={() => handleFilterChange("fecha", year)}
                        />
                        <span className="ml-2 text-gray-700">{year}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resultados de búsqueda */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Recursos disponibles
            </h2>
            <p className="text-amber-700 font-medium">
              {filteredResources.length} recursos encontrados
            </p>
          </div>

          {/* Lista de recursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredResources.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500 text-lg mb-4">
                  No se encontraron recursos que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-5 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md border border-amber-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  onClick={() => showResourceDetails(resource)}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getTagBackground(
                          resource.tipo
                        )}`}
                      >
                        {resource.tipo}
                      </span>
                      <span className="text-sm text-gray-500">
                        {resource.fecha}
                      </span>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 bg-amber-50 p-3 rounded-full group-hover:bg-amber-100 transition-colors">
                        {getResourceIcon(resource.tipo)}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-amber-700 transition-colors">
                          {resource.titulo}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {resource.autor}
                        </p>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {resource.descripcion}
                        </p>
                        <div className="mt-3 pt-3 border-t border-amber-100">
                          {resource.tags &&
                            resource.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-gray-50 rounded-full px-2.5 py-1 text-xs text-gray-600 mr-1.5 mb-1.5 border border-gray-100"
                              >
                                {tag}
                              </span>
                            ))}
                          {resource.tags && resource.tags.length > 3 && (
                            <span className="inline-block text-xs text-amber-600">
                              +{resource.tags.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Modal de detalles del recurso */}
        {activeResource && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start p-6 border-b border-amber-100">
                <h3 className="text-2xl font-bold text-gray-800">
                  {activeResource.titulo}
                </h3>
                <button
                  onClick={() => setActiveResource(null)}
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="aspect-w-3 aspect-h-4 rounded-lg bg-amber-50 overflow-hidden">
                      {activeResource.portada ? (
                        <img
                          src={activeResource.portada}
                          alt={activeResource.titulo}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-amber-300">
                          {getResourceIcon(activeResource.tipo)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-amber-800">
                          Autor
                        </h4>
                        <p className="mt-1 text-gray-700">
                          {activeResource.autor}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-amber-800">
                          Descripción
                        </h4>
                        <p className="mt-1 text-gray-700">
                          {activeResource.descripcion}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-amber-800">
                            Tipo
                          </h4>
                          <p className="mt-1 text-gray-700">
                            {activeResource.tipo}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-amber-800">
                            Subtipo
                          </h4>
                          <p className="mt-1 text-gray-700">
                            {activeResource.subtipo}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-amber-800">
                            Fecha
                          </h4>
                          <p className="mt-1 text-gray-700">
                            {activeResource.fecha}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-amber-800">
                            Plataforma
                          </h4>
                          <p className="mt-1 text-gray-700">
                            {activeResource.plataforma}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-amber-800">
                          Etiquetas
                        </h4>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {activeResource.tags &&
                            activeResource.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-amber-50 rounded-full px-3 py-1 text-xs text-amber-800 border border-amber-100"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="pt-6">
                        {activeResource.urlOnline && (
                          <a
                            href={activeResource.urlOnline}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 mr-3 transition-colors"
                          >
                            Ver en línea
                          </a>
                        )}
                        {activeResource.urlPdf && (
                          <a
                            href={activeResource.urlPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 border border-amber-200 rounded-md shadow-sm text-sm font-medium text-amber-700 bg-white hover:bg-amber-50 transition-colors"
                          >
                            Descargar PDF
                          </a>
                        )}
                        {activeResource.fragmento && (
                          <a
                            href={activeResource.fragmento}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 border border-amber-200 rounded-md shadow-sm text-sm font-medium text-amber-700 bg-white hover:bg-amber-50 transition-colors mt-2 md:mt-0"
                          >
                            Ver fragmento
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesAll;
