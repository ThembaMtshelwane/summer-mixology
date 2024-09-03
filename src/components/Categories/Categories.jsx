// Categories.js
import React, { useState } from 'react';

const Categories = () => {
  const [cocktails, setCocktails] = useState([]);  // State to store cocktails
  const [loading, setLoading] = useState(false);   // State to manage loading state

  // Function to fetch cocktails from the API and categorize them
  const fetchCocktails = async () => {
    setLoading(true);  // Set loading to true while fetching
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();

      // Categorize cocktails based on alcoholic content
      const cocktailsCategorized = {
        COCKTAILS: data.drinks.filter(drink => drink.strAlcoholic === "Alcoholic"),
        MOCKTAILS: data.drinks.filter(drink => drink.strAlcoholic === "Non alcoholic"),
        ORIGINAL: data.drinks.filter(drink => drink.strAlcoholic === "Optional alcohol"),
      };

      setCocktails(cocktailsCategorized);  // Store categorized cocktails in state
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    } finally {
      setLoading(false);  // Set loading to false after fetching
    }
  };

  // Fetch cocktails when the component mounts
  React.useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="mx-auto p-6 text-center">
      <button
        onClick={fetchCocktails}  // Add onClick handler to fetch and categorize cocktails
        className="py-3 px-7 mb-2 mt-10 text-sm font-medium border border-red-950 hover:bg-[#002B49] hover:text-white"
      >
        REFRESH CATEGORIES
      </button>

      {loading ? (
        <p className="text-center mt-6">Loading...</p>  // Show loading message
      ) : (
        <div>
          {/* Display Cocktail Categories */}
          {Object.keys(cocktails).map(category => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-4 text-[#002B49]">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
                {cocktails[category].map((cocktail) => (
                  <div key={cocktail.idDrink} className="p-4 border rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{cocktail.strDrink}</h3>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-45 object-cover mb-4 rounded-md" />
                    <h4 className="text-lg font-bold mb-2">Ingredients:</h4>
                    <ul className="text-left mb-4">
                      {Object.keys(cocktail)
                        .filter((key) => key.includes('strIngredient') && cocktail[key])
                        .map((ingredientKey) => (
                          <li key={ingredientKey} className="text-gray-700">{cocktail[ingredientKey]}</li>
                        ))}
                    </ul>
                    <p className="text-left"><strong>Instructions:</strong> {cocktail.strInstructions}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
