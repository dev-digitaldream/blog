---
title: "Le Brouillard des BaaS : Deux Ans à Chercher une Base de Données"
description: "Firebase, Supabase, Neon, Convex — deux ans à tester les BaaS pour une app temps réel. Ce que personne ne dit sur les compromis."
date: "2026-03-29"
slug: "le-brouillard-des-baas-deux-ans-a-chercher-une-base-de-donne"
tags: ["baas", "supabase", "firebase", "architecture", "backend"]
cover: "https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp"
lang: fr
category: "blog"
excerpt: ""
metaTitle: "Le Brouillard des BaaS : Deux Ans à Chercher une Base de Données"
metaDescription: "Firebase, Supabase, Neon, Convex — deux ans à tester les BaaS pour une app temps réel. Ce que personne ne dit sur les compromis."
---

![Le Brouillard des BaaS : Deux Ans à Chercher une Base de Données](https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp)

Il y a deux ans, j'ai quitté la sécurité d'un hébergement traditionnel pour me lancer dans une nouvelle aventure. Le cahier des charges était simple, en apparence : une application temps réel, multi-plateformes, avec une logique métier modérée. Le choix de la base de données et des services associés (le fameux "Backend-as-a-Service" ou BaaS) allait devenir une décision qui pesait lourd sur la trajectoire du projet. Ce que je pensais être une simple question de stockage de données s'est transformé en une réflexion profonde sur la philosophie du développement logiciel.

Je voulais me concentrer sur le front-end, sur l'expérience utilisateur. Je ne voulais pas m'occuper de configurer des serveurs, de gérer des migrations de base de données ou de sécuriser des API. C'est le rêve vendu par ces nouvelles plateformes. Mais entre la promesse et la réalité, il y a un gouffre de compromis.

## Firebase — la puissance envoûtante de la boîte noire

Le point de départ de ma quête était Firebase. C'était, et c'est encore, la référence. L'API en temps réel est d'une puissance rare. Écrire un listener sur une collection et voir les données s'afficher en direct dans l'application, sans jamais toucher à une ligne de code backend, donne un sentiment de puissance immédiate.

Mais Firebase, c'est un écosystème fermé. Pendant des mois, j'ai vécu avec cette sensation de légèreté, mais aussi d'insécurité. Que se passe-t-il si j'ai besoin d'une requête complexe qui ne rentre pas dans le moule des requêtes Firestore ? Je me suis retrouvé à faire du traitement de données côté client, ce qui n'est jamais une bonne idée pour des données sensibles ou volumineuses. Et puis, il y a la question du coût. La facture peut s'envoler si on ne surveille pas les lectures et les écritures comme un faucon.

C'est là que j'ai commencé à chercher des alternatives. Je voulais la simplicité de Firebase, mais avec la robustesse d'une vraie base de données relationnelle. Je voulais SQL.

## Supabase — le meilleur équilibre

**Supabase** a été ma première tentative sérieuse. Le pitch est séduisant : "Open source, une alternative à Firebase". Vous créez un projet, et en quelques minutes, vous avez une base de données Postgres, une API auto-générée, et une authentification.

J'ai passé plusieurs semaines à construire un prototype. La sensation est différente de Firebase. On se sent moins dans un jardin clos. La possibilité d'écrire des vues SQL, des fonctions stockées, et d'utiliser le puissant système de règles de sécurité de Postgres (RLS) est un soulagement. On a le contrôle. Cependant, cette liberté a un coût en complexité. L'API auto-générée est pratique, mais elle est parfois moins intuitive que le SDK très haut niveau de Firebase.

## Neon — la fondation pour ceux qui aiment bricoler

**Neon** est un moteur Postgres serverless. Il sépare le stockage du calcul, ce qui permet des fonctionnalités intéressantes comme la création de branches de base de données, un peu comme sur Git. C'est une technologie fascinante, très performante, mais à ce stade, c'est plus une fondation qu'une solution complète. Si vous choisissez Neon, vous devez encore assembler les autres briques vous-même.

## Convex — la synchronisation sans effort, au prix de la liberté

**Convex** est le plus différent de tous. Il ne vous donne pas un accès direct à une base de données SQL. C'est un système de synchronisation de données orienté document, où vous définissez des mutations et des queries dans un backend TypeScript.

L'expérience de développement est incroyablement fluide. Le typage est partout, du backend au frontend. Les données se mettent à jour en temps réel sans que j'aie à y penser. Mais on est obligé de passer par les mutations — on perd la flexibilité directe pour gagner en simplicité et en sécurité. C'est un compromis conscient.

## La leçon apprise

Après deux ans d'expérimentation, il n'y a pas de "meilleur" service. Il y a des outils pour des philosophies de projet différentes.

- **Firebase** : du concept au produit en un temps record, si vous acceptez l'écosystème fermé.
- **Supabase** : si vous aimez SQL, que vous voulez garder le contrôle et que vous ne voulez pas gérer l'infrastructure.
- **Convex** : si vous êtes une équipe TypeScript qui veut une synchronisation parfaite backend/frontend.
- **Neon** : si vous avez l'expertise pour construire les briques manquantes sur une fondation Postgres serverless.

Le choix n'est pas une question de technologie, mais de pragmatisme. Il s'agit de peser ce que l'on est prêt à sacrifier : son temps de développement, son contrôle sur les données, la simplicité de l'architecture, ou la maîtrise des coûts. La vraie victoire n'est pas de choisir le bon outil, mais de comprendre les compromis que l'on fait en le choisissant.