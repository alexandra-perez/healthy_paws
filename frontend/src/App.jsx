import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Index from './Pages/Index/Index';
import AboutUs from './Pages/AboutUs';
import Splash from './Pages/Splash';
import CreatePet from './Pages/CreatePet';
import EditPet from './Pages/EditPet';
import UserProfile from './Pages/UserProfile';
import ShowPet from './Pages/ShowPet';
import './App.css';

const API = import.meta.env.VITE_API_URL;

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${API}/pets`)
      .then((res) => res.json())
      .then((resJSON) => {
        // console.log(resJSON);
        setPets(resJSON);
      });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route
              path="/index"
              element={<Index pets={pets} setPets={setPets} />}
            />
            <Route path="/pets/:id" element={<ShowPet />} />
            <Route path="/create-pet" element={<CreatePet />} />
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
