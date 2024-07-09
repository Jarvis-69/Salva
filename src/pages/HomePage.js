import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ addToCart }) => {
  return (
    <div>
      <div className='HomePage_section_top'>
      <h1>Accueil</h1>
      <p>Bienvenue sur Jarvis' Corp !</p> 
      <p>Vous trouverez ici une sélection de produits de qualité.</p>
      </div>
      <div>
        <ProductList addToCart={addToCart} />
      </div>
    </div>
  );
};

export default HomePage;