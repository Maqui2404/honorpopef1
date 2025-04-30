'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuotesSection = () => {
  // Las frases organizadas por categorías
  const quoteCategories = [
    {
      title: "Sobre el amor y la misericordia",
      color: "indigo",
      quotes: [
        "Dios nunca se cansa de perdonar, somos nosotros los que nos cansamos de pedir perdón.",
        "Amar es más que un sentimiento, es una decisión.",
        "La misericordia cambia el corazón, da vida nueva.",
        "Dios no se cansa de perdonarnos, nosotros sí nos cansamos de pedir perdón."
      ]
    },
    {
      title: "Sobre la justicia social",
      color: "blue",
      quotes: [
        "Una economía que mata no puede ser tolerada.",
        "La indiferencia es el mayor enemigo de la humanidad.",
        "Los pobres tienen mucho que enseñarnos sobre la dignidad y la solidaridad.",
        "La peor discriminación es la falta de atención a los pobres."
      ]
    },
    {
      title: "Sobre la vida espiritual",
      color: "amber",
      quotes: [
        "La fe pasa por la cruz.",
        "El que no reza al Señor, reza al diablo.",
        "Una fe que no nos pone en crisis es una fe en crisis.",
        "Para seguir a Jesús hay que tener valor, hay que animarse a cambiar."
      ]
    },
    {
      title: "Sobre la vida cotidiana",
      color: "emerald",
      quotes: [
        "La vida es un don, no un problema.",
        "No dejemos que nos roben la esperanza.",
        "El verdadero poder es el servicio.",
        "El chisme es un acto terrorista, porque con la lengua mata.",
        "El consumismo nos ha inducido a acostumbrarnos a lo superfluo.",
        "Cuando el hombre renuncia a la responsabilidad, renuncia a su grandeza."
      ]
    }
  ];
  
  // Estado para rastrear categoría y cita activas
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuote, setActiveQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef(null);
  
  // Colores por categoría (paleta más sutil)
  const categoryColors = {
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      accent: "bg-indigo-500"
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      accent: "bg-blue-500"
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      accent: "bg-amber-500"
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      accent: "bg-emerald-500"
    }
  };
  
  // Obtener el color actual basado en la categoría activa
  const currentColor = categoryColors[quoteCategories[activeCategory].color];
  
  // Intersection Observer para activar las animaciones cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
  
  // Cambio automático de citas
  useEffect(() => {
    let interval;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        nextQuote();
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay, activeQuote, activeCategory]);
  
  // Navegación entre citas
  const nextQuote = () => {
    const currentCategoryQuotes = quoteCategories[activeCategory].quotes;
    
    if (activeQuote >= currentCategoryQuotes.length - 1) {
      const nextCategory = (activeCategory + 1) % quoteCategories.length;
      setActiveCategory(nextCategory);
      setActiveQuote(0);
    } else {
      setActiveQuote(activeQuote + 1);
    }
  };
  
  const prevQuote = () => {
    if (activeQuote <= 0) {
      const prevCategory = (activeCategory - 1 + quoteCategories.length) % quoteCategories.length;
      setActiveCategory(prevCategory);
      setActiveQuote(quoteCategories[prevCategory].quotes.length - 1);
    } else {
      setActiveQuote(activeQuote - 1);
    }
  };
  
  // Seleccionar categoría específica
  const selectCategory = (categoryIndex) => {
    setActiveCategory(categoryIndex);
    setActiveQuote(0);
  };

  // Variantes de animación (simplificadas)
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const quoteVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.div 
          className="text-center mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-light text-gray-800">
            Pensamientos del Papa Francisco
          </h2>
          <div className="mt-2 mx-auto h-px w-16 bg-gray-300"></div>
        </motion.div>
        
        {/* Navegación por categorías - Minimalista */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={slideUp}
        >
          {quoteCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => selectCategory(idx)}
              className={`px-4 py-2 text-sm font-light transition-colors duration-300 ${
                activeCategory === idx 
                  ? `${currentColor.bg} ${currentColor.text}`
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>
        
        {/* Contenedor principal de citas - Minimalista */}
        <motion.div 
          className="mx-auto"
          variants={slideUp}
        >
          <div className={`relative rounded-lg py-10 px-6 ${currentColor.bg}`}>
            {/* Contenedor de citas con animación */}
            <div className="min-h-48 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${activeQuote}`}
                  variants={quoteVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-gray-800 my-6 leading-relaxed font-light">
                    "{quoteCategories[activeCategory].quotes[activeQuote]}"
                  </p>
                  <p className="mt-6 text-gray-600 text-sm font-light">
                    Papa Francisco
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Controles de navegación - Minimalistas */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevQuote}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cita anterior"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Indicadores de citas */}
              <div className="flex space-x-1">
                {quoteCategories[activeCategory].quotes.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveQuote(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeQuote ? currentColor.accent : 'bg-gray-200'
                    }`}
                    style={{ width: idx === activeQuote ? '16px' : '8px' }}
                    aria-label={`Ir a cita ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextQuote}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Siguiente cita"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Botón de autoplay - Minimalista */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`flex items-center text-xs px-3 py-1 rounded transition-colors ${
                isAutoplay ? `${currentColor.text}` : 'text-gray-400'
              }`}
            >
              {isAutoplay ? "Pausar" : "Reproducir automáticamente"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QuotesSection;