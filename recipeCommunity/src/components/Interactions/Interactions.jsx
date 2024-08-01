import React, { useState } from 'react';
import '../../static/Interactions/css/Interactions.css'
const ratings = [
    {
        recipeTitle: "Recipe Title",
        rating: 5.0,
        reviewText: "Excellent recipe!"
    },
    {
        recipeTitle: "Recipe Title",
        rating: 5.0,
        reviewText: "Excellent recipe!"
    },
    {
        recipeTitle: "Recipe Title",
        rating: 5.0,
        reviewText: "Excellent recipe!"
    },
    {
        recipeTitle: "Recipe Title",
        rating: 5.0,
        reviewText: "Excellent recipe!"
    },
    // Add more rating objects as needed
];

const comments = [
    {
        recipeTitle: "Recipe Title",
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        recipeTitle: "Recipe Title",
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        recipeTitle: "Recipe Title",
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        recipeTitle: "Recipe Title",
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    // Add more comment objects as needed
];

const Interactions = () => {
    const [showRatings, setShowRatings] = useState(true);
    const [showComments, setShowComments] = useState(true);

    const toggleRatings = () => {
        setShowRatings(!showRatings);
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className="interactions">
            <h3>My Interactions</h3>
            <div className="ratings-reviews">
                <h4>
                    My Ratings & Reviews
                    <button className="toggle-btn" onClick={toggleRatings}>
                        {showRatings ? 'Hide' : 'Show'}
                    </button>
                </h4>
                {showRatings && (
                    <ul className="ratings-list">
                        {ratings.map((rating, index) => (
                            <li key={index}>
                                <div className="rating-item">
                                    <p>Recipe: <a href="#">{rating.recipeTitle}</a></p>
                                    <div className="ratings">
                                        <span className="stars">★★★★★</span>
                                        <span className="rating">{rating.rating}</span>
                                    </div>
                                    <p className="review-text">{rating.reviewText}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="comments">
                <h4>
                    My Comments
                    <button className="toggle-btn" onClick={toggleComments}>
                        {showComments ? 'Hide' : 'Show'}
                    </button>
                </h4>
                {showComments && (
                    <ul className="comments-list">
                        {comments.map((comment, index) => (
                            <li key={index}>
                                <div className="comment-item">
                                    <p className="comment-text">Comment: {comment.commentText}</p>
                                    <p>Recipe: <a href="#">{comment.recipeTitle}</a></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Interactions;
