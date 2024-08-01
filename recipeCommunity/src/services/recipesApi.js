import axios from 'axios';

const fetchRecipes = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/recipes/');
        setRecipes(response.data);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
};
