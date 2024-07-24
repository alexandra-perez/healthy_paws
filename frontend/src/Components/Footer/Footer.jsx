import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Petcare. All rights reserved.</p>
      <Link to="/about-us" className="footer-link">About Us/Contact</Link>
    </footer>
  );
};

export default Footer;
