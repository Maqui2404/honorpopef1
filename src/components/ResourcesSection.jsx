'use client';
// src/components/ResourcesSection.jsx

const ResourcesSection = () => {
    const resources = [
      {
        title: "Encíclicas",
        items: [
          { name: "Evangelii Gaudium (2013)", description: "Sobre el anuncio del Evangelio en el mundo actual" },
          { name: "Laudato Si' (2015)", description: "Sobre el cuidado de la casa común" },
          { name: "Fratelli Tutti (2020)", description: "Sobre la fraternidad y la amistad social" }
        ],
        icon: "📄"
      },
      {
        title: "Audios",
        items: [
          { name: "Homilía de Pascua 2023", description: "Mensaje de esperanza y renovación" },
          { name: "Oración por la paz", description: "Plegaria especial en tiempos de conflicto" },
          { name: "Mensaje Urbi et Orbi", description: "Bendición para la ciudad y el mundo" }
        ],
        icon: "🎧"
      },
      {
        title: "Infografías",
        items: [
          { name: "Reforma de la Curia Romana", description: "Explicación visual de los cambios estructurales" },
          { name: "Ecología integral", description: "Conceptos clave de Laudato Si'" },
          { name: "La misericordia", description: "Pilares del pensamiento franciscano" }
        ],
        icon: "📊"
      }
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Recursos Descargables
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Documentos, audios e infografías para profundizar en el legado del Papa Francisco.
            </p>
          </div>
  
          <div className="mt-12">
            {resources.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-2xl font-bold flex items-center">
                <span className="mr-2">{category.icon}</span> {category.title}
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700">
                      Descargar
                      <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;