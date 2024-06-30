import React from 'react';
import { calculateTotal } from '../components/Cart';
import PaymentComponent from '../components/PaymentComponent';

const PaymentPage = ({ cartItems }) => {
  const totalAmount = calculateTotal(cartItems);

  return (
    <div>
      <h2>Page de Paiement</h2>
      <p>Total à payer: {totalAmount}€</p>
      <PaymentComponent amount={totalAmount} />
    </div>
  );
};

export default PaymentPage;
