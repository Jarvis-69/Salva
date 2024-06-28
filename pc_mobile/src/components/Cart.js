import React from 'react';

const Cart = ({ cartItems, clearCart }) => {
  const handleConfirmPurchase = () => {
    alert('Merci pour votre achat!');
    clearCart();
  };

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
        </div>
      )}
    </div>
  );
};

export default Cart;
