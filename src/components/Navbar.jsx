import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-4 bg-green-900 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Educations numériques</h1>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300">Accueil</Link>
          <Link to="/profil" className="hover:text-gray-300">Inscriptions</Link>
          <Link to="/cour" className="hover:text-gray-300">Ressources</Link>
          <Link to="/post" className="hover:text-gray-300">Poster des cours</Link>
          <Link to="/quiz" className="hover:text-gray-300">S'entrainer</Link>
          <Link to="/prof" className="hover:text-gray-300">Contact</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-full bg-gray-300 dark:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 flex flex-col items-center bg-green-800 dark:bg-gray-800 p-4 rounded-lg">
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/profil" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Inscriptions</Link>
          <Link to="/cour" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Ressources</Link>
          <Link to="/quiz" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>S'entrainer</Link>
          <Link to="/prof" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-full bg-gray-300 dark:bg-gray-700 mt-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
