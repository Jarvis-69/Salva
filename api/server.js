require('dotenv').config();

const express = require('express');
const stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Vérifiez que la clé secrète de Stripe est correctement chargée
console.log(`Stripe Secret Key: ${process.env.STRIPE_SECRET_KEY}`);

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).send({ error: 'Amount is required' });
  }

  try {
    console.log(`Creating payment intent for amount: ${amount}`);
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount * 100, // Stripe attend le montant en centimes
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

module.exports = app;
module.exports.handler = serverless(app);