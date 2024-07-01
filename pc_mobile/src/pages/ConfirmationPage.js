import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { cartItems, paymentMethod } = location.state || {};

  const cardDetails = paymentMethod && paymentMethod.card ? paymentMethod.card : {};

  return (
    <div>
      <h2>Confirmation de Paiement</h2>
      <p>Merci pour votre achat !</p>
      <h3>Détails du Panier :</h3>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}€
            </li>
          ))
        ) : (
          <li>Panier vide</li>
        )}
      </ul>
      <h3>Moyen de Paiement :</h3>
      {paymentMethod ? (
        <div>
          <p>Type: {paymentMethod.type}</p>
          <p>Carte: {cardDetails.brand} se terminant par {cardDetails.last4}</p>
          <p>Date d'expiration: {cardDetails.exp_month}/{cardDetails.exp_year}</p>
        </div>
      ) : (
        <p>Aucun moyen de paiement spécifié</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
