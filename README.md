# Portfolio — Elhadj BAH

Portfolio personnel **Angular 21** (standalone + signals + `@if` / `@for` + **zoneless**), **SCSS** avec variables CSS custom, sans framework UI externe.

## Prérequis

- Node.js **22**
- npm

## Lancer en local

```bash
npm ci
npm start
```

Puis ouvrir `http://localhost:4200/`.

## Personnalisation des données

- **Données centralisées**: `src/app/data/portfolio.data.ts`
- **Interfaces**: `src/app/models/portfolio.model.ts`

### Ajouter une certification

Ajoute un objet dans le tableau `certifications` de `src/app/data/portfolio.data.ts` (exemple fourni en JSDoc dans le fichier).


## Déploiement automatique sur GitHub Pages (GitHub Actions)

Le workflow `/.github/workflows/deploy.yml` déploie à chaque push sur `main`:

- `npm ci`
- `ng build --base-href "/<nom-du-repo>/"`
- publication sur la branche `gh-pages` via `peaceiris/actions-gh-pages@v4`

### Étapes GitHub

1. Push dépôt sur GitHub (branche `main`).
2**Build and deploy auto**

Site accessible sur `https://elhadjbah.github.io/portfolio/`.

