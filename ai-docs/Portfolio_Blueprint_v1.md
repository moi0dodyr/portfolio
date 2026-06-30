# Portfolio Blueprint v1 — Oleg Stepanchykov

> Это рабочая основа сайта-портфолио. Структура + готовые тексты (EN) + точный план картинок.
> Тексты сайта — на английском (канон). Мои пояснения/инструкции — на русском.
> После утверждения этого документа я соберу из него рабочий HTML-прототип.
> Дата: 28 июня 2026.

---

## 0. Главная стратегическая задача: выглядеть продуктово, а не агентско

Ты осознаёшь свой барьер: весь опыт — агентский/аутстаф, нет in-house. Сайт не должен это прятать (это читается и бьёт по доверию). Он должен **переигрывать рамку**: не «дизайнер, который делал проекты для клиентов», а «продуктовый дизайнер, который владел продуктами от проблемы до метрик». Это честно — оба твоих кейса это подтверждают.

Шесть рычагов, которые работают по всему сайту:

1. **Язык владения, а не услуги.** Глаголы: *owned, shipped, decided, reframed, validated.* НЕ: *delivered for the client, the client wanted, was tasked with.* Продуктовый дизайнер говорит про продукт и пользователя, агентский — про клиента и дедлайн.
2. **Структура кейса = как думает продуктовая команда.** Problem (бизнес + пользователь) → Insight/reframe → Decisions с трейд-оффами → Outcomes (метрики) → Reflection. Это формат, по которому тебя будут читать in-house рекрутеры и Head of Design.
3. **Метрики вперёд.** Каждый кейс открывается результатом, а не процессом. 50%→90%, 10%→50%+ — это твой главный актив.
4. **Halo Lab не прячем, но не выпячиваем.** Одна честная строка в About + мелким шрифтом «via Halo Lab» в шапке кейса. Врать про in-house нельзя — на собесе это вскроется за 2 минуты. Но рамка «я владел продуктом» — легитимна и подтверждается документами.
5. **Артефакты мышления, а не только красивые экраны.** Sitemap'ы по ролям, спеки страниц, дизайн-система, before/after. Именно они доказывают, что продуктовое мышление — твоё, а не «нарисовал по ТЗ».
6. **Честность как сигнал зрелости.** Где результат ещё не измерен (TBC) — так и пишем. Сеньорность читается в том, что ты отличаешь «решил проблему» от «доказал бизнес-результат». Подробнее — в разделе 6 (риски).

---

## 1. Информационная архитектура сайта

```
Home (одностраничник со скроллом + якорями)
├── Hero
├── Selected work (2 глубоких кейса → клик внутрь)
│   ├── /work/the-ticket-fairy   (отдельная страница)
│   └── /work/wealthtrace        (отдельная страница)
├── Also worked on (остальные проекты — БЕЗ перехода внутрь)
├── About / How I work
└── Contact / Footer
```

Навигация (sticky, минимальная): `Work · About · Contact` + кнопка `Resume`.
Логика: главная продаёт за 15 секунд (hero + 2 результата), кейсы добивают глубиной, «Also worked on» закрывает вопрос широты и известных брендов.

---

## 2. Homepage — структура, копирайт и картинки

### 2.1 Hero
**Что показываем:** кто ты, в одну строку, + сразу доказательство.

Копирайт (EN):
> **Oleg Stepanchykov**
> Product designer who owns products end-to-end — from the problem to the metric.
> I work on complex B2B and fintech web apps, with a design-systems backbone.
>
> `[View work]`  `[Resume]`

Под заголовком — строка-доказательство (3 мини-факта в ряд):
> `4+ years` · `Event ticketing → 50%→90% task success` · `Fintech → end-to-end product ownership`

**🖼 Картинка Hero (1 шт, главная на сайте):**
Крупный, чистый коллаж/мокап из 2–3 твоих лучших экранов (TF dashboard + WealthTrace dashboard) в нейтральных браузерных рамках, на спокойном фоне. Без перегруза. Это первое, что видит человек — должно выглядеть как продукт, а не как дрибббл-арт. *Альтернатива:* одно сильное «hero»-изображение TF dashboard на всю ширину.

### 2.2 Selected work (2 карточки)
**Что показываем:** два флагмана как крупные кликабельные блоки. Каждая карточка = превью + результат.

