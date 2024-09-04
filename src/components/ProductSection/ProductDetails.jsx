import React from 'react';
import { useParams } from 'react-router-dom';
import { useDrinks } from '../context/DrinksContext';
import ProductSection from './ProductSection';

const ProductDetails = () => {
  const { name } = useParams(); 
  const { drinks } = useDrinks();

  if (!drinks) return <div>Loading...</div>;

  const drink = drinks.find((drink) => drink.name === name);

  if (!drink) return <div>Product not found</div>;

  const { category, ingredients, instructions, thumbnail } = drink;

  return (
    <>
      {/* <div className="relative w-full h-[60vh] bg-white overflow-hidden"> */}
        <div className="absolute top-0 flex flex-col  text-[#002B49] ">
          <h2 className="text-xl font-normal text-center w-full">
            {category}
          </h2>
          <h1 className="text-9xl font-normal text-center w-full text-gray-600">
            {name}
          </h1>
        </div>
      {/* </div> */}

      <div className="w-full">
        <img src={thumbnail} alt={thumbnail} className="w-full h-[70vh] object-cover"/>
      </div>

      <div className="relative flex flex-col md:flex-row md:items-start w-full">

        {/* Ingredients Section */}
        <div className="md:relative top-[-20px] md:top-[-60px] left-0 md:w-[40vw] w-full h-[60vh] p-14 bg-[#002b49]">
          <h1 className="text-5xl text-white font-bold mb-4">INGREDIENTS</h1>
          <ul className="flex-col text-white text-lg">
            {ingredients.map((item, index) => (
              <li key={index} className="text-lg">
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation Section */}
        <div className="relative md:w-[60vw] w-full md:pt-[8rem] pt-[8rem] md:pb-16 pb-8 p-8 bg-white text-[#002b49]">
          <h1 className="text-5xl font-bold mb-4 text-[#002b49]">PREPARATION</h1>
          <p className="text-lg">{instructions}</p>
        </div>
      </div>



      <div className='mx-20'>
        <ProductSection />
      </div>
      
    </>
  );
};

export default ProductDetails;
