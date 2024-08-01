import React from "react";
import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeImagesComponent from "../RecipeImagesComponent/RecipeImagesComponent";
import RecipeDetailsComponent from "../RecipeDetailsComponent/RecipeDetailsComponent";
import RecipeVideoComponent from "../RecipeVideoComponent/RecipeVideoComponent";
import CommentsComponent from "../CommentsComponent/CommentsComponent";

function RecipePageComponent() {
    return (
        <>
            <RecipeHeader />
            <RecipeImagesComponent />
            <RecipeDetailsComponent />
            <RecipeVideoComponent />
            <CommentsComponent />
        </>
    )
}

export default RecipePageComponent;