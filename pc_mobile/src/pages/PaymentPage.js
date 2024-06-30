import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
// import PaymentComponent from '../components/PaymentComponent';

const stripePromise = loadStripe('pk_test_51PX5aDRtG8HNwy34P4uKI8678dILG31MfRc4CYn3Gi4bKlHqcAwOveZ6wWX1nMElZbqkLpwoQykgz0vVd3LyAYSN00VmIkikQF'); // Remplacez par votre clé publique Stripe

const PaymentPage = () => {
  const [amount, setAmount] = useState(1000); // Montant en centimes

  return (
    <div>
      <h2>Paiement sécurisé</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
