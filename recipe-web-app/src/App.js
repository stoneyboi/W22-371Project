import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Recipes from './Recipes';
import OurRecipes from './OurRecipes';
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/OurRecipes" element={<OurRecipes />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
