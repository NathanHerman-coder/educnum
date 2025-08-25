import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";

import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const [niveau, setNiveau] = useState("");
  const [open, setOpen] = useState(false);
  const [darkMode,setDarkMode] = useState(false)
  const navigate = useNavigate();

  const handleNiveauChange = (event) => {
    setNiveau(event.target.value);
  };

  const handleLoginClick = () => {
    navigate("/login"); // redirige vers la page de connexion
  };

  return (
    <div className={darkMode?"dark":""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header/>
      <Footer />
    </div>
  );
};

export default Home;
