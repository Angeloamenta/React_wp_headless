import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';

import ContactForm from "./ContactForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter> {/* Deve avvolgere tutto */}
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contatti</Link></li>
            <li><Link to="/posts">Post</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
