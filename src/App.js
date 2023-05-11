
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Home } from "./components/Home";
import { HashRouter } from "react-router-dom";

import { CV } from "./components/CV";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>

      <Route path="/" element = {<Home/>}/>

        <Route path="/Projects" element = {<Projects/>}/>

        <Route path="/CV" element = {<CV/>}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
