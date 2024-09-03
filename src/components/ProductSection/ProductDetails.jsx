import React from 'react';
import { useParams } from 'react-router-dom';
import { useDrinks } from '../context/DrinksContext';

const ProductDetails = () => {
  const { name } = useParams(); 
  const { drinks } = useDrinks();

  if (!drinks) return <div>Loading...</div>;

  const drink = drinks.find((drink) => drink.name === name);

  if (!drink) return <div>Product not found</div>;
  console.log(drink)

  const { category, ingredients, instructions, thumbnail } = drink;

  return (
    <>
      <div className="relative w-full h-[60vh] bg-white overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center items-end text-[[#002B49]] z-10">
          <h2 className="text-xl font-normal text-center w-full">
            {category}
          </h2>
          <h1 className="text-9xl font-normal text-center w-full text-gray-600">
            {name}
          </h1>
        </div>
      </div>

      <div className='w-full'>
        <img src={thumbnail} alt={thumbnail} className='w-full h-[50vh] object-cover'/>
      </div>

          <div className='flex'>

              <div className='p-14 bg-[#002b49] w-[30vw] h-[50vh] '>
                  <h1 className="text-5xl text-white font-bold mb-4">INGREDIENTS</h1>
                  <ul className="flex-col text-white text-lg">
                      {ingredients.map((item, index) => (
                          <li key={index} className="text-lg">
                              {item.measure} {item.ingredient}
                          </li>
                      ))}
                  </ul>
              </div>

              <div className='p-16 w-[70vw] text-[#002b49]'>
                  <h1 className="text-5xl font-bold mb-4 text-[#002b49]">PREPARATION</h1>
                  <p className="text-lg">{instructions}</p>
              </div>

          </div>


    </>
  );
};

export default ProductDetails;
