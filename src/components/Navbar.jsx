"use client";

// src/components/Navbar.jsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Control scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Search implementation would go here
  };

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md text-slate-800"
          : "bg-transparent text-black"
      }`}
    >
      {/* Top banner with disclaimer */}
      <div className="hidden lg:block bg-slate-100 text-slate-600 text-xs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center h-8">
            <span>Sitio informativo no oficial en honor al Papa Francisco</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and name */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isScrolled ? "bg-yellow-700" : "bg-white text-yellow-700"
              } font-semibold transition-colors duration-300`}
            >
              PF
            </motion.div>
            <motion.span
              initial={{ opacity: 1 }}
              className={`text-xl font-medium transition-colors duration-300 ${
                isScrolled ? "text-slate-800" : "text-black"
              }`}
            >
              Papa Francisco
            </motion.span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 ${
                  isScrolled
                    ? "text-slate-700 hover:text-yellow-700"
                    : "text-black hover:text-yellow-700"
                }`}
              >
                Inicio
              </Link>

              {/* Biografía dropdown */}
              <div
                className="relative"
                onMouseEnter={() => toggleDropdown("bio")}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center ${
                    isScrolled
                      ? "text-slate-700 hover:text-yellow-700"
                      : "text-black hover:text-yellow-700"
                  }`}
                >
                  Biografía
                  <motion.svg
                    animate={{ rotate: activeDropdown === "bio" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "bio" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <Link
                          href="/biografia/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Historia de Vida
                        </Link>
                        <Link
                          href="/biografia/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Su Vocación
                        </Link>
                        <Link
                          href="/biografia/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Elección Papal
                        </Link>
                        <Link
                          href="/biografia"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Línea de Tiempo
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Obras dropdown */}
              <div
                className="relative"
                onMouseEnter={() => toggleDropdown("obras")}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center ${
                    isScrolled
                      ? "text-slate-700 hover:text-yellow-700"
                      : "text-black hover:text-yellow-700"
                  }`}
                >
                  Obras
                  <motion.svg
                    animate={{ rotate: activeDropdown === "obras" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "obras" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <Link
                          href="/recursos"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Encíclicas
                        </Link>
                        <Link
                          href="/recursos"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Exhortaciones
                        </Link>
                        <Link
                          href="/recursos"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Bulas Papales
                        </Link>
                        <Link
                          href="/recursos"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Reformas
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/frases"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 ${
                  isScrolled
                    ? "text-slate-700 hover:text-yellow-700"
                    : "text-black hover:text-yellow-700"
                }`}
              >
                Frases
              </Link>

              <Link
                href="/galeria"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 ${
                  isScrolled
                    ? "text-slate-700 hover:text-yellow-700"
                    : "text-black hover:text-yellow-700"
                }`}
              >
                Galería
              </Link>

              {/* Recursos dropdown */}
              <div
                className="relative"
                onMouseEnter={() => toggleDropdown("recursos")}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center ${
                    isScrolled
                      ? "text-slate-700 hover:text-yellow-700"
                      : "text-black hover:text-yellow-700"
                  }`}
                >
                  Recursos
                  <motion.svg
                    animate={{
                      rotate: activeDropdown === "recursos" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "recursos" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <Link
                          // href="/recursos/documentos"
                          href="/recursos/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Documentos
                        </Link>
                        <Link
                          // href="/recursos/libros"
                          href="/recursos/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Libros
                        </Link>
                        <Link
                          // href="/recursos/videos"
                          href="/recursos/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Videos
                        </Link>
                        <Link
                          // href="/recursos/enlaces"
                          href="/recursos/"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                          role="menuitem"
                        >
                          Enlaces
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 ${
                  isScrolled
                    ? "text-slate-700 hover:text-yellow-700"
                    : "text-black hover:text-yellow-700"
                }`}
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Desktop action buttons */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSearch}
              className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-600 hover:bg-blue-50"
                  : "text-black hover:bg-white hover:bg-opacity-20"
              }`}
              aria-label="Buscar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleSearch}
              className={`p-2 mr-2 rounded-full focus:outline-none transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-600 hover:bg-blue-50"
                  : "text-black hover:bg-white hover:bg-opacity-20"
              }`}
              aria-label="Buscar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-600 hover:bg-blue-50"
                  : "text-black hover:bg-white hover:bg-opacity-20"
              }`}
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">
                {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 2 : 0,
                  }}
                  className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-slate-600" : "bg-white"
                  }`}
                ></motion.span>
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  className={`block w-5 h-0.5 rounded-full my-1 transition-all duration-300 ${
                    isScrolled ? "bg-slate-600" : "bg-white"
                  }`}
                ></motion.span>
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -2 : 0,
                  }}
                  className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-slate-600" : "bg-white"
                  }`}
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={searchBarVariants}
            className="border-t border-gray-200 py-3 px-4 bg-white shadow-md"
          >
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar en el sitio..."
                  className="w-full px-4 py-2 pr-10 rounded-md bg-gray-100 text-slate-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-yellow-700 transition-colors duration-200"
                  aria-label="Buscar"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>

              {/* Biografía mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("bio-mobile")}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                >
                  <span>Biografía</span>
                  <motion.svg
                    animate={{
                      rotate: activeDropdown === "bio-mobile" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === "bio-mobile" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="pl-4 py-2 space-y-1 bg-gray-50 rounded-md mt-1"
                    >
                      <Link
                        href="/biografia"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Historia de Vida
                      </Link>
                      <Link
                        href="/biografia"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Su Vocación
                      </Link>
                      <Link
                        href="/biografia"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Elección Papal
                      </Link>
                      <Link
                        href="/biografia/linea-tiempo"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Línea de Tiempo
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Obras mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("obras-mobile")}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                >
                  <span>Obras</span>
                  <motion.svg
                    animate={{
                      rotate: activeDropdown === "obras-mobile" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === "obras-mobile" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="pl-4 py-2 space-y-1 bg-gray-50 rounded-md mt-1"
                    >
                      <Link
                        href="/obras/enciclicas"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Encíclicas
                      </Link>
                      <Link
                        href="/obras/exhortaciones"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Exhortaciones
                      </Link>
                      <Link
                        href="/obras/bulas"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Bulas Papales
                      </Link>
                      <Link
                        href="/obras/reformas"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Reformas
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/frases"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Frases
              </Link>

              <Link
                href="/galeria"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>

              {/* Recursos mobile dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("recursos-mobile")}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                >
                  <span>Recursos</span>
                  <motion.svg
                    animate={{
                      rotate: activeDropdown === "recursos-mobile" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === "recursos-mobile" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="pl-4 py-2 space-y-1 bg-gray-50 rounded-md mt-1"
                    >
                      <Link
                        href="/recursos/documentos"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Documentos
                      </Link>
                      <Link
                        href="/recursos/libros"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Libros
                      </Link>
                      <Link
                        href="/recursos/videos"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Videos
                      </Link>
                      <Link
                        href="/recursos/enlaces"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Enlaces
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contacto"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-yellow-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>

              {/* Disclaimer for mobile users */}
              <div className="px-3 py-4 mt-3 text-xs text-slate-500 border-t border-gray-200">
                <p>Sitio informativo no oficial en honor al Papa Francisco</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
