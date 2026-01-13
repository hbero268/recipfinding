import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={recipe.image} 
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{recipe.title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>{recipe.readyInMinutes} min</span>
          <span>{recipe.servings} servings</span>
        </div>
        <Link 
          to={`/recipe/${recipe.id}`}
          className="bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 transition-colors inline-block"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}
