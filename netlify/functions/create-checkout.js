const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// TODO(hannah): create the Family Companion products in Stripe and paste the
// price IDs here (or override via FAMILY_MONTHLY_PRICE_ID / FAMILY_ANNUAL_PRICE_ID).
const PRICE_MAP = {
  family_monthly: process.env.FAMILY_MONTHLY_PRICE_ID || 'price_1TPj80PGvmx1ACnDXYjQ6a4y',
  family_annual:  process.env.FAMILY_ANNUAL_PRICE_ID  || 'price_1TPj5CPGvmx1ACnDkgtVAMP3',
};

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method not allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const { tier, interval, user_id, user_email } = body;

    const priceKey = `${tier}_${interval}`;
    const priceId = PRICE_MAP[priceKey];
    if (!priceId || priceId.startsWith('price_REPLACE_')) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Stripe price IDs not configured yet' }) };
    }
    if (!user_id || !user_email) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing user_id or user_email' }) };
    }

    const baseUrl = process.env.URL || 'https://www.montessorimakersfamilycompanion.com';
    const appPath = '/Montessori%20Makers%20Family%20Companion.html';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: user_email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: {
        supabase_user_id: user_id,
        app: 'family_companion',
      },
      success_url: `${baseUrl}${appPath}?subscription=success`,
      cancel_url: `${baseUrl}${appPath}?subscription=canceled`,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ url: session.url }) };
  } catch (err) {
    console.error('Checkout session error:', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
