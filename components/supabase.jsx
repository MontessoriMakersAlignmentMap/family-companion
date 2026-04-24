// Supabase client + sync layer for Family Companion.
// Dedicated project — fully isolated from MMAP, Field Guide, and Leadership Meridian.
// Parents can never reach school-side data. Auth + subscription live here.
// Journal/children/progress live in localStorage (local-first).

const SUPABASE_URL = 'https://kyfrtjffctdjbkkmmdua.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5ZnJ0amZmY3RkamJra21tZHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5OTEyNjcsImV4cCI6MjA5MjU2NzI2N30.jad1E_2XAveOARWcS2PPkzjLi4_ik5TmLBth0u6vy7g';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, storageKey: 'companion.session' },
});

sb.auth.onAuthStateChange((event, session) => {
  if (session) localStorage.setItem('companion.connected', '1');
  else localStorage.removeItem('companion.connected');
});

function useSession() {
  const [session, setSession] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoaded(true);
    });
    const { data: listener } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);
  return { session, loaded };
}

function useSubscription(session) {
  const [subscription, setSubscription] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!session) { setSubscription(null); setLoading(false); return; }
    setLoading(true);
    sb.from('family_companion_subscriptions')
      .select('*')
      .eq('user_id', session.user.id)
      .maybeSingle()
      .then(({ data }) => {
        setSubscription(data || null);
        setLoading(false);
      });
  }, [session?.user?.id]);

  const refetch = React.useCallback(() => {
    if (!session) return;
    sb.from('family_companion_subscriptions')
      .select('*')
      .eq('user_id', session.user.id)
      .maybeSingle()
      .then(({ data }) => setSubscription(data || null));
  }, [session?.user?.id]);

  return { subscription, loading, refetch };
}

function isSubscriptionActive(sub) {
  if (!sub) return false;
  if (sub.status !== 'active' && sub.status !== 'trialing') return false;
  if (sub.current_period_end && new Date(sub.current_period_end) < new Date()) return false;
  return true;
}

async function startCheckout({ tier, interval, userId, userEmail }) {
  const res = await fetch('/.netlify/functions/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tier, interval, user_id: userId, user_email: userEmail }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else throw new Error(data.error || 'Checkout failed');
}

async function openCustomerPortal(userId) {
  const res = await fetch('/.netlify/functions/customer-portal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else throw new Error(data.error || 'Portal failed');
}

async function signInWithGoogle() {
  return sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.href } });
}
async function signInWithEmail(email) {
  return sb.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.href } });
}
async function signOut() { return sb.auth.signOut(); }

Object.assign(window, {
  sb, useSession, useSubscription, isSubscriptionActive,
  startCheckout, openCustomerPortal,
  signInWithGoogle, signInWithEmail, signOut,
  SUPABASE_URL, SUPABASE_ANON_KEY,
});
