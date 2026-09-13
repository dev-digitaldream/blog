---
title: "Dégooglisation : comment j’ai migré Drive, Photos et Gmail vers des solutions plus privées et souveraines"
description: "Comment je suis passé de Google (Drive, Photos, Gmail) à des services plus privés et souverains."
date: "2025-11-16"
updated: 2026-09-13
category: "blog"
tags: []
excerpt: ""
metaTitle: "Dégooglisation : quitter Drive, Photos et Gmail"
metaDescription: "Tutoriel détaillé pour quitter Google : backup, migration, nouvelles solutions cloud, DNS, confidentialité..."
cover: ""
lang: fr
translation: degoogling-migrating-from-google-to-private-solutions
---
La dégooglisation n’est plus un sujet marginal. Documents, photos, courriels, historique et habitudes finissent facilement regroupés chez un seul acteur. Tout fonctionne bien, parfois même trop bien, jusqu’au moment où cette dépendance commence à poser question.

De mon côté, il n’y a pas eu de rejet brutal ni de grand ménage idéologique. J’ai avancé progressivement, en fonction de mes usages, des contraintes techniques et des alternatives réellement disponibles. Certaines décisions se sont imposées facilement. D’autres restent beaucoup plus nuancées.

## Pourquoi réduire ma dépendance à Google

Ma motivation est d’abord pratique. Centraliser autant de données personnelles et professionnelles dans un seul écosystème réduit la marge de manœuvre. Changer un service devient plus difficile lorsque tous les autres sont liés.

Je cherche donc à reprendre la main, à privilégier des solutions européennes ou auto-hébergées lorsqu’elles répondent correctement au besoin, et à limiter l’analyse commerciale de mes contenus.

Cela ne signifie pas remplacer chaque service à n’importe quel prix. Lorsqu’aucune alternative crédible ne correspond à mon usage, je continue à utiliser Google. Cette migration reste une progression, pas une règle absolue.

## 1. De Google Drive à kDrive avec rclone

Google Drive contenait plus de 1,5 To de documents personnels et professionnels. Télécharger l’ensemble chez moi avant de le renvoyer ailleurs aurait été long, aurait saturé ma connexion et aurait multiplié les possibilités d’interruption.

J’ai préféré louer un VPS low cost pendant quelques heures, installer rclone, configurer Google Drive et kDrive comme deux destinations distantes, puis lancer le transfert directement depuis le datacenter.

Le débit était bien meilleur et ma connexion personnelle restait disponible. La migration complète a pris environ deux à trois heures.

J’ai choisi kDrive comme alternative européenne hébergée en Suisse. Ce choix ne résulte d’aucun partenariat et ne transforme pas le service en solution parfaite. Il répond simplement mieux à mes priorités actuelles.

## 2. De Google Photos à un NAS QNAP avec Immich

Google Photos reste objectivement l’un des services les plus confortables du marché. Il est performant, fiable et très difficile à remplacer sans accepter quelques compromis.

Pour des raisons de confidentialité, j’ai néanmoins rapatrié ma photothèque sur un NAS QNAP et installé Immich comme interface. Le parcours comprend un export avec Google Takeout, un import local, un accès externe avec Cloudflare Tunnel sans ouverture directe de ports et une sauvegarde automatique vers kDrive par WebDAV.

Cette solution demande davantage d’attention. Le NAS fonctionne en permanence, fait du bruit et reste moins confortable que Google Photos. Elle correspond cependant à mon choix d’auto-hébergement et me donne plus de contrôle sur les fichiers.

## 3. Une migration progressive de Gmail

Le courrier électronique est la partie la plus délicate. Une nouvelle adresse touche les contacts, les comptes existants et des années d’habitudes. Ce changement ne se règle pas en un week-end.

J’ai envisagé Infomaniak Mail, mais la limite de cinq adresses ne correspondait pas à mes besoins au moment de ce choix. J’ai donc déplacé mes boîtes vers un hébergement mutualisé avec cPanel.

Cette organisation me permet de créer les adresses nécessaires et d’utiliser une configuration IMAP et SMTP classique. Elle n’est pas encore parfaite, mais elle fonctionne et réduit ma dépendance à Gmail.

## 4. Ce que je conserve encore chez Google

Certaines briques restent difficiles à remplacer. Google Sheets en fait partie. Je n’ai pas trouvé d’alternative qui réunisse au même niveau la collaboration, les intégrations, l’automatisation par scripts et les API dont j’ai besoin.

Google Photos reste également présent de manière limitée. Avoir migré les fichiers ne m’empêche pas de reconnaître l’efficacité du service.

Mon objectif n’est donc pas l’abandon total. Je cherche plutôt à réduire l’exposition et à éviter qu’un seul fournisseur devienne indispensable à toute mon organisation.

## Une dégooglisation réaliste

Le résultat tient dans une série de décisions progressives : Drive vers kDrive, Photos vers QNAP et Immich, Gmail vers une messagerie indépendante, sauvegardes réparties entre le NAS et un cloud européen, puis accès externe protégé par Cloudflare Tunnel.

Cette organisation n’est ni plus simple ni parfaite. Elle reste cohérente avec ce que je recherche : conserver suffisamment de confort tout en reprenant le contrôle sur les données qui comptent.

![Organisation utilisée après la migration hors de Google](/blog/degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines/degoogl.webp "Dégooglisation")
