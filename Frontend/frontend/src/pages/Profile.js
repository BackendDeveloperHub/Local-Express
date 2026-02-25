import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Page.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/profile/')
      .then(response => setProfile(response.data))
      .catch(error => {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile information.", { id: 'profile-fetch-error' });
      });
  }, []);

  if (!profile) return <div className="page-container">Loading profile...</div>;

  return (
    <div className="page-container">
      <div className="profile-box">
        <div className="profile-header">
          <div className="avatar">{profile.username.substring(0, 2).toUpperCase()}</div>
          <h2>{profile.username}</h2>
          <p>{profile.email}</p>
        </div>
        <div className="profile-details">
          <div className="detail-item">
            <label>Phone</label>
            <p>{profile.phone || 'Not provided'}</p>
          </div>
          <div className="detail-item">
            <label>Address</label>
            <p>{profile.address || 'Not provided'}</p>
          </div>
        </div>
        <button className="edit-btn" onClick={() => toast.success("Edit profile coming soon!", { id: 'profile-edit-msg' })}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
