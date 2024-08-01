import React from 'react';
import '../../static/SideBarContributor/css/SideBarContributor.css'

const SideBarContributor = ({ onSectionChange, onLogoutClick, isSidebarActive, setSidebarActive, setLogoutModalOpen }) => {
    return (
        <div className={`sidebar ${isSidebarActive ? 'active' : ''}`} id="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); onSectionChange('profile'); }}>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); onSectionChange('notifications'); }}>
                            Notifications
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); onSectionChange('submitRecipe'); }}>
                            Submit Recipe
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); onSectionChange('yourRecipes'); }}>
                            Your Recipes
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setLogoutModalOpen(true)}>
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBarContributor;
