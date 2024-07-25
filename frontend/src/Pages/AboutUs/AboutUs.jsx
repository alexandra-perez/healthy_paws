import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Welcome to Petcare! We are dedicated to providing the best care for your pets.</p>
      <h3>Contact Us</h3>
      <p>If you have any questions, feel free to reach out to us at:</p>
      <ul>
        <li>Email: support@petcare.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Petcare Lane, Petville, PA 12345</li>
      </ul>
    </div>
  );
};

export default AboutUs;
