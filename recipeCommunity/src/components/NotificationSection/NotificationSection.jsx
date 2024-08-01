import React from 'react';
import '../../static/NotificationsSection/css/NotificationsSection.css'
const NotificationSection = () => {
    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <ul>
                <li className="notification-item">You have a new recipe submission to review.</li>
                <li className="notification-item">Recipe "Chocolate Cake" has been updated by the contributor.</li>
            </ul>
        </div>
    );
};

export default NotificationSection;
