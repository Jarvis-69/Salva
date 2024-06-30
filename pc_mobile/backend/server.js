const express = require('express');
const stripe = require('stripe')('sk_test_51PX5aDRtG8HNwy34KfErCdrKzmNIgTTBUK7ycNG9uXnAi5E3yzyhWeLQnvti0lCcnVVAQwhuPbAhlflY687471Hj00cYMLZVPT'); // Remplacez par votre clé secrète Stripe
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
