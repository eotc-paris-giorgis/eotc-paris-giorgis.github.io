# CLAUDE.md — Debre Genet Saint Giorgis and Qusquam Mariam Church website

Context for any future Claude Code session working in this repo.

## What this is

Static, free, public website for an Ethiopian Orthodox Tewahedo parish in Paris.
Plain HTML + CSS + vanilla JS. No build step, no framework, no backend, no database.
Hosted free on GitHub Pages.

**Live URL:** https://eotc-paris-giorgis.github.io

## GitHub

- Org: `eotc-paris-giorgis` (renamed from `Debre-Genet-Kidus-Giorgis-Church` on 2026-08-20 specifically to get this short URL)
- Repo: `eotc-paris-giorgis/eotc-paris-giorgis.github.io` — the repo name must stay exactly this to keep the org-page URL working
- Branch: `main`, Pages served from `/` root
- The previous repo `henokfasil/eotc-paris-giorgis` (personal account) is retired/deleted — do not recreate work there
- `gh` CLI is authenticated; deleting repos requires the `delete_repo` scope, which was not present by default (`gh auth refresh -h github.com -s delete_repo` needed, and needs the user to approve a device code in browser — cannot be done silently)

## Parish identity (do not drift from this)

- Amharic (full): ፓሪስ ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም ቤተ ክርስቲያን
- English (full): Debre Genet Saint Giorgis and Qusquam Mariam Church
- French (full, as used on site): Église Debre Genet Saint Georges et Qousqouam Marie
- Short/brand form (header, browser tab): "Debre Genet Giorgis" (fr/en) / ደብረ ገነት ጊዮርጊስ (am)
- Patrons: Saint George the Martyr (Kidus Giorgis) and the Virgin Mary of Qusquam (ቁስቋም ማርያም)
- City: Paris, France
- Do not shorten back to "Debre Giorgis" alone — that was the original placeholder name before the parish gave the real full name (2026-08-20). Qusquam Mariam must not be dropped.
- Do not confuse with Debre Selam Kidus Mikael (8 rue de l'Abbé Groult, 75015 Paris) — a different parish.

## Content model — the only file to edit for day-to-day updates

`js/content.js` holds everything editable:

- `window.SITE.name` — short display name (fr/am/en), used in `<title>`
- `window.SITE.fullName` — full official name (fr/am/en)
- `window.SITE.saint`, `.city`, `.address`, `.phone`, `.email`, `.facebook`, `.telegram`, `.mapQuery`
- `window.SITE.hours[]`, `.feasts[]`, `.news[]`
- `window.I18N.fr / .am / .en` — all UI strings

`address`, `phone`, `email`, `facebook`, `telegram` are intentionally empty (`""`) until the parish confirms them — the site shows an honest "to be published" message instead of a placeholder/fake value. Do not invent these.

To publish news: prepend an object to `SITE.news` with `date`, `title{fr,am,en}`, `body{fr,am,en}`. All three languages required — never leave Amharic defaulting to French.

## Site structure

```
index.html / paroisse.html / offices.html / actualites.html / contact.html / 404.html
css/style.css       full liturgical stylesheet (wine/gold palette, do not genericize)
js/content.js        all editable content + i18n — the ONLY file a non-developer should touch
js/site.js           lang switcher, mobile nav, dynamic rendering, mailto contact form
assets/               SVG only (ethiopian-cross, ornament, pattern, favicon) — no raster images yet
data/                 empty, unused
```

Header/nav/footer are duplicated per page (no SSG/templating). If you change the header or nav markup, apply the same change to all six HTML files by hand.

## Design system — keep it

- Colors: `--wine:#5c1218 --wine-deep:#2a0a0c --wine-mid:#7a1c24 --gold:#c9a84c --gold-soft:#e8d48b --parchment:#f7f1e6 --cream:#fbf7f0 --ink:#1c1310 --green:#1f4d2e`
- Fonts: `Noto Serif Ethiopic` (Ethiopic script), `Cormorant Garamond` (Latin headings), `Source Sans 3` (body/UI)
- Ethiopian Orthodox lattice/processional cross as logo — never a plain Latin cross
- Liturgical, cathedral tone — no ads, no stock photography, no cartoon saints
- `prefers-reduced-motion` respected; nav collapses under 860px

## Media (photos/video) — not yet wired up

- Photos: fine to commit directly into `assets/` (e.g. `assets/news/2026-xx-xx-event.jpg`) and reference from a `SITE.news` item's HTML/markup once a news-image field is added to the render logic in `js/site.js`. As of 2026-08-20 no news item has used a photo yet — the render function only outputs text.
- Video: do NOT commit video files to the repo (git handles large binaries and repo size poorly, and GitHub has file/repo size limits). Upload to YouTube (unlisted is fine for a private commemoration) and embed/link the URL from the news item instead.

## Hard constraints (still apply)

- No payment, no paid domain/host, static only, GitHub Pages only
- Only relative paths (works both as project page and org/user page)
- Do not invent address/phone/email/Facebook/priest name — leave empty until confirmed
- French default language; Amharic and English via switcher; Amharic is LTR
