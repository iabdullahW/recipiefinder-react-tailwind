import { useState } from 'react';

const SearchBar = ({ fetchRecipes }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchRecipes(query);
      setQuery(''); // Reset the input field after submitting
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-300 ease-in-out">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
