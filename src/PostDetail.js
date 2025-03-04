import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8888/react_project//wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Errore nel recupero del post:", error));
  }, [id]);

  if (!post) return <p>Caricamento...</p>;

  return (
    <div>
        <div>
            <Link to ="/">Home</Link>
        </div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default PostDetail;
