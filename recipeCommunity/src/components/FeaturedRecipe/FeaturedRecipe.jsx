import React, { useEffect, useState } from 'react';
import '../../static/FeaturedRecipe/css/FeaturedRecipe.css';
// import { getItems } from '../../services/randomRecipesApi';


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





const FeaturedRecipes = () => {


    // const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     async function fetchRecipes() {
    //         const recipesFetched = await getItems();
    //         setRecipes(recipesFetched)
    //     }
    // })


    const handleSave = (title) => {
        alert(`Recipe "${title}" saved to favorites!`);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
        }

        if (halfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }

        return stars;
    };

    return (
        <section className="featured-recipes" id='featuredRecipes'>
            <div className="container">
                <h2>Featured Recipes</h2>
                <div className="recipe-carousel">
                    {recipes.map((recipe, index) => (
                        <div className="recipe-card" key={index}>
                            <img src={recipe.imageUrl} alt={`Image of ${recipe.title}`} />
                            <div className="recipe-info">
                                <div className="recipe-header">
                                    <h3>{recipe.title}</h3>
                                    <div className="recipe-metadata">
                                        <span className="recipe-cooking-time">{`Cooking Time: ${recipe.cookingTime}`}</span>
                                        <span className="recipe-difficulty">{`Difficulty: ${recipe.difficulty}`}</span>
                                    </div>
                                </div>
                                <div className="recipe-footer">
                                    <span className="recipe-author">{`By: ${recipe.author}`}</span>
                                    <div className="recipe-tags">
                                        {recipe.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="recipe-actions">
                                        <div className="recipe-rating">
                                            <span className="rating">{recipe.rating}</span>
                                            <div className="stars">
                                                {renderStars(recipe.rating)}
                                            </div>
                                        </div>
                                        <button className="btn save-btn" onClick={() => handleSave(recipe.title)}>Save</button>
                                    </div>
                                </div>
                                <a href="/recipePage" className="btn view-recipe-btn">View Recipe</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRecipes;
