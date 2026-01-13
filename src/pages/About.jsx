export default function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About Recipe Finder</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop" 
              alt="Cooking" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Recipe Finder is your ultimate destination for discovering delicious recipes from around the world. 
              We believe that cooking should be accessible, enjoyable, and inspiring for everyone.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Thousands of tested recipes</li>
              <li>• Easy-to-follow instructions</li>
              <li>• Nutritional information</li>
              <li>• Cooking time estimates</li>
              <li>• Ingredient substitutions</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800">Get Started</h2>
            <p className="text-gray-600 leading-relaxed">
              Simply search for your favorite ingredients or dish names, and we'll provide you with 
              amazing recipes to try. Happy cooking!
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-4">Why Choose Recipe Finder?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4 font-bold text-blue-600">COOK</div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Recipes</h3>
              <p className="text-gray-600">Simple, step-by-step instructions for cooks of all levels</p>
            </div>
            <div>
              <div className="text-4xl mb-4 font-bold text-blue-600">TIME</div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick & Efficient</h3>
              <p className="text-gray-600">Find recipes that fit your schedule and cooking time</p>
            </div>
            <div>
              <div className="text-4xl mb-4 font-bold text-blue-600">STAR</div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality Content</h3>
              <p className="text-gray-600">Curated recipes from trusted sources and home cooks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}