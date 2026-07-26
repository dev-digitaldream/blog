---
title: "Dégooglisation : comment j’ai migré Drive, Photos et Gmail vers des solutions plus privées et souveraines"
description: "Comment je suis passé de Google (Drive, Photos, Gmail) à des services plus privés et souverains."
date: "2025-11-16"
category: "blog"
tags: []
excerpt: ""
metaTitle: "Dégooglisation : migrer Drive, Photos et Gmail vers des alternatives privées"
metaDescription: "Tutoriel détaillé pour quitter Google : backup, migration, nouvelles solutions cloud, DNS, confidentialité..."
cover: ""
lang: fr
translation: degoogling-migrating-from-google-to-private-solutions
---

La dégooglisation n’est plus un sujet marginal. De plus en plus d’utilisateurs cherchent à réduire leur dépendance aux services Google, non pas par idéologie, mais par besoin de contrôle, de confidentialité et de cohérence à long terme. Centraliser documents, photos, mails et habitudes chez un seul acteur finit toujours par poser question.

De mon côté, il ne s’agit pas d’un rejet brutal ni d’un grand ménage radical. J’ai avancé progressivement, en fonction des usages, des contraintes techniques et des alternatives réellement disponibles. Certaines décisions sont très claires, d’autres beaucoup plus nuancées, et c’est justement ce que je partage ici.


**Pourquoi se dégoogliser ?**

La question n’est pas morale, elle est pratique. Google concentre une quantité énorme de données personnelles et professionnelles : fichiers, photos, mails, historiques, localisation, habitudes d’usage. Tout fonctionne bien, parfois même trop bien, mais au prix d’une dépendance totale à un seul écosystème.

Se dégoogliser permet surtout de reprendre la main. Réduire cette dépendance, choisir des solutions européennes ou auto-hébergées quand c’est possible, et limiter l’analyse systématique des contenus à des fins commerciales. Cela ne veut pas dire tout remplacer coûte que coûte. Quand aucune alternative crédible n’existe, je continue d’utiliser Google, sans culpabilité. Le principe reste simple : avancer étape par étape.

⸻

_1. Migrer Google Drive vers kDrive (Infomaniak)_

Google Drive hébergeait plus de 1,5 To de documents personnels et professionnels. Une migration locale aurait été longue et peu fiable. J’ai donc opté pour une approche plus efficace.

La méthode est simple : louer un VPS low cost pendant quelques heures, installer rclone, configurer les deux remotes (Google Drive et kDrive) et lancer le transfert directement depuis un datacenter. Résultat : un débit élevé, aucune saturation de ma connexion et une migration complète en deux à trois heures.

kDrive représente aujourd’hui une alternative européenne solide, hébergée en Suisse, sans exploitation commerciale des données. Ce choix n’est lié à aucun partenariat ou sponsoring. Il répond simplement à mes besoins.

⸻

_2. Quitter Google Photos : NAS QNAP + Immich_

Google Photos reste objectivement l’un des meilleurs services du marché. Performant, fiable, confortable. Malgré cela, pour des raisons de confidentialité, j’ai choisi de rapatrier l’ensemble de ma photothèque sur un NAS QNAP avec Immich comme interface.

Concrètement, cela passe par un export via Google Takeout, un import local dans Immich, un accès externe sécurisé via Cloudflare Tunnel sans ouverture de ports, et une sauvegarde automatique du NAS vers kDrive via WebDAV. Le NAS tourne en permanence, il est bruyant, ce n’est clairement pas la solution la plus confortable.

Mais c’est cohérent avec un choix d’auto-hébergement. Ce n’est ni plus simple ni plus agréable que Google Photos. C’est simplement plus privé.



_3. Migration progressive de Gmail_

Le mail est toujours la partie la plus délicate d’une dégooglisation. Changer d’adresse, prévenir les contacts, migrer les usages prend du temps.

J’ai envisagé Infomaniak Mail, mais la limite à cinq adresses ne correspondait pas à mes besoins. J’ai donc choisi de gérer mes boîtes via un hébergement mutualisé avec CPanel. Cela me permet de créer autant d’adresses que nécessaire, de garder un contrôle total et d’utiliser une configuration IMAP et SMTP classique.

Ce n’est pas encore parfaitement structuré, mais c’est fonctionnel et surtout indépendant de Google.



_4. Ce que je garde encore chez Google_

La dégooglisation reste un processus progressif. Certaines briques sont encore difficiles à remplacer.

Google Sheets en fait partie. Aucune alternative actuelle n’offre le même niveau de collaboration, d’intégration, d’automatisation via scripts et d’API. Pour cet usage précis, je continue donc à l’utiliser.

Google Photos reste également présent, mais de manière très limitée. Même après migration, je reconnais son efficacité et sa fiabilité. L’objectif n’est pas l’abandon total, mais la réduction de l’exposition.

**Conclusion : une dégooglisation réaliste et maîtrisée**

La dégooglisation n’est pas un grand saut dans le vide. C’est une suite de décisions progressives et assumées : Drive vers kDrive, Photos vers NAS et Immich, Gmail vers une solution indépendante, sauvegardes réparties entre NAS et cloud européen, accès externe sécurisé via Cloudflare Tunnel.

Chaque étape vise le même objectif : garder le contrôle sans sacrifier complètement le confort. Ce n’est pas parfait, mais c’est cohérent, et surtout durable.


![degoogl](/blog/degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines/degoogl.webp "degoogl")