Карточка 1 — The Ticket Fairy (EN):
> **The Ticket Fairy** — Event ticketing & management SaaS
> Owned the redesign of the revenue-critical B2B organizer platform + built the design system from scratch.
> **Event-creation success ~50% → ~90%** · Referral adoption ~10% → 50%+
> `Read case →`

Карточка 2 — WealthTrace (EN):
> **WealthTrace** — Retirement-planning fintech
> Sole product designer, end-to-end ownership. Reframed the brief and redesigned the whole app around the real problem.
> **End-to-end product ownership** · Onboarding ~30% faster *(test, figure TBC)*
> `Read case →`

**🖼 Картинки (2 шт, по одной на карточку):**
Одно сильное «обложечное» изображение на кейс — самый показательный экран *после* редизайна, в рамке. TF → event performance dashboard или event creation. WealthTrace → главный dashboard после. Одинаковый стиль рамок/фона для обеих, чтобы выглядело системно.

### 2.3 Also worked on (без перехода внутрь)
**Что показываем:** широту и известные бренды — но честно, без претензии на глубокий кейс.

Копирайт-интро (EN):
> **Also worked on**
> A selection of other products I've contributed to across fintech, healthcare, and B2B SaaS.

Сетка плашек (логотип/название + 1 строка, НЕ кликабельны):
- **Comparesoft** — B2B software-selection marketplace (16,000+ companies; TfL, PwC, Just Eat)
- **RedPath** — healthcare app for a national cancer-care program (offline-first)
- **Hygeia** — operations PWA for large-scale site cleaning
- **Hornet** — trading-algorithm SaaS redesign (fintech)
- **Umano** — B2B team-transformation SaaS
- **Team Garden** — internal HR tool

**🖼 Картинки:** по желанию — маленькие лого или одна обрезанная превьюшка экрана на плашку. Это второстепенно; можно вообще текстом + лого. Известные имена (Comparesoft, клиенты TfL/PwC) работают сами по себе.

> ⚠️ Честность: Comparesoft/RedPath/Hygeia и т.д. — твой вклад там разного объёма. Раз мы их НЕ раскрываем в кейсы, формулировки держим нейтральные («contributed to», «designed flows for»), без громких заявлений об ownership. Иначе на собесе по этим проектам будет нечего показать.

### 2.4 About / How I work
**Что показываем:** короткий блок, который закрепляет продуктовую рамку + честно называет контекст.

Копирайт (EN):
> **How I work**
> I start from the problem and the business stakes, not the screen. I'm comfortable reframing a brief when the stated problem isn't the real one, designing the system behind the surface, and validating with real users. I have a DesOps backbone — design systems, tokens, and a tight Storybook/Chromatic handoff with engineers.
>
> Most of this work was done at **Halo Lab**, a product studio, where I act as the lead/sole designer embedded in client product teams. I'm now looking for a single product to own in-house, long-term.

> ⚠️ Эта последняя строка — твой честный мост к in-house. Она превращает слабость в осознанное намерение, а не в то, что рекрутер раскопает сам. Рекомендую оставить.

### 2.5 Contact / Footer
Копирайт (EN):
> **Let's talk.**
> Open to in-house product design roles.
> `stepanchykov.o@gmail.com` · LinkedIn · Resume (PDF)

---

## 3. Шаблон кейса (storytelling spine)

Оба кейса идут по одной драматургии — так читатель учится «языку» сайта на первом кейсе и быстрее проходит второй:

1. **Hero** — название, роль, одна строка сути, 1–2 ключевые метрики.
2. **Context** — что за продукт, кто пользователь, что на кону у бизнеса. (Коротко — 3–4 предложения.)
3. **The problem** — бизнес-симптом + UX-причины.
4. **The turning point / insight** — момент мышления (рефрейм, гипотеза). ← это место, где читается сеньорность.
5. **Key decisions** — 3–5 решений. Каждое: *Problem → Decision → Why it's a product decision → Before/After.*
6. **Outcomes** — таблица метрик, честно (с TBC где нужно).
7. **Reflection** — что узнал / что дальше. (2–3 предложения, по желанию.)

Дальше — наполнение для каждого кейса.

---

## 4. КЕЙС 1 — The Ticket Fairy

