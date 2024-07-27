import React, { useState, useEffect } from 'react';
import './UserProfile.scss';

const UserProfile = ({ pets }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/RazEfron')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="user-profile">
      <div className="profile-image">
        <img src={userData.avatar_url} alt={`${userData.name}'s profile`} />
      </div>
      <div className="profile-details">
        <h1>Ray</h1>
        <ul>
          {pets && pets.length > 0 ? (
            pets.map((pet) => (
              <li key={pet.id}>{pet.name}</li>
            ))
          ) : (
            <>
              <p>
                I deeply care for my pets day to day and yanoooo sometime I wish I had a way to track their overall health and fitness. This app has been a game-changer for tracking walks and care. 
              </p>
              <p>
                With this app, I've been able to monitor my pets' daily activities, ensure they're getting enough exercise, and keep track of their medical history all in one place. The reminders for vet appointments and medication schedules have been incredibly helpful. I can't imagine managing my pets' health without it!
              </p>
              <p>
                Whether you're a new pet owner or have had pets for years, this app provides all the tools you need to keep your furry friends happy and healthy. It's user-friendly and has made a significant difference in the way I care for my pets.
              </p>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
