import React, { useEffect, useState } from "react";
import axios from "axios";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/courses/")
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des cours :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Chargement des cours...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">📚 Cours disponibles</h1>
      
      {courses.length === 0 ? (
        <p className="text-center text-gray-500">Aucun cours disponible pour le moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold text-indigo-600">{course.name}</h2>
              <p className="text-gray-700 mt-2">👨‍🏫 Prof : {course.professor}</p>
              <p className="text-gray-700">🎓 Niveau : {course.level}</p>
              <p className="text-gray-700">📖 Domaine : {course.domain}</p>
              <p className="text-green-600 font-bold mt-2">{course.price} Ar</p>

              {course.video_url && (
                <a
                  href={course.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-blue-500 hover:underline"
                >
                  🎥 Voir la vidéo
                </a>
              )}

              {course.pdf && (
                <a
                  href={course.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-red-500 hover:underline"
                >
                  📄 Télécharger le PDF
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoursesList;
