const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {recipes && recipes.map((recipe) => (
      <div key={recipe.idMeal} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover rounded-t-lg" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.strMeal}</h2>
          <p className="text-gray-600">{recipe.strCategory}</p>
          <p className="text-gray-600 italic">{recipe.strArea}</p>
          
          {recipe.strTags && ( /* Conditionally render meal tags */
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
              <p className="text-gray-600">{recipe.strTags}</p>
            </div>
          )}
          
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Ingredients</h3>
          <ul className="list-disc list-inside text-gray-600 text-base">
            {Object.keys(recipe)
              .filter((key) => key.startsWith('strIngredient') && recipe[key])
              .map((key, index) => (
                <li key={index}>{recipe[key]}</li>
              ))}
          </ul>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Instructions</h3>
          <p className="text-gray-600">{recipe.strInstructions}</p>

          {recipe.strYoutube && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Video</h3>
              <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Watch on YouTube
              </a>
            </div>
          )}

          {recipe.strSource && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Source</h3>
              <a href={recipe.strSource} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Recipe Source
              </a>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default RecipeList;
