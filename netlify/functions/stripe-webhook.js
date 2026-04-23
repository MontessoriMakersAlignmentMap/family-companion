const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      event.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(stripeEvent.data.object);
        break;
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        await handleSubscriptionChange(stripeEvent.data.object);
        break;
      case 'invoice.payment_failed':
        await handlePaymentFailed(stripeEvent.data.object);
        break;
    }
  } catch (err) {
    console.error('Webhook handler error:', err);
    return { statusCode: 500, body: 'Internal error' };
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};

async function handleCheckoutCompleted(session) {
  if (session.mode !== 'subscription') return;
  if (session.metadata?.app !== 'family_companion') return;

  const subscription = await stripe.subscriptions.retrieve(session.subscription);
  const interval = subscription.items.data[0]?.price?.recurring?.interval === 'year' ? 'annual' : 'monthly';

  const userId = session.metadata?.supabase_user_id;
  if (!userId) {
    console.error('No supabase_user_id in checkout session metadata');
    return;
  }

  const { error } = await supabase
    .from('family_companion_subscriptions')
    .upsert({
      user_id: userId,
      stripe_customer_id: session.customer,
      stripe_subscription_id: subscription.id,
      status: subscription.status,
      billing_interval: interval,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });

  if (error) console.error('Upsert error:', error);

  await notifyNewSubscriber(session.customer_email, interval);
}

async function notifyNewSubscriber(email, interval) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Family Companion <onboarding@resend.dev>',
        to: ['hannah@montessorimakers.org'],
        subject: `New Family Companion subscriber: ${email}`,
        text: `New subscriber!\n\nEmail: ${email}\nPlan: ${interval}\n\n— Family Companion`,
      }),
    });
  } catch (e) {
    console.warn('Notification email failed:', e.message);
  }
}

async function handleSubscriptionChange(subscription) {
  const interval = subscription.items.data[0]?.price?.recurring?.interval === 'year' ? 'annual' : 'monthly';

  const { error } = await supabase
    .from('family_companion_subscriptions')
    .update({
      status: subscription.status,
      billing_interval: interval,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscription.id);

  if (error) console.error('Subscription update error:', error);
}

async function handlePaymentFailed(invoice) {
  if (!invoice.subscription) return;
  const { error } = await supabase
    .from('family_companion_subscriptions')
    .update({ status: 'past_due', updated_at: new Date().toISOString() })
    .eq('stripe_subscription_id', invoice.subscription);

  if (error) console.error('Payment failed update error:', error);
}
