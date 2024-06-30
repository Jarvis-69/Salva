const express = require('express');
const stripe = require('stripe')('sk_test_51PX5aDRtG8HNwy34KfErCdrKzmNIgTTBUK7ycNG9uXnAi5E3yzyhWeLQnvti0lCcnVVAQwhuPbAhlflY687471Hj00cYMLZVPT');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).send({ error: 'Amount is required' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
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
