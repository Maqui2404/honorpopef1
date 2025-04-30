"use client";
// src/components/BiographySection.jsx
import { useState } from "react";

const BiographySection = () => {
  const [activeTab, setActiveTab] = useState("infancia");

  const bioSections = {
    infancia: {
      title: "Infancia y Juventud",
      content:
        "Jorge Mario Bergoglio nació el 17 de diciembre de 1936 en el barrio de Flores, en Buenos Aires, Argentina. Hijo de inmigrantes italianos —Mario José Bergoglio, un contador ferroviario, y Regina María Sívori— fue el mayor de cinco hermanos. Desde joven mostró una personalidad reservada, austera y espiritual. En su adolescencia contrajo una grave infección pulmonar, lo que llevó a extirparle parte del pulmón derecho. Esta experiencia marcó profundamente su vida y su sensibilidad hacia el sufrimiento humano.",
    },
    formacion: {
      title: "Formación y Vocación",
      content:
        "A los 21 años ingresó en el seminario de Villa Devoto, luego se unió a la Compañía de Jesús (jesuitas) en 1958. Realizó estudios de filosofía y teología en el Colegio Máximo de San José en San Miguel, y más tarde cursó estudios en Alemania. Fue ordenado sacerdote el 13 de diciembre de 1969 por el arzobispo Ramón José Castellano. Como buen jesuita, combinó la vida intelectual con el servicio pastoral y una disciplina férrea. En 1973 fue nombrado provincial de los jesuitas en Argentina, cargo que ejerció durante la turbulenta etapa de la dictadura militar.",
    },
    dictadura: {
      title: "Etapa durante la Dictadura (1976–1983)",
      content:
        "Durante el régimen militar, su papel fue objeto de controversias y reflexiones. Como líder jesuita, trató de proteger a sacerdotes y religiosos perseguidos, pero mantuvo un perfil bajo y prudente. Años después, reconoció la necesidad de mayor valentía ante las injusticias.",
    },
    rector: {
      title: "Rector y Obispo",
      content:
        "Fue rector del Colegio Máximo de San Miguel y director espiritual de numerosos jóvenes. En 1992 fue nombrado obispo auxiliar de Buenos Aires y luego arzobispo coadjutor. Tras la muerte del cardenal Quarracino en 1998, se convirtió en arzobispo de Buenos Aires. Vivió en un apartamento sencillo, cocinaba para sí mismo y viajaba en transporte público. Se le conocía como 'el obispo de los pobres'. En 2001, fue creado cardenal por San Juan Pablo II.",
    },
    eleccion: {
      title: "Elección como Papa (2013)",
      content:
        "El 13 de marzo de 2013, tras la renuncia de Benedicto XVI, Jorge Mario Bergoglio fue elegido Papa en el segundo día del cónclave. Tomó el nombre de Francisco, en honor a San Francisco de Asís, símbolo de humildad, paz y cuidado de la creación. Fue el primer Papa latinoamericano, primero jesuita y el primero en elegir el nombre Francisco. Su elección fue recibida con sorpresa y emoción por todo el mundo.",
    },
    pontificado: {
      title: "Pontificado (2013–2025)",
      content:
        "Desde el inicio, se distinguió por rechazar los lujos del cargo (vivió en la Casa Santa Marta), cambiar el estilo papal por uno más sencillo y cercano, enfocarse en los pobres, migrantes, justicia social y medioambiente, reformar estructuras internas del Vaticano, promover un diálogo interreligioso valiente y constructivo, realizar viajes históricos a zonas de conflicto y fomentar la sinodalidad y la voz de los laicos, especialmente las mujeres. Promulgó tres encíclicas clave: Evangelii Gaudium, Laudato Si', Fratelli Tutti. También organizó tres sínodos sobre la familia, la Amazonía y la sinodalidad misma.",
    },
    ultimos: {
      title: "Últimos Años y Fallecimiento",
      content:
        "Desde 2023 su salud comenzó a deteriorarse. Fue hospitalizado por neumonía bilateral durante más de un mes en 2025. A pesar de su fragilidad física, siguió participando activamente en la vida de la Iglesia hasta sus últimos días. Falleció el 21 de abril de 2025 a los 88 años en la Casa Santa Marta del Vaticano. Su cuerpo fue velado en la Plaza de San Pedro por millones de fieles de todo el mundo.",
    },
    legado: {
      title: "Legado",
      content:
        "El Papa Francisco deja un legado espiritual y moral de profunda humanidad: reafirmó la opción por los pobres, invitó a construir puentes en lugar de muros, cambió el tono del papado hacia la misericordia, la cercanía y la ternura, e inspiró a una nueva generación de creyentes y no creyentes a buscar el bien común y la justicia social.",
    },
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
            Biografía Completa del
            <span className="block mt-2 font-semibold text-yellow-700">
              Papa Francisco
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-yellow-200 rounded-full my-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un recorrido por la vida y obra de Jorge Mario Bergoglio, desde su
            humilde infancia en Buenos Aires hasta convertirse en el 266º Sumo
            Pontífice de la Iglesia Católica.
          </p>
        </div>

        {/* Pestañas de navegación */}
        <div className="flex flex-wrap justify-center mb-8 overflow-x-auto">
          {Object.keys(bioSections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveTab(section)}
              className={`px-4 py-2 mx-1 my-1 text-sm font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 ${
                activeTab === section
                  ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                  : "text-gray-600 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {bioSections[section].title}
            </button>
          ))}
        </div>

        {/* Contenido biográfico */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-yellow-700 mb-4">
            {bioSections[activeTab].title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {bioSections[activeTab].content}
          </p>
        </div>

        {/* Sección de imágenes/momentos destacados - Carrusel con flechas */}
        <div className="mt-12 relative">
          <h3 className="text-xl text-center font-medium text-gray-800 mb-6">
            Momentos Destacados
          </h3>

          <div className="relative group">
            {/* Flecha izquierda */}
            <button
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
              onClick={() => {
                const container = document.querySelector(".carousel-container");
                container.scrollBy({ left: -300, behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Flecha derecha */}
            <button
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
              onClick={() => {
                const container = document.querySelector(".carousel-container");
                container.scrollBy({ left: 300, behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carrusel */}
            <div className="overflow-hidden">
              <div className="flex space-x-6 pb-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide carousel-container">
                {/* Card 1 - Elección Papal */}
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transform transition-transform hover:scale-105 mx-2">
                    <img
                      src="/img/papa-eleccion.jpg"
                      alt="Elección como Papa"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-800">
                        Elección Papal
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        13 de marzo de 2013
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Laudato Si */}
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transform transition-transform hover:scale-105 mx-2">
                    <img
                      src="/img/documents/laudato-si.jpg"
                      alt="Encíclica Laudato Si"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-800">
                        Encíclica Laudato Si'
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        24 de mayo de 2015
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Sínodo Amazonía */}
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transform transition-transform hover:scale-105 mx-2">
                    <img
                      src="/img/papa-sinodo.jpg"
                      alt="Sínodo para la Amazonía"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-800">
                        Sínodo para la Amazonía
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">Octubre 2019</p>
                    </div>
                  </div>
                </div>

                {/* Card adicional 4 - Ejemplo de cómo agregar más */}
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transform transition-transform hover:scale-105 mx-2">
                    <img
                      src="/img/papa-fratelli-tutti.jpg"
                      alt="Encíclica Fratelli Tutti"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-800">
                        Encíclica Fratelli Tutti
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        4 de octubre de 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estilos CSS necesarios */}
        <style jsx>{`
          /* Para ocultar la scrollbar pero mantener funcionalidad */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Snap behavior para el carrusel */
          .snap-x {
            scroll-snap-type: x mandatory;
          }

          .snap-start {
            scroll-snap-align: start;
          }
        `}</style>

        {/* Cita al final */}
        <div className="mt-16 text-center py-8 border-t border-gray-200 max-w-3xl mx-auto">
          <p className="italic text-gray-600 text-lg">
            &ldquo;La fe comienza cuando somos capaces de percibir en los ojos
            del otro la mirada de amor que anhela nuestra presencia.&rdquo;
          </p>
          <p className="mt-2 text-gray-500">— Papa Francisco</p>
        </div>
      </div>
    </div>
  );
};

export default BiographySection;
