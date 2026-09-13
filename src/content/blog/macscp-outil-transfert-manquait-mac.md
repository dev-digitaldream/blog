---
title: "macSCP : j'ai créé l'outil de transfert qui me manquait sur Mac"
description: Pour terminer ma migration de Windows vers Mac, il me manquait mon
  usage de WinSCP. J'ai créé macSCP avec l'aide de l'IA.
date: 2026-09-12
updated: 2026-09-13
updateNote: "Le billet précise désormais que macSCP répond à mon flux de travail particulier plutôt qu’à une absence totale de clients Mac. Une homonymie découverte après publication est également signalée."
lang: fr
translation: macscp-file-transfer-tool-missing-on-mac
draft: false
category: blog
tags:
  - macOS
  - SCP
  - SFTP
  - développement
  - IA
  - WinSCP
cover: /blog/macscp/macscp-desktop.webp
excerpt: "Je travaille désormais à 99 % sous macOS. macSCP a comblé un besoin
  très concret : retrouver une interface simple pour transférer mes fichiers
  vers mes machines Linux."
metaTitle: "macSCP : l'outil de transfert qui me manquait sur Mac"
metaDescription: Mon passage de Windows à macOS, la création de macSCP avec
  Claude Code puis Codex, en passant par les modèles chinois via le super
  OpenCode, et son usage pour transférer des fichiers vers mes machines Linux.
---
Avant d’abandonner Windows comme système principal en pro (en privé, je suis appliste depuis les bêta-tests Intel et les premiers Hackintosh ; oui, je suis assez vieux, mon petit), il me restait un besoin à régler : retrouver sur macOS ce que je faisais avec WinSCP. Mes fichiers d’un côté, une machine distante de l’autre, et une interface graphique pour faire passer les uns vers l’autre sans passer par le terminal. Je voulais changer de système sans renoncer à toutes mes habitudes.

C’est de là qu’est partie l’idée d’un WinSCP pour Mac. J’ai cherché et j’ai testé plusieurs softs, payants comme gratuits. Aucun ne retrouvait exactement l’interface et le flux de travail que j’aimais dans WinSCP, ou alors j’ai mal cherché !! Et comme on vit une période formidable, j’ai décidé de le créer avec l’aide de l’IA. D’abord, faire un cahier des charges des fonctionnalités que je désire, et pas un copier-coller de WinSCP : je n’aurais pas l’utilité de toutes les fonctionnalités, c’est une usine à gaz. Puis un début sur Claude Code, à l’époque où il ne m’éjectait pas après deux échanges ; passage ensuite sur les modèles chinois via le super OpenCode. Mais dès la sortie de Codex et depuis la version 5.5, j’ai pris l’abonnement à 100 balles et je ne regrette pas : c’est un monstre ! Et je ne parle pas de la version 6 Astra qui met à terre tout le marché pour mon utilisation, en attendant la relève d’autres concurrents. Et non, je ne jette pas de fleurs à Sam Altman, sauf s’il m’offre un accès illimité pendant quelques années ;) Mais il faut reconnaître que les équipes d’OpenAI ont fait un superbe boulot sur les outils de coding et de test. Mon application n’est pas parfaite, et je suis assez bien placé pour le savoir. Mais je m’en sers vraiment : elle récupère mes logs, envoie ceux dont j’ai besoin et a trouvé sa place dans mon quotidien. Pour un outil que j’ai fabriqué, c’est déjà un plaisir assez particulier.

## Windows a gardé un double des clés

Dans mon travail, je suis désormais à 99 % sous macOS. Le pour cent restant a son petit logement : une [machine virtuelle Windows 11 dans VMware](/blog/faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion/). Je la conserve pour mettre à jour du matériel dont les utilitaires n’existent ni sous Linux ni sous macOS. Changer tout un environnement de travail et garder un système d’exploitation pour quelques utilitaires de mise à jour : l’informatique a le sens du détail.

Cette VM me rend service, donc elle reste. Mon objectif était de travailler sur Mac en retrouvant les outils dont j’avais besoin. Les transferts de fichiers en faisaient partie, et WinSCP était mon point de repère.

Se connecter à une machine Linux, parcourir ses dossiers, récupérer des logs, envoyer les fichiers nécessaires à une mise à jour : voilà le quotidien auquel macSCP devait répondre. Je voulais voir où se trouvaient les fichiers, choisir les bons et les transférer avec une interface simple.

## Deux panneaux, et mes habitudes reviennent

macSCP affiche les fichiers locaux et distants dans deux panneaux. Je peux parcourir les dossiers, envoyer un fichier ou en récupérer un en gardant les deux côtés sous les yeux. Le principe est familier, et ça me convient très bien. Pour cette partie de mon travail, j’aime autant retrouver mes repères.

<figure class="article-screenshot">
  <img src="/blog/macscp/macscp-desktop.webp" alt="macSCP sur Mac, avec les fichiers locaux à gauche et les fichiers distants à droite" width="1200" height="836" loading="lazy" decoding="async" />
  <figcaption>macSCP sur Mac : les fichiers locaux et distants dans deux panneaux.</figcaption>
