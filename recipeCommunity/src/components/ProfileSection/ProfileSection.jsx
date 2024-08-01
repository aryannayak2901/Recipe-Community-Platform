import React from 'react';
import '../../static/ProfileSection/css/ProfileSection.css'
const ProfileSection = () => {
    return (
        <div className="profile-section">
            <h2>Profile</h2>
            <div className="personal-info">
                <div className="profile-picture">
                    <img src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" />
                </div>
                <div className="profile-details">
                    <h3>Username</h3>
                    <p>Email: user@example.com</p>
                    <p>Bio: This is a short bio about the user.</p>
                    <a href="#" className="edit-profile">Edit Profile</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
