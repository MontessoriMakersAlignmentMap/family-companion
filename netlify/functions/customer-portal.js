const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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
    const { user_id } = JSON.parse(event.body);
    if (!user_id) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing user_id' }) };
    }

    const { data: sub, error } = await supabase
      .from('family_companion_subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user_id)
      .single();

    if (error || !sub?.stripe_customer_id) {
      return { statusCode: 404, headers, body: JSON.stringify({ error: 'No subscription found' }) };
    }

    const baseUrl = process.env.URL || 'https://www.montessorimakersfamilycompanion.com';
    const session = await stripe.billingPortal.sessions.create({
      customer: sub.stripe_customer_id,
      return_url: `${baseUrl}/Montessori%20Makers%20Family%20Companion.html`,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ url: session.url }) };
  } catch (err) {
    console.error('Portal session error:', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
