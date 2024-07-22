import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Petcare</a>
      </div>
      <div className="navbar-links">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
