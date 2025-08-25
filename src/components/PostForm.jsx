import { useEffect, useState } from "react";

export default function PostForm() {
  const [formData, setFormData] = useState({ title: "", content: "", category: "" });
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Charger les catégories depuis le backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((res) => res.json())
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    fetch("http://127.0.0.1:8000/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        category_id: formData.category
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de l’ajout de l’article");
        return res.json();
      })
      .then(() => {
        setMessage("Article ajouté avec succès !");
        setFormData({ title: "", content: "", category: "" });
      })
      .catch((err) => setMessage(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-3">Ajouter un article</h2>
      {message && <p className={`mb-2 ${message.includes("Erreur") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Contenu"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">-- Choisir une catégorie --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Envoi..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
}
