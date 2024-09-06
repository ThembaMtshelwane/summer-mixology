import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ drink, index }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/${drink.name}`);
        window.scrollTo({
          top: 0,
        });
      }}
      key={index}
      className=" cursor-pointer w-full min-w-[300px] max-w-[600px] max-h-[8000px] justify-self-center overflow-hidden bg-transparent shadow-lg rounded-lg "
    >
      <img
        src={drink.thumbnail}
        alt="image"
        className="object-cover object-center transition-transform duration-300 ease-out transform hover:scale-105"
      />
      <div className="py-6 text-start text-gray-600 px-4">
        <h2 className="font-light font-oswald text-2xl uppercase text-gray-600">
          {drink.category}
        </h2>
        <h1 className="font-bold font-bebas  text-5xl mt-1 uppercase text-gray-600">
          {drink.name}
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
