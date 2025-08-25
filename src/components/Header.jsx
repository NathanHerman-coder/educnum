import { useState } from "react";
import React from 'react'

import backgroundImg from "../assets/bd.jpg";
import { LightbulbIcon } from "lucide-react";
const Header = () =>{
  const [darkMode,setDarkMode] = useState(false)
 return(
  <div className={darkMode?"dark":""}>
   <section
        className="min-h-screen flex flex-col justify-center items-center dark:bg-gray-500"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="bg-gray-200 p-4 text-green-900  rounded-lg m-4 mt-4 dark:bg-gray-700">
          <h2 className=" text-4xl font-bold text-center dark:text-gray-400">
            Bienvenue sur éducations numériques
          </h2>
          <p className="text-lg text-green-900 text-center mb-8 dark:text-gray-400">
          Devenez expert en  Mathématiques fondamentales,Mathematiques appliquées, Informatiques appliquées,
           Economies, Gestion et bien plus encore   
          </p>
          
        </div>
        <a
          href="/cour"
          className="bg-green-900 text-white py-2 px-6 rounded-lg hover:bg-green-700 dark:bg-gray-900"
        >
          Commencer le cours
        </a>
      </section>
  </div>
 )
}
export default Header