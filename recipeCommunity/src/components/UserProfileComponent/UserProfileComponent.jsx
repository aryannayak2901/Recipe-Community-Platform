import React from "react";
import '../../static/UserProfile/css/UserProfile.css'
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Contributions from "../Contributions/Contributions";
import Interactions from "../Interactions/Interactions";

function UserProfileComponent() {
    return (
        <section class="profile-section">
            <div class="container">
                <h2>User Profile</h2>
                <PersonalInformation />
                <Contributions />
                <Interactions />
            </div>
        </section>
    )
}

export default UserProfileComponent;