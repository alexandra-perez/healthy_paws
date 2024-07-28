import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.scss';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [pets, setPets] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/pets`)
      .then((res) => res.json())
      .then((resJSON) => {
        setPets(resJSON);
      });
  }, []);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="link logo">
          <i className="fa-solid fa-paw"></i>
          HealthyPaws
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/index" className="link">
          Home
        </Link>
        <Link to="/create-pet" className="link">
          Create Pet
        </Link>
        <Link to="/user-profile" className="link">
          Profile
        </Link>
        <span className="navbar-search" onClick={toggleSearchBar}>
          <i className={`fa-solid fa-magnifying-glass`}></i>
        </span>
      </div>
      {showSearchBar && <SearchBar pets={pets} />}
    </nav>
  );
};

export default Navbar;
