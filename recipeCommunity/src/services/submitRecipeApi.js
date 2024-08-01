import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const submitRecipe = async (recipeData, authToken) => {
//     const formData = new FormData();
//     formData.append('title', recipeData.title);
//     formData.append('description', recipeData.description);
//     formData.append('videoUrl', recipeData.videoUrl);
//     formData.append('servings', recipeData.servings);
//     formData.append('preparation_time', recipeData.preparationTime);
//     formData.append('cooking_time', recipeData.cookingTime);
//     formData.append('nutritional_information', recipeData.nutritionalInformation);

//     if (recipeData.videoFile) {
//         formData.append('video_file', recipeData.videoFile);
//     }

//     if (recipeData.photos && recipeData.photos.length > 0) {
//         recipeData.photos.forEach((photo, index) => {
//             formData.append(`photos[${index}]`, photo);
//         });
//     }

//     recipeData.ingredients.forEach((ingredient, index) => {
//         formData.append(`ingredients[${index}][name]`, ingredient.name);
//         formData.append(`ingredients[${index}][quantity]`, ingredient.quantity);
//     });

//     recipeData.steps.forEach((step, index) => {
//         formData.append(`steps[${index}][order]`, step.order);
//         formData.append(`steps[${index}][instruction]`, step.instruction);
//     });

//     try {
//         const response = await axios.post(`${API_URL}/create-recipe/`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
//             },
//         });

//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             // Server responded with a status other than 2xx
//             console.error('Error response data:', error.response.data);
//             console.error('Error response status:', error.response.status);
//             console.error('Error response headers:', error.response.headers);
//         } else if (error.request) {
//             // Request was made but no response was received
//             console.error('Error request:', error.request);
//         } else {
//             // Something happened in setting up the request
//             console.error('Error message:', error.message);
//         }
//         console.error('Error config:', error.config);
//         throw error;
//     }
// };

const formData = new FormData();
formData.append('title', 'Sample Recipe');
formData.append('description', 'A delicious recipe');
formData.append('tags', JSON.stringify([1, 2, 3]));
formData.append('ingredients', JSON.stringify([{name: 'Flour', quantity: '200g'}, {name: 'Sugar', quantity: '100g'}]));
formData.append('steps', JSON.stringify([{order: 1, instruction: 'Mix flour and sugar.'}, {order: 2, instruction: 'Bake for 20 minutes.'}]));
formData.append('photos', fileInput.files[0]);  // Append file

axios.post('http://127.0.0.1:8000/api/create-recipe/', formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})
.then(response => {
    console.log('Success:', response.data);
})
.catch(error => {
    console.error('Error:', error.response.data);
});
}

export default submitRecipe;