> Это твой флагман. Он напрямую закрывает «нет ownership»: 7 месяцев владения B2B-платформой, дизайн-система с нуля, новый модуль с нуля, метрики до/после.

### 4.1 Hero
Копирайт (EN):
> **The Ticket Fairy**
> Redesigning the revenue engine of an event-ticketing platform
> *Lead Product Designer · B2B Dashboard, Design System, Artist Management · Aug 2025 – Mar 2026 · via Halo Lab*
>
> **~50% → ~90%** event-creation success (usability testing) · **~10% → 50%+** referral adoption (analytics)

**🖼 Hero image:** самый «продающий» экран после редизайна — event performance dashboard или новый event-creation flow — в браузерной рамке на всю ширину. Должен сразу говорить «современный SaaS».

### 4.2 Context
Копирайт (EN):
> The Ticket Fairy (YC S15, $300M+ in ticket sales) runs a multi-product ecosystem: a B2B dashboard for event organizers, consumer apps for buyers, and on-site scanning tools. The platform earns commission on every ticket sold, so the organizer-facing B2B dashboard is the company's revenue surface. I owned its end-to-end redesign; a second designer handled the consumer side.

**🖼 Картинка — Product ecosystem diagram (1 шт):**
Простая схема экосистемы: в центре — B2B Dashboard (твоя зона, выделена), вокруг — B2C app, B2C web, Entry Fairy, Artist Management. Подпись «My ownership» на B2B + Artist Management. *Зачем:* сразу показывает масштаб и точно очерчивает твою зону — честно и в твою пользу.

### 4.3 The problem
Копирайт (EN):
> Only **20% of newly registered organizers** ever created an event — and since revenue depends on events going live, that gap was lost money. Underneath it: years of legacy code had produced an inconsistent, dated, low-contrast interface; key capabilities (including the high-value referral program) were buried in settings; and error states left users stuck with no explanation — e.g. an event silently couldn't be created until a "Brand" existed, but nothing said so.

**🖼 Картинки — «Before» (1 коллаж или 2–3 кадра):**
- Коллаж несогласованного старого UI (разные кнопки/стили рядом) — доказывает «inconsistent & dated».
- Скрин запутанного error state (или его реконструкция) — «stuck with no explanation».
- Скрин, где referral спрятан в глубине настроек.
Подавать как honest «before» — мелким, с подписями-стрелками на проблемы.

### 4.4 The turning point
Копирайт (EN):
> The brief was "make it modern." But the business problem was conversion. So I anchored every design decision to a single question: *does this help a new organizer get an event live?* That reframing — from a visual refresh to a conversion problem — set the priorities for the whole project: onboarding, event creation, and surfacing the features that actually drive sales.

> ⚠️ Это честный и сильный ход: ты показываешь, что думал бизнес-метрикой, а не «перекрасил». Не выдумывай тут лишнего — формулировка опирается на факты из дока (20% baseline, commission model).

### 4.5 Key decisions

**Decision 1 — A design system from scratch (DesOps spine)**
Копирайт (EN):
> No system existed. I built one from the ground up — color, type, and spacing tokens (semantic + primitive), and a component library shipped through Storybook and reviewed in Chromatic. It spans the whole ecosystem with two design languages (information-dense B2B, expressive B2C) on a shared foundation across web, iOS, and Android.

**🖼 Картинки:**
- Сетка токенов + базовых компонентов (color/type/spacing, buttons, inputs).
- Скрин Storybook/Chromatic с твоими аннотациями-ревью. *Зачем:* доказывает реальный dev-handoff, не «картинки в Figma». Это сильный DesOps-сигнал.

**Decision 2 — Event creation flow (the conversion fix)**
Копирайт (EN):
> I restructured the most business-critical flow into smaller, clearer steps, surfaced previously buried features, and replaced silent failures with actionable error states (e.g. explaining that an event needs a Brand and how to create one inline).

**🖼 Before/After (главный визуал кейса):**
Параллельно: старый перегруженный шаг создания события → новый разбитый на ясные шаги. Плюс мини-кадр «before: silent error» → «after: actionable error state». Это ядро истории про конверсию.

