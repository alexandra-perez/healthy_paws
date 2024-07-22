import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Index from '../src/Pages/Index';

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="Wrapper">
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
