# WealthTrace — Project Documentation

## Overview

**Product:** WealthTrace
**Type:** Web-based retirement planning software (fintech SaaS)
**Market:** United States
**Project duration:** April 2026 – September 2026 (~6 months, ongoing)
**My role:** Senior Product Designer — full ownership of the product/app design
**Scope of my work:** The web application — dashboard, planning flows, Monte Carlo, cash-flow inputs, and onboarding.

---

## Product Context

WealthTrace is retirement planning software with a strong reputation for the accuracy of its financial modeling. Its differentiator is the depth of its Monte Carlo engine: rather than asking users to guess their portfolio's expected return and volatility (as most consumer competitors do), WealthTrace computes a weighted return and volatility down to the individual holding level across all of a user's accounts, estimated from historical data. This puts it closer to institutional advisor tools (RightCapital, eMoney, MoneyGuidePro) than to consumer tools like Boldin.

### Target user
- Upper-middle-class U.S. investors, $2–10M in investable assets
- Age 50–65, ~75% married, ~70% male
- Highly financially literate, focused on retirement-feasibility, tax optimization, long-term modeling, and estimating their true "financial independence" date

### Competitive landscape

| Competitor | Segment | Note |
|---|---|---|
| Boldin (boldin.com) | Consumer (direct) | 519k users, "everything for everyone," shallow portfolio modeling |
| ProjectionLab (projectionlab.com) | Consumer | Modern tool, strong visual design |
| RightCapital (rightcapital.com) | Advisor | Strong visual representation, modern dashboards |
| eMoney (emoneyadvisor.com) | Advisor | Enterprise grade |
| MoneyGuidePro | Advisor | Established institutional planning |

**WealthTrace's strategic position:** a deliberately narrow net cast at high-net-worth investors, with modeling sophistication closer to institutional tools.

---

## The Problem

The product had a strong engine but a weak surface. The business symptoms were clear:

- **Conversion gap.** High-intent trials (users arriving via targeted searches like "Roth conversion" or "retirement planning"), but only ~**13 of 131 trials/month** converted to paid. The intent was there; the product wasn't closing it.
- **Flat growth.** ~5% YoY, driven almost entirely by word of mouth — well below prior years.
- **Churn during trial.** Many users signed up and dropped off before converting.

**The working hypothesis:** the problem was design — an interface that was dated, overwhelming, and hard to navigate, with key features that users never discovered or understood. My mandate was to validate and act on that hypothesis: make the product clear, modern, and intuitive enough that high-intent, often non-technical users could reach value and convert.

### Reframing the problem

There was also a specific proposed solution on the table: *"the interface relies on tabs, which are cluttered — move away from tabs."*

