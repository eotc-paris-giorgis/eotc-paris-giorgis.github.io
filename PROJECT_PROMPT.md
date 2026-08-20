# Project prompt — Paroisse Debre Giorgis website (Paris)

Copy everything below the line into another LLM to continue this work.

---

You are continuing an existing website project. Do not start from scratch unless a file is missing. Read the repo first, then finish what is unfinished.

## Goal

Build and publish a simple, free, public website for a parish of the Ethiopian Orthodox Tewahedo Church in Paris, France. The parish is dedicated to Saint George (Giorgis). The site exists to share information and updates over time: who the parish is, service times, feast days, news, and contact details.

The user is a parish member, not a developer. Updates must stay easy: edit one content file, commit, push.

Desired public URL (free, no paid domain):

`https://eotc-paris-giorgis.github.io`

Until that exact URL exists, a temporary GitHub Pages URL is acceptable:

`https://henokfasil.github.io/eotc-paris-giorgis/`

## Hard constraints

- No payment. No paid domain, no paid host, no WordPress.com paid plan, no Hostinger.
- Do not use dead/shady free domains (Freenom, `.tk`, `.ml`, `.ga`, `.cf`).
- Static site only: HTML + CSS + vanilla JS. No build step, no React, no npm app, no backend, no database.
- Host on GitHub Pages (free).
- Use only relative paths (`css/style.css`, `index.html`, `assets/...`) so the site works both as a project site (`username.github.io/repo/`) and later as an org user site (`eotc-paris-giorgis.github.io`).
- Do not invent a street address, phone number, email, Facebook page, priest name, or exact Sunday hour if it is not confirmed. Empty fields must show a honest “to be published by the parish” message.
- Respectful liturgical tone. This is a church, not a startup landing page. No ads, no stock-photo clutter, no cartoon saints.
- French is the default language (Paris). Also support Amharic and English via a language switcher.
- Amharic is LTR. Use `Noto Serif Ethiopic` for Ethiopic script.
- Keep GitHub account `henokfasil` as the current owner unless the user creates org `eotc-paris-giorgis`.

## Parish identity (use these names)

- Amharic: ደብረ ጊዮርጊስ — ቅዱስ ጊዮርጊስ
- French: Paroisse Debre Giorgis — Saint Georges
- English: Debre Giorgis Parish — Saint George
- Church: Église orthodoxe éthiopienne Tewahedo / የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን / Ethiopian Orthodox Tewahedo Church
- City: Paris, France
- Patron: Saint George the Martyr (Kidus Giorgis). Debre Giorgis means “the mount of Saint George”.

Do not confuse this parish with Debre Selam Kidus Mikael (8 rue de l’Abbé Groult, 75015 Paris). That is a different parish. Public sources disagree on Debre Giorgis’ street address, so leave `address`, `phone`, `email`, `facebook`, `telegram` empty until the user supplies them.

## Local path and GitHub

- Local folder: `/Users/henok/projects/eotc-paris-giorgis`
- GitHub user already logged in via `gh`: `henokfasil` (display name Adwa1988)
- GitHub user/org `eotc-paris-giorgis` does **not** exist yet (404)
- Repo was **not** created / not pushed when this prompt was written
- README.md was not written yet
- Git was not initialized yet

### How `eotc-paris-giorgis.github.io` actually works

That hostname requires a GitHub **user or organization** named `eotc-paris-giorgis`, plus a repository named `eotc-paris-giorgis.github.io`.

A repo named `eotc-paris-giorgis.github.io` under `henokfasil` will **not** serve that hostname. Under `henokfasil` the Pages URL is:

- Project Pages: `https://henokfasil.github.io/eotc-paris-giorgis/`
- User Pages would require repo `henokfasil.github.io` (wrong name; do not overwrite anything else)

Recommended deploy path:

