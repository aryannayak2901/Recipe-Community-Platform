import React from 'react';
import '../../static/ModalRecipe/css/ModalRecipe.css'

const ModalRecipe = ({ recipe, onClose }) => {
    return (
        <div id="recipeModal" className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h4>{recipe.title}</h4>
                <p>Full details of the recipe...</p>
            </div>
        </div>
    );
};

export default ModalRecipe;
