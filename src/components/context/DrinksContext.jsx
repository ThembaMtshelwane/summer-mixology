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
        setDrinks(data.drinks);
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
