// Journal.jsx — observation journal with tags + pattern detection

const { useState: useStateJ, useMemo: useMemoJ } = React;

function JournalScreen({ child, onBack, onOpenPlaybook }) {
  const [adding, setAdding] = useStateJ(false);
  const [refresh, setRefresh] = useStateJ(0);

  const entries = window.State.getJournal(child.id);
  const patterns = window.State.detectPatterns(child.id);

  const onAdded = () => {
    setAdding(false);
    setRefresh(x => x + 1);
  };

  const del = (id) => {
    window.State.deleteObservation(id);
    setRefresh(x => x + 1);
  };

  return (
    <div className="scroll journal-scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14">
            <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="nav-pill journal-add" onClick={() => setAdding(true)}>
          <span style={{ fontSize: 18, lineHeight: 1, marginRight: 6, color: 'var(--gold)' }}>+</span>
          <span style={{ fontSize: 12, fontWeight: 500 }}>New</span>
        </div>
      </div>

      <div className="journal-hero">
        <div style={{ height: 30 }} />
        <div className="journal-kicker">Observation journal</div>
        <div className="journal-title">What you noticed about <span className="journal-child-name" style={{ color: child.color }}>{child.name}</span></div>
        <div className="journal-sub">
          {entries.length === 0
            ? 'Start with one small thing. A sentence. A moment. It adds up.'
            : `${entries.length} entr${entries.length === 1 ? 'y' : 'ies'} · ${patterns.length} pattern${patterns.length === 1 ? '' : 's'} emerging`}
        </div>
      </div>

      {patterns.length > 0 && (
        <div className="pattern-block">
          <div className="pattern-kicker">What we’re seeing in your last two weeks</div>
          {patterns.map(p => (
            <PatternCard key={p.tag.id} pattern={p} child={child} onOpenPlaybook={onOpenPlaybook} />
          ))}
        </div>
      )}

      <div className="journal-list">
        {entries.map(e => (
          <JournalEntry key={e.id} entry={e} onDelete={() => del(e.id)} />
        ))}
        {entries.length === 0 && (
          <div className="journal-empty">
            <div className="journal-empty-serif">Your first observation is the hardest.</div>
            <div className="journal-empty-sub">
              Try: “She poured her own water today.” Or: “He asked why the moon follows us.” The note doesn’t have to be a revelation to be worth keeping.
            </div>
            <button className="onboard-btn" style={{ marginTop: 18, maxWidth: 200 }} onClick={() => setAdding(true)}>
              Add one now
            </button>
          </div>
        )}
      </div>

      {adding && <AddObservationModal child={child} onClose={onAdded} />}
      <div style={{ height: 140 }} />
    </div>
  );
}

function PatternCard({ pattern, child, onOpenPlaybook }) {
  const suggestions = patternSuggestions(pattern.tag.id);
  return (
    <div className="pattern-card" style={{ '--dot': pattern.tag.color }}>
      <div className="pattern-head">
        <span className="pattern-dot" />
        <span className="pattern-label">{pattern.tag.label}</span>
        <span className="pattern-count">{pattern.count} observations</span>
      </div>
      <div className="pattern-body">
        {suggestions.text.replace('{name}', child.name)}
      </div>
      {suggestions.playbookId && (
        <button className="pattern-link" onClick={() => onOpenPlaybook(suggestions.playbookId)}>
          Read the playbook →
        </button>
      )}
    </div>
  );
}

function patternSuggestions(tagId) {
  const map = {
    'order': {
      text: '{name} is showing the sensitive period for order. They are asking for the same book, the same cup, the same sequence — and struggling when it breaks. This is the right time to honor their rituals and watch your own rigidity soften.',
    },
    'language': {
      text: 'A language bloom is underway. Narrate less, listen more. Offer rich, real vocabulary in context — not flashcards.',
    },
    'movement': {
      text: 'Their body is asking for work. Climb, carry, push. If you can give them something heavy to move — a stack of books, a basket of laundry — they will thank you by sleeping.',
    },
    'small-objects': {
      text: 'The sensitive period for small objects is specific and short. Tiny buttons, crumbs, poppy seeds. Let them study. Small containers and tweezers are welcome work.',
    },
    'independence': {
      text: '“I do it myself” is the refrain. Slow down your morning by fifteen minutes and let them. The capability they build this month is worth the minutes.',
    },
    'social': {
      text: 'Social noticing is sharpening. Don’t over-narrate their friendships. Do protect their capacity for solitude.',
    },
    'sensory': {
      text: 'A sensory thread is running through your notes. Water play, sand, mud, smells. Let them follow it as far as it goes — sensory work is cognitive work at this age.',
    },
    'emotion': {
      text: 'The nervous system is working. Several big-feelings entries in two weeks means something is moving through. This is the moment to double down on sleep, food, and unscheduled time.',
      playbookId: 'public-meltdown',
    },
    'milestone': {
      text: 'Milestones are stacking. Write them down. You will not remember them as clearly in a year as you think you will.',
    },
  };
  return map[tagId] || { text: 'A pattern is emerging. Worth watching another week.' };
}

function JournalEntry({ entry, onDelete }) {
  const date = new Date(entry.date);
  const rel = relTime(date);
  const tags = (entry.tags || []).map(id => window.State.TAGS.find(t => t.id === id)).filter(Boolean);
  return (
    <div className="j-entry">
      <div className="j-entry-date">{rel}</div>
      <div className="j-entry-text">{entry.text}</div>
      {tags.length > 0 && (
        <div className="j-entry-tags">
          {tags.map(t => (
            <span key={t.id} className="j-tag" style={{ '--tc': t.color }}>
              <span className="j-tag-dot" />{t.label}
            </span>
          ))}
        </div>
      )}
      <button className="j-entry-del" onClick={onDelete} aria-label="Delete">×</button>
    </div>
  );
}

function relTime(d) {
  const diff = Date.now() - d.getTime();
  const min = Math.floor(diff / 60000);
  if (min < 60) return min < 1 ? 'just now' : `${min} min ago`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h} hr${h === 1 ? '' : 's'} ago`;
  const days = Math.floor(h / 24);
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function AddObservationModal({ child, onClose }) {
  const [text, setText] = useStateJ('');
  const [selectedTags, setSelectedTags] = useStateJ([]);

  const toggleTag = (id) => {
    setSelectedTags(t => t.includes(id) ? t.filter(x => x !== id) : [...t, id]);
  };

  const save = () => {
    if (!text.trim()) return;
    window.State.addObservation({ childId: child.id, text: text.trim(), tags: selectedTags });
    onClose();
  };

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-sheet large" onClick={e => e.stopPropagation()}>
        <div className="modal-kicker">Observation · {child.name}</div>
        <textarea
          className="obs-textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What did you see? One sentence is enough."
          autoFocus
          rows={4}
        />
        <div className="obs-tags-label">Tag (optional)</div>
        <div className="obs-tags">
          {window.State.TAGS.map(t => (
            <button
              key={t.id}
              className={`obs-tag ${selectedTags.includes(t.id) ? 'on' : ''}`}
              style={{ '--tc': t.color }}
              onClick={() => toggleTag(t.id)}
            >
              <span className="obs-tag-dot" />{t.label}
            </button>
          ))}
        </div>
        <div className="modal-actions">
          <button className="modal-btn ghost" onClick={onClose}>Cancel</button>
          <button className={`modal-btn ${text.trim() ? '' : 'disabled'}`} onClick={save}>Save</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { JournalScreen, AddObservationModal });
