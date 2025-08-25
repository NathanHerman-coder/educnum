import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setError("Impossible de charger les articles"));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Articles récents</h2>
      {error && <p className="text-red-600">{error}</p>}
      {posts.length === 0 ? (
        <p className="text-gray-500">Aucun article pour l'instant.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-700 mt-1">{post.content}</p>
              <p className="text-sm text-gray-500 mt-1">
                Catégorie: {post.category?.name || "Aucune"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
