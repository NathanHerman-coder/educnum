import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LightbulbIcon, Moon, Sun } from "lucide-react";
const Navbar = ({darkMode,setDarkMode}) => {
    
    return (
        <div>
            <nav className=" text-white p-4 bg-green-900 dark:bg-gray-900">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Educations numériques</h1>
                <nav className="flex space-x-6">
                    <Link to="/" className="hover:text-gray-300">Accueil</Link>
                    <Link to="/profil" className="hover:text-gray-300">Inscriptions</Link>
                    <Link to="/cour" className="hover:text-gray-300">Ressources</Link>
                    <Link to="/quiz" className="hover:text-gray-300">S'entrainer</Link>
                    <Link to="/prof" className="hover:text-gray-300">Contact</Link>
                    <button onClick={() => setDarkMode(!darkMode)} className=" px-4 py-2 rounded-lg bg-gray-300
                     dark:bg-gray-700">{darkMode? <Sun size={20}/>:<Moon size={20}/>}</button>
                </nav>
            </div>
        </nav>
        </div>
        
    )
}
export default Navbar;