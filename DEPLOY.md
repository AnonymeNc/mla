# Déploiement gratuit (GitHub Pages)

Le site est 100% statique (pas de build, pas de dépendances npm) : GitHub Pages + GitHub Actions suffisent, sans frais.

## 1. Créer le repo et pousser le code

1. Sur github.com, crée un nouveau repo **public** (vide, sans README) — public pour avoir les minutes GitHub Actions illimitées et Pages gratuit sans restriction.
2. Depuis ce dossier :
   ```bash
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/<ton-repo>.git
   git push -u origin main
   ```

## 2. Activer GitHub Pages

Sur GitHub : **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branche `main`, dossier `/ (root)`. Le site sera en ligne sous `https://<ton-user>.github.io/<ton-repo>/` en 1-2 minutes.

## 3. Autoriser le workflow à commiter

Sur GitHub : **Settings → Actions → General → Workflow permissions → "Read and write permissions"**, puis Save. Sans ça, le workflow d'auto-mise à jour ne pourra pas pousser ses commits.

## 4. Automatisation déjà en place

Le fichier [.github/workflows/update-heroes.yml](.github/workflows/update-heroes.yml) tourne :
- **tous les jours à 6h UTC** (cron), et
- à la demande via l'onglet **Actions → Update hero data → Run workflow**.

Il relance `scripts/build-hero-data.js` (re-scrape du wiki `mla.fandom.com`), valide le résultat avec `scripts/validate-heroes.js`, et — seulement si `src/data/heroes.js` a changé — commit et push automatiquement. Ce push redéclenche un redéploiement GitHub Pages tout seul.

La tier list n'a besoin de rien de plus : elle est recalculée à l'affichage à partir de la `rarity` de chaque héros ([src/components/tier-list.js](src/components/tier-list.js)).

## Limites à connaître

- Le scraper dépend de la structure du wiki Fandom et d'un proxy tiers (`r.jina.ai`) pour lire la page. Si l'un des deux change de format, le workflow échouera silencieusement (à surveiller dans l'onglet Actions) sans casser le site déjà en ligne.
- Un nouveau héros ajouté automatiquement arrivera avec son texte **anglais uniquement** : les traductions françaises manuelles (`src/data/translations/fr-abilities.js` et `fr-heroes.js`) ne se mettent pas à jour toutes seules et retomberont sur les templates génériques/la substitution mot-à-mot pour ce héros jusqu'à une prochaine passe de traduction manuelle.
