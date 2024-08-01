import React, { useState } from 'react';
import Sidebar from '../SideBar/SideBar';
import ProfileSection from '../ProfileSection/ProfileSection';
import NotificationSection from '../NotificationSection/NotificationSection';
import PendingRecipesSection from '../PendingRecipesSection/PendingRecipesSection';
import ReviewedRecipesSection from '../ReviewedRecipesSection/ReviewedRecipesSection';
import LogoutModalComponent from '../LogoutModalComponent/LogoutModalComponent';
import '../../static/EditorDashboardComponent/css/EditorDashboardComponent.css'

const EditorDashboardComponent = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

    const renderSection = () => {
        switch (activeSection) {
            case 'profile':
                return <ProfileSection />;
            case 'notifications':
                return <NotificationSection />;
            case 'pendingRecipes':
                return <PendingRecipesSection />;
            case 'reviewedRecipes':
                return <ReviewedRecipesSection />;
            default:
                return <ProfileSection />;
        }
    };

    return (
        <div className="dashboard-container">
            <Sidebar setActiveSection={setActiveSection} setLogoutModalOpen={setLogoutModalOpen} />
            <div className="dashboard-main">
                <div className="dashboard-header">
                    <button className="toggle-button">&#9776;</button>
                    <h1>Editor Dashboard</h1>
                </div>
                {renderSection()}
            </div>
            {isLogoutModalOpen && <LogoutModalComponent setLogoutModalOpen={setLogoutModalOpen} />}
        </div>
    );
};

export default EditorDashboardComponent;
