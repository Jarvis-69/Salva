const express = require('express');
const stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).send({ error: 'Amount is required' });
  }

  try {
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount * 100,
      currency: 'eur',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));