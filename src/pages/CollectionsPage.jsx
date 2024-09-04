import { useDrinks } from "../components/context/DrinksContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const CollectionsPage = () => {
  const { drinks } = useDrinks();
  console.log(drinks);
  return (
    <section className="flex flex-col items-center">
      <PaginatedItems itemsPerPage={5} drinks={drinks} />,
    </section>
  );
};

export default CollectionsPage;

function PaginatedItems({ itemsPerPage, drinks }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentDrinks = drinks.slice(itemOffset, endOffset);
  console.log("currentItems", currentDrinks);

  const pageCount = Math.ceil(drinks.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % drinks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="mx-16 px-5 mt-[77px]">
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-10 space-x-2"
        activeClassName="bg-[#173e59] text-white"
        previousClassName="px-3 py-1 border rounded"
        nextClassName="px-3 py-1 border rounded"
        pageClassName="px-3 py-1 border rounded hover:scale-[1.02] "
      /> */}
      <Drinks currentDrinks={currentDrinks} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center my-10 space-x-2"
        activeClassName="bg-[#173e59] text-white"
        previousClassName="px-3 py-1 border rounded"
        nextClassName="px-3 py-1 border rounded"
        pageClassName="px-3 py-1 border rounded hover:scale-[1.02] "
      />
    </div>
  );
}

const Drinks = ({ currentDrinks }) => {
  return (
    <section className=" min-h-screen grid gap-10 justify-center py-20 sm:px-5 sm:grid-cols-2 ">
      {currentDrinks.map((drink, index) => (
        <Link
          to={`${drink.name}`}
          key={index}
          className="w-full px-9 max-w-[600px] max-h-[8000px] h-full justify-self-center overflow-hidden border border-slate-800 bg-transparent rounded-lg"
        >
          <img
            src={drink.thumbnail}
            alt="image"
            className=" object-cover object-center transition-transform duration-300 ease-out transform hover:scale-105"
          />
          <div className="pt-6 text-start text-gray-600 px-4">
            <h2 className="font-light font-oswald text-2xl uppercase text-gray-600">
              {drink.category}
            </h2>
            <h1 className="font-bold font-bebas  text-5xl mt-1 uppercase text-gray-600">
              {drink.name}
            </h1>
          </div>
        </Link>
      ))}
    </section>
  );
};
