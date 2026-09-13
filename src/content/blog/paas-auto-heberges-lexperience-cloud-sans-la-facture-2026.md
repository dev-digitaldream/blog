---
title: "PaaS auto-hébergés : l’expérience cloud sans la facture"
description: "Un tour d’horizon des PaaS auto-hébergés pour retrouver l’expérience du cloud public sans la facture"
date: "2026-01-01"
updated: 2026-09-13
category: "blog"
tags: []
excerpt: ""
metaTitle: "PaaS auto-hébergés : l’expérience cloud sans la facture"
metaDescription: "Un tour d’horizon des PaaS auto-hébergés pour retrouver l’expérience du cloud public sans la facture"
cover: ""
lang: fr
translation: self-hosted-paas-cloud-experience-without-the-bill
---
![Interfaces de plateformes auto-hébergées](/blog/paas-auto-heberges-lexperience-cloud-sans-la-facture-2026/image2.webp "PaaS auto-hébergés")

J’ai longtemps apprécié la promesse des plateformes comme Heroku, Vercel ou Render : connecter un dépôt, lancer un déploiement et oublier presque tout le reste. Cette simplicité devient moins agréable lorsque les services se multiplient, que la facture devient difficile à prévoir ou qu’une limite de la plateforme impose de revoir l’architecture.

Je suis alors revenu vers mes propres VPS, sans vouloir retrouver toute l’administration manuelle qui les accompagne. Les PaaS auto-hébergés occupent cet espace intermédiaire. Ils automatisent les builds, les domaines, les certificats et le cycle de vie des conteneurs, tout en laissant le serveur et les données sous mon contrôle.

La promesse est séduisante. Elle ne supprime cependant ni les sauvegardes, ni la sécurité, ni la surveillance de la machine.

## Ce que change vraiment le serveur personnel

Un VPS correctement dimensionné peut accueillir plusieurs applications et outils internes pour un coût fixe. Docker a standardisé une grande partie de l’exécution, tandis que les buildpacks, Nixpacks et les reverse proxies modernes ont rendu les déploiements beaucoup moins artisanaux.

Il devient possible de retrouver un workflow proche de « git push puis déploiement » sur une machine louée chez le fournisseur de son choix.

La contrepartie reste claire : lorsque le disque est plein, que Docker se bloque ou qu’une sauvegarde échoue, aucun service managé ne prend automatiquement le problème en charge. Le PaaS simplifie l’exploitation, mais la responsabilité du serveur reste entière.

Je n’ai pas utilisé toutes les plateformes ci-dessous dans les mêmes conditions ni pendant la même durée. Je les regroupe selon leur approche, en distinguant celles qui correspondent à mon usage de celles qui répondent à d’autres besoins.

## Dokploy : une interface moderne sur une base familière

Dokploy correspond assez bien à ce que je cherchais pour mes VPS. L’interface reste lisible et les déploiements s’appuient sur des briques connues comme Docker, Docker Compose, les buildpacks et Nixpacks.

Je peux réunir plusieurs applications sur une machine sans devoir maintenir à la main chaque configuration de proxy et de certificat. L’ensemble reste assez proche de Docker pour que je puisse comprendre ce qui se passe lorsque quelque chose casse.

C’est cet équilibre, davantage que la longueur de la liste des fonctions, qui rend Dokploy intéressant dans mon usage.

## Coolify : beaucoup de possibilités dans une seule interface

Coolify vise un périmètre très large. Son catalogue facilite le déploiement d’applications, de bases de données et de services courants. L’interface est riche et se rapproche davantage de l’expérience d’un cloud public.

Cette richesse implique aussi davantage de composants et de réglages. Sur une petite machine, ou pour un service dont chaque détail doit rester prévisible, je préfère limiter les couches. Coolify me paraît surtout adapté lorsqu’une interface complète et un grand choix de modèles prêts à déployer comptent davantage que le minimalisme.

## CapRover : moins récent visuellement, toujours compréhensible

CapRover repose sur Docker Swarm avec Nginx en frontal. Son interface paraît moins moderne, mais son fonctionnement est connu et son catalogue communautaire permet de lancer rapidement des services courants.

Je l’ai utilisé pour des essais et de petits déploiements. Il ne cherche pas à suivre chaque nouveauté du marché, ce qui peut devenir une qualité lorsque la priorité est d’avoir une plateforme simple et prévisible.

Dokploy et CapRover ne donnent pas exactement la même expérience, mais ils partagent un point important : le serveur reste assez lisible pour ne pas devenir une boîte noire complète.

## Dokku et Piku : le terminal avant le tableau de bord

Dokku reprend l’idée historique d’Heroku sur son propre serveur. Un dépôt Git et une commande de déploiement suffisent à lancer le build, les processus et le proxy. Son intérêt vient de ce workflow textuel, facile à documenter et à reproduire.

Piku pousse le minimalisme plus loin. Il peut fonctionner sans placer Docker au centre de toute l’architecture et vise des machines où chaque ressource compte. Cette approche convient mieux à de petits serveurs, à des cartes ARM ou à des projets très ciblés qu’à une équipe cherchant un grand tableau de bord.

Ces outils demandent davantage d’aisance avec SSH. En échange, ils ajoutent moins de couches entre l’application et le système.

## SwiftWave : une piste pour les petites machines

SwiftWave mise sur Go, HAProxy et une empreinte réduite. Son approche est intéressante lorsque la densité des services compte et que le serveur dispose de peu de ressources.

Je le considère davantage comme une piste à évaluer que comme un remplacement automatique des plateformes plus établies. Une consommation faible ne suffit pas à elle seule : la documentation, les sauvegardes, les mises à jour et la capacité à diagnostiquer une panne pèsent tout autant dans un choix de production.

## Cosmos et Cloudron répondent à d’autres priorités

Cosmos Server place la sécurité d’accès au centre de l’expérience. Le reverse proxy, l’authentification centralisée et l’accès privé répondent bien à un homelab ou à des services qui ne doivent pas être exposés sans protection supplémentaire.

Cloudron va dans une autre direction. Il propose des applications intégrées, des mises à jour, des sauvegardes et même une pile de messagerie. Le service est payant, mais l’objectif consiste justement à réduire le temps d’administration pour une petite structure sans équipe dédiée.

Ces solutions dépassent le simple déploiement d’une application. Elles organisent une partie plus large du serveur et demandent donc d’accepter davantage leurs choix techniques.

## Mon critère principal : pouvoir comprendre la panne

Le choix dépend moins du nombre de boutons que du niveau de responsabilité acceptable.

- **Dokploy** correspond à mon besoin d’interface moderne tout en restant proche de Docker.
- **CapRover** garde son intérêt pour des déploiements simples et connus.
- **Coolify** convient mieux lorsque la richesse du catalogue et de l’interface est prioritaire.
- **Dokku** et **Piku** privilégient un workflow léger piloté depuis le terminal.
- **Cosmos Server** met l’accent sur l’accès protégé aux services.
- **Cloudron** échange une partie du contrôle et un abonnement contre moins d’administration.
- **SwiftWave** mérite surtout une évaluation lorsque les ressources sont très limitées.

Je ne cherche plus la plateforme qui promet de tout faire. Je cherche celle dont je peux comprendre les sauvegardes, les mises à jour et les pannes.

Un PaaS auto-hébergé peut rendre un VPS aussi agréable à utiliser qu’une plateforme commerciale. Il ne transforme pas pour autant l’infrastructure en service sans entretien. Le véritable gain consiste à choisir où placer la complexité, puis à garder suffisamment de contrôle pour agir lorsqu’elle réapparaît.
