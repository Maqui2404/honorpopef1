// src/app/biografia/page.js
import BiographySection from '../../components/BiographySection';

export default function BiografiaPage() {
  return (
    <div className="pt-16 pb-24">
      <div className="bg-slate-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Biografía</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            La vida y el camino de Jorge Mario Bergoglio hasta convertirse en el Papa Francisco.
          </p>
        </div>
      </div>
      
      <BiographySection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold mb-6">Un Papa de América Latina</h2>
        <p className="text-lg text-gray-700 mb-6">
        Jorge Mario Bergoglio nació en Buenos Aires, Argentina, el 17 de diciembre de 1936, en una familia de inmigrantes italianos. Antes de ingresar al seminario, Bergoglio trabajó como técnico químico y como portero en un club nocturno. Esta experiencia temprana de trabajo le dio una perspectiva única y una conexión con la clase trabajadora que influiría en su visión pastoral.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          En 1958, ingresó en la Compañía de Jesús (Jesuitas) y fue ordenado sacerdote en 1969. A lo largo de su carrera eclesiástica, ocupó diversos cargos de liderazgo, incluyendo el de Provincial de los Jesuitas en Argentina de 1973 a 1979, durante la dictadura militar del país.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Fue nombrado Arzobispo de Buenos Aires en 1998 y Cardenal en 2001 por el Papa Juan Pablo II. Durante su tiempo como Arzobispo, fue conocido por su vida austera, utilizando el transporte público y viviendo en un apartamento sencillo en lugar del palacio arzobispal.
        </p>
        
        <h2 className="text-3xl font-bold mb-6 mt-12">El Cónclave de 2013</h2>
        <p className="text-lg text-gray-700 mb-6">
          Tras la histórica renuncia del Papa Benedicto XVI, el Cónclave que eligió a Bergoglio comenzó el 12 de marzo de 2013. El 13 de marzo, en la quinta votación, fue elegido Papa, convirtiéndose en el primer pontífice jesuita, el primero del hemisferio sur y el primer latinoamericano.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Al ser elegido, eligió el nombre de Francisco en honor a San Francisco de Asís, indicando su deseo de una Iglesia cercana a los pobres y comprometida con la paz y el cuidado de la creación.
        </p>
        
        <p className="text-lg text-gray-700">
          Durante su pontificado, se caracterizó por su sencillez, su elocuencia directa y su compromiso con los marginados, manteniendo un estilo de vida austero y residiendo en la Casa Santa Marta en lugar de los apartamentos papales.
        </p>
      </div>
    </div>
  );
}