
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Home } from "./components/Home";

import { CV } from "./components/CV";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

      <Route path="/" element = {<Home/>}/>

        <Route path="/Projects" element = {<Projects/>}/>

        <Route path="/CV" element = {<CV/>}/>

      </Routes>
    </Router>
  );
}

export default App;
