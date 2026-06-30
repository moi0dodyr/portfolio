# The Ticket Fairy — Project Documentation

## Overview

**Client:** The Ticket Fairy  
**Type:** Event ticketing & management platform (SaaS)  
**Funding:** Y Combinator S15  
**Scale:** $300M+ in ticket sales  
**Project duration:** August 2025 – March 2026 (~7 months)  
**My role:** Lead Product Designer — B2B Dashboard, Design System, Artist Management module  
**Team:** Two designers total — I owned B2B; second designer handled B2C consumer app and Entry Fairy  

---

## Product Ecosystem

The Ticket Fairy operates across several interconnected products:

1. **B2B Dashboard** — SaaS platform for event organizers (primary focus of my work)
2. **B2C Consumer App** — mobile app for ticket buyers (handled by second designer)
3. **B2C Consumer Website** — event discovery and ticketing web pages
4. **Entry Fairy** — mobile app for event staff to scan tickets on-site (handled by second designer)
5. **Artist Management Module** — new B2B module for managing artists, logistics, and event operations (designed entirely by me)

---

## Problem Statement

The client came with several interconnected problems:

### Business Problem
- Only **20% of newly registered users** went on to create an event — the core conversion metric, since the platform earns commission on ticket sales
- Significant revenue was being lost at the onboarding and event creation stage

### UX & Product Problems
- **Highly inconsistent UI:** years of legacy code resulted in mismatched styles, patterns, and components across different parts of the application
- **Outdated look & feel** that felt unprofessional and dated compared to modern SaaS tools
- **Poor accessibility:** low contrast, dense layouts, hard-to-parse information — users struggled to read and navigate the interface
- **Key features buried:** important capabilities (including the referral program) were hidden deep in settings and never surfaced to users
- **Confusing error states:** for example, every event must belong to a Brand (an organization within the platform), but when a user hadn't set up a Brand, the interface showed no clear error — the user simply couldn't proceed without understanding why

### Technical Context
- B2B Dashboard is a complex web application with mobile-responsive layout and a PWA for iOS and Android
- Backend remained unchanged throughout the project — the client's dev team was focused on fintech and AI infrastructure

---

## My Role & Scope

I was responsible for:
- Creating a new visual concept for the entire platform
- Building a unified design system from scratch
- Redesigning the B2B Dashboard (all flows, screens, tables, charts)
- Conducting and analyzing usability testing (before and after redesign)
- Designing the Artist Management module from scratch (new feature)
- Collaborating directly with the development team via Storybook and Chromatic

---

## Design System

### Approach
Built from scratch — no existing system to inherit. The starting point was a new visual concept I created for the platform, informed by the existing product's logic and brand direction, but fully modernised in both UX and UI.

### Tokens
Design tokens were implemented for:
- **Colors** (semantic and primitive)
- **Typography** (scale, weights, line heights)
- **Spacing** (consistent grid-based spacing system)

### Component Workflow
1. I designed and documented components in Figma
2. Developers implemented them in **Storybook**
3. I reviewed built components in Storybook via **Chromatic**, leaving annotated feedback
4. Iterations continued until the component matched the design intent
5. Components were then used across all screens and flows

### Cross-Product Scope
The design system covers the entire ecosystem — B2B and B2C — with two distinct design languages:
- **B2B:** information-dense, operational, professional
- **B2C:** engaging, visually expressive, consumer-friendly

Both share a unified visual identity, typography, spacing logic, and component architecture, adapted for web, iOS, and Android.

---

## Usability Testing

### Process
- Conducted **two rounds** of usability testing: before and after the redesign
- **5 participants** per round, recruited via a usability testing platform
- I wrote all test scenarios
- Tests were unmoderated (participants completed tasks independently following the written scenario), with video recording
- Metrics tracked: task completion rate, time on task, number of errors, user satisfaction score

### Key Scenario
Participants were asked to complete two core tasks: go through onboarding, then create an event.

### Findings Before Redesign
- ~50% of users successfully created an event (with errors along the way)
- Common issues:
  - Couldn't find key buttons or actions
  - Got overwhelmed by the volume of information
  - Encountered confusing error states with no explanation
  - Missed important features entirely

### Results After Redesign
- **~90% of users successfully created an event** — a 1.8× improvement in task completion
- Reduction in errors and confusion throughout the flow
- Users were able to navigate the interface without getting lost

---

## Key Design Work

### 1. Onboarding Flow
Redesigned the first-time user experience to guide new organizers through setup clearly. Addressed the issue of users registering but never creating an event.

### 2. Event Creation Flow
The most critical flow for the business. Key changes:
- Restructured into smaller, clearer steps to reduce cognitive load
- Surfaced important features that were previously buried
- Added clear error states with actionable guidance (e.g., explaining that an event requires a Brand and how to create one)
- Integrated the referral program into the flow (see below)

### 3. Referral Program — Discoverability
The referral program is a unique feature with no direct equivalent among competitors. Data shows it drives exceptional results for event organizers who use it.

