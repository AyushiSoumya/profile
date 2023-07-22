import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import { NavBar } from "./navbar";
import Home from "./Components/home";
import Contact from "./Components/contact";
import Portfolio from "./Components/portfolio";
import './App.css';

function App() {
  return (
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