1. Create public repo `henokfasil/eotc-paris-giorgis`
2. Push `main` with the site at the repo root (`index.html` at root)
3. Enable GitHub Pages from branch `main`, folder `/`
4. Site goes live at `https://henokfasil.github.io/eotc-paris-giorgis/`
5. Later, user creates a free GitHub Organization named `eotc-paris-giorgis` at https://github.com/account/organizations/new
6. Transfer the repo to that org and rename it to `eotc-paris-giorgis.github.io` (or create that repo in the org and push the same files)
7. Pages URL becomes `https://eotc-paris-giorgis.github.io`

Organizations cannot be created via the normal GitHub REST API with a personal token. The user must click the org-creation page once.

## What already exists (do not rebuild blindly)

```
/Users/henok/projects/eotc-paris-giorgis/
  index.html              Home
  paroisse.html           About the parish / faith / visiting
  offices.html            Service times
  actualites.html         News
  contact.html            Contact + mailto form + map iframe
  css/style.css           Full liturgical stylesheet
  js/content.js           ALL editable parish data + i18n strings
  js/site.js              Lang switcher, mobile nav, render hours/feasts/news/contact/form
  assets/ethiopian-cross.svg
  assets/favicon.svg
  assets/ornament.svg
  assets/pattern.svg
  data/                   Empty folder (unused; content lives in js/content.js)
```

Missing / unfinished:

- README.md
- .gitignore
- 404.html (nice to have for GitHub Pages)
- git init, first commit, GitHub repo, GitHub Pages enable
- Real address / phone / email / hours (waiting on the parish)
- Photographs / icon of Saint George (image generation failed: no Imagine credits). Site currently uses SVG crosses + CSS, which is acceptable.
- Live URL not published yet

## Site architecture

Five static pages, duplicated header/footer in each HTML file (no SSG). Scripts at the bottom of every page:

```html
<script src="js/content.js"></script>
<script src="js/site.js"></script>
```

`js/content.js` exposes:

- `window.SITE` — name, saint, city, address, phone, email, facebook, telegram, mapQuery, hours[], feasts[], news[]
- `window.I18N` — objects `fr`, `am`, `en` with UI keys

`js/site.js` on DOMContentLoaded:

- Detects language: localStorage `eotc-giorgis-lang`, else `am` / `en` / default `fr`
- Applies `[data-i18n]` and `[data-i18n-placeholder]`
- Marks current nav link via `body[data-page]`
- Mobile menu `.menu-toggle` toggles `.nav.open`
- Renders `#hours-table`, `#feast-list`, `#news-list`, `#contact-details`
- Sets Google Maps iframe `#map-frame` from `SITE.address` or `SITE.mapQuery`
- Contact form `#contact-form` builds a `mailto:` if `SITE.email` is set; otherwise alerts the form hint

To publish a news item, prepend an object to `SITE.news` in `js/content.js`:

```js
{
  date: "2026-08-17",
  title: { fr: "...", am: "...", en: "..." },
  body:  { fr: "...", am: "...", en: "..." }
}
```

Every translatable parish fact must have `fr`, `am`, and `en`. Do not leave Amharic as French.

## Pages and purpose

1. **index.html** — Hero with ደብረ ጊዮርጊስ, kicker, welcome, 3 cards (Offices / News / Contact), feast calendar
2. **paroisse.html** — Patron saint, Tewahedo meaning, liturgy languages (Ge’ez / Amharic / French), visitor etiquette (modest dress, netela/scarf, remove shoes)
3. **offices.html** — Hours table + note that exact time/address will be confirmed
4. **actualites.html** — Renders `SITE.news`
5. **contact.html** — Details + form + map. Empty contact fields show pending notice

## Design system (keep it)

Liturgical, cathedral-like, not corporate.

Colors (CSS variables in `css/style.css`):

