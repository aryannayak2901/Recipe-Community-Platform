import React from 'react';
import '../../static/PersonalInformation/css/PersonalInformation.css'
const PersonalInformation = () => {
    return (
        <div className="personal-info">
            <div className="profile-picture">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Profile Picture" 
                />
            </div>
            <div className="profile-details">
                <h3>Full Name</h3>
                <p className="bio">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="social-media">
                    Social Media: <a href="#">Twitter</a>, <a href="#">Facebook</a>
                </p>
                <p className="contact">Contact: user@example.com</p>
                <a href="#" className="edit-profile">Edit Profile</a>
            </div>
        </div>
    );
};

export default PersonalInformation;
