import { useDrinks } from "../components/context/DrinksContext";

const CollectionsPage = () => {
  const { drinks } = useDrinks();
  return (
    <section className="">
      <section className="absolute top-0 w-full border-2 border-green-700 h-[70%] flex flex-col items-center justify-center p-5">
        <h3 className="my-4 text-lg">Category</h3>
        <h1 className="uppercase text-5xl text-[#173e59] font-semibold sm:text-7xl">
          The collection
        </h1>
      </section>

      <section className="border-2 border-red-600 min-h-screen grid gap-5 justify-center py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {drinks.slice(0, 6).map((drink, index) => (
          <div
            key={index}
            className="border-2 border-green-500 w-full  h-fit sm:w-fit"
          >
            <img
              src={drink.thumbnail}
              alt="image"
              className="sm:max-w-[500px] md:h-[50vh] h-[70vh] object-cover object-center"
            />
            <div className="pt-6 text-start text-gray-600">
              <h2 className="font-light text-lg uppercase text-gray-600">
                ORIGINAL
              </h2>
              <h1 className="font-bold text-3xl mt-1 uppercase text-gray-600">
                {drink.name}
              </h1>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default CollectionsPage;
