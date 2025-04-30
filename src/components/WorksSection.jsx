'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    {
      title: "Justicia Social",
      items: [
        "Defensa de los migrantes (Mensaje para la Jornada del Migrante, 2014)",
        "Lucha contra la pobreza: pidió una \"Iglesia pobre para los pobres\"",
        "Institución de la Jornada Mundial de los Pobres"
      ],
      color: "amber"
    },
    {
      title: "Ecología y Cuidado",
      items: [
        "Encíclica Laudato Si' (2015): sobre el cuidado del planeta",
        "Impulso del Pacto Educativo Global sobre ecología integral",
        "Promoción del \"Tiempo de la Creación\" en la agenda litúrgica"
      ],
      color: "emerald"
    },
    {
      title: "Reforma de la Iglesia",
      items: [
        "Reforma del Banco Vaticano (IOR) y transparencia financiera",
        "Nueva constitución apostólica Praedicate Evangelium (2022)",
        "Reestructuración de la Curia Romana"
      ],
      color: "blue"
    },
    {
      title: "Encuentros y Diálogo",
      items: [
        "Visita histórica a Irak (2021)",
        "Encuentro interreligioso en Abu Dhabi con líderes musulmanes (2019)",
        "Promoción del diálogo con judíos, musulmanes y otras religiones"
      ],
      color: "indigo"
    },
    {
      title: "Familia y Jóvenes",
      items: [
        "Sínodos sobre la familia y exhortación Amoris Laetitia (2016)",
        "Jornada Mundial de la Juventud: Río 2013, Cracovia 2016, Panamá 2019, Lisboa 2023",
        "Iniciativas para pastoral juvenil y vocaciones"
      ],
      color: "rose"
    },
    {
      title: "Encíclicas Clave",
      items: [
        "Evangelii Gaudium (2013) – sobre el anuncio del Evangelio",
        "Laudato Si' (2015) – ecología integral",
        "Fratelli Tutti (2020) – fraternidad y amistad social"
      ],
      color: "amber"
    }
  ];

  // Colores para categorías
  const categoryColors = {
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      hover: "hover:bg-amber-100"
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      hover: "hover:bg-emerald-100"
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      hover: "hover:bg-blue-100"
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      hover: "hover:bg-indigo-100"
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border-rose-200",
      hover: "hover:bg-rose-100"
    }
  };

  // Animación de fade
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  // Toggle para mostrar/ocultar categoría
  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-light text-gray-800">
            Obras y Aportes
          </h2>
          <div className="mt-2 mx-auto h-px w-16 bg-gray-300"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 font-light">
            El legado del Papa Francisco a través de sus acciones y documentos más importantes
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {categories.map((category, idx) => {
            const colorSet = categoryColors[category.color];
            
            return (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className={`border ${colorSet.border} rounded-lg overflow-hidden transition-all duration-300`}
              >
                <button 
                  className={`w-full p-4 text-left ${colorSet.bg} ${colorSet.hover} transition-colors duration-300 focus:outline-none`}
                  onClick={() => toggleCategory(idx)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-medium ${colorSet.text}`}>
                      {category.title}
                    </h3>
                    <svg 
                      className={`w-5 h-5 ${colorSet.text} transform transition-transform duration-300 ${activeCategory === idx ? 'rotate-180' : ''}`} 
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                <motion.div 
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ 
                    height: activeCategory === idx ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ul className="px-4 py-3 space-y-2 bg-white">
                    {category.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 py-1 border-b border-gray-100 last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-3 bg-gray-50 text-right">
                    <button className={`text-xs ${colorSet.text} font-medium flex items-center ml-auto`}>
                      Más información
                      <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="px-5 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors duration-300">
            Ver todas las obras
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;