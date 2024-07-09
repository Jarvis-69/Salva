import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { cartItems, paymentMethod } = location.state || {};

  const billingDetails = paymentMethod?.billing_details || {};
  const { address = {}, email, name, phone } = billingDetails;

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
          <p>Type de carte: {paymentMethod.card.brand}</p>
          <p>Numéro de carte: **** **** **** {paymentMethod.card.last4}</p>
        </div>
      ) : (
        <p>Aucun moyen de paiement spécifié</p>
      )}
      <h3>Informations de Livraison :</h3>
      <div>
        <p>Nom: {name || 'N/A'}</p>
        <p>Email: {email || 'N/A'}</p>
        <p>Téléphone: {phone || 'N/A'}</p>
        <p>Adresse: {address.line1 || 'N/A'}, {address.line2 || ''}</p>
        <p>Ville: {address.city || 'N/A'}</p>
        <p>Code Postal: {address.postal_code || 'N/A'}</p>
        <p>Pays: {address.country || 'N/A'}</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;