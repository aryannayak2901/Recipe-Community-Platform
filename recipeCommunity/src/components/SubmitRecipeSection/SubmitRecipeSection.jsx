import React, { useState } from 'react';
import submitRecipe from '../../services/submitRecipeApi';  // Adjust the path as necessary
import '../../static/SubmitRecipeSection/css/SubmitRecipeSection.css';

const SubmitRecipeSection = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
    const [steps, setSteps] = useState([{ order: 1, instruction: '' }]);
    const [servings, setServings] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [tags, setTags] = useState([]);
    const [nutritionalInfo, setNutritionalInfo] = useState('');

    // ... (rest of the state and handlers remain the same)

    const fileInputRef = React.useRef(null);

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index][event.target.name] = event.target.value;
        setIngredients(newIngredients);
    };

    const handleStepChange = (index, event) => {
        const newSteps = [...steps];
        newSteps[index][event.target.name] = event.target.value;
        setSteps(newSteps);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: '' }]);
    };

    const handleAddStep = () => {
        setSteps([...steps, { order: steps.length + 1, instruction: '' }]);
    };

    const handlePhotoChange = (event) => {
        setPhotos([...event.target.files]);
    };

    const handleVideoChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create the data object
        const recipeData = {
            title,
            description,
            videoUrl,
            videoFile,
            photos,
            ingredients,
            steps,
            servings,
            preparationTime,
            cookingTime,
            tags,
            nutritionalInfo,
        };

        try {
            const result = await submitRecipe(recipeData);
            alert('Recipe submitted successfully!');
            console.log(result);
            // Reset form fields
            setTitle('');
            setDescription('');
            setVideoUrl('');
            setVideoFile(null);
            setPhotos([]);
            setIngredients([{ name: '', quantity: '' }]);
            setSteps([{ order: 1, instruction: '' }]);
            setServings('');
            setPreparationTime('');
            setCookingTime('');
            setTags([]);
            setNutritionalInfo('');
        } catch (error) {
            alert(`Error submitting recipe: ${error.message}`);
        }
    };

    return (
        <div className="submit-recipe" id="submit-recipe-section">
            <h2>Submit a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Video URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                />
                <input
                    type="file"
                    accept="video/*"
                    ref={fileInputRef}
                    onChange={handleVideoChange}
                />
                <input
                    type="number"
                    placeholder="Servings"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Preparation Time"
                    value={preparationTime}
                    onChange={(e) => setPreparationTime(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Cooking Time"
                    value={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Nutritional Information"
                    value={nutritionalInfo}
                    onChange={(e) => setNutritionalInfo(e.target.value)}
                />
                <div>
                    <h4>Ingredients</h4>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="Ingredient Name"
                                name="name"
                                value={ingredient.name}
                                onChange={(e) => handleIngredientChange(index, e)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Quantity"
                                name="quantity"
                                value={ingredient.quantity}
                                onChange={(e) => handleIngredientChange(index, e)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                </div>
                <div>
                    <h4>Steps</h4>
                    {steps.map((step, index) => (
                        <div key={index}>
                            <textarea
                                placeholder={`Step ${index + 1} Instruction`}
                                name="instruction"
                                value={step.instruction}
                                onChange={(e) => handleStepChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddStep}>Add Step</button>
                </div>
                <input
                    type="file"
                    id="fileInput"
                    name="photos"
                    ref={fileInputRef}
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                />
                <input type="submit" value="Submit Recipe" />
            </form>
        </div>
    );
};

export default SubmitRecipeSection;
