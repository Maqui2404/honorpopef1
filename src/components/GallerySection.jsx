"use client";
// src/components/GallerySection.jsx
import { useState } from "react";
import Image from "next/image";

const GallerySection = () => {
  // Placeholder para imágenes
  const images = [
    {
      id: 1,
      title: "Viaje apostólico a Brasil",
      description: "Jornada Mundial de la Juventud en Río de Janeiro (2013)",
      src: "/img/viajes/brasil.jpg",
    },
    {
      id: 2,
      title: "Encuentro interreligioso",
      description: "Diálogo con líderes musulmanes en Abu Dhabi (2019)",
      src: "/img/viajes/abu_dhabi.jpg",
    },
    {
      id: 3,
      title: "Visita histórica a Irak",
      description: "Primera visita de un Papa a la nación (2021)",
      src: "/img/viajes/irak.jpg",
    },
    {
      id: 4,
      title: "Momentos de oración",
      description: "Oración en soledad durante la pandemia (2020)",
      src: "/img/viajes/oracion_pandemia.jpg",
    },
    {
      id: 5,
      title: "Servicio a los más necesitados",
      description: "Lavado de pies a presos y refugiados",
      src: "/img/viajes/servicio.jpg",
    },
    {
      id: 6,
      title: "Con los jóvenes",
      description: "Encuentros con jóvenes de todo el mundo",
      src: "/img/viajes/jovenes.jpg",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galería
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Momentos significativos del pontificado del Papa Francisco.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {images.map((image) => (
            <div key={image.id} className="group relative">
              <div className="bg-gray-200 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <div
                  className="h-48 w-full overflow-hidden rounded cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {image.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">{selectedImage.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-hidden rounded-lg">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full h-auto object-contain max-h-[70vh] mx-auto"
            />
            </div>
            <p className="mt-4 text-gray-600">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
