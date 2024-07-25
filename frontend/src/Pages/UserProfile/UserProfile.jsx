import React, { useState, useEffect } from 'react';
import './UserProfile.scss';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Replace with the correct API endpoint to fetch user profile data
    fetch(`${API}/user`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default UserProfile;
