// Subscription gate for Family Companion.
// TODO(hannah): set final pricing + create Stripe products, then plug the price IDs
// into netlify/functions/create-checkout.js. Defaults below are placeholders.

function SubscriptionGate({ session, subscription, subLoading, onActive, children }) {
  if (subLoading) return <SubscriptionLoading/>;
  if (!session) return children;
  if (isSubscriptionActive(subscription)) return children;

  const params = new URLSearchParams(window.location.search);
  if (params.get('subscription') === 'success') {
    return <SubscriptionPending onActive={onActive} session={session}/>;
  }

  return <SubscriptionFlow session={session}/>;
}

function SubscriptionLoading() {
  return (
    <div className="app-root" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center' }}>
        <img src="assets/cube-gold.svg" alt="" style={{ width: 40, height: 40, opacity: 0.6, marginBottom: 16 }}/>
        <div style={{ fontSize: 12, color: 'rgba(74,77,96,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Loading…
        </div>
      </div>
    </div>
  );
}

function SubscriptionPending({ onActive, session }) {
  const [dots, setDots] = React.useState('');
  React.useEffect(() => {
    const iv = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 500);
    return () => clearInterval(iv);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    async function poll() {
      for (let i = 0; i < 20; i++) {
        if (cancelled) return;
        const { data } = await sb.from('family_companion_subscriptions')
          .select('status')
          .eq('user_id', session.user.id)
          .maybeSingle();
        if (data && (data.status === 'active' || data.status === 'trialing')) {
          window.history.replaceState({}, '', window.location.pathname);
          onActive();
          return;
        }
        await new Promise(r => setTimeout(r, 2000));
      }
    }
    poll();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="app-root" style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 28px', textAlign: 'center',
    }}>
      <img src="assets/cube-gold.svg" alt="" style={{ width: 48, height: 48, marginBottom: 24 }}/>
      <h1 style={{
        fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 26,
        color: 'var(--ink, #0e1a7a)',
        fontWeight: 400, margin: 0, marginBottom: 12,
      }}>Activating your subscription{dots}</h1>
      <p style={{ fontSize: 14, color: 'var(--ink-body, #4a4d60)', lineHeight: 1.5 }}>
        Payment received. We’re setting up your account — this usually takes a few seconds.
      </p>
    </div>
  );
}

function SubscriptionFlow({ session }) {
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function handleCheckout(interval) {
    setBusy(true); setError(null);
    try {
      await startCheckout({
        tier: 'family',
        interval,
        userId: session.user.id,
        userEmail: session.user.email,
      });
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <FlowPage eyebrow="Family Companion" title="The Montessori friend in your pocket.">
      <div style={{
        padding: '14px 16px', marginBottom: 20,
        background: 'var(--bg-cream, #f4efe5)',
        borderLeft: '2px solid var(--gold, #d6a758)',
        fontSize: 13, lineHeight: 1.55, color: 'var(--ink-body, #4a4d60)',
      }}>
        Every age, every entry point, every playbook. Weekly digest for your child. A journal that spots what your child is working on before you do.
      </div>

      {error && <div style={{ fontSize: 13, color: '#e05a4a', marginBottom: 16 }}>{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <PricingCard
          label="Monthly" price="$12" period="/month"
          onClick={() => handleCheckout('monthly')}
          disabled={busy}
        />
        <PricingCard
          label="Annual" price="$99" period="/year"
          badge="Save $45"
          onClick={() => handleCheckout('annual')}
          disabled={busy}
          featured
        />
      </div>

      <div style={{ fontSize: 11, color: 'rgba(74,77,96,0.5)', marginTop: 20, lineHeight: 1.5 }}>
        Cancel anytime. Your journal and child profiles stay on this device even if you cancel.
      </div>
    </FlowPage>
  );
}

function FlowPage({ eyebrow, title, children }) {
  return (
    <div className="app-root" style={{
      display: 'flex', flexDirection: 'column', paddingTop: 72,
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 24, paddingBottom: 36 }}>
        <img src="assets/cube-gold.svg" alt="" style={{ width: 44, height: 44, opacity: 0.95 }}/>
      </div>
      <div style={{ padding: '0 28px', flex: 1, overflow: 'auto' }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
        <h1 style={{
          fontFamily: 'var(--font-heading, Georgia, serif)', fontWeight: 400,
          fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em',
          color: 'var(--ink, #0e1a7a)', margin: 0, marginBottom: 20, textWrap: 'pretty',
        }}>{title}</h1>
        {children}
      </div>
    </div>
  );
}

function PricingCard({ label, price, period, badge, onClick, disabled, featured }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      padding: '22px 20px', textAlign: 'left', cursor: disabled ? 'wait' : 'pointer',
      border: `1px solid ${featured ? 'var(--gold, #d6a758)' : 'rgba(14,26,122,0.15)'}`,
      background: featured ? 'rgba(214,167,88,0.08)' : '#fff',
      fontFamily: 'inherit', width: '100%',
      position: 'relative', opacity: disabled ? 0.7 : 1,
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: -1, right: -1,
          background: 'var(--gold, #d6a758)', color: 'var(--ink, #0e1a7a)',
          fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
          padding: '4px 10px', textTransform: 'uppercase',
        }}>{badge}</div>
      )}
      <div style={{
        fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'rgba(74,77,96,0.6)', fontWeight: 600, marginBottom: 8,
      }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{
          fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 32,
          color: 'var(--ink, #0e1a7a)', letterSpacing: '-0.02em',
        }}>{price}</span>
        <span style={{ fontSize: 13, color: 'rgba(74,77,96,0.6)' }}>{period}</span>
      </div>
    </button>
  );
}

Object.assign(window, { SubscriptionGate, SubscriptionFlow });
