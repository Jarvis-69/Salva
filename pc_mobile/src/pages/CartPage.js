import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, clearCart }) => {
  return (
    <div>
      <Cart cartItems={cartItems} clearCart={clearCart} />
    </div>
  );
};

export default CartPage;
