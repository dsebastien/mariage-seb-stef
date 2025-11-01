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

- **React 19.2** - Bibliothèque UI avec composants modernes
- **React Router 7.9** - Routing côté client pour navigation entre pages
- **Vite 6** - Build tool rapide et moderne
- **TypeScript 5.6** - Pour un code type-safe avec support JSX
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

Le site sera accessible sur `http://localhost:5173/mariage-seb-stef/`

**Navigation :** Utilisez le menu de navigation en haut pour naviguer entre les pages :
- **Accueil** - Page de couverture
- **Invitation** - Date du mariage
- **Cérémonies** - Horaires et lieux
- **Infos** - Informations pratiques

## Build

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `docs/`

### À propos du dossier `docs/`

Le dossier **`docs/`** est le résultat du build de production et contient :

- **`index.html`** - Le HTML optimisé
- **`assets/`** - JavaScript et CSS minifiés avec hashing
- **`images/`** - Les images statiques copiées depuis `public/images/`

**Important :** Ce dossier est committé dans git (contrairement aux pratiques habituelles) car GitHub Pages peut servir directement depuis :
- La racine du repo, OU
- Le dossier `/docs` sur la branche main

Nous utilisons l'approche `/docs` pour séparer le code source (`src/`) des fichiers compilés.

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

## TypeScript Strict Mode

Le projet utilise une configuration TypeScript ultra-stricte pour garantir la qualité du code :

### Options de Strict Checking
- ✅ `strict: true` - Active tous les checks stricts de base
- ✅ `noImplicitAny` - Interdit les types `any` implicites
- ✅ `strictNullChecks` - Vérification stricte de null/undefined
- ✅ `strictFunctionTypes` - Vérification stricte des types de fonctions
- ✅ `strictBindCallApply` - Vérification stricte de bind/call/apply
- ✅ `strictPropertyInitialization` - Propriétés de classe doivent être initialisées
- ✅ `noImplicitThis` - Interdit `this` implicite
- ✅ `alwaysStrict` - Parse en mode strict

### Additional Checks
- ✅ `noUnusedLocals` - Erreur sur variables locales inutilisées
- ✅ `noUnusedParameters` - Erreur sur paramètres inutilisés
- ✅ `noFallthroughCasesInSwitch` - Erreur sur case fallthrough
- ✅ `noImplicitReturns` - Tous les chemins doivent retourner une valeur
- ✅ `noUncheckedIndexedAccess` - Ajoute undefined aux index signatures
- ✅ `noImplicitOverride` - Require keyword override
- ✅ `noPropertyAccessFromIndexSignature` - Empêche l'accès direct aux propriétés indexées
- ✅ `allowUnusedLabels: false` - Erreur sur labels inutilisés
- ✅ `allowUnreachableCode: false` - Erreur sur code inaccessible
- ✅ `exactOptionalPropertyTypes` - Propriétés optionnelles strictes
- ✅ `forceConsistentCasingInFileNames` - Casse cohérente des noms de fichiers

Cette configuration garantit un code type-safe et réduit les bugs potentiels.

## Structure du projet

```
mariage-seb-stef/
├── src/
│   ├── components/
│   │   └── PageLayout.tsx   # Layout commun pour toutes les pages
│   ├── pages/
│   │   ├── CoverPage.tsx    # Page de couverture
│   │   ├── InvitationPage.tsx  # Page d'invitation
│   │   ├── CeremoniesPage.tsx  # Page des cérémonies
│   │   └── InfoPage.tsx        # Page d'informations pratiques
│   ├── App.tsx              # Configuration React Router
│   ├── main.tsx             # Entry point React
│   ├── index.html           # HTML template
│   └── style.css            # Tailwind CSS + configuration @theme
├── public/
│   └── images/              # Assets statiques (SVG/PNG)
├── docs/                    # Build output (committé pour GitHub Pages)
├── .github/workflows/
│   └── deploy.yml           # CI/CD automatique
├── vite.config.ts           # Configuration Vite + React + Tailwind
└── package.json
```

## Architecture React

Le site utilise React Router pour créer une expérience multi-pages avec routing côté client :

**Routes disponibles :**
- `/` - Page de couverture avec les noms des mariés
- `/invitation` - Invitation avec la date du mariage (19 septembre 2026)
- `/ceremonies` - Détails des cérémonies civile et religieuse
- `/info` - Informations pratiques et contacts

**Composants :**
- `PageLayout` - Composant layout réutilisable avec support pour les décorations florales
- Pages individuelles utilisant le `PageLayout` pour une structure cohérente

## Images

Les images SVG sont utilisées quand leur taille est raisonnable (< 200 KB), sinon les versions PNG sont préférées pour optimiser les performances.
