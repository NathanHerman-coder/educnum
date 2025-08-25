
import React from "react";
import { Link, useParams } from "react-router-dom";

const Cour= () => {
    const {coursId}=useParams();
    const cour= cour.find((c) =>c.id===parseInt(coursId))

    if (!cour) {
        return <h2 className="text-center text-red-500 text-3xl mt-20">Cour non trouvé</h2>
    }

    return (
        <div className="p-10 bg-white rounded-2xl shadow-lg max-w-5xl mx-auto mt-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">{cour.title}</h1>
            <p className="text-blue-700 mb-6">{cour.description}</p>
            <pre className="whitespace-pre-wrap text-gray-800 bg-gray-100 p-6 rounded-lg shadow-inner ">
                {cour.content}
            </pre>
        </div>
    )
}
export default Cour;