**Decision 3 — Surfacing the referral program**
Копирайт (EN):
> The referral program is a unique, high-performing feature with no direct competitor equivalent — but it was hidden in event settings, so without a support call only ~10% of organizers ever set it up. I moved it into the event-creation flow with a clear explanation, supporting docs, data-backed framing of typical results, and a dedicated, more visually engaging analytics screen to track performance.

**🖼 Before/After (2 кадра) + 1 экран:**
- Before: referral закопан в настройках (путь кликов стрелкой).
- After: referral как заметный шаг в создании события.
- Отдельный «красивый» analytics screen для referral.

**Decision 4 — Tables, charts & performance dashboards**
Копирайт (EN):
> Organizers live in high-density data screens. I made tables scannable and actionable, and matched each chart type to the semantics of its data, under one consistent visual language — so the most important screens for the client's users became readable and fast to act on.

**🖼 Картинки:** 1–2 «после»-экрана: redesigned data table + event performance dashboard. Можно с короткими подписями «what changed».

**Decision 5 — Artist Management module (designed from zero)**
Копирайт (EN):
> A brand-new module that works as a standalone product inside the dashboard. Festival organizers juggle artist contracts, riders, travel, accommodation, and equipment across dozens of emails and spreadsheets. I designed a centralized system with: AI-powered bulk document import (parses and routes data into the right modules, with version conflict handling); role-based access for 7+ roles, each seeing only their data (artist fees visible only to Finance/Legal); and an information architecture I mapped as a separate sitemap per role before any screen was drawn.

**🖼 Картинки (это «вау»-блок, не жалей):**
- **Role-based sitemap diagram** — карта: роли → доступные модули/экраны. *Самый сильный артефакт мышления во всём кейсе.* Доказывает системное IA-мышление до экранов.
- Схема AI-import flow (upload → parse → route → review/edit → version conflict v2).
- 2–3 ключевых экрана модуля (например, обзор по артисту + logistics).

**🖼 Подпись-статус:** «Design complete; currently in development.» — честно.

### 4.6 Outcomes
Копирайт (EN) + честная таблица:

| Metric | Before | After | Source |
|---|---|---|---|
| Event-creation success (usability) | ~50% (with errors) | ~90% | Usability testing, n=5/round, pre/post |
| Referral-program adoption | ~10% | 50%+ | Product analytics |
| Support onboarding-call requests | baseline | ~10% lower | Internal support data |
| New users who create an event | 20% baseline | *measurement pending* | Product analytics |

> ⚠️ Честные формулировки (важно для собеса):
> - Юзабилити-тест — **n=5 на раунд, немодерируемый**. Это directional/качественный сигнал, не статистика. На сайте оставляем «usability testing (n=5 per round)» — не называем это «proven statistically». Если спросят — ты честно объяснишь метод.
> - Главная бизнес-метрика (20% → ?) — **результата ещё нет**. Подаём как «problem framed, measurement pending», НЕ как победу. Это и есть сеньорная честность.

**🖼 Картинка:** аккуратные metric-cards или before/after бар-чарт (50→90, 10→50). Чисто, без обмана осей.

### 4.7 Reflection (по желанию)
Копирайт (EN):
> The work I'm proudest of isn't a screen — it's the role-based IA for Artist Management and the system that ties the whole platform together. That's the part that holds up as the product scales.

---

## 5. КЕЙС 2 — WealthTrace

> Этот кейс — твой главный аргумент про *senior judgment* и *end-to-end ownership одного продукта*. Здесь сильнее всего «продуктовое мышление»: рефрейм брифа, data-model решения, trust-by-design.

### 5.1 Hero
Копирайт (EN):
> **WealthTrace**
> Making a sophisticated retirement-planning engine legible enough to convert
> *Senior Product Designer · end-to-end ownership of the web app · Apr–Sep 2026 · via Halo Lab*
>
> **End-to-end product ownership** · Reframed the brief and redesigned around the real problem · Onboarding **~30% faster** *(comparative test; exact figure TBC)*

**🖼 Hero image:** главный dashboard после редизайна, чистый, в рамке. Должен выглядеть «institutional-grade, но человеческий».

### 5.2 Context
Копирайт (EN):
> WealthTrace is retirement-planning software for high-net-worth U.S. investors ($2–10M investable, age 50–65, highly financially literate). Its edge is modeling depth: a Monte Carlo engine that computes weighted return and volatility down to the individual holding — closer to advisor tools (RightCapital, eMoney) than to consumer apps (Boldin). Strong engine, weak surface. I owned the redesign of the entire web app.

