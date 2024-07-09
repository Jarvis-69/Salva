import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PX5aDRtG8HNwy34P4uKI8678dILG31MfRc4CYn3Gi4bKlHqcAwOveZ6wWX1nMElZbqkLpwoQykgz0vVd3LyAYSN00VmIkikQF');

const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/create-payment-intent', {
        amount,
      });

      const { clientSecret } = response.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setSuccess(true);
          setLoading(false);
          onSuccess(paymentMethod);
        }
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      address: {
        ...prevDetails.address,
        [name]: value,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input type="text" name="name" value={billingDetails.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={billingDetails.email} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Téléphone:</label>
        <input type="tel" name="phone" value={billingDetails.phone} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Adresse:</label>
        <input type="text" name="line1" value={billingDetails.address.line1} onChange={handleAddressChange} required />
      </div>
      <div>
        <label>Complément d'adresse:</label>
        <input type="text" name="line2" value={billingDetails.address.line2} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Ville:</label>
        <input type="text" name="city" value={billingDetails.address.city} onChange={handleAddressChange} required />
      </div>
      <div>
        <label>État:</label>
        <input type="text" name="state" value={billingDetails.address.state} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Pays:</label>
        <select name="country" value={billingDetails.address.country} onChange={handleAddressChange} required>
          <option value="">Sélectionnez un pays</option>
          <option value="FR">France</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        Payer
      </button>
      {error && <div>{error}</div>}
      {success && <div>Paiement réussi !</div>}
    </form>
  );
};

const PaymentComponent = ({ amount, onSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  );
};

export default PaymentComponent;