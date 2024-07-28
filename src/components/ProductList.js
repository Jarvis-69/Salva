import React from 'react';
import processor from './Assets/processor.png';
import card from './Assets/card.png';
import ram from './Assets/ram.png';
import M2 from './Assets/M2.png';
import pc1 from './Assets/pc1.png';
import pc2 from './Assets/pc2.png';
import pc3 from './Assets/pc3.png';

const Product = ({ product, addToCart }) => {
  return (
    <div className='product'>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} className='product_pc'/>
      <p>{product.description}</p>
      <div className='product_details'>
        <img src={processor} alt='processor' className='product_icon'/>
        <p>{product.processor}</p>
      </div>
      <div className='product_details'>
        <img src={card} alt='card' className='product_icon'/>
        <p>{product.card}</p>
      </div>
      <div className='product_details'>
        <img src={ram} alt='ram' className='product_icon'/>
        <p>{product.ram}</p>
      </div>
      <div className='product_details'>
        <img src={M2} alt='M2' className='product_icon'/>
        <p>{product.M2}</p>
      </div>
      <p>Prix: {product.price}€</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

const products = [
  { id: 1, name: 'Starter', price: 699, description: 'Parfait pour le travail de bureau.', image: pc1, processor: 'Ryzen 5 3600', card: 'GTX 3050', ram: '16 Go (2x8 Go, 3200 MHz)', M2: '500 Go' },
  { id: 2, name: 'Ordinateur Gamer', price: 899, description: 'Un ordinateur puissant pour le jeu.', image: pc2, processor: 'Core i5-12400F', card: 'RTX 4060', ram: '16 Go (2x8 Go, 3200 MHz)', M2: '1 To' },
  { id: 3, name: 'Station de Travail', price: 1099, description: 'Idéal pour des tâches lourdes.', image: pc3, processor: 'Core i5-12600K', card: 'RTX 4060 TI', ram: '16 Go (2x16 Go, 3200 MHz)', M2: '1 To' },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className='productlist'>
      {/* <h2>Nos PC</h2> */}
      <div>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);
};

export default ProductList;