**🖼 Картинка — Competitive positioning map (1 шт):**
Ось «Consumer ↔ Advisor/institutional» × «shallow ↔ deep modeling». Точки: Boldin, ProjectionLab, RightCapital, eMoney, MoneyGuidePro, и WealthTrace в узкой premium-нише. *Зачем:* мгновенно объясняет продукт и аудиторию — продуктовый, не декоративный артефакт.

### 5.3 The problem
Копирайт (EN):
> High-intent trials weren't converting: roughly **13 of 131 trials/month** became paid, growth was flat (~5% YoY, mostly word of mouth), and many users dropped off mid-trial. The hypothesis: the surface — dated, overwhelming, hard to navigate — was losing users the engine had already won. My mandate was to make the product clear enough that non-technical, high-intent users could reach value and convert.

**🖼 Картинка:** «before» dashboard — перегруженный, с лишними секциями. Маленький, с подписями на проблемные зоны.

### 5.4 The turning point (сильнейший блок кейса)
Копирайт (EN):
> There was already a proposed fix on the table: *"the interface relies on tabs, which are cluttered — remove the tabs."* After a heuristic analysis I pushed back: tabs weren't the problem, and removing them was neither possible nor desirable given the product's structure. The real causes were **low signal-to-noise** (screens carried content users never looked at) and **poor semantic grouping** (related information wasn't organized by meaning). I designed against the cause, not the named symptom. Separating the stated problem from the actual one became the spine of the project.

> ⚠️ Это твой самый сильный сеньор-сигнал на всём сайте. Дай ему воздуха — отдельная крупная секция, может с цитатой брифа visually выделенной. Это ровно то, чем in-house Head of Design отличает мидла от сеньора.

**🖼 Картинка — концептуальная схема (1 шт):**
Зачёркнутое «remove tabs» → и рядом настоящая диагностика: «signal-to-noise ↑» + «semantic grouping». Можно как мини-before/after одного экрана: шумный → сгруппированный по смыслу. Это иллюстрация мышления, не UI.

### 5.5 Key decisions

**Decision 1 — Linked Entities (data-integrity by design)**
Копирайт (EN):
> On the cash-flow inputs screen, one real-world object required several disconnected records: buy a rental property and you'd add the asset, the mortgage (liability), the rental income (inflow), and the future sale (another inflow) — four entries for one thing. Users forgot related entries and, when deleting, had to manually hunt down every linked record. Worse, this data feeds the Monte Carlo engine, so orphaned records corrupted the very projections the product is known for. I introduced a **Linked Entities** model: an asset owns its dependencies — creating it generates the linked liability and income; editing or deleting it cascades automatically. This is a state-management and data-model decision, not a cosmetic one.

**🖼 Before/After diagram (ключевой):**
- Before: 1 объект → 4 разрозненных записи в разных секциях (стрелки-разрывы).
- After: 1 asset-entity, внутри — mortgage/income/sale, каскадное удаление.
Плюс реальный UI нового flow создания asset с linked entities.

**Decision 2 — Granular asset allocation (progressive disclosure под жёстким ограничением)**
Копирайт (EN):
> Manual accounts support deep detail for accurate probability — holdings down to individual tickers and allocation by type (e.g. 30% cash / 50% growth / 5% bonds). That's a deeply nested structure (Account → Asset class → Tickers → %) that had to fit a tight space without becoming an endless spreadsheet. I designed a compact UI using progressive disclosure and inline editing so users distribute a 100% allocation without visual overload. It took heavy iteration.

**🖼 Картинка:** финальный nested allocation UI, возможно с состоянием «свёрнуто → развёрнуто» (показать progressive disclosure).

**Decision 3 — Monte Carlo: settings vs results (trust by design)**
Копирайт (EN):
> The Monte Carlo screen mixed inputs and outputs in the same space, so users couldn't tell which controls they owned versus which numbers the model produced — and since the simulation re-runs manually, people changed a setting and read stale results as current. I pulled all settings into a dedicated column, gave results their own primary area, and added a state-management cue (subtle animation + indicator) that fires when a setting changes, signaling the simulation is stale and must be re-run. I deliberately left the model itself untouched — the engine was sound; the job was making it legible and trustworthy.

**🖼 Before/After:**
- Before: settings и results вперемешку.
- After: колонка настроек | область результатов + индикатор «stale, re-run».
Можно показать индикатор отдельным мини-кадром.

**Decision 4 — Cash-flow distributions: FlowView**
Копирайт (EN):
> The distributions screen is a dense year-by-year table of inflows and outflows by category. I added a flow-style visualization on top of the table, so users can see at a glance where money comes from and goes — turning a spreadsheet into something readable in seconds.

**🖼 Картинка:** таблица + FlowView (sankey-подобная визуализация) рядом.

**Decision 5 — Fighting information overload (ответ на рефрейм)**
Копирайт (EN):
> This is where the reframing paid off. The dashboard showed charts nobody used; the projections screen included an asset-allocation chart with no semantic link to projections — users explicitly said they didn't understand why it was there. I raised signal-to-noise by cutting low-value content, then applied semantic grouping to organize what remained by meaning. Both screens became focused, with a clear hierarchy around the inputs and projections that matter.

**🖼 Before/After (сильный визуал):**
- Перегруженный dashboard с офтопик-секциями → сбалансированный.
- Projections с лишним allocation-чартом → сфокусированный.

**Decision 6 — Onboarding rebuilt around time-to-value**
Копирайт (EN):
> The old onboarding was too many heavy, form-crowded steps before any value. I rebuilt it: a minimal first step (name, email, password), goal capture, inline financial-planning tips linked to their sources (credibility + education), optional early account entry that triggers a **live projection graph** showing capital growth before the user even reaches the dashboard, a review step, and a brief "calculating 100,000 scenarios…" screen (a labor-illusion that makes the modeling depth felt). In a comparative old-vs-new test, the new flow won clearly — **~30% faster** (exact figure TBC).

**🖼 Картинки:**
- Последовательность шагов нового онбординга (горизонтальная лента).
- Отдельно: live projection preview + calculation screen (это «фишки», стоит выделить).

### 5.6 Process — AI-assisted product design (твой дифференциатор)
Копирайт (EN):
> This project used a deliberate, novel production process. I built the visual concept, a foundational design system (color/type tokens, base components), and the first dashboard in Figma. Then I moved production into an AI design tool, designing screens directly from dense, page-level specs I wrote first — every field, its behavior, why the data is collected, the helper copy, the interaction logic. The tool produced clickable, responsive, near-final UI from those specs; I iterated through stakeholder feedback. Approved designs were rebuilt in Figma as the developer source of truth. The effect: wireframing collapsed into a high-fidelity, interactive artifact — and the page specs are the proof of authorship. The product thinking, IA, states, and logic were mine; the tool only accelerated execution.

> ⚠️ Сильный и честный блок — он отвечает на немой вопрос «а ты вообще руками делаешь?»: да, и твой вклад — спеки и решения, инструмент лишь ускорял. Это плюс, а не минус, если так и подать.

**🖼 Картинки:**
- Диаграмма процесса: Figma (concept + DS) → AI tool (spec-driven production) → Figma (source of truth).
- **Скрин страницы-спеки** (с замазанным конфиденциальным) — это твой главный proof of authorship. Очень рекомендую показать.

### 5.7 Outcomes
Копирайт (EN) + честная таблица:

| Metric | Before | After | Source | Status |
|---|---|---|---|---|
| Onboarding completion time | baseline | ~30% faster | Comparative test (old vs new) | exact figure TBC |
| Onboarding errors | baseline | reduced (new flow won clearly) | Comparative test | figures TBC |
| Trial → paid conversion | 13 / 131 trials/mo | — | Product analytics | ships Sep 2026, not yet measured |
| Monte Carlo clarity | — | positive user reaction | Prototype testing | qualitative |
| Linked Entities comprehension | confusing, error-prone | understood immediately | Hallway testing | qualitative |

> ⚠️ Честность (критично — проект ещё не зарелизился):
> - Бизнес-результаты (конверсия, отток, рост) **ещё не измеримы** — релиз сентябрь 2026. Подаём кейс как **сильный рефрейм + продуктовые решения + валидированные юзабилити-улучшения**, а бизнес-итоги — pending. Не заявляй рост конверсии.
> - Глубинные интервью проводила **команда продукта, не ты.** Формулировка: «I built on moderated research the team ran» / «the product team's depth interviews surfaced X; I owned the design response». Свои руки — heuristic analysis, prototype/hallway testing, comparative onboarding test. Так и пиши — это всё ещё солидная многоисточниковая валидация.

### 5.8 Reflection (по желанию)
Копирайт (EN):
> The decision I'd defend hardest is refusing to "remove the tabs." Solving the real problem instead of the requested one is the difference between executing a brief and owning a product.

---

## 6. Риски позиционирования (читать обязательно)

1. **«Это был in-house проект?»** — на собесе спросят. Готовый честный ответ: «Я работал как ведущий/единственный дизайнер, встроенный в продуктовую команду клиента через Halo Lab. Зона ответственности и владение — как у in-house; формально я был на стороне студии.» Сайт уже это отражает (About + «via Halo Lab»). Не ври — вскроется.
2. **Юзабилити n=5 немодерируемый.** Не называй статистикой. Называй «directional usability testing». Сеньор знает разницу — и это проверят.
3. **WealthTrace ещё не в проде.** Никаких заявлений о бизнес-результате. Только решения + валидированные улучшения + честный TBC.
4. **Чужое исследование.** Глубинные интервью WealthTrace — не твои. Разделяй «я использовал ресёрч команды» и «я провёл». Это вопрос доверия ко всему остальному.
5. **«Also worked on» без глубины.** Держи формулировки скромными. Если назовёшь ownership там, где его не покажешь — поймают.

> Ни один из этих пунктов не ослабляет портфолио. Наоборот: честная подача = сигнал сеньорности. Слабые кандидаты переобещают; сильные точно называют свой вклад.

---

## 7. Сводный список картинок (что тебе подготовить)

**Homepage**
- [ ] Hero-коллаж: 2–3 лучших экрана (TF + WealthTrace) в рамках, спокойный фон.
- [ ] Обложка TF (1 экран после).
- [ ] Обложка WealthTrace (1 экран после).
- [ ] (Опц.) лого/мини-превью для «Also worked on».

**Ticket Fairy**
- [ ] Hero: dashboard/event-creation после, на всю ширину.
- [ ] Ecosystem diagram (твоя зона выделена).
- [ ] Before: коллаж старого UI + confusing error + спрятанный referral.
- [ ] Design system: токены + компоненты; скрин Storybook/Chromatic с твоими ревью.
- [ ] Event creation before/after + error state before/after.
- [ ] Referral before/after + analytics screen.
- [ ] Tables/charts/performance dashboard после (1–2).
- [ ] **Artist Management: role-based sitemap (приоритет!)** + AI-import flow schema + 2–3 экрана.
- [ ] Outcomes: metric-cards / честный bar-chart.

**WealthTrace**
- [ ] Hero: главный dashboard после.
- [ ] Competitive positioning map.
- [ ] Before: перегруженный dashboard с подписями.
- [ ] Turning point: концепт-схема «remove tabs ✗ → signal-to-noise + grouping».
- [ ] Linked Entities: before/after diagram + реальный flow UI.
- [ ] Granular allocation UI (свёрнуто/развёрнуто).
- [ ] Monte Carlo before/after + stale-indicator мини-кадр.
- [ ] FlowView (таблица + flow viz).
- [ ] Overload before/after (dashboard + projections).
- [ ] Onboarding: лента шагов + live projection preview + calculation screen.
- [ ] **Process diagram (Figma→AI→Figma) + скрин страницы-спеки (proof of authorship, приоритет!).**
- [ ] Outcomes: честная таблица/карточки с TBC.

> Общий стиль картинок: одинаковые рамки, один фон, одинаковые подписи. Before — мельче и приглушённее; After — крупно и чисто. Никаких «обрезанных» осей на графиках.

---

## 8. Что дальше (предлагаемый порядок)

1. Ты ревьюишь этот blueprint — правки по фактам/формулировкам/приоритетам.
2. Фиксируем английские тексты.
3. Я собираю рабочий HTML-прототип всей структуры (home + 2 кейса) с плейсхолдерами под картинки — ты увидишь сайт целиком и расставишь реальные изображения.
4. Делаем украинскую версию текстов.
5. (Опц.) добавляем 3-й кейс позже, если решишь усилить широту.
