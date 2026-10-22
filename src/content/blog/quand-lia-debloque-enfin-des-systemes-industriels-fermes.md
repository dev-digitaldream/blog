---
title: "Quand l’IA débloque enfin des systèmes industriels fermés"
slug: quand-lia-debloque-enfin-des-systemes-industriels-fermes
description: "Dix ans de blocages, des protocoles peu documentés et beaucoup d’essais. Mon retour sur ce que l’IA a changé dans notre travail sur des systèmes industriels fermés."
metaTitle: "IA et systèmes industriels fermés : retour de terrain"
metaDescription: "Comment les LLM, Ghidra et le reverse engineering nous ont aidés à comprendre et moderniser des systèmes industriels fermés après dix ans de blocages."
date: 2026-05-24
updated: 2026-10-22
updateNote: "Ajout d’un point d’actualité sur REA et Lean REA, deux nouveaux outils de rétro-ingénierie pour les agents IA. Les expériences initiales racontées dans ce billet restent inchangées."
lang: fr
draft: false
translation: when-ai-finally-unlocked-industrial-systems
category: blog
tags: [ia, llm, reverse-engineering, industrie, ghidra, codex, automatisation, gmktec]
cover: "/uploads/ia-industrie/atelier-investigation.webp"
sticker: best-of-the-best
stickerRotation: -11
stickerScale: 1.04
excerpt: "Pendant des années, nous avons adapté notre travail aux limites d’un système fermé. Avec les LLM, certaines de ces limites commencent enfin à céder. Pas sans erreurs, ni sans travail de notre côté."
---

Pendant plus de dix ans, certaines parties de notre infrastructure semblaient impossibles à faire évoluer sans passer par le fabricant. Un système industriel ancien, peu documenté, des protocoles propriétaires et des habitudes prises faute de mieux. Chaque évolution demandait du temps, des validations et parfois des sommes importantes. Certaines modifications pourtant simples étaient facturées des dizaines de milliers d’euros.

Avec les années, nous avions fini par adapter notre manière de travailler aux limites du système. Nous avions des idées pour moderniser les interfaces, automatiser des traitements et simplifier les flux internes. Mais sans comprendre ce qui se passait derrière, nous avancions lentement. Le coût pesait, évidemment. L’impression d’être bloqué pesait tout autant.

Et puis les outils d’IA ont commencé à nous aider sur des sujets où je ne les attendais pas vraiment. Honnêtement, je ne pensais pas voir certains de ces blocages céder aussi vite.

## Des soirées à comprendre un flux, puis à recommencer

Avant cela, nous faisions déjà du reverse engineering : captures réseau, analyse de sessions, comparaisons manuelles, recherche de structures dans des formats obscurs. Nous avancions, mais au prix de beaucoup de temps. Personne ne semblait encore avoir une vision globale de certains échanges.

Il y a eu des soirées entières où nous pensions avoir enfin compris une structure, avant de réaliser le lendemain que notre hypothèse était complètement fausse. Ce genre de découverte remet assez vite l’enthousiasme à sa place.

À l’époque, je voyais surtout l’IA comme un outil pour corriger des emails, traduire ou résumer des documents. Autour de moi, ses usages professionnels s’arrêtaient souvent là. Les premières versions de ChatGPT pouvaient expliquer un bout de code ou suggérer une piste, mais elles restaient limitées face à notre contexte technique.

