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
    console.log(`Creating payment intent for amount: ${amount}`);
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount * 100,
      currency: 'eur',
    });
    console.log(`Payment intent created successfully: ${paymentIntent.id}`);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(`Error creating payment intent: ${error.message}`);
    res.status(500).send({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));