**Before:** The feature was completely hidden inside event settings. It was never shown or mentioned during event creation. Users would only discover it if they navigated deep into settings — which most never did. Without a dedicated onboarding call from the support team, only **~10% of users** set up the referral program.

**After:**
- Dedicated, prominent placement in the event creation flow
- Clear explanation of what the referral program is and how it works
- Links to supporting documentation and examples
- Data-backed messaging on the results organizers typically see
- Dedicated analytics screen to track referral program performance, designed to be more visually engaging than standard dashboard screens

**Result:** Referral program adoption rose from ~10% to **50%+** — a 5× increase, measured via product analytics. No usability study was needed here; the problem was self-evident (the feature was simply hidden), so the team validated the outcome directly through analytics post-launch.

### 4. Tables & Data Visualisation
Redesigned data tables across the dashboard to be more scannable and actionable. Redesigned charts and graphs to better represent the underlying data semantics — the right chart type for the right data, with a consistent visual language.

### 5. Event Performance Dashboards
High-density information screens used by organizers to track sales, attendance, and event performance. These screens are critical to the client's users. Redesigned to be clearly readable, visually engaging, and aligned with the new design system.

---

## Artist Management Module

### Context
A brand new module, designed entirely from scratch. In complexity and scope, it functions as a standalone product embedded within the B2B Dashboard.

### Problem
Event organizers — especially for festivals and multi-day events — manage enormous amounts of operational information: artist contracts, riders, travel, accommodation, equipment requirements. This information typically lives across dozens of emails, PDF attachments, and spreadsheets, spread across multiple team members with no centralised visibility.

### Solution
A centralised artist & logistics management platform with:

**AI-Powered Document Import**
- Organizers upload their existing documents (emails, PDFs, contracts, rider files) in bulk
- The AI parses and categorises the information, distributing it to the relevant modules automatically
- Users can manually review and edit any auto-populated data
- Version management: when an updated document is uploaded (e.g., a revised payment agreement), the system detects the conflict, proposes to replace the existing data with a v2, and archives the previous version — preserving history without losing current state

**Role-Based Access**
7+ defined roles, each with access limited to their relevant modules only:
- **Admin** — full access to all data, manages roles and permissions
- **Stage Manager / Production Manager** — equipment, stage logistics, running order
- **Hospitality Manager** — food, drinks, special requirements, pre-event shopping lists
- **Transport Coordinator** — flights, ground transport, last-minute schedule changes
- **Accommodation Coordinator** — hotel bookings, room assignments, check-in/check-out
- **Promoter / Event Marketer** — ticket sales, affiliate links, promotional materials
- **Finance / Legal** — contracts, payments, compliance (sensitive data; invisible to all other roles)

This structure ensures that sensitive information (e.g., artist fees) is visible only to those who need it.

**Information Architecture**
Given the complexity, I created separate sitemaps for each role — mapping out exactly which screens and data each role has access to. This formed the structural foundation before any screen design began.

**Domain Complexity**
- Multi-day events with multiple simultaneous stages
- Multiple artists per event, each with individual riders and logistics
- Room reuse logic (e.g., same hotel room assigned to different artists on non-overlapping dates)
- Integration with Viberate for artist streaming statistics and metadata

**Status:** Design complete. Currently in development.

---

## Competitive Landscape

| Competitor | Strengths | Weaknesses |
|---|---|---|
| Eventbrite | Established brand, wide adoption, robust ticketing | Outdated design, limited flexibility |
| Dice.fm | Modern design, excellent UX | Limited market reach, fewer backend features |
| Posh.vip | High-end events, customisable | Small user base, less robust management tools |
| Shotgun.live | Focused on live events, strong ticketing | Limited integrations, small feature set |

**Key differentiator:** The Ticket Fairy's referral program has no direct equivalent among competitors. Combined with the upcoming Artist Management module, the platform is positioned to serve complex, large-scale events (multi-day festivals, multi-artist shows) that other tools cannot support at the operational level.

---

## Measurable Results

| Metric | Before | After | Source |
|---|---|---|---|
| Usability test: event creation success rate | ~50% (with errors) | ~90% | Usability testing (n=5, pre/post) |
| Referral program adoption rate | ~10% (excl. support-assisted onboarding) | 50%+ | Product analytics |
| Support onboarding call requests | Baseline | ~10% decrease | Internal support data |
| Business metric: new users who create an event | 20% (baseline) | TBC — awaiting data from client | Product analytics |

---

## Key Takeaways for Portfolio

- **Scale and complexity:** redesigned a multi-product ecosystem with a unified design system across web, iOS, and Android
- **Outcome-driven:** usability testing showed 1.8× improvement in the critical task completion rate
- **Research-grounded:** conducted structured usability testing with defined scenarios and metrics, both before and after redesign
- **Systems thinking:** design system built from scratch with tokens and Storybook integration, used across B2B and B2C
- **New feature design:** Artist Management module — complex domain, designed from zero, role-based IA, AI-powered workflow
- **Business awareness:** work was directly tied to conversion metrics and revenue model (commission on ticket sales)
