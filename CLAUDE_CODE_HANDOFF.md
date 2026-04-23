# Family Companion — Handoff

Static PWA, same pattern as Field Guide and Leadership Meridian. No build step — Babel-in-browser.

## Structure

```
family-companion/
├── Montessori Makers Family Companion.html   # main entrypoint
├── index.html                                # redirect to main
├── manifest.webmanifest                      # PWA manifest
├── netlify.toml                              # publish=".", functions dir
├── _redirects                                # /  -> main html
├── package.json                              # stripe + supabase-js for functions
├── styles/
│   ├── styles.css                            # prototype visual language
│   └── dynamic-styles.css                    # prototype dynamic content styles
├── assets/                                   # cube mark, PWA icons, serif font
├── components/
│   ├── content.js                            # ENTRY_POINTS + AGE_LEVELS + ARTICLES
│   ├── dynamic-content.js                    # playbooks, transitions, rooms, cohort
│   ├── state.js                              # localStorage-backed children/journal/progress
│   ├── ios-frame.jsx                         # IOSDevice (desktop preview frame)
│   ├── Profiles.jsx                          # ProfileOnboarding + AddChildModal
│   ├── Journal.jsx                           # JournalScreen
│   ├── Practice.jsx                          # Digest + Practice + sub-screens
│   ├── HomeScreen.jsx                        # Home + TabBar + SearchOverlay
│   ├── Screens.jsx                           # EpScreen, ArticleScreen, SearchOverlay
│   ├── supabase.jsx                          # auth + subscription hooks
│   ├── Onboarding.jsx                        # welcome slides + Google/email auth
│   ├── Subscription.jsx                      # SubscriptionGate + pricing flow
│   └── App.jsx                               # shell, wires everything
└── netlify/functions/
    ├── create-checkout.js                    # Stripe checkout session
    ├── customer-portal.js                    # Stripe billing portal
    └── stripe-webhook.js                     # fulfillment → family_companion_subscriptions
```

## Storage model (matches Meridian / Field Guide)

- **Auth** — Supabase Auth, Google OAuth + email magic link. Shared project `lroxicwzhtzaitfkvzlv`. Storage key `companion.session`.
- **Subscriptions** — table `family_companion_subscriptions` in the same Supabase project. Gate in `components/Subscription.jsx` uses `isSubscriptionActive`.
- **App data** — children, journal observations, playbook progress, transitions, room checklists — all `localStorage`, same as the prototype. Local-first. Sync is future work.

## Before deploying to production

### 1. Supabase — create the subscriptions table

Add to the shared Supabase project (same DDL as `leadership_meridian_subscriptions`):

```sql
create table family_companion_subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text unique,
  status text,
  billing_interval text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  updated_at timestamptz default now()
);

alter table family_companion_subscriptions enable row level security;

create policy "read own subscription"
  on family_companion_subscriptions for select
  using (auth.uid() = user_id);
```

### 2. Stripe — create products

Two recurring prices on one product ("Family Companion"):

- Monthly: $12/mo
- Annual: $99/yr

Paste the price IDs into `netlify/functions/create-checkout.js` OR set env vars `FAMILY_MONTHLY_PRICE_ID` and `FAMILY_ANNUAL_PRICE_ID` in Netlify.

### 3. Netlify environment variables

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SUPABASE_URL=https://lroxicwzhtzaitfkvzlv.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...             # service role, not anon
RESEND_API_KEY=re_...                     # optional — for new-subscriber notification
FAMILY_MONTHLY_PRICE_ID=price_...
FAMILY_ANNUAL_PRICE_ID=price_...
URL=https://<custom-domain>               # Netlify sets automatically on deploy
```

### 4. Stripe webhook

Point a webhook at `https://<netlify-site>/.netlify/functions/stripe-webhook` with events:
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_failed`

Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

### 5. GitHub + Netlify

```
# in /Users/hannahrichardson/family-companion
git init && git add . && git commit -m "Initial Family Companion standalone app"
gh repo create MontessoriMakersAlignmentMap/family-companion --public --source=. --push
```

Then connect the repo to a new Netlify site (same account as Field Guide / Meridian). `publish = "."`, no build command. Auto-deploy on push to `main`.

### 6. Custom domain

Suggested: `montessorimakersfamilycompanion.com` (matches the Field Guide / Meridian naming convention). Point DNS to Netlify.

## What still needs writing

The prototype's `content.js` has 5 fully-written articles (primary × learning/track/classroom/home + toddler-home). Everything else is auto-stubbed. `HANDOFF.md` from the prototype (now lost on the desktop) has the voice guide and priority list — happy to re-derive if you want to keep filling in articles.

## Known gaps / TODOs

- `components/App.jsx` no longer exposes the "real Claude AI" tweaks panel — that was prototype-only scaffolding. Restore if useful for in-app feedback/debug.
- `state.js` keys still use `mmg_*` prefixes from the prototype — fine because they're scoped to the new domain, but feel free to rename to `companion.*` for consistency.
- Pricing in `Subscription.jsx` is a placeholder. Update copy + numbers before launch.
- No MMAP sync yet. Add a `miyp-events`-style edge function if we want family observations to flow into MMAP later.
