import React, { useState, useEffect } from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  const [stevenImg, setStevenImg] = useState('');
  const [alexandraImg, setAlexandraImg] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/ROUSE-prog')
      .then((response) => response.json())
      .then((data) => setStevenImg(data.avatar_url));

    fetch('https://api.github.com/users/alexandra-perez')
      .then((response) => response.json())
      .then((data) => setAlexandraImg(data.avatar_url));
  }, []);

  return (
    <div className="about-us">
      <div className="column">
        <h2>The Team</h2>
        <ul>
          <li>
            <img src={stevenImg} alt="Steven Rouse" className="profile-img" />
            <strong>Steven Rouse</strong> | <a href="https://github.com/ROUSE-prog" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>Software Engineer</p>
            <br></br>
          </li>
          <li>
            <img src={alexandraImg} alt="Alexandra Perez" className="profile-img" />
            <strong>Alexandra Perez</strong> | <a href="https://github.com/alexandra-perez" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>Software Engineer</p>
          </li>
        </ul>
      </div>

      <div className="column">
        <h2>Contact Us</h2>
        <ul>
          <li>
          <strong>Steven Rouse</strong> <a href="https://www.linkedin.com/in/stevenrouse/" target="_blank" rel="noopener noreferrer">  LinkedIn</a>
          </li>
          <li>
          <strong>Alexandra Perez </strong> <a href="https://www.linkedin.com/in/ap-alexandraperez/" target="_blank" rel="noopener noreferrer">  LinkedIn</a>
          </li>
        </ul>
      </div>

      <div className="column">
        <h2>Careers</h2>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/' }}>Frontend Developer</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/' }}>Backend Developer</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/' }}>Full Stack Developer</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/' }}>DevOps Engineer</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/' }}>Product Manager</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/' }}>UI/UX Designer</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
