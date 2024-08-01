import React, { useState } from 'react';
import '../../static/Header/css/Header.css'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [submenuActive, setSubmenuActive] = useState(null);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleSubmenu = (index) => {
        setSubmenuActive(submenuActive === index ? null : index);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="#">Recipe Community</a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`navbar-menu ${menuActive ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Favourite</a></li>
                        <li><a href="/login">Sign In</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Food Categories</a>
                            <div className="dropdown-content">
                                {foodCategories.map((category, index) => (
                                    <div
                                        className={`dropdown-item ${submenuActive === index ? 'active' : ''}`}
                                        key={index}
                                    >
                                        <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu(index); }}>{category.name}</a>
                                        <div className="dropdown-submenu">
                                            {category.subcategories.map((subcat, subIndex) => (
                                                <a href="#" key={subIndex}>{subcat}</a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li>
                    </ul>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const foodCategories = [
    {
        name: 'Vegetarian',
        subcategories: ['Fruits', 'Vegetables', 'Grains', 'Legumes', 'Nuts and Seeds'],
    },
    {
        name: 'Non-Vegetarian',
        subcategories: ['Meat', 'Poultry', 'Seafood'],
    },
    {
        name: 'Vegan',
        subcategories: ['Plant-based foods', 'No animal products'],
    },
    {
        name: 'Cuisine',
        subcategories: ['Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese'],
    },
    {
        name: 'Meal Type',
        subcategories: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts'],
    },
    {
        name: 'Dietary Preferences',
        subcategories: ['Gluten-Free', 'Keto', 'Paleo', 'Low-Carb'],
    },
    {
        name: 'Cooking Method',
        subcategories: ['Grilled', 'Fried', 'Baked', 'Steamed', 'Raw'],
    },
    {
        name: 'Cultural/Religious',
        subcategories: ['Kosher', 'Halal', 'Jain', 'Buddhist Vegetarian'],
    },
];

export default Header;
