import React from 'react';
import { calculateTotal } from '../components/Cart';
import PaymentComponent from '../components/PaymentComponent';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ cartItems, clearCart, setPaymentMethod }) => {
  const totalAmount = calculateTotal(cartItems);
  const navigate = useNavigate();

  const handlePaymentSuccess = (paymentMethod) => {
    console.log("Paiement validé avec la méthode :", paymentMethod);
    setPaymentMethod(paymentMethod);
    clearCart();
    navigate('/confirmation', { state: { cartItems, paymentMethod } });
  };

  return (
    <div>
      <h2>Page de Paiement</h2>
      <p>Total à payer: {totalAmount}€</p>
      <PaymentComponent amount={totalAmount} onSuccess={handlePaymentSuccess}/>
    </div>
  );
};

export default PaymentPage;
