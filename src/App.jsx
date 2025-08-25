import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Form from "./pages/Form";
import PrivateRoute from "./components/PrivateRoute";
import InscriptionForm from "./pages/InscriptionForm";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="flex-grow mt-16 mb-16 p-4 bg-gray-100">
          {/* Le main change selon la route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<InscriptionForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/form"
              element={
                <PrivateRoute>
                  <Form />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        <Footer /> {/* Footer fixe */}
    </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
