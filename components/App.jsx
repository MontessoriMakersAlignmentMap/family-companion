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
  const openExtra = (exId) => alert('Extra section content is coming soon: ' + exId);

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

  const isDemo = localStorage.getItem('companion.demo') === '1';

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
