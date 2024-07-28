import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Prix: {product.price}€</p>
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
      </div>
  );
};

const products = [
  { id: 1, name: 'Ordinateur Gamer', price: 1500, description: 'Un ordinateur puissant pour le jeu.', image: 'url_to_image' },
  { id: 2, name: 'Ordinateur de Bureau', price: 800, description: 'Parfait pour le travail de bureau.', image: 'url_to_image' },
  { id: 3, name: 'Station de Travail', price: 2000, description: 'Idéal pour des tâches lourdes.', image: 'url_to_image' },
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