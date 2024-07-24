import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Petcare</Link>
      </div>
      <div className="navbar-links">
        <Link to="/index">Home</Link>
        <Link to="/create-pet">Create Pet</Link>
        <Link to="/user-profile">User Profile</Link>
        <span className="navbar-search" onClick={toggleSearchBar}>
          Search
        </span>
      </div>
      {showSearchBar && <SearchBar />}
    </nav>
  );
};

export default NavBar;
