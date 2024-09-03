import { useDrinks } from "../components/context/DrinksContext";
import { Link } from "react-router-dom";

const CollectionsPage = () => {
  const { drinks } = useDrinks();
  return (
    <section className="flex flex-col items-center">
      <section className=" min-h-screen grid gap-10 justify-center py-20 sm:px-5 sm:grid-cols-2 ">
        {drinks.slice(0, 6).map((drink, index) => (
          <Link
            to={`${drink.name}`}
            key={index}
            className="w-full max-w-[600px] max-h-[8000px] h-full justify-self-center overflow-hidden bg-white rounded-lg"
          >
            <img
              src={drink.thumbnail}
              alt="image"
              className=" object-cover object-center transition-transform duration-300 ease-out transform hover:scale-105"
            />
            <div className="pt-6 text-start text-gray-600 px-4">
              <h2 className="font-light text-lg uppercase text-gray-600">
                ORIGINAL
              </h2>
              <h1 className="font-bold text-3xl mt-1 uppercase text-gray-600">
                {drink.name}
              </h1>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default CollectionsPage;
