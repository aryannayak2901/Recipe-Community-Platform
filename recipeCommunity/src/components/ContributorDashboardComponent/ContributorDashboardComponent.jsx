import React, { useState } from 'react';
import SideBarContributor from '../SideBarContributor/SideBarContributor';
import ProfileSection from '../ProfileSection/ProfileSection'
import NotificationsSection from '../NotificationSection/NotificationSection'
import SubmitRecipeSection from '../SubmitRecipeSection/SubmitRecipeSection';
import YourRecipesSection from '../YourRecipesSection/YourRecipesSection';
import LogoutModalComponent from '../LogoutModalComponent/LogoutModalComponent'
import '../../static/ContributorDashboard/css/ContributorDashboard.css'

const ContributorDashboardComponent = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isSidebarActive, setSidebarActive] = useState(false);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleLogout = () => {
        alert('Logging out...');
        // Redirect or perform logout action
    };

    return (
        <div className="dashboard-container">
            <SideBarContributor
                onSectionChange={handleSectionChange}
                onLogoutClick={() => setModalOpen(true)}
                isSidebarActive={isSidebarActive}
                setSidebarActive={setSidebarActive}
                setLogoutModalOpen={setLogoutModalOpen}
            />
            <div className={`dashboard-main ${isSidebarActive ? 'active' : ''}`}>
                <div className="dashboard-header">
                    <button
                        className="toggle-button"
                        id="toggle-button"
                        onClick={() => setSidebarActive(!isSidebarActive)}
                    >
                        &#9776;
                    </button>
                    <h1>Contributor Dashboard</h1>
                </div>

                {activeSection === 'profile' && <ProfileSection />}
                {activeSection === 'notifications' && <NotificationsSection />}
                {activeSection === 'submitRecipe' && <SubmitRecipeSection />}
                {activeSection === 'yourRecipes' && <YourRecipesSection />}
            </div>

            {isLogoutModalOpen && <LogoutModalComponent setLogoutModalOpen={setLogoutModalOpen} />}
        </div>
    );
};

export default ContributorDashboardComponent;