- `--wine: #5c1218`
- `--wine-deep: #2a0a0c`
- `--wine-mid: #7a1c24`
- `--gold: #c9a84c`
- `--gold-soft: #e8d48b`
- `--parchment: #f7f1e6`
- `--cream: #fbf7f0`
- `--ink: #1c1310`
- `--green: #1f4d2e` (subtle Ethiopian accent only)

Fonts (Google Fonts already linked in HTML):

- Ethiopic: `Noto Serif Ethiopic`
- Latin headings: `Cormorant Garamond`
- UI/body: `Source Sans 3`

Visual language:

- Ethiopian Orthodox lattice/processional cross as SVG logo (not a Latin cross)
- Repeating gold cross pattern overlay on dark wine hero
- Gold ornament divider
- Sticky dark header, gold bottom border
- Parchment content cards
- Language switcher: FR | አማ | EN
- Footer blessing: French/Amharic/English via i18n, plus Ge’ez line `በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ አሜን`
- Responsive: nav collapses under 860px
- `prefers-reduced-motion` respected

If you add images later: no generated fake clergy faces, no Latin text inside images, no watermarks. Traditional Ethiopian icon style is OK for Saint George (historical saint, not a living person). Prefer SVG/CSS if image tools fail.

## Feasts already encoded (civil dates, usual)

- 7 January — Genna (Christmas)
- 19 January — Timkat (Epiphany)
- Spring — Fasika (Orthodox Easter; do not hardcode a year-specific date unless asked)
- 1 May — Saint George (Miyazia 23)
- 27 September — Meskel
- 16 November — Saint George the Martyr (Hidar 7)

The 23rd of each Ethiopian month is also associated with Saint George; optional to mention, do not clutter the home calendar.

## Copy rules

- Reverent, clear, short. French should be natural, not translated stiffly.
- Amharic must be correct and church-appropriate. If unsure, keep the existing Amharic and ask rather than invent broken phrases.
- Welcome visitors; do not sound exclusive.
- Do not claim official diocesan status, patriarchate affiliation details, or a specific building unless the user confirms.
- First news item already says the site is online and that address/hours will be completed by the parish. Update that once real details exist.

## What the next LLM should do (in order)

1. Read all existing files. Do not rewrite CSS/HTML unless fixing a bug or a requested change.
2. Add `.gitignore` (at least `.DS_Store`) and a French+English `README.md` explaining:
   - how to edit `js/content.js`
   - how to add news
   - how GitHub Pages works
   - how to get `eotc-paris-giorgis.github.io` via a free GitHub org
3. Initialize git if needed. Local git `user.name` may be empty; use `henokfasil` / `henokfasil@users.noreply.github.com` for the repo if configuring locally.
4. Create public repo `henokfasil/eotc-paris-giorgis` and push `main`.
5. Enable GitHub Pages (`main`, `/`). Confirm the live URL.
6. Ask the user (or fill if they already gave them) for: street address in Paris, Sunday Kidase time, phone, email, Facebook/Telegram, priest/parish council contact, any photos they own.
7. After those facts exist, put them in `SITE` in `js/content.js` only. Do not scatter contact details across HTML.
8. Optionally add `404.html` matching the design.
9. Do not buy a domain. If they later want `eotcparis.fr`, explain it is ~€8–15/year and can point at the same GitHub Pages site.

## Owner context

- User is a member of the Ethiopian Orthodox Tewahedo community in Paris
- Wants Grok/other LLMs to help build the site
- Explicitly asked for `eotc-paris-giorgis.github.io`
- Explicitly asked for zero cost
- GitHub CLI is authenticated as `henokfasil` with scopes gist, read:org, repo, workflow

## Done looks like

- Site opens on phone and desktop
- FR / አማ / EN switcher works and persists
- News can be added by editing `js/content.js`
- Contact form does not pretend to send if email is empty
- Live HTTPS URL on GitHub Pages
- README a volunteer can follow
- No fake parish address on the public site

Start by listing the files you see, then deploy, then report the live URL.
