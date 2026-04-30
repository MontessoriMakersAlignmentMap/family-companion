// Onboarding — welcome + auth for Family Companion.
// Mirrors the Leadership Meridian flow: pitch slides, then Google / magic-link,
// then hand off to the child-profile setup inside App.

function Onboarding({ onDone }) {
  const [step, setStep] = React.useState(0);
  const { session } = useSession();

  const slides = [
    {
      eyebrow: ‘Welcome’,
      headline: ‘It’s late. Whatever brought you here, you’re not doing it wrong.’,
      body: ‘Family Companion is the Montessori friend in your pocket — when the toddler won’t sleep, when the cereal aisle implodes, when the teacher says something that rattles you. Open it when you need a steady voice.’,
    },
    {
      eyebrow: ‘How it works’,
      headline: ‘One question at a time. Your child at the center.’,
      body: ‘Pick the worry that brought you here — is my child learning, are they on track, what happens in the classroom, how do I help at home. Read one article written for your child’s age. Try one thing this week.’,
    },
    {
      eyebrow: ‘Add to your phone’,
      headline: ‘Keep it one tap away.’,
      body: ‘Family Companion works like a native app when you add it to your home screen. No app store, no updates to manage.’,
      isPwa: true,
    },
    {
      eyebrow: ‘Your account’,
      headline: ‘Sign in to keep your journal and observations.’,
      body: ‘Your child’s profile, the things you notice, the playbooks you save — they stay with you across your phone, tablet, and laptop.’,
      isAuth: true,
    },
  ];

  const s = slides[step];
  const isLast = step === slides.length - 1;

  React.useEffect(() => {
    if (session) onDone();
  }, [session]);

  return (
    <div className="app-root" style={{
      display: 'flex', flexDirection: 'column',
      paddingTop: 72,
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 24, paddingBottom: 40 }}>
        <img src="assets/cube-gold.svg" alt="" style={{ width: 56, height: 56, opacity: 0.95 }}/>
      </div>

      <div style={{ padding: '0 28px', flex: 1, overflow: 'auto' }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>{s.eyebrow}</div>
        <h1 style={{
          fontFamily: 'var(--font-heading, Georgia, serif)', fontWeight: 400,
          fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.01em',
          color: 'var(--ink, #0e1a7a)', margin: 0, marginBottom: 18,
          textWrap: 'pretty',
        }}>{s.headline}</h1>
        <p style={{
          fontSize: 15.5, lineHeight: 1.6,
          color: 'var(--ink-body, #4a4d60)', margin: 0, marginBottom: 32,
        }}>{s.body}</p>

        {s.isPwa && <PwaSlide/>}
        {s.isAuth && <AuthSlide/>}
      </div>

      {!s.isAuth && (
        <div style={{ padding: '16px 28px 32px', display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            style={{
              background: 'transparent', border: 'none', cursor: step === 0 ? 'default' : 'pointer',
              color: step === 0 ? 'rgba(74,77,96,0.3)' : 'var(--ink-body, #4a4d60)',
              fontSize: 14, padding: '10px 0',
            }}
          >Back</button>
          <button
            onClick={() => setStep(step + 1)}
            style={{
              background: 'var(--ink, #0e1a7a)', color: '#fff', border: 'none',
              padding: '12px 24px', fontSize: 13, letterSpacing: '0.04em',
              fontWeight: 600, cursor: 'pointer', borderRadius: 999,
            }}
          >Continue</button>
        </div>
      )}
    </div>
  );
}

function PwaSlide() {
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isAndroid = /android/i.test(navigator.userAgent);

  if (isIos) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Step n={1} text='Tap the Share button at the bottom of your browser (the box with an arrow).'/>
        <Step n={2} text='Scroll down and tap Add to Home Screen.'/>
        <Step n={3} text='Tap Add. Family Companion appears on your home screen like any other app.'/>
        <Note text='Works in Safari. If you are using Chrome on iPhone, tap the three-dot menu and choose Add to Home Screen.'/>
      </div>
    );
  }
  if (isAndroid) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Step n={1} text='Tap the three-dot menu in the top-right corner of Chrome.'/>
        <Step n={2} text='Tap Add to Home Screen or Install App.'/>
        <Step n={3} text='Tap Add. Family Companion will appear on your home screen.'/>
        <Note text='You may see an Install App banner appear automatically at the bottom of the screen. That works too.'/>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Step n={1} text='On iPhone: tap the Share button in Safari, then Add to Home Screen.'/>
      <Step n={2} text='On Android: tap the three-dot menu in Chrome, then Add to Home Screen.'/>
      <Note text='On desktop, look for an install icon in your browser address bar.'/>
    </div>
  );
}

function Step({ n, text }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
        background: 'var(--ink, #0e1a7a)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700,
      }}>{n}</div>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-body, #4a4d60)', paddingTop: 4 }}>{text}</p>
    </div>
  );
}

function Note({ text }) {
  return (
    <div style={{
      padding: '12px 14px', marginTop: 4,
      background: 'var(--bg-cream, #f4efe5)',
      borderLeft: '2px solid var(--gold, #d6a758)',
      fontSize: 13, lineHeight: 1.5, color: 'var(--ink-body, #4a4d60)',
    }}>{text}</div>
  );
}

function AuthSlide() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function handleGoogle() {
    setError(null);
    try { await signInWithGoogle(); }
    catch (e) { setError(e.message); }
  }

  async function handleEmail() {
    if (!email) return;
    setBusy(true); setError(null);
    try {
      await signInWithEmail(email);
      setSent(true);
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  if (sent) {
    return (
      <div style={{
        padding: '14px 16px',
        background: 'var(--bg-cream, #f4efe5)',
        borderLeft: '2px solid var(--gold, #d6a758)',
        fontSize: 14, lineHeight: 1.55,
      }}>
        Check your email for a sign-in link. You can close this window.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <button onClick={handleGoogle} style={{
        padding: '14px 16px', background: '#fff',
        border: '1px solid var(--border, rgba(14,26,122,0.15))',
        cursor: 'pointer', fontSize: 14, fontWeight: 600,
        color: 'var(--ink, #0e1a7a)',
      }}>Continue with Google</button>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'rgba(74,77,96,0.4)', margin: '4px 0',
      }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(14,26,122,0.1)' }}/>
        or
        <div style={{ flex: 1, height: 1, background: 'rgba(14,26,122,0.1)' }}/>
      </div>

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@yourschool.org"
        style={{
          padding: '14px 16px', border: '1px solid var(--border, rgba(14,26,122,0.15))',
          fontSize: 14, outline: 'none', fontFamily: 'inherit',
        }}
      />
      <button onClick={handleEmail} disabled={busy || !email} style={{
        padding: '14px 16px', background: 'var(--ink, #0e1a7a)',
        color: '#fff', border: 'none', cursor: busy ? 'wait' : 'pointer',
        fontSize: 13, letterSpacing: '0.04em', fontWeight: 600,
        opacity: busy || !email ? 0.6 : 1,
      }}>{busy ? 'Sending…' : 'Email me a sign-in link'}</button>

      {error && <div style={{ fontSize: 13, color: '#e05a4a' }}>{error}</div>}
    </div>
  );
}

Object.assign(window, { Onboarding });
