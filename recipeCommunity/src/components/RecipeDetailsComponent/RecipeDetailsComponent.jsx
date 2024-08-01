import React from 'react';
import '../../static/RecipeDetailsStyle/css/RecipeDetailsStyle.css'

const RecipeDetailsComponent = () => {
    const ingredients = [
        "1 cup sugar",
        "1/2 cup butter",
        "2 eggs",
        "1 1/2 cups flour",
        "1 tsp baking powder",
        "1/2 cup cocoa powder",
        "1 cup milk"
    ];

    const instructions = [
        "Preheat the oven to 350°F (175°C).",
        "Cream the butter and sugar until light and fluffy.",
        "Add the eggs one at a time, beating well after each addition.",
        "Sift together the flour, baking powder, and cocoa powder.",
        "Add the dry ingredients alternately with the milk, beginning and ending with the dry ingredients.",
        "Pour the batter into a greased and floured 9x13 inch pan.",
        "Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.",
        "Let the cake cool in the pan for 10 minutes, then turn out onto a wire rack to cool completely."
    ];

    return (
        <section className="recipe-details">
            <h2>Ingredients</h2>
            <ul className="ingredients">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <ol className="instructions">
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </section>
    );
};

export default RecipeDetailsComponent;
