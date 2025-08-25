import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InscriptionForm from "../pages/InscriptionForm";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showInscription, setShowInscription] = useState(false);

  return (
    <div >
      
      <Header />


    </div>
  );
};

export default Home;
