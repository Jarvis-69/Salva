import React from 'react';
import { Link } from 'react-router-dom';

export const calculateTotal = (cartItems = []) => {
  return cartItems.reduce((acc, item) => acc + item.price, 0);
};

const Cart = ({ cartItems, clearCart }) => {
  return (
    <div>
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}€
              </li>
            ))}
          </ul>
          <p>Total: {calculateTotal(cartItems)}€</p>
          <button onClick={clearCart}>Vider le panier</button>
          <Link to="/payment">
            <button>Confirmer l'achat</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;