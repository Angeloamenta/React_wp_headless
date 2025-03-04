import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/react_project/wp-json/wp/v2/posts") // Sostituisci con il tuo dominio
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Errore nel recupero dei post:", error));
  }, []);

  return (
    <div>
      <h1>Lista dei Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
