# Site de Mariage - Stéphanie & Sebastien

Site web d'invitation pour le mariage de Stéphanie et Sebastien le 19 septembre 2026.

## Input
Ultrathink: Create a Website for my wedding (in French!!!) using HTML, CSS, Tailwind, TypeScript, Vite
Use the images under "exemple" to understand the content to inclure and how to structure it.
Favor the usage of the SVG files under "images", but ONLY if the file size is small enough. Otherwise, fallback to the PNG files for those that are too big.

The website will be deployed using GitHub Pages (on commit) through GitHub actions, so also include a workflow for that

Colors:
- Background: #192d49
- Text: #ffe7cf
- Dates: #687159
- Separators: #e2b83a

Fonts:
- Names: Allura
- Text: Cormorant Garamond

Design elements:
- images folder

Use Google Fonts for the fonts


## Technologies utilisées

- **Vite 6** - Build tool rapide et moderne
- **TypeScript 5.6** - Pour un code type-safe
- **Tailwind CSS 4.1** - Framework CSS nouvelle génération avec configuration CSS-first
- **Google Fonts** - Allura (noms) et Cormorant Garamond (texte)

## Palette de couleurs

- Background: `#192d49`
- Text: `#ffe7cf`
- Dates: `#687159`
- Separators: `#e2b83a`

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `docs/`

## Déploiement

Le déploiement se fait automatiquement via GitHub Actions et GitHub Pages :

### Configuration initiale

1. **Configurer GitHub Pages** (une seule fois) :
   - Aller dans les paramètres du dépôt GitHub
   - Naviguer vers **Pages** dans le menu latéral
   - Dans **Source**, sélectionner **Deploy from a branch**
   - Choisir la branche **main** et le dossier **/docs**
   - Sauvegarder

2. **Workflow automatique** :
   - À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` :
     - Installe les dépendances
     - Build le projet
     - Commit automatiquement le dossier `docs/` mis à jour
   - GitHub Pages détecte les changements dans `docs/` et redéploie

Le site sera accessible sur: `https://[votre-username].github.io/mariage-seb-stef/`

### Build manuel (optionnel)

Vous pouvez aussi builder et commiter manuellement :

```bash
npm run build
git add docs/
git commit -m "Update build"
git push
```

## Tailwind CSS 4

Ce projet utilise Tailwind CSS 4 avec la nouvelle approche de configuration CSS-first :

- **Pas de fichier `tailwind.config.js`** - La configuration est directement dans le CSS
- **Syntaxe `@import "tailwindcss"`** au lieu des anciennes directives `@tailwind`
- **Thème personnalisé** défini avec `@theme` dans `src/style.css` :
  ```css
  @theme {
    --color-background: #192d49;
    --color-text: #ffe7cf;
    --color-dates: #687159;
    --color-separator: #e2b83a;

    --font-names: Allura, cursive;
    --font-text: Cormorant Garamond, serif;
  }
  ```
- **Plugin Vite** : `@tailwindcss/vite` pour une intégration transparente

## Structure du projet

```
mariage-seb-stef/
├── src/
│   ├── index.html        # Page principale
│   ├── main.ts           # Entry point TypeScript
│   └── style.css         # Tailwind CSS + configuration @theme
├── public/
│   └── images/           # Assets statiques (SVG/PNG)
├── docs/                 # Build output (committé pour GitHub Pages)
├── .github/workflows/
│   └── deploy.yml        # CI/CD automatique
├── vite.config.ts        # Configuration Vite (root: src)
└── package.json
```

## Structure du site

- **Section 1**: Page de couverture avec les noms
- **Section 2**: Invitation avec la date du mariage
- **Section 3**: Détails des cérémonies (civile et religieuse)
- **Section 4**: Informations pratiques et contacts

## Images

Les images SVG sont utilisées quand leur taille est raisonnable (< 200 KB), sinon les versions PNG sont préférées pour optimiser les performances.
