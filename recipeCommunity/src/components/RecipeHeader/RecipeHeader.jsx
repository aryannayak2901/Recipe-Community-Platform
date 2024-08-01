import React from 'react';
import '../../static/RecipeHeaderStyle/css/RecipeHeaderStyle.css'

const RecipeHeader = () => {
    const viewProfile = () => {
        // Define your profile viewing logic here
        console.log('View Profile clicked');
    };

    return (
        <section className="recipe-header-recipe-page">
            <h1>Delicious Chocolate Cake</h1>
            <div className="author-info">
                <img 
                    src="https://yt3.ggpht.com/ytc/AIdro_mWu9sDW1HbHT3SVjTeIRPN3kvtW_SZN6HBKyReFKpzshM=s88-c-k-c0x00ffffff-no-rj" 
                    alt="Author" 
                    className="author-image"
                />
                <span>By Jane Doe</span>
                <button className="view-profile-btn" onClick={viewProfile}>View Profile</button>
            </div>
            <div className="recipe-info-recipe-page">
                <span>Prep Time: 20 mins</span>
                <span>Cook Time: 30 mins</span>
                <span>Servings: 8</span>
                <span>Difficulty: Easy</span>
                <span>Cuisine: American</span>
                <div className="rating">
                    <span>Rating: 4.5/5</span>
                    <span className="stars">★★★★☆</span>
                </div>
            </div>
        </section>
    );
};

export default RecipeHeader;
