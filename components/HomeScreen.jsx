// HomeScreen.jsx — landing with child-aware personalization

const { useState, useEffect } = React;

function BrandHead({ onAddChild, hasChildren }) {
  return (
    <div className="brand-head">
      <svg className="brand-mark" viewBox="0 0 100 100">
        <polygon points="50,10 90,32 50,54 10,32" fill="#f0d9a1"/>
        <polygon points="50,54 90,32 90,78 50,100" fill="#d6a758"/>
        <polygon points="10,32 50,54 50,100 10,78" fill="#e1be7a"/>
      </svg>
      <div className="brand-text">
        <div className="brand-name">Family Companion</div>
        <div className="brand-sub">by Montessori Makers Group</div>
      </div>
    </div>
  );
}

function Greeting({ child, timeOfDay }) {
  if (child) {
    const digest = window.State.weeklyDigestFor(child);
    const patterns = digest?.patterns || [];
    const patternLine = patterns.length > 0
      ? `You’ve noticed ${patterns[0].tag.label.toLowerCase()} coming up for them this week.`
      : `What are you watching for this week?`;
    const msgs = {
      earlyMorning: [`You’re up early.`, `The house is quiet. Take this one for yourself before ${child.name} wakes.`],
      morning: [`Good morning with ${child.name}.`, patternLine],
      midday: [`Midday check-in.`, `However the morning went, it’s already behind you.`],
      afternoon: [`Glad you’re here.`, `Take a breath. We’ll sort through it together.`],
      evening: [`The evening shift.`, `Bedtime is the hardest hour. You don’t have to get it right tonight.`],
      lateEvening: [`Still up with ${child.name}?`, `Sometimes the day just runs long. You’re doing fine.`],
      night: [`It’s late.`, `Whatever brought you here, you’re not doing it wrong.`],
      smallHours: [`3 a.m.`, `If you’re here now, something is hard. Sit with us a minute.`],
    };
    const [head, sub] = msgs[timeOfDay] || msgs.afternoon;
    return (
      <div className="greeting">
        <div className="greeting-serif">{head}</div>
        <div className="greeting-sub">{sub}</div>
      </div>
    );
  }
  const g = {
    earlyMorning: { head: 'You’re up early.', sub: 'The house is quiet. Take this one for yourself.' },
    morning: { head: 'Good morning.', sub: 'What’s sitting with you today?' },
    midday: { head: 'Midday check-in.', sub: 'However the morning went, it’s already behind you.' },
    afternoon: { head: 'Glad you’re here.', sub: 'Take a breath. We’ll sort through it together.' },
    evening: { head: 'The evening shift.', sub: 'Bedtime is the hardest hour. You don’t have to get it right tonight.' },
    lateEvening: { head: 'Still up?', sub: 'Sometimes the day just runs long.' },
    night: { head: 'It’s late.', sub: 'Whatever brought you here, you’re not doing it wrong.' },
    smallHours: { head: '3 a.m.', sub: 'If you’re here now, something is hard. Sit with us a minute.' },
  }[timeOfDay] || { head: 'Glad you’re here.', sub: '' };
  return (
    <div className="greeting">
      <div className="greeting-serif">{g.head}</div>
      <div className="greeting-sub">{g.sub}</div>
    </div>
  );
}

function SearchSurface({ onOpen, child }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const phrasesWithChild = child ? [
    `${child.name} had a meltdown at drop-off again.`,
    `${child.name} says school is "boring."`,
    `Is ${child.name} on track for her age?`,
    `${child.name} won’t stop hitting her sister.`,
    `${child.name} is starting public school next year.`,
  ] : [
    'My son is 5 and still can’t write his name…',
    'She’s starting public school next year and I’m scared.',
    'Why is there no homework?',
    'He had a meltdown at drop-off again.',
    'My daughter says school is "boring."',
  ];
  useEffect(() => {
    const id = setInterval(() => setPhraseIdx(i => (i + 1) % phrasesWithChild.length), 3800);
    return () => clearInterval(id);
  }, [child?.id]);

  return (
    <div className="search-surface" onClick={onOpen} role="button">
      <div className="search-label">What’s on your mind?</div>
      <div className="search-prompt" style={{ minHeight: 54 }}>
        <span style={{ color: 'var(--ink-muted)', fontStyle: 'italic' }}>
          {phrasesWithChild[phraseIdx]}
        </span>
        <span className="cursor" />
      </div>
    </div>
  );
}

function AgeRow({ ageId, setAgeId }) {
  return (
    <div className="age-row">
      {window.AGE_LEVELS.map(a => (
        <button
          key={a.id}
          className={`age-chip ${ageId === a.id ? 'active' : ''}`}
          onClick={() => setAgeId(a.id)}
        >
          {a.label}
          <span className="age-chip-range">{a.range}</span>
        </button>
      ))}
    </div>
  );
}

const BEAD_COLORS = {
  1: { fill: '#D14F3E', stroke: '#8E2D20' },
  2: { fill: '#6FB26B', stroke: '#3F7A3D' },
  3: { fill: '#F2B8C6', stroke: '#B77287' },
  4: { fill: '#F3C84A', stroke: '#B88A15' },
  5: { fill: '#7FB4D6', stroke: '#406F8E' },
};

