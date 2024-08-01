import React from 'react';
import '../../static/SocialCommunity/css/SocialCommunity.css'
const SocialCommunity = () => {
    const users = [
        {
            avatar: 'https://via.placeholder.com/100',
            name: 'User Name',
            role: 'Top Contributor'
        },
        {
            avatar: 'https://via.placeholder.com/100',
            name: 'User Name',
            role: 'Top Contributor'
        },
        {
            avatar: 'https://via.placeholder.com/100',
            name: 'User Name',
            role: 'Top Contributor'
        }
    ];

    return (
        <section className="social-community">
            <div className="container">
                <h2>Social and Community</h2>
                <div className="social-highlights">
                    {users.map((user, index) => (
                        <div key={index} className="user-profile">
                            <img src={user.avatar} alt="User Avatar" />
                            <div className="user-details">
                                <p className="user-name">{user.name}</p>
                                <p className="user-role">{user.role}</p>
                            </div>
                        </div>
                    ))}
                    <div className="forum-link">
                        <a href="#">Visit Forums</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialCommunity;
