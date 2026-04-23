// Digest.jsx — "This Week" screen + "Practice" hub (env, transitions, playbooks, Q&A, cohort, year in review)

const { useState: useStateD, useMemo: useMemoD } = React;

// ============ WEEKLY DIGEST ============
function DigestScreen({ child, onBack, onOpenEp, onOpenArticle, onOpenPlaybook, onOpenTransition, onOpenJournal }) {
  const digest = window.State.weeklyDigestFor(child);
  if (!digest) return null;
  const ageLevel = window.AGE_LEVELS.find(a => a.id === digest.ageId);

  const recommendations = weeklyPicks(digest, child);
  const sundayDate = lastSunday();

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div className="digest-hero">
        <div style={{ height: 44 }} />
        <div className="digest-kicker">Sunday, {sundayDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</div>
        <div className="digest-title">
          This week with <span style={{ color: child.color }}>{child.name}</span>
        </div>
        <div className="digest-sub">
          {child.name} is {window.State.formatAge(child.birthdate)} · {ageLevel.label}. Four small notes for the week ahead.
        </div>
      </div>

      <div className="digest-body">
        {digest.patterns.length > 0 && (
          <div className="digest-section">
            <div className="digest-section-kicker">What you’ve been seeing</div>
            <div className="digest-patterns">
              {digest.patterns.slice(0, 2).map(p => (
                <div key={p.tag.id} className="digest-pattern" style={{ '--tc': p.tag.color }}>
                  <span className="pattern-dot" />
                  <div>
                    <div className="digest-pattern-label">{p.tag.label} · {p.count} observations</div>
                    <div className="digest-pattern-body">{patternShort(p.tag.id, child.name)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="digest-section">
          <div className="digest-section-kicker">Worth your 4 minutes</div>
          {recommendations.article && (
            <div className="digest-article-card" onClick={() => onOpenArticle(recommendations.article.id)}>
              <div className="digest-article-kicker">
                {window.ENTRY_POINTS.find(e => e.id === recommendations.article.ep)?.title.replace(/[?.]/g, '')}
              </div>
              <div className="digest-article-headline">{recommendations.article.headline}</div>
              <div className="digest-article-arrow">Read →</div>
            </div>
          )}
        </div>

        <div className="digest-section">
          <div className="digest-section-kicker">Try this week</div>
          <ul className="digest-try-list">
            {recommendations.tryThis.map((t, i) => (
              <li key={i}><span className="mark">{i + 1}</span>{t}</li>
            ))}
          </ul>
        </div>

        <div className="digest-section">
          <div className="digest-section-kicker">Watch for</div>
          <div className="digest-watch">
            {recommendations.watchFor.map((w, i) => (
              <div key={i} className="digest-watch-item">
                <span className="digest-watch-dot" />{w}
              </div>
            ))}
          </div>
        </div>

        {digest.obsCount === 0 && (
          <div className="digest-prompt" onClick={onOpenJournal}>
            <div className="digest-prompt-head">You didn’t write anything down this week.</div>
            <div className="digest-prompt-body">One sentence is enough. The pattern-finding gets better as you go.</div>
            <div className="digest-prompt-link">Open journal →</div>
          </div>
        )}

        <div style={{ height: 140 }} />
      </div>
    </div>
  );
}

function lastSunday() {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function patternShort(id, name) {
  const map = {
    'order': `${name} is asking for sameness. Honor it this week.`,
    'language': `Language is blooming. Give rich vocabulary in real context.`,
    'movement': `Their body wants work. Offer something heavy to carry.`,
    'small-objects': `Small-object sensitivity. Tweezers, beads, sorting work.`,
    'independence': `"I do it myself." Build fifteen extra morning minutes.`,
    'social': `Social attunement is sharpening.`,
    'sensory': `Water, sand, texture. Let them follow it.`,
    'emotion': `Nervous system is working. Protect sleep and unscheduled time.`,
    'milestone': `Write down what you see. You will want to remember.`,
  };
  return map[id] || '';
}

function weeklyPicks(digest, child) {
  const articles = window.ARTICLES.filter(a => a.age === digest.ageId && !a.stub);
  const article = articles[Math.floor(Math.random() * articles.length)] || articles[0];

  const byAge = {
    nido: {
      tryThis: [
        'One 30-minute block of uninterrupted floor time every day.',
        'Replace one plastic rattle with one real object — a wooden spoon, a smooth stone.',
      ],
      watchFor: ['A new kind of grasp', 'The length of time absorbed in one thing', 'Reaching across midline'],
    },
    toddler: {
      tryThis: [
        'Let them set the table this week. Real plates, not plastic.',
        'One fewer question — two real choices instead.',
      ],
      watchFor: ['Pouring work', 'A new rhythm to their day', 'Longer stretches of concentration'],
    },
    primary: {
      tryThis: [
        'Cook one meal with them this week. They choose.',
        'Leave five more minutes in the morning. Let them do it themselves.',
      ],
      watchFor: ['Questions about letters or sounds', 'The first signs of writing in play', 'Longer social engagement'],
    },
    lower_el: {
      tryThis: [
        'Ask them what they are curious about this week. Follow it.',
        'Give them one real responsibility in the household.',
      ],
      watchFor: ['Moral reasoning changing', 'Friendship narratives sharpening', 'New interest in how things work'],
    },
    upper_el: {
      tryThis: [
        'Invite them on one errand as a real partner, not a passenger.',
        'Ask their opinion on a family decision, and take it seriously.',
      ],
      watchFor: ['A sense of fairness developing', 'New abstractions they can hold', 'Pulling away in healthy ways'],
    },
    adolescent: {
      tryThis: [
        'Drive them somewhere without an agenda. Talk in the margins.',
        'Let them be bored. Don’t fill it.',
      ],
      watchFor: ['Sleep shifting later', 'Narrower friendships, deeper ones', 'First signs of a real vocation'],
    },
    high_school: {
      tryThis: [
        'Ask one real question about their world. Listen without commenting.',
        'Cede one parenting task you’re still doing that they could own.',
      ],
      watchFor: ['Moral compass clarifying', 'A future self they talk about', 'Who they choose when they can choose'],
    },
  };
  return { article, ...(byAge[digest.ageId] || byAge.primary) };
}

// ============ PRACTICE HUB ============
function PracticeScreen({ child, onBack, onOpenPlaybook, onOpenTransition, onOpenRoom, onOpenQA, onOpenCohort, onOpenYearReview }) {
  const months = window.State.monthsBetween(new Date(child.birthdate), new Date());
  const ageId = window.State.ageIdFromMonths(months);

  const applicablePlaybooks = window.PLAYBOOKS.filter(p => p.ages.includes(ageId));
  const applicableTransitions = window.TRANSITIONS.filter(t => t.ages.includes(ageId));
  const ageLevel = window.AGE_LEVELS.find(a => a.id === ageId);

  const bday = new Date(child.birthdate);
  const now = new Date();
  const hasCompleteYear = window.State.monthsBetween(bday, now) >= 12;

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div style={{ padding: '110px 22px 10px' }}>
        <div className="section-eyebrow" style={{ color: 'var(--gold)' }}>Practice</div>
        <div className="greeting-serif" style={{ fontSize: 30, marginTop: 10 }}>
          Tools for the long middle with <span style={{ color: child.color }}>{child.name}</span>
        </div>
      </div>

      {/* Rooms */}
      <div className="section-label" style={{ paddingTop: 14 }}>
        <span className="section-eyebrow">Prepared environment</span>
        <span className="section-count">{ageLevel.label}</span>
      </div>
      <div className="practice-rooms">
        {window.ROOMS.filter(r => r.byAge[ageId]).map(r => {
          const state = window.State.getRoomState(child.id, r.id);
          const total = r.byAge[ageId].length;
          const done = state.done.length;
          return (
            <button key={r.id} className="practice-room-card" onClick={() => onOpenRoom(r.id)}>
              <div className="practice-room-title">{r.title}</div>
              <div className="practice-room-progress">
                <div className="prp-bar"><div className="prp-fill" style={{ width: `${(done / total) * 100}%` }} /></div>
                <span>{done}/{total}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Transitions */}
      {applicableTransitions.length > 0 && (
        <>
          <div className="section-label" style={{ paddingTop: 20 }}>
            <span className="section-eyebrow">Transitions</span>
          </div>
          <div className="practice-list">
            {applicableTransitions.map(t => {
              const enrolled = window.State.getTransition(child.id, t.id);
              const progress = enrolled ? enrolled.completedDays.length : 0;
              return (
                <button key={t.id} className="practice-row" onClick={() => onOpenTransition(t.id)}>
                  <div>
                    <div className="practice-row-title">{t.title}</div>
                    <div className="practice-row-sub">{t.blurb}</div>
                  </div>
                  <div className="practice-row-meta">
                    {enrolled ? `${progress}/${t.duration}` : `${t.duration} days`}
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Playbooks */}
      {applicablePlaybooks.length > 0 && (
        <>
          <div className="section-label" style={{ paddingTop: 20 }}>
            <span className="section-eyebrow">Behavior playbooks</span>
            <span className="section-count">situational scripts</span>
          </div>
          <div className="practice-list">
            {applicablePlaybooks.map(p => (
              <button key={p.id} className="practice-row" onClick={() => onOpenPlaybook(p.id)}>
                <div>
                  <div className="practice-row-title">{p.title}</div>
                  <div className="practice-row-sub">{p.situation}</div>
                </div>
                <div className="practice-row-meta">→</div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Q&A */}
      <div className="section-label" style={{ paddingTop: 20 }}>
        <span className="section-eyebrow">Question corner</span>
      </div>
      <div className="practice-list">
        <button className="practice-row" onClick={onOpenQA}>
          <div>
            <div className="practice-row-title">Ask a guide, or browse what others asked</div>
            <div className="practice-row-sub">{window.QUESTIONS_ARCHIVE.length} answered · moderated · 48hr response</div>
          </div>
          <div className="practice-row-meta">→</div>
        </button>
      </div>

      {/* Cohort */}
      <div className="section-label" style={{ paddingTop: 20 }}>
        <span className="section-eyebrow">Your cohort</span>
      </div>
      <div className="practice-list">
        <button className="practice-row" onClick={onOpenCohort}>
          <div>
            <div className="practice-row-title">{ageLevel.label} families</div>
            <div className="practice-row-sub">
              {window.COHORT_GROUPS.find(g => g.id === ageId)?.members || 20} parents within a few months of {child.name}
            </div>
          </div>
          <div className="practice-row-meta">→</div>
        </button>
      </div>

      {/* Year in review */}
      {hasCompleteYear && (
        <>
          <div className="section-label" style={{ paddingTop: 20 }}>
            <span className="section-eyebrow">Looking back</span>
          </div>
          <div className="practice-list">
            <button className="practice-row" onClick={onOpenYearReview}>
              <div>
                <div className="practice-row-title">{child.name}’s year in review</div>
                <div className="practice-row-sub">What you noticed, what mattered</div>
              </div>
              <div className="practice-row-meta">→</div>
            </button>
          </div>
        </>
      )}

      <div style={{ height: 140 }} />
    </div>
  );
}

// ============ ROOM DETAIL ============
function RoomScreen({ child, roomId, onBack }) {
  const room = window.ROOMS.find(r => r.id === roomId);
  const months = window.State.monthsBetween(new Date(child.birthdate), new Date());
  const ageId = window.State.ageIdFromMonths(months);
  const items = room.byAge[ageId] || [];
  const [, setR] = useStateD(0);
  const state = window.State.getRoomState(child.id, roomId);

  const toggle = (i) => {
    window.State.toggleRoomItem(child.id, roomId, i);
    setR(x => x + 1);
  };

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div className="room-hero">
        <div style={{ height: 44 }} />
        <div className="digest-kicker">Prepared environment</div>
        <div className="digest-title">{room.title}</div>
        <div className="digest-sub">{room.blurb}</div>
      </div>

      <div className="room-list">
        {items.map((item, i) => {
          const done = state.done.includes(i);
          return (
            <button key={i} className={`room-item ${done ? 'done' : ''}`} onClick={() => toggle(i)}>
              <span className="room-check">{done ? '✓' : ''}</span>
              <span className="room-text">{item}</span>
            </button>
          );
        })}
      </div>
      <div style={{ height: 140 }} />
    </div>
  );
}

// ============ TRANSITION DETAIL ============
function TransitionScreen({ child, transitionId, onBack }) {
  const t = window.TRANSITIONS.find(x => x.id === transitionId);
  const [, setR] = useStateD(0);
  let progress = window.State.getTransition(child.id, transitionId);

  const enroll = () => {
    window.State.enrollTransition(child.id, transitionId);
    setR(x => x + 1);
  };
  const toggle = (i) => {
    window.State.toggleTransitionDay(child.id, transitionId, i);
    setR(x => x + 1);
  };

  progress = window.State.getTransition(child.id, transitionId);
  const completedCount = progress?.completedDays.length || 0;

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div className="transition-hero">
        <div style={{ height: 44 }} />
        <div className="digest-kicker">Transition · {t.duration} days</div>
        <div className="digest-title">{t.title}</div>
        <div className="digest-sub">{t.blurb}</div>

        {progress ? (
          <div className="transition-progress">
            <div className="tp-bar"><div className="tp-fill" style={{ width: `${(completedCount / t.duration) * 100}%` }} /></div>
            <span>{completedCount} of {t.duration} days</span>
          </div>
        ) : (
          <button className="onboard-btn" style={{ marginTop: 18, maxWidth: 220 }} onClick={enroll}>
            Begin this arc
          </button>
        )}
      </div>

      {progress && (
        <div className="days-list">
          {t.days.map((d, i) => {
            const done = progress.completedDays.includes(i);
            return (
              <div key={i} className={`day-card ${done ? 'done' : ''}`}>
                <button className="day-check" onClick={() => toggle(i)}>
                  <span>{done ? '✓' : d.day}</span>
                </button>
                <div className="day-body">
                  <div className="day-head">{d.head}</div>
                  <div className="day-text">{d.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div style={{ height: 140 }} />
    </div>
  );
}

// ============ PLAYBOOK DETAIL ============
function PlaybookScreen({ playbookId, onBack }) {
  const p = window.PLAYBOOKS.find(x => x.id === playbookId);
  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div className="playbook-hero">
        <div style={{ height: 44 }} />
        <div className="digest-kicker">Behavior playbook</div>
        <div className="digest-title">{p.title}</div>
        <div className="playbook-situation">{p.situation}</div>
      </div>

      <div className="playbook-steps">
        {p.steps.map((s, i) => (
          <div key={i} className="playbook-step">
            <div className="playbook-step-num">{i + 1}</div>
            <div className="playbook-step-body">
              <div className="playbook-step-head">{s.head}</div>
              <div className="playbook-step-text">{s.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="article-block navy" style={{ margin: '28px 18px 0' }}>
        <div className="article-block-label">Why this works</div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.95)' }}>
          {p.whyThisWorks}
        </p>
      </div>
      <div style={{ height: 140 }} />
    </div>
  );
}

// ============ Q&A SCREEN ============
function QAScreen({ child, onBack }) {
  const [asking, setAsking] = useStateD(false);
  const [question, setQuestion] = useStateD('');
  const [submitted, setSubmitted] = useStateD(false);

  const asked = window.State.getAskedQuestions(child.id);
  const archive = window.QUESTIONS_ARCHIVE;

  const submit = () => {
    if (!question.trim()) return;
    window.State.addAskedQuestion({ childId: child.id, text: question.trim() });
    setSubmitted(true);
    setTimeout(() => { setAsking(false); setSubmitted(false); setQuestion(''); }, 1800);
  };

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div style={{ padding: '110px 22px 10px' }}>
        <div className="digest-kicker">Question corner</div>
        <div className="digest-title">Ask a guide</div>
        <div className="digest-sub">Moderated. 48-hour response. Every answer joins the archive.</div>
      </div>

      <div style={{ padding: '14px 18px' }}>
        <button className="qa-ask-btn" onClick={() => setAsking(true)}>
          <span style={{ color: 'var(--gold)', marginRight: 8, fontSize: 18 }}>+</span>
          Ask about {child.name}
        </button>
      </div>

      {asked.length > 0 && (
        <>
          <div className="section-label" style={{ paddingTop: 10 }}>
            <span className="section-eyebrow">Your questions</span>
          </div>
          <div className="qa-list">
            {asked.map(q => (
              <div key={q.id} className="qa-yours">
                <div className="qa-yours-q">{q.text}</div>
                <div className="qa-yours-meta">Awaiting response · usually within 48 hours</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="section-label" style={{ paddingTop: 16 }}>
        <span className="section-eyebrow">Archive</span>
        <span className="section-count">searchable</span>
      </div>
      <div className="qa-archive">
        {archive.map(item => (
          <div key={item.id} className="qa-item">
            <div className="qa-item-meta">
              {window.AGE_LEVELS.find(a => a.id === item.age)?.label} · {item.askedBy}
            </div>
            <div className="qa-item-q">{item.q}</div>
            <div className="qa-item-a">{item.a}</div>
          </div>
        ))}
      </div>
      <div style={{ height: 140 }} />

      {asking && (
        <div className="modal-scrim" onClick={() => setAsking(false)}>
          <div className="modal-sheet large" onClick={e => e.stopPropagation()}>
            {submitted ? (
              <div style={{ padding: '20px 4px' }}>
                <div className="digest-title" style={{ fontSize: 22 }}>Sent.</div>
                <div className="digest-sub" style={{ marginTop: 10 }}>
                  A guide will respond within 48 hours. You’ll see it here and in the archive.
                </div>
              </div>
            ) : (
              <>
                <div className="modal-kicker">Ask about {child.name}</div>
                <textarea
                  className="obs-textarea"
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  placeholder="Write it the way you’d say it. No jargon needed."
                  autoFocus rows={5}
                />
                <div className="modal-actions">
                  <button className="modal-btn ghost" onClick={() => setAsking(false)}>Cancel</button>
                  <button className={`modal-btn ${question.trim() ? '' : 'disabled'}`} onClick={submit}>Send</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============ COHORT ============
function CohortScreen({ child, onBack }) {
  const months = window.State.monthsBetween(new Date(child.birthdate), new Date());
  const ageId = window.State.ageIdFromMonths(months);
  const posts = window.COHORT_POSTS.filter(p => p.ageGroup === ageId);
  const group = window.COHORT_GROUPS.find(g => g.id === ageId);

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div style={{ padding: '110px 22px 10px' }}>
        <div className="digest-kicker">Cohort</div>
        <div className="digest-title">{group?.label || 'Your'} families</div>
        <div className="digest-sub">
          {group?.members || 20} parents within a few months of {child.name}. Moderated. Quiet.
        </div>
      </div>

      <div className="cohort-list">
        {posts.length === 0 && (
          <div className="cohort-empty">Quiet week. Be the first to post.</div>
        )}
        {posts.map(p => (
          <div key={p.id} className="cohort-post">
            <div className="cohort-post-head">
              <span className="cohort-author">{p.author}</span>
              <span className="cohort-time">{p.hours}h ago</span>
            </div>
            <div className="cohort-post-title">{p.title}</div>
            <div className="cohort-post-body">{p.body}</div>
            <div className="cohort-post-foot">
              <span>♡ {p.likes}</span>
              <span>· {p.replies} replies</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 140 }} />
    </div>
  );
}

// ============ YEAR IN REVIEW ============
function YearReviewScreen({ child, onBack }) {
  const yr = window.State.yearInReview(child);
  if (!yr) return null;

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div className="yr-hero" style={{ background: `linear-gradient(160deg, ${child.color}22, #faf8f4)` }}>
        <div style={{ height: 50 }} />
        <div className="digest-kicker">Year in review</div>
        <div className="yr-title">
          {child.name} at {yr.ageYears}
        </div>
        <div className="yr-sub">A quiet record, not a highlight reel.</div>
      </div>

      <div style={{ padding: '28px 22px 10px' }}>
        <div className="yr-stat">
          <div className="yr-stat-num" style={{ color: child.color }}>{yr.obsCount}</div>
          <div className="yr-stat-lbl">observations you wrote down</div>
        </div>

        {yr.tagCounts.length > 0 && (
          <>
            <div className="section-eyebrow" style={{ marginTop: 22, marginBottom: 12, color: 'var(--gold)' }}>What you noticed most</div>
            <div className="yr-tags">
              {yr.tagCounts.slice(0, 5).map(({ tag, count }) => (
                <div key={tag.id} className="yr-tag" style={{ '--tc': tag.color }}>
                  <span className="yr-tag-dot" />
                  <span className="yr-tag-lbl">{tag.label}</span>
                  <span className="yr-tag-count">{count}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {yr.topEntries.length > 0 && (
          <>
            <div className="section-eyebrow" style={{ marginTop: 26, marginBottom: 12, color: 'var(--gold)' }}>Recent moments</div>
            <div className="yr-entries">
              {yr.topEntries.map(e => (
                <div key={e.id} className="yr-entry">
                  <div className="yr-entry-date">{new Date(e.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</div>
                  <div className="yr-entry-text">{e.text}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="yr-foot">
          This is something you’ll want later. Keep writing.
        </div>
      </div>
      <div style={{ height: 140 }} />
    </div>
  );
}

Object.assign(window, {
  DigestScreen, PracticeScreen, RoomScreen, TransitionScreen,
  PlaybookScreen, QAScreen, CohortScreen, YearReviewScreen,
});
