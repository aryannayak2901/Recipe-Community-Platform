import React from 'react';
import '../../static/LogoutModal/css/LogoutModal.css'
const LogoutModalComponent = ({ setLogoutModalOpen }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setLogoutModalOpen(false)}>&times;</span>
                <p>Are you sure you want to logout?</p>
                <button id="confirm-logout">Logout</button>
            </div>
        </div>
    );
};

export default LogoutModalComponent;
