import { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php', { params: { s: query } });
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-center text-white bg-blue-500 py-4 mb-8 rounded-lg shadow-lg">
          Recipe Finder
        </h1>
        <SearchBar fetchRecipes={fetchRecipes} />
        {loading ? (
          <p className="text-center text-gray-800 mt-8">Loading...</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default App;