</figure>

Il y a aussi des machines anciennes avec des versions pas à jour. Celles-là ne deviennent pas plus récentes parce que j’ai changé d’ordinateur, ce qui est assez peu coopératif de leur part. Le transfert SCP et la compatibilité avec certains anciens serveurs SSH comptaient donc dans mon besoin de départ. macSCP possède un réglage de compatibilité qui me permet de travailler avec certaines de ces machines. Je parle bien de celles avec lesquelles il me sert ; je ne l’ai pas confronté à tous les serveurs possibles.

Au passage, WinSCP prend lui aussi en charge le [protocole SCP](https://winscp.net/eng/docs/scp) et documente des [algorithmes SSH anciens](https://winscp.net/eng/docs/ssh_algorithms). Il reste mon point de comparaison parce que je l’utilisais sous Windows. Ce que je cherchais avec macSCP, c’était retrouver mon usage sur le Mac.

## Un ZIP plutôt que des milliers de petits transferts

Le besoin ne s’arrête pas à déplacer un fichier d’un panneau à l’autre. Quand j’ai des milliers de petits fichiers à envoyer, attendre que chacun fasse le trajet peut prendre des heures. J’ai donc ajouté la possibilité de transférer une archive ZIP, puis de la décompresser directement sur le serveur distant. Pour le RAR, je n’ai pas encore trouvé la bonne commande, ou alors c’est parce que c’est un format propriétaire !

Sur certaines de mes opérations, je suis passé d’une attente de plusieurs heures à quelques secondes. C’est mon retour d’usage sur mes machines, pas une promesse de vitesse pour n’importe quel transfert. Mais c’est exactement le genre de gain que je cherchais : terminer l’opération et continuer mon travail.

J’ai aussi ajouté une fonction pour supprimer du serveur les fichiers parasites créés par macOS ou iOS. Je veux envoyer les fichiers nécessaires à mon intervention, sans laisser derrière moi les petits fichiers du système Apple qui n’ont rien à faire sur ces machines.

## Je suis un vibe codeur, et je m’en sers

Je ne suis pas développeur. Je suis un vibe codeur, même si le terme ne plaît pas à tout le monde. J’ai commencé avec Claude il y a deux ans, avec le chat, les hallucinations et la fenêtre de contexte très limitée, puis poursuivi avec les outils CLI comme Claude Code, puis Gemini, jusqu’à Codex d’OpenAI, notamment depuis la 5.5 et, actuellement, à l’heure où j’écris ce billet, le puissant 6 Astra. Mon point de départ, ce sont les besoins que je rencontre dans mon travail et les outils que j’aimerais avoir sous la main.

Ce qui me motive, c’est de fabriquer quelque chose qui nous serve tous les jours. Le transfert d’une mise à jour, la récupération de logs, une opération pénible qui devient simple : c’est là que je vois l’intérêt de tout ce temps passé à construire l’application.

J’ai aussi raconté [ce que l’IA a changé dans mon travail sur des systèmes industriels fermés](/blog/quand-lia-debloque-enfin-des-systemes-industriels-fermes/). Avec macSCP, cette aide prend une forme très concrète : je peux fermer la conversation, ouvrir l’application et faire mes transferts avec.

## Il y a aussi mes VPS et S3

Malgré son nom, macSCP ne se limite plus au SCP. L’application dispose aussi de transferts SFTP, que j’utilise notamment avec mes VPS, et d’une prise en charge du stockage Amazon S3 et de services compatibles.

L’intérêt pour moi, c’est de retrouver ces accès dans la même interface. Derrière, les usages restent différents : sur une machine Linux, je parcours des dossiers ; avec S3, je travaille dans un espace de stockage d’objets. Les possibilités dépendent du service auquel je me connecte.

Ces fonctions sont présentes, mais toutes les configurations n’ont pas été éprouvées. Mon usage me permet de dire que l’outil me rend service, sans garantir le même résultat dans tous les environnements. La sécurité n’est pas encore suffisamment validée pour une distribution publique. Avant d’envisager cette étape, je dois notamment auditer la gestion des identifiants, des clés, des connexions et des erreurs.

## Sur chantier, l’iPhone est déjà dans la poche

J’ai également créé une application pour iOS et iPadOS, que je suis en train de moderniser. Je veux y retrouver les fonctions utiles à mes interventions, avec une interface adaptée au téléphone et à la tablette. Le chantier est encore en cours.

Mes collègues sont tous équipés d’iPhone (certains ont aussi un iPad). Sur place, il est parfois plus simple de brancher le téléphone à notre machine avec un [adaptateur Ethernet RJ45](https://amzn.to/3USDyxU) (lien affilié Amazon) que de sortir un ordinateur portable. Le laptop n’est pas toujours chargé, ni à jour, au moment où on en a besoin. Le téléphone, lui, est déjà là.

C’est ce quotidien qui me donne envie de faire évoluer la version mobile : me connecter à une machine Linux, récupérer des logs et envoyer les fichiers nécessaires à une mise à jour depuis l’appareil que j’ai sous la main. Je pense aussi aux collègues qui rencontrent les mêmes besoins.

Cette version reprend la base du moteur de transfert de macSCP, dans un projet distinct qui évolue séparément. Les deux applications n’ont donc pas automatiquement les mêmes fonctions ni les mêmes comportements. La modernisation sert justement à avancer sur ces besoins communs.

<figure class="article-screenshot">
  <img src="/blog/macscp/mobilescp-iphone-ethernet.webp" alt="iPhone connecté à un adaptateur Ethernet RJ45 UGREEN sur un établi, avec le formulaire de connexion à un serveur ouvert dans MobileSCP" width="640" height="480" loading="lazy" decoding="async" style="max-width: 640px" />
  <figcaption>MobileSCP sur iPhone, avec un adaptateur Ethernet RJ45 : préparer une connexion depuis le téléphone.</figcaption>
</figure>

<figure class="article-screenshot article-screenshot-phone">
  <img src="/blog/macscp/mobilescp-iphone-dev.webp" alt="Écran d’accueil de MobileSCP dans le simulateur iPhone, avant l’ajout d’un serveur" width="640" height="1206" loading="lazy" decoding="async" />
  <figcaption>MobileSCP sur simulateur iPhone, version en développement.</figcaption>
</figure>

<figure class="article-screenshot article-screenshot-tablet-portrait">
  <img src="/blog/macscp/mobilescp-ipad-portrait-dev.webp" alt="MobileSCP sur simulateur iPad en portrait, avec les fichiers de test distants au-dessus des fichiers locaux" width="840" height="1212" loading="lazy" decoding="async" />
  <figcaption>Sur iPad en portrait, les deux espaces sont superposés. Version en développement, avec un serveur de test local.</figcaption>
</figure>

<figure class="article-screenshot">
  <img src="/blog/macscp/mobilescp-ipad-landscape-dev.webp" alt="MobileSCP sur simulateur iPad en paysage, avec les fichiers distants et locaux côte à côte" width="1200" height="911" loading="lazy" decoding="async" />
  <figcaption>Sur iPad en paysage, les panneaux s’affichent côte à côte. Version en développement.</figcaption>
</figure>

## Ce qui me manque encore

Aujourd’hui, j’ai un petit pseudo-terminal pour envoyer des commandes. Il me rend service pour des actions simples, comme rebooter une machine. Mais j’aimerais aller plus loin avec un terminal plus moderne et plus complet.

Je voudrais aussi pouvoir garder dans l’application les commandes que nous utilisons dans l’entreprise. Pour l’instant, je dois encore aller les chercher dans un document externe. Les retrouver au même endroit que mes connexions et mes fichiers ferait disparaître un détour de plus pendant une intervention.

Il reste aussi des bugs. Il arrive que l’application se comporte mal quand je change de serveur. C’est rare dans mon usage, mais ça fait partie des choses à corriger. Utiliser mon propre outil tous les jours me donne autant d’idées d’amélioration que de raisons d’en être content.

## Pour la suite, je n’ai pas encore tranché

### Une homonymie découverte après coup

En écrivant ce billet, j’ai découvert [un autre projet nommé macSCP](https://github.com/macnev2013/macSCP), dont le dépôt GitHub existe depuis 2021. Mes recherches initiales n’avaient rien fait apparaître, et je ne connaissais pas ce projet lorsque j’ai commencé le mien. Son auteur indique qu’il n’est plus maintenu et qu’il a évolué vers une nouvelle application appelée AnySCP.

J’avais commencé mon application de mon côté bien avant de découvrir ce dépôt. Mon dépôt privé `dev-digitaldream/scp-client-macos` a été créé le 5 novembre 2025 et conserve l’historique de ce travail indépendant. Le nom venait simplement de l’association entre Mac et SCP, ce qui explique assez facilement que deux personnes aient eu la même idée. Je préfère néanmoins signaler cette homonymie clairement. Si mon application doit un jour être distribuée publiquement, son nom devra être réévalué pour éviter toute confusion.

J’hésite encore entre ouvrir le code et le partager sur GitHub, et proposer l’application sur l’App Store. Rien n’est décidé sur la forme de distribution, la licence ou le calendrier. Ce choix fera l’objet d’un prochain billet. Pour l’instant, je préfère décrire l’application telle qu’elle me sert.

macSCP a comblé ce qui me manquait pour mes transferts sur Mac. Je récupère mes logs, j’envoie mes fichiers et je continue à travailler sous macOS avec un outil qui me convient. Il reste du travail dessus, mais je suis content d’avoir pu le créer avec cette aide et d’en avoir un usage réel.

Quant à Windows, il garde sa petite VM pour les utilitaires de mise à jour. On a trouvé un arrangement.