function BeadBar({ count }) {
  const c = BEAD_COLORS[count] || BEAD_COLORS[1];
  const r = 7; const gap = 1; const d = r * 2;
  const w = count * d + (count - 1) * gap + 4;
  const h = d + 4; const cy = h / 2;
  return (
    <svg className="bead-bar" width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <line x1={2} y1={cy} x2={w - 2} y2={cy} stroke="#8a6a3a" strokeWidth="1" />
      {Array.from({ length: count }).map((_, i) => {
        const cx = 2 + r + i * (d + gap);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill={c.fill} stroke={c.stroke} strokeWidth="0.8" />
            <ellipse cx={cx - 2} cy={cy - 2.5} rx={2.2} ry={1.3} fill="rgba(255,255,255,0.55)" />
          </g>
        );
      })}
    </svg>
  );
}

function EpCard({ ep, onClick, idx }) {
  return (
    <div className="ep-card" style={{ '--tint': ep.tint, '--accent': ep.accent }} onClick={onClick}>
      <div className="ep-card-mark"><BeadBar count={ep.beads} /></div>
      <div className="ep-card-kicker">Entry 0{idx + 1}</div>
      <div className="ep-card-title">{ep.title}</div>
      <div className="ep-card-blurb">{ep.blurb}</div>
      <div className="ep-card-arrow">Explore &nbsp;→</div>
    </div>
  );
}

function TodayCard({ child, onOpenDigest, onOpenJournal }) {
  const digest = window.State.weeklyDigestFor(child);
  const lastObs = window.State.getJournal(child.id)[0];
  return (
    <div className="today-card" onClick={onOpenDigest}>
      <div className="today-head">
        <div className="today-kicker">This week with {child.name}</div>
        <div className="today-arrow">→</div>
      </div>
      <div className="today-stats">
        <div className="today-stat">
          <div className="today-stat-num">{digest?.obsCount || 0}</div>
          <div className="today-stat-lbl">observations this week</div>
        </div>
        <div className="today-stat">
          <div className="today-stat-num">{digest?.patterns.length || 0}</div>
          <div className="today-stat-lbl">pattern{digest?.patterns.length === 1 ? '' : 's'} emerging</div>
        </div>
      </div>
      {lastObs ? (
        <div className="today-last">
          <span className="today-last-lbl">Most recent</span>
          <span className="today-last-text">{lastObs.text.slice(0, 80)}{lastObs.text.length > 80 ? '…' : ''}</span>
        </div>
      ) : (
        <div className="today-empty">
          Write down one thing you noticed. <span onClick={e => { e.stopPropagation(); onOpenJournal(); }} className="today-link">Open journal →</span>
        </div>
      )}
    </div>
  );
}

function HomeScreen({ ageId, setAgeId, onOpenEp, onOpenSearch, onOpenExtra, child, onAddChild, onSwitchChild, onOpenDigest, onOpenJournal, onOpenPractice }) {
  const now = new Date();
  const hour = now.getHours();
  const timeOfDay = hour < 5 ? 'night' : hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : hour < 22 ? 'evening' : 'night';

  return (
    <div className="scroll">
      <BrandHead />
      <Greeting child={child} timeOfDay={timeOfDay} />

      {child && (
        <div style={{ padding: '0 18px 16px' }}>
          <ChildSwitcher activeId={child.id} onChange={onSwitchChild} onAdd={onAddChild} />
        </div>
      )}

      {child && <TodayCard child={child} onOpenDigest={onOpenDigest} onOpenJournal={onOpenJournal} />}

      <SearchSurface onOpen={onOpenSearch} child={child} />

      {!child && (
        <>
          <div className="section-label">
            <span className="section-eyebrow">For your child</span>
          </div>
          <AgeRow ageId={ageId} setAgeId={setAgeId} />
        </>
      )}

      <div className="section-label">
        <span className="section-eyebrow">Start where you are</span>
        <span className="section-count">five places to begin</span>
      </div>

      <div className="ep-stack">
        {window.ENTRY_POINTS.map((ep, i) => (
          <EpCard key={ep.id} ep={ep} idx={i} onClick={() => onOpenEp(ep.id)} />
        ))}
      </div>

      <div className="section-label">
        <span className="section-eyebrow">Also here for you</span>
      </div>
      <div className="extras">
        {window.EXTRA_SECTIONS.map(ex => (
          <div className="extra-card" key={ex.id} onClick={() => onOpenExtra(ex.id)}>
            <div className="extra-title">{ex.title}</div>
            <div className="extra-blurb">{ex.blurb}</div>
          </div>
        ))}
      </div>

      <div className="foot-mark">
        <div className="foot-mark-line" />
        <div className="foot-mark-serif">
          Because children experience the organization adults create.
        </div>
      </div>
      <div style={{ height: 100 }} />
    </div>
  );
}

function TabBar({ current, onChange, hasChild }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 8l7-5 7 5v9H3V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
    )},
    { id: 'journal', label: 'Journal', disabled: !hasChild, icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 3h10a2 2 0 012 2v12H6a2 2 0 01-2-2V3z" stroke="currentColor" strokeWidth="1.6"/><path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
    )},
    { id: 'digest', label: 'This week', disabled: !hasChild, icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
    )},
    { id: 'practice', label: 'Practice', disabled: !hasChild, icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 5h12M4 10h12M4 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
    )},
  ];
  return (
    <div className="tab-bar">
      {tabs.map(t => (
        <button
          key={t.id}
          className={`tab-btn ${current === t.id ? 'active' : ''} ${t.disabled ? 'disabled' : ''}`}
          onClick={() => !t.disabled && onChange(t.id)}
        >
          <span className="tab-icon">{t.icon}</span>
          <span className="tab-label">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { HomeScreen, TabBar });
