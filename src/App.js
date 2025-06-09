import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./search";
import Home from "./home";
import Apod from "./apod";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="heading">Spacial Xplorer</h1>
        <nav className="nav">
          <Link to="/">Home</Link> | <Link to="/search">Search APOD</Link> |{" "}
          <Link to="/apod">APOD</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/apod" element={<Apod />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
