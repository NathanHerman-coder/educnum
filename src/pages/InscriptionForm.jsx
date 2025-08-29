import React, { useState } from "react";
import axios from "axios";
import PaymentForm from "../components/PaymentForm";

function InscriptionForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    try {
      await axios.post("http://educnumbac.onrender.com/api/register", {
        username: formData.nom,
        email: formData.email,
        password: formData.password,
      });
      alert("Inscription réussie !");
      setFormData({ nom: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Erreur lors de l'inscription !");
    }
  };

  return (
    <div className="w-full p-8 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Formulaire d'inscription */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-4 max-w-md mx-auto md:mx-0"
        >
          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            value={formData.nom}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition dark:bg-gray-900 dark:hover:bg-gray-700"
          >
            S'inscrire
          </button>
        </form>

        {/* Formulaire de paiement */}
        <div className="flex-1 max-w-md mx-auto md:mx-0">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

export default InscriptionForm;
