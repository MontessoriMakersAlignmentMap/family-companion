// EpScreen.jsx — entry point list (age-filtered topics)
// ArticleScreen.jsx + SearchOverlay.jsx included here to keep file count small

const { useState: useStateEp, useEffect: useEffectEp } = React;

function EpScreen({ epId, ageId, setAgeId, onBack, onOpenArticle }) {
  const ep = window.ENTRY_POINTS.find(e => e.id === epId);
  const age = window.AGE_LEVELS.find(a => a.id === ageId);
  const [showAgePicker, setShowAgePicker] = useStateEp(false);

  // Single article for this ep/age + sibling ages listed below
  const primary = window.getArticle(epId, ageId);
  const otherAges = window.AGE_LEVELS
    .filter(a => a.id !== ageId)
    .map(a => ({ age: a, article: window.getArticle(epId, a.id) }));

  return (
    <div className="scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14">
            <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ width: 38 }} />
      </div>

      <div className="ep-hero" style={{ '--tint': ep.tint, '--accent': ep.accent }}>
        <div style={{ height: 44 }} />
        <div className="ep-hero-kicker">The question</div>
        <div className="ep-hero-title">{ep.title}</div>
        <div className="ep-hero-blurb">{ep.blurb}</div>
        <div className="ep-hero-age" onClick={() => setShowAgePicker(s => !s)}>
          <span>Reading for:&nbsp;</span>
          <strong style={{ fontWeight: 600 }}>{age.label}</strong>
          <span className="ep-hero-age-change">change</span>
        </div>
        {showAgePicker && (
          <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {window.AGE_LEVELS.map(a => (
              <button
                key={a.id}
                className={`age-chip ${ageId === a.id ? 'active' : ''}`}
                onClick={() => { setAgeId(a.id); setShowAgePicker(false); }}
                style={ageId !== a.id ? { background: 'rgba(255,255,255,0.45)', borderColor: 'rgba(0,0,0,0.08)' } : {}}
              >
                {a.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="section-label" style={{ marginTop: 22 }}>
        <span className="section-eyebrow">For {age.label.toLowerCase()}</span>
      </div>

      <div className="topics-list">
        {primary && !primary.stub ? (
          <div className="topic-card" onClick={() => onOpenArticle(primary.id)}>
            <div className="topic-headline">{primary.headline}</div>
            <div className="topic-meta">
              <span>{primary.body.length} min read</span>
              <span className="dot" />
              <span>Try this at home</span>
              <span className="dot" />
              <span>Audio</span>
            </div>
          </div>
        ) : (
          <div className="topic-card stub">
            <div className="topic-headline">
              Content for {age.label} is being written. Try another age level below—the structure is the same.
            </div>
          </div>
        )}

        <div style={{
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--ink-muted)', fontWeight: 600, padding: '22px 4px 4px',
        }}>
          Same question, other ages
        </div>

        {otherAges.map(({ age: a, article }) => (
          <div
            key={a.id}
            className={`topic-card ${article.stub ? 'stub' : ''}`}
            onClick={() => {
              if (!article.stub) {
                setAgeId(a.id);
                onOpenArticle(article.id);
              }
            }}
          >
            <div className="topic-meta" style={{ marginTop: 0, marginBottom: 8 }}>
              <span>{a.label}</span>
              <span className="dot" />
              <span>{a.range}</span>
            </div>
            <div className="topic-headline">
              {article.stub
                ? `Coming soon—${a.label.toLowerCase()} content for this question.`
                : article.headline}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticleScreen({ articleId, onBack, onOpenArticle }) {
  const a = window.getArticleById(articleId);
  if (!a) return <div style={{ padding: 40 }}>Not found</div>;
  const ep = window.ENTRY_POINTS.find(e => e.id === a.ep);
  const age = window.AGE_LEVELS.find(l => l.id === a.age);
  const relatedArticles = (a.related || [])
    .map(id => window.getArticleById(id))
    .filter(Boolean);

  return (
    <div className="scroll article-scroll">
      <div className="topnav">
        <div className="nav-pill" onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14">
            <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="nav-pill" style={{ fontSize: 12, fontWeight: 500 }}>
          Save
        </div>
      </div>

      <div className="article-kicker-band" style={{ '--tint': ep.tint, '--accent': ep.accent }}>
        <div style={{ height: 46 }} />
        <div className="article-kicker-row">
          <span className="article-kicker">{ep.title.replace(/[?.]/g, '')}</span>
          <span className="article-kicker-sep" />
          <span className="article-kicker-age">{age.label}</span>
        </div>
      </div>

      <h1 className="article-headline">{a.headline}</h1>

      <div className="article-body">
        {a.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <div className="article-block gold">
        <div className="article-block-label">Try this at home</div>
        <ul className="try-list">
          {a.tryThis.map((t, i) => (
            <li key={i}>
              <span className="mark">{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="article-block navy">
        <div className="article-block-label">Ask your child’s guide</div>
        <ul className="ask-list">
          {a.askGuide.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </div>

      <div className="article-block">
        <div className="article-block-label">Hear more</div>
        <div className="hear-more">
          <div className="hear-play">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <polygon points="3,1 12,7 3,13" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <div className="hear-meta-title">{a.hearMore.episode}</div>
            <div className="hear-meta-sub">{a.hearMore.duration} &middot; In Hannah’s voice</div>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="article-block">
          <div className="article-block-label">Related</div>
          <ul className="related-list">
            {relatedArticles.map(r => {
              const rep = window.ENTRY_POINTS.find(e => e.id === r.ep);
              return (
                <li
                  key={r.id}
                  className="related-row"
                  onClick={() => onOpenArticle(r.id)}
                >
                  <div className="related-swatch" style={{ background: rep.tint }} />
                  <div>
                    <div className="related-meta-k">{rep.title.replace(/[?.]/g, '')}</div>
                    <div className="related-meta-t">{r.headline}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="article-foot" />
    </div>
  );
}

function SearchOverlay({ onClose, onOpenArticle, realAI }) {
  const [query, setQuery] = useStateEp('');
  const [answer, setAnswer] = useStateEp(null);
  const [loading, setLoading] = useStateEp(false);
  const [suggestions, setSuggestions] = useStateEp([]);

  const exampleQs = [
    'My son is 5 and still can’t write his name.',
    'Is there really no homework ever?',
    'My child says school is boring.',
    'She’s starting public school next year.',
    'Why does the teacher just sit there?',
  ];

  const mockResponses = [
    {
      test: /write|name|read|letter|spell/i,
      text: `The reading and writing explosion in Montessori almost always comes in the third year of Primary — so between ages five and six. If your child is five and not yet writing their name, you are not behind. You are mid-sentence.\n\nWhat’s happening right now, invisibly, is the preparation of the hand and the isolation of phonemes through the sandpaper letters. Those are the two prerequisites. When they click together, writing doesn’t trickle out — it pours.\n\nWatch for these signs the pour is coming: your child tracing letters in the air, asking how words start, "writing" on steamy bathroom mirrors. Those are real.`,
      suggestions: ['primary-learning', 'primary-track'],
    },
    {
      test: /homework|worksheet|test|grade/i,
      text: `The absence of homework in Montessori is intentional, not an oversight. A Primary or Elementary child has just spent a full three-hour work cycle in deep concentration. Their brain has done its job. What they need in the evening is not more of school — it’s home, rest, and unstructured time to integrate.\n\nIf you want to extend the school day at home, the best thing to do is the opposite of a worksheet: let them help cook dinner, fold laundry, walk the dog. Those tasks exercise the same capacities the classroom builds.`,
      suggestions: ['primary-learning', 'primary-home'],
    },
    {
      test: /public|middle|high|college|transition|leave/i,
      text: `The research on Montessori kids transitioning to conventional schools is actually reassuring. They tend to arrive with stronger executive function, better time management, and a more durable sense of how to learn on their own. What they sometimes find hard, at first, is the abruptness of bells, worksheets, and being told what to do every minute.\n\nA month of adjustment is normal. A semester of adjustment is still within range. What you’re sending with them is not information — it’s a set of habits. Those don’t disappear when the environment changes.`,
      suggestions: ['primary-classroom'],
    },
    {
      test: /tantrum|meltdown|feeling|upset|cry|big/i,
      text: `A meltdown at drop-off is not a sign that something is wrong. It’s a sign your child trusts you enough to fall apart before they go do something hard. That’s actually good news, even when it feels awful.\n\nTry this: a predictable goodbye ritual that’s short and doesn’t negotiate. Three things, every time, in the same order. A kiss, a phrase ("I’ll see you at pickup"), a wave at the door. Rituals give a nervous system something to hold onto.\n\nAnd afterwards: don’t relitigate. They already worked through it. So did you.`,
      suggestions: ['toddler-home'],
    },
  ];

  const runQuery = async (q) => {
    setLoading(true);
    setAnswer(null);
    setQuery(q);

    if (realAI) {
      try {
        const text = await window.claude.complete({
          messages: [{
            role: 'user',
            content: `You are a warm, grounded Montessori expert talking to a parent who is worried. Reply in 2-3 short paragraphs, no jargon, no defensiveness, no preaching. Don’t minimize. End without a question. The parent said: "${q}"`,
          }],
        });
        setAnswer(text);
        // pick suggestions by simple keyword match
        const m = mockResponses.find(r => r.test.test(q));
        setSuggestions(m ? m.suggestions : ['primary-learning']);
      } catch (e) {
        setAnswer('I’m having trouble reaching the network right now. Try the topics below for grounded guidance on this.');
        setSuggestions(['primary-learning', 'primary-track']);
      }
    } else {
      // mocked
      await new Promise(r => setTimeout(r, 900));
      const m = mockResponses.find(r => r.test.test(q));
      if (m) {
        setAnswer(m.text);
        setSuggestions(m.suggestions);
      } else {
        setAnswer(`That’s a real question, and it deserves a real answer. Based on what you’ve described, I’d start with the content below — it was written to address exactly this kind of worry. If none of it lands, write back and tell me what’s actually going on.`);
        setSuggestions(['primary-learning', 'primary-track', 'primary-home']);
      }
    }
    setLoading(false);
  };

  return (
    <div className="search-overlay">
      <div className="search-overlay-head">
        <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
          What’s on your mind?
        </span>
        <span className="search-overlay-close" onClick={onClose}>Close</span>
      </div>
      <div className="search-overlay-body">
        <input
          className="search-input"
          autoFocus
          placeholder="Write it the way you’d say it…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && query.trim()) runQuery(query);
          }}
        />

        {!answer && !loading && (
          <div className="search-examples">
            <div className="search-examples-label">Or try one of these</div>
            {exampleQs.map((q, i) => (
              <div key={i} className="search-example" onClick={() => runQuery(q)}>
                <span className="search-example-mark">→</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="ai-response">
            <div className="ai-response-label">
              <span>Thinking</span>
            </div>
            <div className="ai-thinking"><span/><span/><span/></div>
          </div>
        )}

        {answer && !loading && (
          <div className="ai-response">
            <div className="ai-response-label">
              <span>A grounded answer</span>
              <span style={{ color: 'var(--ink-muted)', fontWeight: 400, letterSpacing: 0 }}>
                · {realAI ? 'live' : 'demo'}
              </span>
            </div>
            <div className="ai-response-body">
              {answer.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {suggestions.length > 0 && (
              <>
                <div className="ai-suggest-label">Read more</div>
                <div className="ai-suggest-row">
                  {suggestions.map(sid => {
                    const art = window.getArticleById(sid);
                    if (!art || art.stub) return null;
                    const ep = window.ENTRY_POINTS.find(e => e.id === art.ep);
                    return (
                      <div key={sid} className="ai-suggest-chip" onClick={() => onOpenArticle(sid)}>
                        <div className="ai-suggest-swatch" style={{ background: ep.tint }} />
                        <div className="ai-suggest-text">{art.headline}</div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { EpScreen, ArticleScreen, SearchOverlay });
