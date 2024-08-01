import React, { useState } from 'react';
import '../../static/CommentsStyle/css/CommentsStyle.css'

const CommentsComponent = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            image: 'https://yt3.ggpht.com/vswSmPIOFsEY_iI1GEVG6HYP91bAeEONAhLY2O4oueIeyOFu2hLOyKu4hM99FdyhXnf1mbzjeOE=s88-c-k-c0x00ffffff-no-rj',
            username: 'User1',
            text: 'Amazing recipe! My family loved it!',
        },
        {
            id: 2,
            image: 'https://yt3.ggpht.com/lpmFlilVCgLzdITwEqQaa5cmokcF6P4Zes0Sjh0BdIeBewofNauN9qTG2cIO1WJepiuyoZIU3A=s88-c-k-c0x00ffffff-no-rj',
            username: 'User2',
            text: 'Thanks for sharing this. It was delicious!',
        },
    ]);

    const [commentText, setCommentText] = useState('');

    const addComment = () => {
        if (commentText.trim() !== '') {
            const newComment = {
                id: comments.length + 1,
                image: 'user3.jpg', // Replace with dynamic user image
                username: 'CurrentUser', // Replace with dynamic username
                text: commentText,
            };
            setComments([...comments, newComment]);
            setCommentText('');
        } else {
            alert('Please enter a comment.');
        }
    };

    return (
        <section className="comments">
            <h2>Comments</h2>
            <div className="comment-form">
                <textarea 
                    id="comment" 
                    placeholder="Leave a comment..." 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <button onClick={addComment}>Post Comment</button>
            </div>
            <ul id="comment-list" className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <img src={comment.image} alt={comment.username} className="comment-user-image" />
                        <a href={`${comment.username.toLowerCase()}-profile.html`} className="comment-username">
                            {comment.username}
                        </a>: {comment.text}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CommentsComponent;
