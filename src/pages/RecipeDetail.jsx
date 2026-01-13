import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = () => {
      const demoRecipes = {
        1: {
          id: 1,
          title: 'Spaghetti Carbonara',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop',
          readyInMinutes: 30,
          servings: 4,
          ingredients: [
            '400g spaghetti',
            '200g pancetta or guanciale',
            '4 large eggs',
            '100g Pecorino Romano cheese',
            '2 cloves garlic',
            'Black pepper',
            'Salt'
          ],
          instructions: [
            'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
            'While pasta cooks, cut pancetta into small cubes and cook in a large skillet until crispy.',
            'In a bowl, whisk together eggs, grated cheese, and black pepper.',
            'Drain pasta, reserving 1 cup of pasta water.',
            'Add hot pasta to the skillet with pancetta.',
            'Remove from heat and quickly stir in egg mixture, adding pasta water as needed.',
            'Serve immediately with extra cheese and black pepper.'
          ],
          summary: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. Simple yet incredibly flavorful.'
        },
        2: {
          id: 2,
          title: 'Chicken Tikka Masala',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop',
          readyInMinutes: 45,
          servings: 6,
          ingredients: [
            '2 lbs chicken breast, cubed',
            '1 cup plain yogurt',
            '2 tbsp tikka masala spice blend',
            '1 onion, diced',
            '3 cloves garlic, minced',
            '1 can crushed tomatoes',
            '1 cup heavy cream',
            'Fresh cilantro',
            'Basmati rice'
          ],
          instructions: [
            'Marinate chicken in yogurt and half the spice blend for 30 minutes.',
            'Cook marinated chicken in a large skillet until browned.',
            'In the same skillet, sauté onion and garlic until soft.',
            'Add remaining spices and cook for 1 minute.',
            'Add crushed tomatoes and simmer for 10 minutes.',
            'Stir in cream and cooked chicken.',
            'Simmer until sauce thickens, about 10 minutes.',
            'Serve over basmati rice with fresh cilantro.'
          ],
          summary: 'A creamy, aromatic Indian curry that\'s perfect for dinner. Tender chicken in a rich tomato-cream sauce.'
        }
      };

      const recipeData = demoRecipes[id] || demoRecipes[1];
      setRecipe(recipeData);
      setLoading(false);
    };

    fetchRecipeDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading recipe...</div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Recipes
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
            
            <div className="flex gap-6 mb-6 text-sm text-gray-600">
              <span>Ready in {recipe.readyInMinutes} minutes</span>
              <span>Serves {recipe.servings}</span>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{recipe.summary}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}