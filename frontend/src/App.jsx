import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Index from './Pages/Index/Index';
import AboutUs from './Pages/AboutUs/AboutUs';
import Splash from './Pages/Splash/Splash';
import CreatePet from './Pages/CreatePet/CreatePet';
import EditPet from './Pages/EditPet/EditPet';
import UserProfile from './Pages/UserProfile/UserProfile';
import ShowPet from './Pages/ShowPet/ShowPet';
import './App.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000/pets';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((resJSON) => {
        setPets(resJSON);
      });
  }, []);

  const handlePetCreated = (newPet) => {
    setPets([...pets, newPet]);
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/index" element={<Index pets={pets} setPets={setPets} />} />
            <Route path="/pets/:id" element={<ShowPet />} />
            <Route path="/create-pet" element={<CreatePet onPetCreated={handlePetCreated} />} />
            <Route path="/edit-pet/:id" element={<EditPet />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
