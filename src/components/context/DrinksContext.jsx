import { createContext, useContext, useEffect, useState } from "react";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        const formattedDrinks = data.drinks.map((drink) => {
          // Create an array of ingredients with their corresponding measurements
          const ingredients = [];
          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            if (ingredient) {
              ingredients.push({ ingredient, measure: measure || "" });
            }
          }

          // Create an array of instructions (assuming instructions might be split in the future)
          const instructions = drink.strInstructions
            ? drink.strInstructions
            : "";

          // Return the formatted drink object
          return {
            name: drink.strDrink,
            category: drink.strCategory,
            ingredients,
            instructions,
            thumbnail: drink.strDrinkThumb,
          };
        });

        setDrinks(formattedDrinks);
      } catch (error) {
        console.error("Error fetching drinks:", error);
        setError("Error with fetching drinks");
      } finally {
        setLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <DrinksContext.Provider value={{ drinks, loading, error }}>
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinks = () => {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error("useDrinks must be used within a DrinksProvider");
  }
  return context;
};