Progressivement, les modèles et les outils autour ont évolué. DeepSeek, GLM, MiniMax, Codex, mais aussi des connecteurs MCP communautaires vers [Ghidra](https://github.com/NationalSecurityAgency/ghidra), ont changé notre façon d’aborder le travail. Ghidra reste l’outil d’analyse ; le connecteur sert surtout à rendre certaines informations accessibles au modèle. Nous pouvions comparer des flux, chercher des structures récurrentes, rapprocher des comportements et discuter des hypothèses avec un assistant qui suivait mieux le raisonnement.

Des sessions observées depuis longtemps ont commencé à révéler leur logique. Certaines structures ont enfin pris du sens. Une suggestion du modèle ne constituait jamais une preuve : il fallait la confronter aux captures, au binaire et au comportement du système. Nous passions néanmoins moins de temps à chercher seuls par quel bout commencer.

Je reste volontairement vague sur les protocoles et les manipulations. Certains systèmes sont toujours en production, et je tiens à respecter les acteurs concernés. Ce que je souhaite raconter ici, c’est ce changement dans notre travail, sans exposer les détails de l’infrastructure.

## Ma boîte à outils, avec ses bons jours et ses limites

Aucun modèle ne suffisait vraiment seul. J’ai fini par utiliser plusieurs outils en parallèle, avec leurs qualités, leurs limites et parfois leurs raisonnements complètement inventés.

J’utilise beaucoup [OpenCode](https://opencode.ai/), qui permet de choisir différents fournisseurs et modèles : DeepSeek, GLM, MiniMax et d’autres moins connus. Avec les offres que j’utilisais, une dizaine de dollars par mois donnait déjà accès à des possibilités que je trouvais assez absurdes pour ce prix. Les modèles et leurs tarifs changent vite ; ce montant décrit mon expérience à ce moment-là, pas une promesse tarifaire.

Cela ne rendait pas les résultats fiables par défaut. Après plusieurs milliers de lignes, certains modèles commençaient à délirer ou perdaient le contexte technique initial. Sur un travail étalé sur plusieurs jours, ces limites se sentaient vite. Nous avons aussi perdu plusieurs heures à suivre des raisonnements inventés de toutes pièces.

Claude Sonnet et Opus m’ont souvent impressionné pour analyser des comportements ou reformuler des hypothèses complexes. Avec une autre frustration : passer cinq heures sur un problème difficile et se faire couper en pleine session parce que la limite d’usage est atteinte. Le problème, lui, n’avait pas prévu de faire une pause.

Puis Codex a pris une place que je n’avais pas anticipée. Au départ, je le voyais surtout comme un assistant de développement classique. Il a pourtant commencé à m’aider à analyser des fichiers issus de Linux embarqué, à comprendre des structures binaires et à chercher des pistes de recompilation. Des manipulations que je ne m’imaginais pas aborder seul quelques années plus tôt devenaient accessibles, au moins assez pour commencer à travailler dessus.

Même avec des spécialistes de l’embarqué, certains sujets restaient difficiles. Je ne prétends pas que tout est devenu simple. Mais la barrière à l’entrée a clairement bougé dans mon usage.

## Mise à jour du 22 octobre 2026 : REA et Lean REA, ça aurait simplifié quelques soirées !

Je suis tombé sur deux projets récents qui m’auraient probablement fait gagner pas mal de temps au début de cette aventure : **[REA, pour Reverse Engineer Anything](https://github.com/morluto/rea)**, et son alternative minimaliste **[Lean REA](https://github.com/aicodeking/leanrea)**. À l’époque où nous passions nos soirées à ouvrir des fichiers, chercher les bonnes commandes et rapprocher des indices, un assistant capable d’organiser tout cela aurait été plutôt bienvenu. Après tout, le reverse engineering demande déjà assez de patience sans devoir réexpliquer à chaque session par quel bout commencer.

REA regroupe dans un même environnement des outils d’analyse pour les exécutables, les applications, les binaires natifs et certaines observations d’exécution. Il propose notamment une intégration **MCP et CLI**, que l’on peut relier à un agent de développement. L’idée n’est pas que le modèle devienne magiquement un ingénieur en électronique ou un spécialiste de tous les protocoles, mais qu’il puisse interroger plus facilement les outils et surtout retrouver les éléments qui justifient ses hypothèses.

**Lean REA** pousse cette logique dans l’autre sens. Au lieu de charger un gros serveur MCP, c’est un **skill d’environ 8 Ko** qui indique à l’agent quels outils classiques utiliser directement, selon qu’il regarde une application Electron, un APK Android, un binaire, du firmware ou une capture réseau. Il s’appuie par exemple sur `jadx`, `apktool`, `otool`, `nm` et d’autres utilitaires déjà connus. Autrement dit, on fournit à l’IA une méthode de travail plus qu’une nouvelle boîte à outils.

Un [comparatif publié par MindStudio le 17 octobre 2026](https://www.mindstudio.ai/blog/lean-rea-skill-reverse-engineering) rapporte que Lean REA a été **38 % plus rapide et 35 % moins coûteux que REA** dans un banc d’essai de **36 exécutions réparties sur quatre tâches**, avec une précision très proche. Intéressant, mais à relativiser : ce test se concentrait sur des applications et binaires logiciels, avec un modèle et une configuration donnés. Ce n’est ni une mesure universelle, ni la preuve que Lean REA comprendra demain un protocole industriel propriétaire sans documentation.

**Je n’ai pas encore validé REA ou Lean REA sur les systèmes dont je parle ici.** Je les mentionne parce qu’ils montrent très bien le chemin parcouru depuis nos premiers essais avec Ghidra, des captures réseau et des LLM parfois perdus dans leur propre contexte. On passe progressivement d’un assistant auquel on colle des extraits à des agents capables de conduire une investigation plus structurée. Le résultat reste à confronter à des preuves, et sur des équipements en production, l’analyse doit évidemment rester autorisée, maîtrisée et isolée des opérations risquées.

## Le contexte métier ne se devine pas

Ce travail m’a surtout rappelé à quel point la connaissance du système reste centrale. Il faut expliquer ce que l’on observe, le résultat attendu, les contraintes réelles et les hypothèses déjà essayées. Une question vague sur un fichier ne transmet pas dix ans d’expérience du terrain.

Les modèles peuvent proposer des pistes. C’est à nous de les guider, de comparer leurs propositions aux comportements observés et de repérer quand le raisonnement s’éloigne du problème.

Notre objectif a toujours été de comprendre ces systèmes anciens pour les moderniser, améliorer les flux, automatiser des tâches et réduire certaines dépendances historiques. Nous cherchions à rendre nos outils plus maintenables. La logique métier donne une direction à ce travail ; sans elle, il est très facile de passer du temps sur une réponse convaincante qui ne sert à rien.

C’est aussi ce besoin de fabriquer des outils utiles au quotidien qui m’a amené à créer [macSCP pour mes transferts sur Mac](/blog/macscp-outil-transfert-manquait-mac/).

## Obsidian pour ne pas tout recommencer le lendemain

Un autre problème est apparu assez vite : la mémoire. Avec plusieurs sessions, plusieurs agents et des analyses qui durent des jours, parfois en parallèle, je ne pouvais plus tout garder en tête.

J’ai commencé à centraliser dans [Obsidian](https://obsidian.md/) les découvertes, les hypothèses, les captures, les corrélations et les comportements observés. J’y gardais aussi les réponses intéressantes des différents modèles.

Obsidian est presque devenu le « cerveau persistant » autour des LLM. Les conversations passent, les limites de contexte arrivent, mais les notes restent. Sur ce type de travail, pouvoir retrouver ce qui a été compris et ce qui reste une hypothèse devient vite aussi utile que le modèle lui-même.

## Un petit Linux toujours à portée de main

J’ai également adapté mon installation. Mon Mac me convient pour énormément de choses, mais certaines recompilations et certains environnements Linux embarqués étaient compliqués à gérer nativement.

J’ai donc investi dans un <a href="https://amzn.to/4wLBzKf" rel="nofollow">petit mini PC chinois de la marque GMKtec</a> (lien affilié Amazon), dédié à ce travail. « Aberrant, frérot ;) » Une machine simple, toujours allumée, capable de compiler, de tester et d’exécuter les outils directement sous Linux. Je n’avais pas besoin d’un énorme serveur.

Avec [Tailscale](https://tailscale.com/), ce mini PC est devenu mon laboratoire distant, accessible depuis mes différents lieux de travail. Dans mon installation, cela a beaucoup simplifié l’accès à cet environnement.

J’ai en revanche évité certaines solutions d’agents totalement autonomes ou trop opaques. Avec des données sensibles et des systèmes de production, je veux garder une vision de ce que les outils font et de ce que je leur confie. Ces questions font partie du travail, au même titre que les résultats obtenus.

## Les blocages commencent à céder

Ce qui me fascine, c’est de pouvoir avancer avec une petite équipe sur des sujets qui semblaient autrefois réservés à quelques spécialistes ou au constructeur. L’expérience accumulée sur le terrain trouve de nouveaux moyens de s’exprimer.

L’IA nous aide à explorer plus de pistes et à mettre de l’ordre dans des informations difficiles à rapprocher. Elle peut aussi nous faire perdre du temps. Les soirées sur une mauvaise hypothèse n’ont pas disparu ; nous avons simplement de meilleurs outils pour travailler, à condition de garder notre jugement.

Vu de l’extérieur, l’IA ressemble encore souvent à un assistant bureautique évolué. Dans notre quotidien, elle commence déjà à changer la compréhension des systèmes anciens, la rétro-ingénierie et la préparation de leur modernisation.

Après plusieurs mois de travail, il y a encore des moments où j’ai du mal à réaliser que certains blocages présents depuis plus de dix ans commencent enfin à céder. Pour moi, c’est là que se trouve le changement : retrouver un peu d’autonomie sur des outils que nous utilisons tous les jours.
