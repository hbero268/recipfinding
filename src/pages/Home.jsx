import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query = '') => {
    setLoading(true);
    const demoRecipes = [
      {
        id: 1,
        title: 'Spaghetti Carbonara',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop',
        readyInMinutes: 30,
        servings: 4
      },
      {
        id: 2,
        title: 'Chicken Tikka Masala',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop',
        readyInMinutes: 45,
        servings: 6
      },
      {
        id: 3,
        title: 'Caesar Salad',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
        readyInMinutes: 15,
        servings: 2
      },
      {
        id: 4,
        title: 'Beef Tacos',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop',
        readyInMinutes: 25,
        servings: 4
      },
      {
        id: 5,
        title: 'Chocolate Cake',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop',
        readyInMinutes: 60,
        servings: 8
      },
      {
        id: 6,
        title: 'Greek Salad',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
        readyInMinutes: 10,
        servings: 4
      }
    ];
    
    const filteredRecipes = query 
      ? demoRecipes.filter(recipe => 
          recipe.title.toLowerCase().includes(query.toLowerCase())
        )
      : demoRecipes;
    
    setRecipes(filteredRecipes);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchTerm);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex justify-center items-center gap-4 mt-10">
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes..."
            className="w-72 h-10 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800"
          >
            SEARCH
          </button>
        </form>
      </div>

      <h2 className="text-center font-bold text-xl mt-10">
        {loading ? 'Loading...' : 'CURRENT RECIPES'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10 px-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {recipes.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-10">No recipes found. Try a different search term.</p>
      )}
    </div>
  );
}