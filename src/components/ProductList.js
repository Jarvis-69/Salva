import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Ordinateur Gamer', price: 1500, description: 'Un ordinateur puissant pour le jeu.' },
  { id: 2, name: 'Ordinateur de Bureau', price: 800, description: 'Parfait pour le travail de bureau.' },
  { id: 3, name: 'Station de Travail', price: 2000, description: 'Idéal pour des tâches lourdes.' },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Produits</h2>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
