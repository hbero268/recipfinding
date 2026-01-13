export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-5 px-4">
        <div>
          <h3 className="font-semibold mb-3">Recipe Finder</h3>
          <p className="text-gray-300">
            Your ultimate destination for discovering delicious recipes from around the world. 
            Cook with confidence and explore new flavors.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-300 space-y-1">
            <li>Popular Recipes</li>
            <li>Recipe Categories</li>
            <li>Cooking Tips</li>
            <li>Meal Planning</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-300">
            Email: info@recipefinder.com<br />
            Phone: 0782261289<br />
            Follow us on social media<br />
            for daily recipe inspiration
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Recipe Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}
