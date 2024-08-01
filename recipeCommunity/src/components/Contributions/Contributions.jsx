import React, { useState } from 'react';
import '../../static/Contributions/css/Contributions.css'
import ModalRecipe from '../ModalRecipe/ModalRecipe';

const contributions = [
    {
        title: "Recipe Title",
        status: "Approved",
        imgSrc: "https://via.placeholder.com/150",
        link: "#"
    },
    {
        title: "Recipe Title",
        status: "Approved",
        imgSrc: "https://via.placeholder.com/150",
        link: "#"
    },
    {
        title: "Recipe Title",
        status: "Approved",
        imgSrc: "https://via.placeholder.com/150",
        link: "#"
    },
    {
        title: "Recipe Title",
        status: "Approved",
        imgSrc: "https://via.placeholder.com/150",
        link: "#"
    },
    // Add more contribution objects as needed
];

const Contributions = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedRecipe(null);
    };

    return (
        <div className="contributions">
            <h3>My Contributions</h3>
            <ul className="recipe-list">
                {contributions.map((recipe, index) => (
                    <li key={index}>
                        <div className="recipe-item">
                            <img src={recipe.imgSrc} alt="Recipe Thumbnail" />
                            <div className="recipe-info">
                                <h4>{recipe.title}</h4>
                                <p>Status: {recipe.status}</p>
                                <a href="#" onClick={() => openModal(recipe)}>View Recipe</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {modalOpen && <ModalRecipe recipe={selectedRecipe} onClose={closeModal} />}
        </div>
    );
};

export default Contributions;
