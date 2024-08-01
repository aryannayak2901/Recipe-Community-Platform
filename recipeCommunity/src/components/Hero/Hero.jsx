import React from 'react';
import '../../static/Hero/css/Hero.css';

function Hero() {
    const handleScroll = (e) => {
        e.preventDefault();
        const sectionId = e.currentTarget.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to Recipe Community</h1>
                <p>Your ultimate destination for discovering, sharing, and creating delicious recipes.</p>
                <div className="hero-buttons">
                    <a href="#featuredRecipes" className="btn explore-btn" onClick={handleScroll}>Explore Recipes</a>
                    <a href="#join" className="btn join-btn" onClick={handleScroll}>Join Now</a>
                    <a href="#interactiveCookingGuides" className="btn submit-btn" onClick={handleScroll}>Submit a Recipe</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
