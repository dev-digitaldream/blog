---
title: "Le Brouillard des BaaS : Deux Ans à Chercher une Base de Données"
description: "Firebase, Supabase, Neon, Convex : deux ans à tester les BaaS pour une app temps réel. Ce que personne ne dit sur les compromis."
date: "2026-03-29"
updated: 2026-09-13
updateNote: "Les informations sur la facturation de Firestore, Neon Auth, la Data API de Neon et l’auto-hébergement de Convex ont été vérifiées et actualisées."
slug: "le-brouillard-des-baas-deux-ans-a-chercher-une-base-de-donne"
tags: ["baas", "supabase", "firebase", "architecture", "backend"]
cover: "https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp"
lang: fr
translation: le-brouillard-des-baas-two-years-searching-for-a-database
category: "blog"
excerpt: ""
metaTitle: "Le Brouillard des BaaS : Deux Ans à Chercher une Base de Données"
metaDescription: "Firebase, Supabase, Neon, Convex : deux ans à tester les BaaS pour une app temps réel. Ce que personne ne dit sur les compromis."
---
Il y a deux ans, j’ai quitté la sécurité d’un hébergement traditionnel pour construire une application en temps réel sur plusieurs plateformes. La logique métier restait raisonnable et, au départ, le besoin paraissait simple : stocker les données, les synchroniser et consacrer mon temps à l’interface.

Le choix du backend a pourtant pesé sur toute la trajectoire du projet. Ce qui ressemblait à une question de base de données est devenu une question beaucoup plus large : jusqu’où déléguer l’infrastructure, et quel contrôle accepter de perdre en échange ?

Les plateformes BaaS promettent de réduire fortement la configuration des serveurs, la construction des API et le travail autour des migrations. Cette promesse est réelle, mais chaque service la réalise avec ses propres compromis.

## Firebase : la puissance immédiate d’une boîte noire

J’ai commencé avec Firebase. Son fonctionnement en temps réel donne rapidement l’impression d’avoir supprimé une grande partie du backend. Un listener sur une collection suffit pour voir les données apparaître dans l’application sans écrire de serveur intermédiaire.

Cette fluidité est très efficace pour passer du concept au prototype. Elle devient aussi une forme de dépendance. Dès qu’une requête sort du modèle prévu par Firestore, l’architecture peut se compliquer. Je me suis retrouvé à déplacer certains traitements vers le client, une solution peu satisfaisante lorsque les données deviennent sensibles ou volumineuses.

Le coût demande la même vigilance. Une interface très simple peut cacher un grand nombre de lectures, d’écritures et, selon les requêtes, de lectures d’index. La [documentation de facturation de Firestore](https://firebase.google.com/docs/firestore/pricing) précise aussi que les listeners temps réel peuvent relire des documents lors de certaines reconnexions. Sans suivre précisément ces opérations, la facture devient difficile à anticiper.

Firebase m’a fait gagner beaucoup de temps au départ. Il m’a aussi appris qu’une abstraction confortable reste une boîte noire tant que le projet ne rencontre pas ses limites.

## Supabase : retrouver SQL sans reprendre tous les serveurs

Je cherchais ensuite la simplicité de Firebase avec la solidité d’une base relationnelle. Supabase a été ma première alternative sérieuse.

En quelques minutes, le projet dispose d’une base Postgres, d’une API générée et d’un système d’authentification. Après plusieurs semaines sur un prototype, la différence avec Firebase était nette. Je pouvais écrire des vues, utiliser des fonctions stockées et définir des règles de sécurité au niveau des lignes avec RLS.

Cette liberté apporte un sentiment de contrôle beaucoup plus fort. Elle demande aussi de mieux comprendre la base de données. L’API générée simplifie une partie du travail, mais reste parfois moins intuitive qu’un SDK très abstrait comme celui de Firebase.

Pour mon usage, Supabase représente l’équilibre le plus naturel entre service géré et fondation SQL. Ce choix ne supprime pas la complexité. Il la rend simplement plus visible et plus maîtrisable.

## Neon : une fondation Postgres à compléter

Neon aborde le problème différemment. Il fournit une base Postgres serverless en séparant le stockage du calcul. La possibilité de créer des branches de base de données rappelle le fonctionnement de Git et ouvre des usages intéressants pour les environnements de développement.

Cette approche est séduisante, mais Neon reste d’abord une fondation Postgres. Le service a depuis ajouté [Neon Auth](https://neon.com/docs/neon-auth/overview) et une [Data API](https://neon.com/docs/data-api/get-started), ce qui réduit le travail d’assemblage pour certains projets. Il ne devient pas pour autant l’équivalent exact d’un BaaS tout-en-un : la synchronisation temps réel et le reste de l’architecture dépendent toujours des besoins du produit.

Cela laisse beaucoup de liberté à condition d’accepter le travail d’assemblage. Neon correspond davantage à un projet dont l’architecture est déjà claire qu’à une application qui cherche un backend complet prêt à l’emploi.

## Convex : une synchronisation fluide avec ses propres règles

Convex est le service le plus différent de cette sélection. Il ne donne pas un accès direct à une base SQL. Les données sont manipulées à travers des requêtes et des mutations définies dans un backend TypeScript.

L’expérience de développement est très fluide. Le typage relie le backend au frontend et les mises à jour arrivent en temps réel sans ajouter toute une couche de synchronisation.

Cette simplicité repose toutefois sur le cadre de Convex. Toutes les opérations passent par ses fonctions. Je gagne en cohérence et en sécurité, mais je perds la liberté d’intervenir directement sur une base relationnelle classique. Convex peut maintenant être [auto-hébergé](https://docs.convex.dev/self-hosting) avec son backend ouvert sous licence FSL Apache 2.0, mais cette possibilité ne transforme pas son modèle en SQL traditionnel et ajoute les responsabilités habituelles d’exploitation.

Ce compromis peut être excellent pour une équipe TypeScript qui veut avancer rapidement. Il convient moins lorsque la portabilité et l’accès direct aux données sont des priorités.

## Aucun service ne gagne sur tous les critères

Après deux ans d’essais, je n’ai pas trouvé un meilleur BaaS dans l’absolu. J’ai surtout compris à quel type de projet chacun correspond.

- **Firebase** permet de passer très vite du concept au produit lorsque son écosystème fermé reste acceptable.
- **Supabase** convient lorsque SQL, Postgres et le contrôle des données comptent, sans vouloir administrer toute l’infrastructure.
- **Neon** fournit une base Postgres serverless solide lorsqu’une équipe sait déjà quelles autres briques elle veut assembler.
- **Convex** offre une synchronisation très cohérente aux projets TypeScript qui acceptent son modèle de données et d’exécution.

La décision porte finalement moins sur une liste de fonctions que sur ce que le projet peut sacrifier : du temps de développement, du contrôle, une architecture simple ou une facture prévisible.

Le bon choix n’est pas celui qui promet de tout supprimer. C’est celui dont les contraintes restent supportables lorsque le prototype devient un produit réel.
