import React from 'react';
import '../../static/ReviewedRecipesSection/css/ReviewedRecipesSection.css'
const ReviewedRecipesSection = () => {
    return (
        <div className="reviewed-recipes">
            <h2>Reviewed Recipes</h2>
            <ul>
                <li className="recipe-item">
                    <div className="recipe-info">
                        <h4>Recipe Title</h4>
                        <p>Status: Approved</p>
                        <p>Reviewed by: Editor</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ReviewedRecipesSection;
