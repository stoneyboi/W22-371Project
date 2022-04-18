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
      <header className="header">Recipe Sharing App</header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/OurRecipes" element={<OurRecipes />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <footer className="footer">By Travis Michell</footer>
    </div>
  );
}

export default App;
