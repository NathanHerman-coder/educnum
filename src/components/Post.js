import React, { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Posts du blog</h1>
      {posts.length === 0 ? (
  <p>Aucun post disponible</p>
) : (
  posts.map(post => (
    <div key={post.id} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><i>Catégorie: {post.category ? post.category.name : "Aucune"}</i></p>
    </div>
  ))
)}
    </div>
  );
}

export default Post;
