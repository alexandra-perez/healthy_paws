import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/user-profile">Profile</Link></li>
        <li><Link to="/create-pet">Create Pet</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
