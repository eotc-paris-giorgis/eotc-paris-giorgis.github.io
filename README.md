# Paroisse Debre Giorgis — Site web / Website

Site public et gratuit de la Paroisse Debre Giorgis (Saint Georges), Église orthodoxe éthiopienne Tewahedo, Paris.
Free public website for Debre Giorgis Parish (Saint George), Ethiopian Orthodox Tewahedo Church, Paris.

**Site en ligne / Live site:** https://henokfasil.github.io/eotc-paris-giorgis/

---

## Français

### Mettre à jour le contenu

Tout le contenu modifiable (adresse, téléphone, e-mail, horaires, fêtes, actualités, textes de l'interface) se trouve dans **un seul fichier** :

```
js/content.js
```

N'éditez pas les fichiers HTML pour changer un texte, une adresse ou un horaire — modifiez `js/content.js`.

### Ajouter une actualité

Ouvrez `js/content.js`, trouvez `window.SITE.news`, et ajoutez un objet **en haut** de la liste :

```js
{
  date: "2026-08-17",
  title: {
    fr: "Titre en français",
    am: "በአማርኛ ርዕስ",
    en: "Title in English"
  },
  body: {
    fr: "Texte en français.",
    am: "በአማርኛ ጽሑፍ።",
    en: "Text in English."
  }
}
```

Chaque actualité doit avoir les trois langues (`fr`, `am`, `en`).

### Renseigner l'adresse, le téléphone, l'e-mail

Tant que ces informations ne sont pas confirmées par la paroisse, elles restent vides (`""`) et le site affiche un message d'attente au lieu d'une fausse information. Dès qu'elles sont connues, remplissez-les dans `window.SITE` (`address`, `phone`, `email`, `facebook`, `telegram`) dans `js/content.js`.

### Publier les changements (envoyer sur GitHub)

Après avoir modifié `js/content.js` :

```bash
git add js/content.js
git commit -m "Mise à jour du contenu"
git push
```

Le site se met à jour automatiquement sur GitHub Pages en une à deux minutes.

Si vous n'êtes pas à l'aise avec `git`, vous pouvez aussi éditer le fichier directement sur github.com (bouton crayon ✏️ en haut à droite du fichier), écrire un message de commit, puis cliquer sur « Commit changes ».

### Comment fonctionne GitHub Pages

Ce site est hébergé gratuitement par **GitHub Pages**. Chaque fois qu'un changement est envoyé (« push ») sur la branche `main`, GitHub republie automatiquement le site. Il n'y a ni serveur à gérer, ni base de données, ni coût.

### Obtenir l'adresse `eotc-paris-giorgis.github.io`

L'adresse actuelle est `https://henokfasil.github.io/eotc-paris-giorgis/`. Pour obtenir l'adresse courte `https://eotc-paris-giorgis.github.io`, il faut créer une **Organisation GitHub gratuite** nommée `eotc-paris-giorgis` :

1. Aller sur https://github.com/account/organizations/new et choisir le plan gratuit.
2. Nommer l'organisation `eotc-paris-giorgis`.
3. Transférer ce dépôt vers l'organisation et le renommer `eotc-paris-giorgis.github.io` (ou créer un dépôt de ce nom dans l'organisation et y copier les fichiers).
4. Activer GitHub Pages sur ce nouveau dépôt (branche `main`, dossier `/`).
5. Le site sera alors visible sur `https://eotc-paris-giorgis.github.io`.

La création d'une organisation ne peut se faire qu'en cliquant sur le site GitHub — un membre de la paroisse doit le faire une fois.

### Nom de domaine personnalisé (optionnel, payant)

Un nom comme `eotcparis.fr` coûte environ 8 à 15 € par an chez un registraire (OVH, Gandi, etc.) et peut être pointé vers ce même site GitHub Pages gratuit. Ce n'est pas nécessaire pour publier le site.

---

## English

### Updating content

All editable content (address, phone, email, hours, feasts, news, interface text) lives in **one file**:

```
js/content.js
```

Do not edit the HTML files to change text, an address, or a schedule — edit `js/content.js`.

### Adding a news item

Open `js/content.js`, find `window.SITE.news`, and add an object **at the top** of the list:

```js
{
  date: "2026-08-17",
  title: {
    fr: "Titre en français",
    am: "በአማርኛ ርዕስ",
    en: "Title in English"
  },
  body: {
    fr: "Texte en français.",
    am: "በአማርኛ ጽሑፍ።",
    en: "Text in English."
  }
}
```

Every news item must include all three languages (`fr`, `am`, `en`).

### Filling in the address, phone, email

Until the parish confirms these details, they stay empty (`""`) and the site shows a pending notice instead of a false address. Once known, fill them into `window.SITE` (`address`, `phone`, `email`, `facebook`, `telegram`) in `js/content.js`.

### Publishing changes (pushing to GitHub)

After editing `js/content.js`:

```bash
git add js/content.js
git commit -m "Update content"
git push
```

The live site updates automatically on GitHub Pages within one to two minutes.

If you are not comfortable with `git`, you can also edit the file directly on github.com (pencil ✏️ button at the top right of the file), write a commit message, and click "Commit changes".

### How GitHub Pages works

This site is hosted for free by **GitHub Pages**. Every time a change is pushed to the `main` branch, GitHub automatically republishes the site. There is no server to manage, no database, and no cost.

### Getting `eotc-paris-giorgis.github.io`

The current address is `https://henokfasil.github.io/eotc-paris-giorgis/`. To get the short address `https://eotc-paris-giorgis.github.io`, a free **GitHub Organization** named `eotc-paris-giorgis` must be created:

1. Go to https://github.com/account/organizations/new and pick the free plan.
2. Name the organization `eotc-paris-giorgis`.
3. Transfer this repository to the organization and rename it `eotc-paris-giorgis.github.io` (or create a repo with that name in the organization and copy the files there).
4. Enable GitHub Pages on the new repository (branch `main`, folder `/`).
5. The site will then be live at `https://eotc-paris-giorgis.github.io`.

Creating an organization can only be done by clicking through the GitHub website — a parish member needs to do this once.

### Custom domain (optional, paid)

A name like `eotcparis.fr` costs roughly €8–15 per year from a registrar (OVH, Gandi, etc.) and can be pointed at this same free GitHub Pages site. This is not required to publish the site.

---

## Structure du site / Site structure

```
index.html          Accueil / Home
paroisse.html        La paroisse / About the parish
offices.html         Horaires / Service times
actualites.html       Actualités / News
contact.html         Contact
404.html             Page introuvable / Not found
css/style.css        Style
js/content.js        Contenu éditable / Editable content
js/site.js           Logique du site (langue, menu, rendu) / Site logic
assets/              Images SVG
```
