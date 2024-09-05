import { useMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDrinks } from "../context/DrinksContext";

const ProductsHero = () => {
  const match = useMatch("/products/");
  const match2 = useMatch("/categories/");
  const match3 = useMatch("/products/:name");

  const { name } = useParams();
  const { drinks } = useDrinks();

  if (!drinks) return <div>Loading...</div>;

  let category = "";

  if (name) {
    const drink = drinks.find((drink) => drink.name === name);
    if (drink) {
      category = drink.category;
    } else {
      console.error(`No drink found with the name ${name}`);
    }
  }

  return (
    <section
      className="bg-blue-900 h-[85vh] flex flex-col  justify-center items-center"
      style={{
        backgroundImage: "url('/hero/products/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="top-0 w-full h-[70%] flex flex-col items-center justify-center p-5">
        {match && (
          <h1 className="uppercase font-bebas text-7xl text-[#173e59] font-semibold sm:text-9xl">
            The collection
          </h1>
        )}
        {match2 && (
          <h1 className="uppercase font-bebas text-7xl text-[#173e59] font-semibold sm:text-9xl">
            The Categories
          </h1>
        )}
        {match3 && category && (
          <div className="text-center items-center">
            <h1 className="uppercase text-xl text-[#173e59] font-oswald font-normal ">
              {category}
            </h1>
            <h1 className="uppercase items-center justify-center font-bebas font-medium text-base text-[#173e59]  md:text-9xl">
              {name}
            </h1>
          </div>



        )}
      </section>
    </section>
  );
};

export default ProductsHero;
