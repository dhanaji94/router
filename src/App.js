import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import File from "./components/File";

function App() {
  const Header = () => {
    return (
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          {" "}
          <Link to="/File">File</Link>
        </li>
        <li>
          <Link to="/Navbar">Navbar</Link>
        </li>
      </ul>
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/File" element={<File />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
