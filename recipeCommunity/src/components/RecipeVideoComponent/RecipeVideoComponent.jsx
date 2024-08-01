import React from 'react';
import '../../static/RecipeVideoStyle/css/RecipeVideoStyle.css'

const RecipeVideoComponent = () => {
    return (
        <section className="recipe-video">
            <h2>Watch the Recipe</h2>
            <div className="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    frameBorder="0" 
                    allowFullScreen
                    title="Recipe Video"
                ></iframe>
            </div>
        </section>
    );
};

export default RecipeVideoComponent;
