import React, { useEffect } from 'react';
import '../../static/InteractiveCookingGuides/css/InteractiveCookingGuides.css'

const recipes = [
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=3038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Recipe Title',
        cookingTime: '30 mins',
        difficulty: 'Easy',
        author: 'Author Name',
        tags: ['Vegetarian', 'Italian'],
        rating: 4.5,
        imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];

const InteractiveCookingGuides = () => {
    useEffect(() => {
        const guideThumbnails = document.querySelectorAll('.guide-thumbnail');

        guideThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('mouseover', () => {
                thumbnail.style.transform = 'translateY(-5px)';
            });

            thumbnail.addEventListener('mouseout', () => {
                thumbnail.style.transform = 'translateY(0)';
            });
        });

        return () => {
            guideThumbnails.forEach(thumbnail => {
                thumbnail.removeEventListener('mouseover', () => {
                    thumbnail.style.transform = 'translateY(-5px)';
                });

                thumbnail.removeEventListener('mouseout', () => {
                    thumbnail.style.transform = 'translateY(0)';
                });
            });
        };
    }, []);

    return (
        <section className="cooking-guides" id='interactiveCookingGuides'>
            <div className="container">
                <h2>Interactive Cooking Guides</h2>
                <div className="search-bar-interactive-cooking-guides">
                    <input type="text" placeholder="Search guides..." />
                    <button><i className="fas fa-search"></i></button>
                </div>
                <div className="filter-options">
                    <select>
                        <option value="">All Categories</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <select>
                        <option value="">All Difficulty Levels</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="guide-thumbnails">
                    {/* Thumbnails or links to interactive guides */}
                    {recipes.map((recipe, index) => (
                        <div className="guide-thumbnail" key={index}>
                            <img src={recipe.imageUrl} alt="Guide Thumbnail" />
                            <div className="guide-info">
                                <h3>{recipe.title}</h3>
                                <div className="guide-metadata">
                                    <span>{recipe.author}</span>
                                    <span>•</span>
                                    <span>{recipe.cookingTime}</span>
                                    <span>•</span>
                                    <span>{recipe.difficulty}</span>
                                </div>
                                <p>Explore our step-by-step guides for perfect dishes.</p>
                                <div className="guide-rating">
                                    <span className="stars">★★★★☆</span>
                                    <span className="rating">{recipe.rating}</span>
                                </div>
                                <a href="#" className="btn explore-guides-btn">Explore Guides</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveCookingGuides;
