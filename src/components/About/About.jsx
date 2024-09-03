

import React, { useState } from 'react';

const About = () => {
  const [cocktails, setCocktails] = useState([]);  // State to store cocktails
  const [loading, setLoading] = useState(false);   // State to manage loading state
  const [showCocktails, setShowCocktails] = useState(false);  // State to toggle between About and Cocktails

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
      setShowCocktails(true);  // Show cocktails list after fetching
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    } finally {
      setLoading(false);  // Set loading to false after fetching
    }
  };

  // Function to handle "Back" button click
  const handleBackClick = () => {
    setShowCocktails(false);  // Go back to the "About" section
  };

  return (
    <div className="mx-auto p-6 text-center">
      {!showCocktails ? (  // Conditional rendering based on state
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side Image */}
          <div className="md:w-1/3">
            <img
              src="/About.jpeg"
              alt="About Us"
              className="w-[100%] h-[100vh] object-cover shadow-lg"  // Increased height for better visibility
            />
          </div>

          {/* Right Side Text */}
          <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4 text-center text-[#002B49]">-SUMMER MIXOLOGY-</h3>
            <h1 className="text-6xl font-bold mb-4 text-[#002B49]">HISTORICAL KNOW-HOW</h1>
            <p className="text-lg mb-4">
              Welcome to our Cocktail Explorer App!<br/> Discover a world of cocktails and mocktails with just a few clicks.<br/>
              Whether you are a professional bartender, <br/>a cocktail enthusiast, or just someone looking for
              the perfect drink recipe<br/> for a special occasion, our app has something for everyone.
            </p>
            <button
              onClick={fetchCocktails}  // Add onClick handler to fetch and categorize cocktails
              className="py-3 px-7 mb-2 mt-10 text-sm font-medium border border-red-950 hover:bg-[#002B49] hover:text-white"
            >
              CATEGORIES
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Display Cocktails */}
          {loading ? (
            <p className="text-center mt-6">Loading...</p>  // Show loading message
          ) : (
            <div>
              <button
                onClick={handleBackClick}  // Add onClick handler for the "Back" button
                className="py-3 px-7 mb-2 mt-10 text-sm font-medium border border-red-950 hover:bg-[#002B49] hover:text-white"
              >
                BACK
              </button>
              
              {/* Display Cocktail Categories */}
              {Object.keys(cocktails).map(category => (
                <div key={category}>
                  <h2 className="text-2xl font-bold mb-4 text-[#002B49]">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {cocktails[category].map((cocktail) => (
                      <div key={cocktail.idDrink} className="p-4 border rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">{cocktail.strDrink}</h3>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-40 object-cover mb-4 rounded-md" />
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
      )}
    </div>
  );
};

export default About;






