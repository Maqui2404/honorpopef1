// src/app/galeria/page.js
import GallerySection from "../../components/GallerySection";

export default function GaleriaPage() {
  return (
    <div className="pt-16 pb-24">
      <div className="bg-slate-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Galería</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            Momentos significativos del pontificado del Papa Francisco.
          </p>
        </div>
      </div>

      <GallerySection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Momentos Históricos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Elección Papal (13 de marzo de 2013)
            </h3>
            <div className="mb-4">
              <img
                src="/img/momentos/fumata-blanca.jpg"
                alt="Fumata blanca"
                className="w-full h-48 object-cover rounded"
              />
            </div>

            <p className="text-gray-700">
              El momento histórico en que Jorge Mario Bergoglio fue elegido como
              el 266º Papa de la Iglesia Católica, saliendo al balcón de la
              Basílica de San Pedro con el nombre de Francisco.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Oración en pandemia (27 de marzo de 2020)
            </h3>
            <div className="mb-4">
              <img
                src="/img/momentos/plaza-vacia.jpg"
                alt="Plaza San Pedro vacía"
                className="w-full h-48 object-cover rounded"
              />
            </div>

            <p className="text-gray-700">
              La emblemática bendición Urbi et Orbi en una Plaza de San Pedro
              completamente vacía durante la pandemia, un momento que quedará en
              la historia como símbolo de esperanza en tiempos difíciles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
