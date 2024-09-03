import React from 'react';
import { useParams } from 'react-router-dom';
import { useDrinks } from '../context/DrinksContext';

const ProductDetails = () => {
  const { name } = useParams(); // Get the 'name' from the route parameters
  const { drinks } = useDrinks();

  if (!drinks) return <div>Loading...</div>;

  // Find the drink with the matching name
  const drink = drinks.find((drink) => drink.name === name);

  if (!drink) return <div>Product not found</div>;

  const { category, ingredients, instructions, thumbnail } = drink;

  return (
    <div className='relative top-10'>
      <div>{name}</div>
      <div>{category}</div>
      <div>{ingredients.map((item, index) => (
        <div key={index}>{item.measure} {item.ingredient}</div>
      ))}</div>
      <div>{instructions}</div>
      <img src={thumbnail} alt={name} />
    </div>
  );
};

export default ProductDetails;
