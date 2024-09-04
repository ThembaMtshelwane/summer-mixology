import { useMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDrinks } from "../context/DrinksContext";

const ProductsHero = () => {
  // const { name } = useParams();
  const match = useMatch("/products/");
  const match2 = useMatch("/categories/");
  const match3 = useMatch("/products/:name");

  const { name } = useParams();
  const { drinks } = useDrinks();
  let category = null;

  if (!drinks) return <div>Loading...</div>;

  if (name) {
    const drink = drinks.find((drink) => drink.name === name);
    category = drink.category;
  }

  return (
    <section
      className="bg-blue-900 h-[70vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('hero/products/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="top-0 w-full h-[70%] flex flex-col items-center justify-center p-5">
        {match ? (
          <h1 className="uppercase text-5xl text-[#173e59] font-semibold sm:text-7xl">
            The collection
          </h1>
        ) : (
          ""
        )}
        {match2 ? (
          <h1 className="uppercase text-5xl text-[#173e59] font-semibold sm:text-7xl">
            The Categories
          </h1>
        ) : (
          ""
        )}

        {match3 ? (
          <h1 className="uppercase text-5xl text-[#173e59] font-semibold sm:text-7xl">
            {category && category}
          </h1>
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default ProductsHero;
