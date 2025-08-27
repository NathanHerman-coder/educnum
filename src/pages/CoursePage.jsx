import React, { useState } from "react";
import axios from "axios";

function CoursesPage() {
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    domain: "",
    professor: "",
    price: "",
    pdf: null,
    video_url: ""
  });

  const [message, setMessage] = useState("");

  // Gestion champs texte
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion fichier
  const handleFileChange = (e) => {
    setFormData({ ...formData, pdf: e.target.files[0] });
  };

  // Soumission formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("level", formData.level);
      data.append("domain", formData.domain);
      data.append("professor", formData.professor);
      data.append("price", formData.price);
      if (formData.pdf) data.append("pdf", formData.pdf);
      if (formData.video_url) data.append("video_url", formData.video_url);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/courses/",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(`✅ Cours ajouté : ${response.data.name}`);
      setFormData({
        name: "",
        level: "",
        domain: "",
        professor: "",
        price: "",
        pdf: null,
        video_url: ""
      });
    } catch (error) {
  if (error.response) {
    console.error("Erreur backend :", error.response.data);
    setMessage("Erreur: " + JSON.stringify(error.response.data));
  } else {
    console.error("Erreur réseau :", error.message);
    setMessage("Erreur réseau : " + error.message);
  }
}
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        Ajouter un nouveau cours
      </h2>

      {message && (
        <p className="mb-4 text-center font-medium text-green-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium">Nom du cours</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium">Niveau</label>
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium">Domaine</label>
          <input
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium">Professeur</label>
          <input
            type="text"
            name="professor"
            value={formData.professor}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium">Prix (Ar)</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium">PDF du cours</label>
          <input
            type="file"
            name="pdf"
            onChange={handleFileChange}
            accept="application/pdf"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium">Lien vidéo</label>
          <input
            type="text"
            name="video_url"
            value={formData.video_url}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Ajouter le cours
        </button>
      </form>
    </div>
  );
}

export default CoursesPage;
