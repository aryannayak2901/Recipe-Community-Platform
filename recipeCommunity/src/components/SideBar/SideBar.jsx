import React from 'react';
import '../../static/SideBar/css/SideBar.css'

const Sidebar = ({ setActiveSection, setLogoutModalOpen }) => {
    return (
        <div className="sidebar">
            <h2>Editor Dashboard</h2>
            <nav>
                <ul>
                    <li><button onClick={() => setActiveSection('profile')}>Profile</button></li>
                    <li><button onClick={() => setActiveSection('notifications')}>Notifications</button></li>
                    <li><button onClick={() => setActiveSection('pendingRecipes')}>Pending Recipes</button></li>
                    <li><button onClick={() => setActiveSection('reviewedRecipes')}>Reviewed Recipes</button></li>
                    <li><button onClick={() => setLogoutModalOpen(true)}>Logout</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
