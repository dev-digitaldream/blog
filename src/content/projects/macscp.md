---
title: "macSCP"
description: "Une application macOS créée pour transférer des fichiers entre mes machines locales, mes serveurs Linux et des stockages S3 depuis une interface à deux panneaux."
date: 2025-11-05
lang: fr
translation: macscp-en
cover: "/blog/macscp/macscp-desktop.webp"
applicationCategory: "DeveloperApplication"
operatingSystem: ["macOS", "iOS", "iPadOS"]
technologies: ["Swift", "SwiftUI", "SCP", "SFTP", "Amazon S3"]
---

## Le besoin de départ

En passant presque entièrement de Windows à macOS, il me manquait le flux de travail que j’avais avec WinSCP : parcourir les fichiers locaux et distants en même temps, récupérer des logs et envoyer les fichiers nécessaires à une intervention sans tout faire dans un terminal.

macSCP est né de ce besoin concret. Il ne cherche pas à reproduire toutes les fonctions de WinSCP. Je construis celles qui servent réellement dans mon quotidien.

## Ce qui fonctionne aujourd’hui

- navigation locale et distante dans deux panneaux ;
- transferts SCP et SFTP ;
- compatibilité avec certaines anciennes machines SSH ;
- accès à Amazon S3 et à des services compatibles ;
- transfert d’une archive ZIP puis extraction sur le serveur ;
- suppression des fichiers parasites créés par macOS et iOS ;
- envoi de commandes simples depuis un petit terminal.

L’application est utilisée pour récupérer des logs, envoyer des mises à jour et intervenir sur des machines Linux. Toutes les configurations possibles n’ont pas été testées.

## La version mobile

Une application distincte pour iOS et iPadOS est en cours de modernisation. Elle vise les interventions où un iPhone relié en Ethernet à une machine est plus pratique qu’un ordinateur portable.

## Statut

Le projet est encore privé et n’est pas distribué. La gestion des identifiants, des clés, des connexions et des erreurs doit être auditée avant toute publication. Le nom devra également être réévalué en raison d’un autre projet macSCP découvert pendant la rédaction du billet.

[L’histoire complète, les captures et les limites actuelles sont détaillées dans le billet consacré à macSCP.](/blog/macscp-outil-transfert-manquait-mac/)
