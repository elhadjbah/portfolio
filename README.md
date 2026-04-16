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

## CV (PDF)

Le bouton “Voir le CV” pointe vers `assets/cv-elhadj-bah.pdf`.

Place ton fichier ici:

- `public/assets/cv-elhadj-bah.pdf`

(le dossier `public/` est publié tel quel par Angular).

## Déploiement automatique sur GitHub Pages (GitHub Actions)

Le workflow `/.github/workflows/deploy.yml` déploie à chaque push sur `main`:

- `npm ci`
- `ng build --base-href "/<nom-du-repo>/"`
- publication sur la branche `gh-pages` via `peaceiris/actions-gh-pages@v4`

### Étapes GitHub

1. Pousse le dépôt sur GitHub (branche `main`).
2. Dans GitHub: **Settings → Pages**
3. **Build and deployment**: sélectionne la source **Deploy from a branch**
4. Choisis la branche **gh-pages** et le dossier **/**.

Le site sera servi sur `https://<user>.github.io/<repo>/`.

