import React from 'react';
import '../../static/PendingRecipesSection/css/PendingRecipesSection.css'
const PendingRecipesSection = () => {
    return (
        <div className="pending-recipes">
            <h2>Pending Recipes</h2>
            <ul>
                <li className="recipe-item">
                    <div className="recipe-info">
                        <h4>Recipe Title</h4>
                        <p>Submitted by: User</p>
                        <button className="review">Review</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default PendingRecipesSection;
