import "./App.css";
import Home from "./components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleArt from "./components/SingleArt/SingleArt";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single_art/:artId" element={<SingleArt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
