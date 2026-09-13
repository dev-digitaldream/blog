---
title: "Screen CMS"
description: "Un CMS d’affichage dynamique et son lecteur Android TV, créés pour reprendre le contrôle sur une installation jusque-là dépendante de Xibo."
date: 2026-03-18
lang: fr
translation: screen-cms-en
---

## Pourquoi ce projet existe

Xibo remplit son rôle, mais je voulais une solution plus simple à comprendre, à maintenir et à adapter à nos besoins. L’objectif de Screen CMS est de gérer le contenu de plusieurs écrans sans conserver toute la complexité d’une plateforme généraliste.

Le projet réunit deux éléments : un CMS web pour préparer les écrans et une application Android légère pour les afficher sur un téléviseur, une tablette ou un boîtier compatible.

## Le CMS

Le serveur est construit avec Node.js, Express, EJS et SQLite. Chaque écran possède sa propre adresse et sa propre configuration. Le back-office permet actuellement de gérer :

- plusieurs écrans indépendants ;
- des comptes administrateur et éditeur ;
- les images, les actualités internes et les flux RSS ;
- la météo via Open-Meteo ;
- des indicateurs, un bandeau défilant et des playlists YouTube ;
- un mode urgence capable d’afficher un message sur tous les écrans ;
- un journal des actions effectuées dans l’administration.

L’application peut fonctionner seule. Elle peut aussi fournir une page web à un écran Xibo existant, ce qui permet de migrer progressivement au lieu de remplacer toute l’installation en une fois.

## Le lecteur Android TV

Le lecteur est une application Kotlin séparée, incluse dans le même projet. Elle affiche un écran du CMS en plein écran et redémarre automatiquement avec l’appareil. Un appui long protégé par un code PIN donne accès aux réglages.

Le lecteur prévoit également la reprise après une coupure réseau et un service de surveillance pour relancer l’affichage si l’application s’arrête. Il cible Android TV, Google TV, les tablettes et certains boîtiers HDMI à partir d’Android 5.

## État actuel

Le projet est privé et encore en développement. Le socle du CMS et le lecteur Android existent, mais ils doivent encore être testés sur les appareils et dans les conditions réelles où ils seront utilisés. Le déploiement en masse, la gestion des appareils et le durcissement du mode kiosque font partie des points à valider avant d’en faire un remplacement complet de Xibo.

