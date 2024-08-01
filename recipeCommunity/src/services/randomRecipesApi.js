import axios from 'axios';

const fetchRecipes = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/recipes/random/');
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};
