import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Splash from '../src/Pages/Splash';
import Index from '../src/Pages/Index';
import AboutUs from '../src/Pages/AboutUs';

// Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="Wrapper">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/pets" element={<Index />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
