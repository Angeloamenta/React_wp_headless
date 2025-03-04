import React from "react";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Benvenuto nella Home!</p>
      <div>
                    <Link to ="/posts">Post</Link>
        
      </div>
    </div>
  );
}

export default Home;
