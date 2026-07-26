# Déploiement — DigitalDream Blog

Stack : **Astro 6 + Tailwind v4 + GitHub + Cloudflare Pages + PagesCMS**.

## 1. Pousser sur GitHub

```bash
git init
git add .
git commit -m "feat: initial blog setup"
git branch -M main
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin main
```

## 2. Cloudflare Pages

Sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** :

| Champ | Valeur |
|---|---|
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` ou `22` (variable d'env `NODE_VERSION=20`) |
| Root directory | _(vide — racine du repo)_ |

Cloudflare déploie automatiquement à chaque `git push`. Le fichier [`wrangler.toml`](./wrangler.toml) sert pour les déploiements via CLI (`npx wrangler pages deploy dist`).

## 3. PagesCMS — éditer les billets

[PagesCMS.org](https://pagescms.org) lit le fichier [`.pages.yml`](./.pages.yml) déjà configuré.

1. Va sur https://app.pagescms.org
2. Connecte ton GitHub
3. Sélectionne le repo
4. Tu accèdes à une interface propre pour éditer **Articles**, **Projets**, et uploader des images dans `/public/uploads`

Chaque sauvegarde commit automatiquement vers GitHub → Cloudflare Pages rebuild.

## 4. Structure du contenu

```
src/content/
├── blog/         → articles markdown (.md)
└── projects/     → projets MDX (.mdx)
public/
└── uploads/      → médias gérés par PagesCMS
```

Frontmatter minimal pour un article :

```yaml
---
title: "Mon article"
description: "Court résumé."
date: 2026-01-15
lang: fr      # ou 'en'
draft: false
category: "blog"
tags: ["astro", "tech"]
cover: "/uploads/mon-image.webp"
---
```

## 5. Variables d'environnement

| Nom | Description |
|---|---|
| `PUBLIC_NEWSLETTER_URL` | Endpoint de la newsletter (Buttondown ou listmonk). Si absent, fallback mailto. |
| `PUBLIC_SITE_URL` | URL canonique du site (ex: `https://blog.digitaldream.work`) |

Le formulaire de contact utilise Formbricks auto-hébergé (`formbricks.dev.digitaldream.work`), configuré directement dans `Footer.astro` (IDs publics, côté client).

À renseigner dans **Cloudflare Pages → Settings → Environment variables**.

## 6. Build local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère ./dist
npm run preview  # preview du build
```
