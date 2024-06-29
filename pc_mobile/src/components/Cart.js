import React, { useState } from 'react';
import PaymentComponent from './PaymentComponent';

const Cart = ({ cartItems, clearCart }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleConfirmPurchase = () => {
    setShowPayment(true);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0) * 100; // montant en cents pour Stripe

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
          <button onClick={clearCart}>Vider le panier</button>
          <button onClick={handleConfirmPurchase}>Confirmer l'achat</button>
          {showPayment && (
            <PaymentComponent amount={totalAmount} />
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
