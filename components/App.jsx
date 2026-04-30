// App shell for Family Companion.
// Preserves the prototype's child/screen/tab state machine. Adds auth + subscription gates
// so the app follows the Leadership Meridian storage pattern: Supabase Auth + Stripe-gated
// entry, localStorage-first for journal/children/progress.

const { useState, useEffect } = React;

function App() {
  const { session, loaded: sessionLoaded } = useSession();
  const { subscription, loading: subLoading, refetch: refetchSub } = useSubscription(session);

  const [screen, setScreen] = useState({ name: 'home' });
  const [tab, setTab] = useState('home');
  const [ageId, setAgeId] = useState(() => localStorage.getItem('companion.age') || 'primary');
  const [searchOpen, setSearchOpen] = useState(false);
  const [addChildOpen, setAddChildOpen] = useState(false);
  const [childVer, setChildVer] = useState(0);

  const child = window.State.getActiveChild();
  const children = window.State.getChildren();

  useEffect(() => { localStorage.setItem('companion.age', ageId); }, [ageId]);

  // sync ageId to child on switch
  useEffect(() => {
    if (child) {
      const months = window.State.monthsBetween(new Date(child.birthdate), new Date());
      setAgeId(window.State.ageIdFromMonths(months));
    }
  }, [child?.id]);

  const bump = () => setChildVer(x => x + 1);

  const openEp = (epId) => setScreen({ name: 'ep', epId });
  const openArticle = (articleId) => {
    const a = window.getArticleById(articleId);
    if (a && a.age !== ageId) setAgeId(a.age);
    setScreen({ name: 'article', articleId });
  };
  const [comingSoon, setComingSoon] = useState(null);
  const openExtra = (exId) => setComingSoon(exId);

  const switchChild = (id) => {
    window.State.setActiveChildId(id);
    bump();
  };

  const onTabChange = (t) => {
    setTab(t);
    if (t === 'home') setScreen({ name: 'home' });
    else if (t === 'journal') setScreen({ name: 'journal' });
    else if (t === 'digest') setScreen({ name: 'digest' });
    else if (t === 'practice') setScreen({ name: 'practice' });
  };

  const isDemo = new URLSearchParams(window.location.search).get('preview') === '1';

  if (!sessionLoaded && !isDemo) return <CompanionSplash/>;
  if (!session && !isDemo) return <Onboarding onDone={() => {}}/>;

  return (
    <SubscriptionGate
      session={session}
      subscription={subscription}
      subLoading={subLoading}
      onActive={refetchSub}
    >
      <AppShell
        child={child}
        children={children}
        screen={screen}
        setScreen={setScreen}
        tab={tab}
        setTab={setTab}
        ageId={ageId}
        setAgeId={setAgeId}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        addChildOpen={addChildOpen}
        setAddChildOpen={setAddChildOpen}
        bump={bump}
        openEp={openEp}
        openArticle={openArticle}
        openExtra={openExtra}
        switchChild={switchChild}
        onTabChange={onTabChange}
        comingSoon={comingSoon}
        setComingSoon={setComingSoon}
      />
    </SubscriptionGate>
  );
}

