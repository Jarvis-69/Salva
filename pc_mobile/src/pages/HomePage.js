import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ addToCart }) => {
  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default HomePage;