// Profiles.jsx — child setup + switcher chip

const { useState: useStateP, useEffect: useEffectP } = React;

function ProfileOnboarding({ onDone }) {
  const [name, setName] = useStateP('');
  const [birthdate, setBirthdate] = useStateP('');

  const valid = name.trim().length > 0 && birthdate;

  const save = () => {
    if (!valid) return;
    window.State.addChild({ name: name.trim(), birthdate });
    onDone();
  };

  return (
    <div className="onboard">
      <div className="onboard-inner">
        <div className="onboard-kicker">First, tell us who you’re raising</div>
        <div className="onboard-title">Everything in here will be tuned to them.</div>
        <div className="onboard-body">
          Add your child’s name and birthdate. We’ll keep the content at their age and quietly track what you notice over time. You can add siblings later.
        </div>

        <label className="onboard-field">
          <span>Their name</span>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="First name or nickname" />
        </label>

        <label className="onboard-field">
          <span>Birthdate</span>
          <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
        </label>

        <button className={`onboard-btn ${valid ? '' : 'disabled'}`} onClick={save}>
          Begin
        </button>

        <div className="onboard-note">
          Kept on this device. Not shared.
        </div>
      </div>
    </div>
  );
}

function ChildSwitcher({ activeId, onChange, onAdd }) {
  const kids = window.State.getChildren();
  if (kids.length === 0) return null;

  return (
    <div className="child-switcher">
      {kids.map(k => {
        const months = window.State.monthsBetween(new Date(k.birthdate), new Date());
        const ageId = window.State.ageIdFromMonths(months);
        const ageLevel = window.AGE_LEVELS.find(a => a.id === ageId);
        const active = k.id === activeId;
        return (
          <button key={k.id} className={`child-chip ${active ? 'active' : ''}`} onClick={() => onChange(k.id)}>
            <span className="child-dot" style={{ background: k.color }} />
            <span className="child-name">{k.name}</span>
            <span className="child-age">{window.State.formatAge(k.birthdate)} · {ageLevel?.label}</span>
          </button>
        );
      })}
      <button className="child-chip add" onClick={onAdd}>
        <span className="child-plus">+</span>
        <span className="child-name">Add</span>
      </button>
    </div>
  );
}

function AddChildModal({ onClose }) {
  const [name, setName] = useStateP('');
  const [birthdate, setBirthdate] = useStateP('');
  const valid = name.trim() && birthdate;
  const save = () => {
    if (!valid) return;
    window.State.addChild({ name: name.trim(), birthdate });
    onClose(true);
  };
  return (
    <div className="modal-scrim" onClick={() => onClose(false)}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div className="modal-kicker">Add a child</div>
        <label className="onboard-field">
          <span>Name</span>
          <input value={name} onChange={e => setName(e.target.value)} autoFocus />
        </label>
        <label className="onboard-field">
          <span>Birthdate</span>
          <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
        </label>
        <div className="modal-actions">
          <button className="modal-btn ghost" onClick={() => onClose(false)}>Cancel</button>
          <button className={`modal-btn ${valid ? '' : 'disabled'}`} onClick={save}>Add</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProfileOnboarding, ChildSwitcher, AddChildModal });
