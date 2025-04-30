'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la suscripción
    alert('¡Gracias por suscribirte a nuestro boletín!');
    setEmail('');
  };
  
  return (
    <footer className="bg-slate-200 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Sección principal del footer con columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Sobre el Papa Francisco */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Papa Francisco</h3>
            <div className="flex items-center mb-4">
              <img 
                src="/img/papafrancisco.jpg" 
                alt="Escudo papal" 
                className="w-12 h-12 mr-3 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-600">Jorge Mario Bergoglio</p>
                <p className="text-xs text-gray-500">Pontificado 2013 - {currentYear}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Sitio NO OFICIAL dedicado a compartir el mensaje y obras del Santo Padre Francisco, 
               Papa de la Iglesia Católica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Inicio
              </Link>
              <Link href="/biografia" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Biografía
              </Link>
              <Link href="/obras" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Obras y Encíclicas
              </Link>
              {/* <Link href="/pensamientos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Pensamientos
              </Link> */}
              {/* <Link href="/agenda" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Agenda Papal
              </Link> */}
              <Link href="/galeria" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Galería de Imágenes
              </Link>
              {/* <Link href="/contacto" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Contacto
              </Link> */}
            </nav>
          </div>
          
          {/* Columna 3: Recursos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recursos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/recursos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Documentos Pontificios
              </Link>
              <Link href="/recursos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Homilías Recientes
              </Link>
              {/* <Link href="/audiencias" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Audiencias Generales
              </Link> */}
              {/* <Link href="/oracion" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Intenciones de Oración
              </Link> */}
              <Link href="/recursos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Viajes Apostólicos
              </Link>
              {/* <Link href="/vaticano" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                El Vaticano
              </Link> */}
            </nav>
          </div>
          
          {/* Columna 4: Suscripción al boletín */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Mantente Informado</h3>
            <p className="text-sm text-gray-600 mb-4">
              Suscríbete a nuestro boletín para recibir las últimas noticias y reflexiones del Santo Padre.
            </p>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                >
                  Suscribirse
                </button>
              </div>
            </form>
            
          </div>
        </div>
        
        {/* Banner de idiomas */}
        <div className="py-4 border-t border-b border-gray-300 mb-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <span className="text-gray-600">Disponible en:</span>
            <a href="#" className="text-gray-800 hover:underline">Español</a>
            <a href="#" className="text-gray-600 hover:underline">English</a>
            <a href="#" className="text-gray-600 hover:underline">Italiano</a>
            <a href="#" className="text-gray-600 hover:underline">Français</a>
            <a href="#" className="text-gray-600 hover:underline">Português</a>
            <a href="#" className="text-gray-600 hover:underline">Deutsch</a>
            <a href="#" className="text-gray-600 hover:underline">Polski</a>
            <a href="#" className="text-gray-600 hover:underline">العربية</a>
          </div>
        </div>
        
        {/* Sección de créditos y políticas */}
        <div className="text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p>&copy; {currentYear} Homenaje al Papa Francisco</p>
            
            <div className="mt-4 md:mt-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link href="/politica-privacidad" className="hover:text-gray-800 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-uso" className="hover:text-gray-800 transition-colors">
                Términos de Uso
              </Link>
              <Link href="/cookies" className="hover:text-gray-800 transition-colors">
                Política de Cookies
              </Link>
              <Link href="/accesibilidad" className="hover:text-gray-800 transition-colors">
                Accesibilidad
              </Link>
              <Link href="/aviso-legal" className="hover:text-gray-800 transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="mb-2">
              Este sitio es un homenaje no oficial y no está afiliado directamente con la Santa Sede.
            </p>
            <p>
              Sitio NO OFICIAL desarrollado por <a href="#" className="font-medium hover:underline">Marco Mayta</a> con respeto y admiración.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;