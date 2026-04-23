// state.js — child profiles, observations, persistent app state
// Plain globals on window so the Babel-transpiled scripts can reach it.

(function () {
  const LS = {
    children: 'mmg_children_v1',
    activeChild: 'mmg_active_child_v1',
    journal: 'mmg_journal_v1',
    savedPlaybooks: 'mmg_playbooks_v1',
    transitions: 'mmg_transitions_v1',
    rooms: 'mmg_rooms_v1',
    questions: 'mmg_questions_v1',
    cohortSeen: 'mmg_cohort_seen_v1',
    digestRead: 'mmg_digest_read_v1',
  };

  const read = (k, fallback) => {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  // -------- derive age/plane from birthdate --------
  function monthsBetween(a, b) {
    const years = b.getFullYear() - a.getFullYear();
    const months = b.getMonth() - a.getMonth();
    const days = b.getDate() - a.getDate();
    return years * 12 + months + (days < 0 ? -1 : 0);
  }
  function ageIdFromMonths(m) {
    if (m < 18) return 'nido';
    if (m < 36) return 'toddler';
    if (m < 72) return 'primary';
    if (m < 108) return 'lower_el';
    if (m < 144) return 'upper_el';
    if (m < 180) return 'adolescent';
    return 'high_school';
  }
  function formatAge(birthdate) {
    const b = new Date(birthdate);
    const now = new Date();
    const m = monthsBetween(b, now);
    if (m < 0) return 'expecting';
    if (m < 24) return `${m} mo`;
    const y = Math.floor(m / 12);
    const rem = m % 12;
    if (rem === 0) return `${y} yr`;
    return `${y} yr ${rem} mo`;
  }

  // -------- children --------
  function getChildren() { return read(LS.children, []); }
  function saveChildren(list) { write(LS.children, list); }
  function getActiveChildId() {
    const id = read(LS.activeChild, null);
    const kids = getChildren();
    if (id && kids.find(k => k.id === id)) return id;
    return kids[0]?.id || null;
  }
  function setActiveChildId(id) { write(LS.activeChild, id); }
  function getActiveChild() {
    const id = getActiveChildId();
    return getChildren().find(k => k.id === id) || null;
  }
  function addChild({ name, birthdate, color }) {
    const id = 'c_' + Math.random().toString(36).slice(2, 9);
    const kids = getChildren();
    kids.push({ id, name, birthdate, color: color || pickColor(kids.length), createdAt: Date.now() });
    saveChildren(kids);
    setActiveChildId(id);
    return id;
  }
  function removeChild(id) {
    saveChildren(getChildren().filter(k => k.id !== id));
    // also drop their journal entries
    const j = getJournal().filter(e => e.childId !== id);
    write(LS.journal, j);
  }
  const CHILD_COLORS = ['#D14F3E', '#6FB26B', '#F2B8C6', '#7FB4D6', '#D4B968', '#8A3E54'];
  function pickColor(i) { return CHILD_COLORS[i % CHILD_COLORS.length]; }

  // -------- journal --------
  function getJournal(childId) {
    const all = read(LS.journal, []);
    return childId ? all.filter(e => e.childId === childId) : all;
  }
  function addObservation({ childId, text, tags, date }) {
    const all = read(LS.journal, []);
    const e = {
      id: 'o_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      childId,
      text,
      tags: tags || [],
      date: date || Date.now(),
      createdAt: Date.now(),
    };
    all.unshift(e);
    write(LS.journal, all);
    return e;
  }
  function deleteObservation(id) {
    const all = read(LS.journal, []).filter(e => e.id !== id);
    write(LS.journal, all);
  }

  // Sensitive-period tag vocabulary (keep small, meaningful)
  const TAGS = [
    { id: 'order', label: 'Order', color: '#7FB4D6' },
    { id: 'language', label: 'Language', color: '#D14F3E' },
    { id: 'movement', label: 'Movement', color: '#6FB26B' },
    { id: 'small-objects', label: 'Small objects', color: '#F2B8C6' },
    { id: 'independence', label: 'Independence', color: '#D4B968' },
    { id: 'social', label: 'Social', color: '#8A3E54' },
    { id: 'sensory', label: 'Sensory', color: '#C88476' },
    { id: 'emotion', label: 'Big feelings', color: '#4a4d60' },
    { id: 'milestone', label: 'Milestone', color: '#d6a758' },
  ];

  // Simple pattern detection — count tags in last 14 days per child
  function detectPatterns(childId) {
    const now = Date.now();
    const cutoff = now - 14 * 24 * 3600 * 1000;
    const entries = getJournal(childId).filter(e => e.date >= cutoff);
    const counts = {};
    entries.forEach(e => (e.tags || []).forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
    return Object.entries(counts)
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([id, n]) => ({ tag: TAGS.find(t => t.id === id), count: n }))
      .filter(p => p.tag);
  }

  // -------- saved playbooks / transitions / rooms / questions --------
  function getSaved(key) { return read(LS[key], {}); }
  function setSaved(key, value) { write(LS[key], value); }

  // Enroll in a transition arc
  function enrollTransition(childId, transitionId) {
    const all = read(LS.transitions, {});
    const k = childId + ':' + transitionId;
    if (!all[k]) {
      all[k] = { startedAt: Date.now(), completedDays: [] };
      write(LS.transitions, all);
    }
    return all[k];
  }
  function getTransition(childId, transitionId) {
    const all = read(LS.transitions, {});
    return all[childId + ':' + transitionId] || null;
  }
  function toggleTransitionDay(childId, transitionId, dayIdx) {
    const all = read(LS.transitions, {});
    const k = childId + ':' + transitionId;
    if (!all[k]) all[k] = { startedAt: Date.now(), completedDays: [] };
    const set = new Set(all[k].completedDays);
    if (set.has(dayIdx)) set.delete(dayIdx); else set.add(dayIdx);
    all[k].completedDays = [...set];
    write(LS.transitions, all);
    return all[k];
  }

  // Room checklist toggles
  function getRoomState(childId, roomId) {
    const all = read(LS.rooms, {});
    return all[childId + ':' + roomId] || { done: [], photo: null };
  }
  function toggleRoomItem(childId, roomId, itemIdx) {
    const all = read(LS.rooms, {});
    const k = childId + ':' + roomId;
    if (!all[k]) all[k] = { done: [], photo: null };
    const set = new Set(all[k].done);
    if (set.has(itemIdx)) set.delete(itemIdx); else set.add(itemIdx);
    all[k].done = [...set];
    write(LS.rooms, all);
    return all[k];
  }

  // Question corner — stored asked questions
  function getAskedQuestions(childId) {
    const all = read(LS.questions, []);
    return childId ? all.filter(q => q.childId === childId) : all;
  }
  function addAskedQuestion({ childId, text }) {
    const all = read(LS.questions, []);
    const q = {
      id: 'q_' + Date.now().toString(36),
      childId,
      text,
      askedAt: Date.now(),
      status: 'pending',
      response: null,
    };
    all.unshift(q);
    write(LS.questions, all);
    return q;
  }

  // -------- computed helpers for digest / year-in-review --------
  function weeklyDigestFor(child) {
    if (!child) return null;
    const months = monthsBetween(new Date(child.birthdate), new Date());
    const ageId = ageIdFromMonths(months);
    const obs = getJournal(child.id);
    const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
    const thisWeekObs = obs.filter(e => e.date >= weekAgo);
    const patterns = detectPatterns(child.id);
    return { ageId, months, obsCount: thisWeekObs.length, patterns, totalObs: obs.length };
  }

  function yearInReview(child) {
    if (!child) return null;
    const b = new Date(child.birthdate);
    const now = new Date();
    const lastBirthday = new Date(now.getFullYear(), b.getMonth(), b.getDate());
    if (lastBirthday > now) lastBirthday.setFullYear(now.getFullYear() - 1);
    const cutoff = lastBirthday.getTime();
    const obs = getJournal(child.id).filter(e => e.date >= cutoff);
    const months = monthsBetween(b, now);
    return {
      ageYears: Math.floor(months / 12),
      obsCount: obs.length,
      topEntries: obs.slice(0, 5),
      tagCounts: TAGS.map(t => ({
        tag: t,
        count: obs.filter(e => (e.tags || []).includes(t.id)).length,
      })).filter(x => x.count > 0).sort((a, b) => b.count - a.count),
    };
  }

  window.State = {
    getChildren, addChild, removeChild,
    getActiveChildId, setActiveChildId, getActiveChild,
    ageIdFromMonths, monthsBetween, formatAge,
    getJournal, addObservation, deleteObservation, detectPatterns, TAGS,
    enrollTransition, getTransition, toggleTransitionDay,
    getRoomState, toggleRoomItem,
    getAskedQuestions, addAskedQuestion,
    weeklyDigestFor, yearInReview,
  };
})();
