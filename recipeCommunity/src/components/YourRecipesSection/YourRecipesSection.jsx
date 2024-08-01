import React from 'react';
import '../../static/YourRecipesSection/css/YourRecipesSection.css'
const YourRecipesSection = () => {
    return (
        <div className="your-recipes" id="your-recipes-section">
            <h2>Your Recipes</h2>
            <ul id="recipe-list">
                <li className="recipe-item">
                    <div className="recipe-info">
                        <h4>Recipe Title</h4>
                        <p>Status: Approved</p>
                    </div>
                    <div className="recipe-actions">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default YourRecipesSection;