I pushed back on that diagnosis. After heuristic analysis of the product, my conclusion was that **tabs were not the problem** — removing them was neither possible nor desirable given the product's structure. The real problems were **low signal-to-noise ratio** (screens carried content users didn't need or look at) and **poor semantic grouping** (related information wasn't organized by meaning). I solved the underlying cause rather than the named symptom. Separating the stated problem from the actual problem became one of the spine decisions of the project.

---

## My Role & Scope

I operated as the senior designer with end-to-end ownership of the product design. There is a nominal design lead, but in practice I ran the project independently — discovery, concept, design system foundation, all product flows, the AI-assisted production process, and the developer-ready handoff.

Responsibilities:
- Heuristic and competitive analysis of the existing product
- Visual concept and a foundational design system for the app
- Redesign of all core product surfaces (dashboard, projections, cash-flow inputs, Monte Carlo, distributions, onboarding)
- New product/UX solutions (linked entities, granular allocation, flow visualization)
- Detailed page-level specifications driving the build
- Validation via prototype testing with real users
- Final Figma source-of-truth for development handoff

---

## Process — AI-Assisted Product Design

This project used a deliberately novel production process built around **Claude** as an AI design tool. It's a distinctive part of the case because it changed where the design effort went — away from manual screen production, toward specification and decision-making.

**1. Foundation in Figma.**
I first built the visual concept, a foundational design system (tokens for color and type, base components — buttons, inputs), and the initial dashboard design in Figma.

**2. Production in Claude.**
I then moved into Claude, loading in the design system, tokens, colors, and the dashboard as a reference. From there I designed screens directly inside the tool. The critical input was **specification, not pixels**: before each screen I wrote dense, detailed page-level documentation — every field, how it behaves, why each piece of data is collected, the helper/hint copy, interaction logic (e.g. whether a Flow opens in a popup). This was possible because the backend logic was not changing, so I could analyze the existing product and fully specify intended behavior. Claude produced clickable, responsive, near-final UI from those specs; I iterated heavily through stakeholder feedback, new features, and refinements.

**3. Back to Figma as source of truth.**
Once a design was approved in Claude, I rebuilt it in Figma. Figma remained the source of truth developers build from — clean, bug-free, fully prepared for handoff. Claude's value was the opposite: a tangible, clickable artifact stakeholders and users could actually feel.

**Why this matters:** the process effectively **skipped traditional wireframing**. The "wireframing" happened inside Claude as a high-fidelity, already-styled, already-interactive artifact — once layout, styling, and logic were validated there, the Figma conversion was fast. The detailed page specs are also the proof of authorship: the product thinking, information architecture, states, and logic were mine; the tool accelerated execution.

---

## Key Design Work

### 1. Linked Entities — data-integrity by design

**Problem.** On the cash-flow inputs screen, users enter the data that drives the entire plan — accounts, holdings, property, businesses, assets, income, and expenses. A single real-world object required multiple disconnected records. Example: a user buys a rental property. They had to add it under **Assets**, add the mortgage under **Liabilities**, add the rental income as an **Inflow**, and add a future sale as another **Inflow** — four separate entries for one asset.

**Context.** This problem surfaced through moderated depth interviews the product team ran with real users — scenario walkthroughs on recorded calls where users described where they got stuck. Users forgot related entries, and when removing an asset they had to manually find and delete every linked record — easy to miss inside a large dataset. The result was **high cognitive load** and, worse, **broken data integrity** — and since this data feeds the Monte Carlo engine, incomplete or orphaned records corrupted the very projections the product is known for.

**Solution.** I introduced a **Linked Entities** architecture. An asset can now own its dependencies: creating an asset with a mortgage automatically generates the linked liability; rental income and planned sale are created within the asset itself. Editing or deleting the parent asset **cascades** to all linked entities automatically.

| Before (fragmented input) | After (linked entities) |
|---|---|
| Asset, mortgage, and rental income created as separate, unconnected records | Single asset-creation flow; liabilities and income generated within the entity |
| Manual, per-record deletion (risk of orphaned data) | Cascading edit/delete — changing the parent updates all linked entities |

**Value.** Fewer input errors, more accurate projections (clean inputs into the Monte Carlo engine), and a dramatically simpler data-entry experience. This is a state-management and data-model decision, not a cosmetic one.

**Validation.** Hallway-tested with real users, who understood the linked-entity model immediately and expressed clear relief at no longer having to track and clean up scattered records by hand. Strong, consistent positive signal.

### 2. Granular Asset Allocation — progressive disclosure under tight constraints

**Context.** Users can either link a real brokerage account (auto-updating) or enter accounts manually. Manual entry supports extreme detail for accurate probability calculation: per account, users specify holdings down to individual tickers and allocation by type (e.g. 30% cash, 50% growth stocks, 5% bonds in one account; 95% value, 5% bonds in another).

**Problem.** This is a deeply nested data structure (Account → Asset class → Tickers → Percentage), and it had to fit a spatially constrained interface — without turning the screen into an endless spreadsheet.

**Solution.** I designed a compact UI for deep data nesting using progressive disclosure and inline editing, letting users distribute a 100% allocation comfortably without visual overload. This took significant iteration to get right.

### 3. Monte Carlo — separating settings from results

**Problem.** The Monte Carlo screen mixed **inputs and outputs** in the same visual space. Users couldn't tell at a glance which sections were *settings* they controlled versus *results* the model produced. A specific, support-confirmed failure: users changed a setting and assumed the projection had updated — but the simulation has to be re-run manually, so they were reading stale results as current.

**Solution.**
- Pulled all Monte Carlo settings into a dedicated **settings column**, and gave the results their own primary area on the page. This is a clarity-of-affordance fix: settings read as settings, results read as results.
- Added explicit **state-management feedback** — subtle animation and an indicator that fires when a setting changes, signaling that the simulation is now stale and must be re-run. This closed a real comprehension gap that previously caused users to trust outdated numbers.
- Cleaned up the charts for legibility.

I deliberately did **not** rework the Monte Carlo logic — the existing model was sound. The work here was making a strong engine legible and trustworthy.

### 4. Cash-Flow Distributions — FlowView

**Context.** The Cash-Flow Distributions screen is a large, complex year-by-year table of inflows and outflows broken out by category (taxes, sources, destinations).

**Solution.** I proposed adding a **flow-style visualization (FlowView)** on top of the table, so users can see at a glance where money is coming from and going to by category — turning a dense table into something readable at a glance.

### 5. Fighting Information Overload — signal-to-noise and semantic grouping

This is the direct answer to the original (reframed) overload problem.

**Problem.** Screens were overloaded with content that carried no user value. The dashboard showed charts nobody looked at. The projections screen included an **asset-allocation chart that had no semantic relationship to projections** — user feedback explicitly flagged that they didn't understand why it was there, yet it consumed space and attention.

**Solution.** I raised the **signal-to-noise ratio** by removing low-value content, then applied **semantic grouping** — organizing what remained by meaning. The dashboard and projections screens became focused: balanced sections, content where it belongs, and a clear hierarchy oriented around user inputs and the projections that matter.

**Portfolio note:** strong before/after candidate — overloaded dashboard with off-topic sections → balanced, legible layout; cluttered projections screen → focused on charts and user inputs.

### 6. Onboarding — reducing time-to-value

**Problem.** The old onboarding had too many steps and heavy forms — each step crowded with input fields — delaying the moment a user reached anything valuable.

**Solution.** A full redesign aimed at **time-to-value**:
- **Minimal first step** — name, email, password, optional phone.
- **Goal capture** — ask what the user is trying to achieve.
- **Inline financial-planning tips** with links to the underlying research/sources (a pattern competitors use), adding credibility and education during setup.
- **Optional early account entry** — users can add investment accounts during onboarding (skippable). If they do, a **live projection graph** appears alongside the tips, showing how their capital grows and updating as they add income, property, and expenses — delivering a glimpse of the product's core value before they even reach the dashboard.
- **"Review your plan details" step** — lets users see and correct the data they provided before finishing.
- **Calculation screen (labor illusion)** — a brief, marketing-flavored loading screen showing the plan being built in "real time" ("calculating 100,000 scenarios, accounting for all expenses…"). It makes the depth of the underlying modeling visible and felt, reinforcing trust in a product whose value is computational rigor.
- **Removed in-onboarding two-factor verification**, which cost users time and friction during setup.

**Result.** Onboarding got materially shorter and faster — **~30% faster (TBC — exact figure pending).** Validated by a comparative test: new users ran both the old and new onboarding while time-on-task and error counts were measured; the new flow won clearly. (Exact time and error figures TBC.)

---

## Evidence Base

Honest accounting of how problems were identified and solutions validated:

- **Moderated depth interviews** (run by the product team) — scenario walkthroughs with real users on recorded calls; the source of the linked-entities insight, among others.
- **Heuristic analysis** of the existing product (my primary discovery method).
- **Competitive analysis** of consumer and advisor tools.
- **Support-team insights and real-user feedback** — the source for several specific problems (the stale-simulation misunderstanding, the off-topic allocation chart).
- **Prototype testing / hallway testing with real users** — designs shown to real users for reaction and feedback (the Monte Carlo settings column and the Linked Entities flow both tested well).
- **Comparative onboarding test** — old vs. new flow, measuring time-on-task and errors with new users.

**Honest framing:** generative depth interviews were conducted by the product team, not by me — I consumed that research and owned the design response. My own hands-on validation was heuristic analysis, prototype/hallway testing, and the comparative onboarding test. Solid, multi-source validation — but worth describing precisely rather than claiming I ran the moderated studies myself.

---

## Measurable Results

| Metric | Before | After | Source | Status |
|---|---|---|---|---|
| Onboarding completion time | Baseline | ~30% faster | Comparative onboarding test (old vs new) | TBC — exact figure pending |
| Onboarding errors | Baseline | Reduced (new flow won clearly) | Comparative onboarding test | TBC — exact figures pending |
| Trial → paid conversion | 13 / 131 trials/month | — | Product analytics | Project in flight; not yet measured post-launch |
| Monte Carlo settings clarity | — | Positive user reaction | Prototype testing | Qualitative |
| Linked Entities comprehension | Confusing, error-prone | Understood immediately; strong positive | Hallway testing with real users | Qualitative |

> **Status note:** the project ships in September 2026. Business outcomes (conversion lift, churn, growth) are not yet measurable. This case should be presented as **strong problem-framing + product decisions + validated usability improvements**, with business results marked as pending/TBC rather than claimed.

---

## Key Takeaways for Portfolio

- **End-to-end ownership** at senior level — directly demonstrates product ownership, the main gap in my profile.
- **Problem reframing** — challenged the proposed solution (remove tabs) and solved the real cause (signal-to-noise + semantic grouping). Senior judgment, evidenced.
- **Systems thinking over decoration** — Linked Entities is a data-model/state-management decision that protects the integrity of the product's core Monte Carlo output.
- **Complexity under constraint** — granular allocation via progressive disclosure in a tight interface.
- **Trust by design** — making a sophisticated engine legible (Monte Carlo settings/results split, stale-state indicator, labor-illusion calculation screen) for a high-net-worth, accuracy-obsessed audience.
- **Time-to-value** — onboarding rebuilt to reach value faster, validated by a comparative test (~30% faster, TBC).
- **Novel process** — AI-assisted design via Claude, with authorship grounded in dense page-level specs; wireframing collapsed into a high-fidelity interactive artifact, with Figma as the dev source of truth.

---

## Open Items (to complete this doc)

- Exact onboarding metrics: time-on-task and error counts, old vs. new.
- Precise "% faster" figure for onboarding.
- Any post-launch conversion/retention data once available after September 2026.
- Screenshots: dashboard before/after, projections before/after, Monte Carlo settings column, linked-entities flow, granular allocation UI, onboarding steps, FlowView.
