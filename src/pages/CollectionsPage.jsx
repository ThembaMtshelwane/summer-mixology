import { useDrinks } from "../components/context/DrinksContext";
import { Link } from "react-router-dom";

const CollectionsPage = () => {
  const { drinks } = useDrinks();
  return (
    <section className="flex flex-col items-center">
      <section className="absolute top-0 w-full border-2 border-green-700 h-[70%] flex flex-col items-center justify-center p-5">
        <h3 className="my-4 text-lg">Category</h3>
        <h1 className="uppercase text-5xl text-[#173e59] font-semibold sm:text-7xl">
          The collection
        </h1>
      </section>

      <section className="absolute  h-[200vh]  w-full z-[-999] opacity-20">
        <img src="/background/1.png" alt="" />
        <img src="/background/2.png" alt="" />
        <img src="/background/3.png" alt="" />
        <img src="/background/4.png" alt="" />
        <img src="/background/5.png" alt="" />
        <img src="/background/6.png" alt="" />
      </section>
      <section className="border-2 border-red-600 min-h-screen grid gap-10 justify-center py-20 sm:px-5 sm:grid-cols-2 ">
        {drinks.slice(0, 6).map((drink, index) => (
          <Link
            to={`${drink.name}`}
            key={index}
            className="border-2 border-green-500 w-full max-w-[600px] max-h-[8000px] h-full justify-self-center overflow-hidden"
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
