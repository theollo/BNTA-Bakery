import React from 'react';

const Cake = ({ cake }) => {
  const { cakeName, rating, price, ingredients } = cake;
  const ingredientItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <>
      <h2>{cakeName}</h2>
      <p>Rating: {rating}</p>
      <p>Price: ${price}</p>
      <h3>Ingredients:</h3>
      <ul>{ingredientItems}</ul>
    </>
  );
};

export default Cake;