function AppShell(props) {
  const {
    child, children, screen, setScreen, tab, setTab,
    ageId, setAgeId, searchOpen, setSearchOpen,
    addChildOpen, setAddChildOpen, bump,
    openEp, openArticle, openExtra, switchChild, onTabChange,
    comingSoon, setComingSoon,
  } = props;

  if (children.length === 0) {
    return (
      <div className="app-root">
        <div className="grain" />
        <ProfileOnboarding onDone={bump} />
      </div>
    );
  }

  return (
    <div className="app-root">
      <div className="grain" />

      {screen.name === 'home' && (
        <HomeScreen
          ageId={ageId}
          setAgeId={setAgeId}
          child={child}
          onAddChild={() => setAddChildOpen(true)}
          onSwitchChild={switchChild}
          onOpenEp={openEp}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenExtra={openExtra}
          onOpenDigest={() => { setTab('digest'); setScreen({ name: 'digest' }); }}
          onOpenJournal={() => { setTab('journal'); setScreen({ name: 'journal' }); }}
          onOpenPractice={() => { setTab('practice'); setScreen({ name: 'practice' }); }}
        />
      )}
      {screen.name === 'journal' && child && (
        <JournalScreen
          child={child}
          onBack={() => { setTab('home'); setScreen({ name: 'home' }); }}
          onOpenPlaybook={(id) => setScreen({ name: 'playbook', playbookId: id })}
        />
      )}
      {screen.name === 'digest' && child && (
        <DigestScreen
          child={child}
          onBack={() => { setTab('home'); setScreen({ name: 'home' }); }}
          onOpenEp={openEp}
          onOpenArticle={openArticle}
          onOpenPlaybook={(id) => setScreen({ name: 'playbook', playbookId: id })}
          onOpenTransition={(id) => setScreen({ name: 'transition', transitionId: id })}
          onOpenJournal={() => { setTab('journal'); setScreen({ name: 'journal' }); }}
        />
      )}
      {screen.name === 'practice' && child && (
        <PracticeScreen
          child={child}
          onBack={() => { setTab('home'); setScreen({ name: 'home' }); }}
          onOpenPlaybook={(id) => setScreen({ name: 'playbook', playbookId: id })}
          onOpenTransition={(id) => setScreen({ name: 'transition', transitionId: id })}
          onOpenRoom={(id) => setScreen({ name: 'room', roomId: id })}
          onOpenQA={() => setScreen({ name: 'qa' })}
          onOpenCohort={() => setScreen({ name: 'cohort' })}
          onOpenYearReview={() => setScreen({ name: 'yearreview' })}
        />
      )}
      {screen.name === 'ep' && (
        <EpScreen
          epId={screen.epId}
          ageId={ageId}
          setAgeId={setAgeId}
          onBack={() => setScreen({ name: 'home' })}
          onOpenArticle={openArticle}
        />
      )}
      {screen.name === 'article' && (
        <ArticleScreen
          articleId={screen.articleId}
          onBack={() => setScreen(s => s.name === 'article' ? { name: 'ep', epId: window.getArticleById(s.articleId).ep } : s)}
          onOpenArticle={openArticle}
        />
      )}
      {screen.name === 'playbook' && (
        <PlaybookScreen
          playbookId={screen.playbookId}
          onBack={() => setScreen({ name: 'practice' })}
        />
      )}
      {screen.name === 'transition' && child && (
        <TransitionScreen
          child={child}
          transitionId={screen.transitionId}
          onBack={() => setScreen({ name: 'practice' })}
        />
      )}
      {screen.name === 'room' && child && (
        <RoomScreen
          child={child}
          roomId={screen.roomId}
          onBack={() => setScreen({ name: 'practice' })}
        />
      )}
      {screen.name === 'qa' && child && (
        <QAScreen
          child={child}
          onBack={() => setScreen({ name: 'practice' })}
        />
      )}
      {screen.name === 'cohort' && child && (
        <CohortScreen
          child={child}
          onBack={() => setScreen({ name: 'practice' })}
        />
      )}
      {screen.name === 'yearreview' && child && (
        <YearReviewScreen
          child={child}
          onBack={() => setScreen({ name: 'practice' })}
        />
      )}

      <TabBar current={tab} onChange={onTabChange} hasChild={!!child} />

      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onOpenArticle={(id) => { setSearchOpen(false); openArticle(id); }}
          realAI={false}
        />
      )}

      {addChildOpen && (
        <AddChildModal onClose={(added) => { setAddChildOpen(false); if (added) bump(); }} />
      )}

      {comingSoon && (
        <div
          onClick={() => setComingSoon(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(14,26,122,0.32)',
            display: 'flex', alignItems: 'flex-end',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', background: '#fff',
              padding: '28px 24px 44px',
              borderRadius: '18px 18px 0 0',
              boxShadow: '0 -4px 24px rgba(14,26,122,0.12)',
            }}
          >
            <div style={{
              width: 36, height: 4, borderRadius: 2,
              background: 'rgba(14,26,122,0.15)',
              margin: '0 auto 24px',
            }}/>
            <div style={{
              fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--gold, #d6a758)', marginBottom: 10, fontWeight: 600,
            }}>Coming soon</div>
            <h3 style={{
              fontFamily: 'var(--font-heading, Georgia, serif)', fontWeight: 400,
              fontSize: 22, lineHeight: 1.2, color: 'var(--ink, #0e1a7a)',
              margin: '0 0 12px',
            }}>More on this topic is on its way.</h3>
            <p style={{
              fontSize: 14.5, lineHeight: 1.6,
              color: 'var(--ink-body, #4a4d60)', margin: '0 0 24px',
            }}>
              This section is still being written. Check back soon.
            </p>
            <button
              onClick={() => setComingSoon(null)}
              style={{
                width: '100%', padding: '14px',
                background: 'var(--ink, #0e1a7a)', color: '#fff',
                border: 'none', borderRadius: 10,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CompanionSplash() {
  return (
    <div className="app-root" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <img src="assets/cube-gold.svg" alt="" style={{ width: 44, height: 44, opacity: 0.7 }}/>
    </div>
  );
}

Object.assign(window, { App });
