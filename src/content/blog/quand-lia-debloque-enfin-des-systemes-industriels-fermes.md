---
title: Quand l’IA débloque enfin des systèmes industriels fermés
slug: quand-lia-debloque-enfin-des-systemes-industriels-fermes
description: Retour d’expérience sur l’usage de l’IA, des LLM, de Ghidra, de
  Codex et d’outils modernes pour comprendre et moderniser des systèmes
  industriels fermés.
date: 2026-05-24
published: true
tags:
  - ia
  - llm
  - reverse-engineering
  - industrie
  - ghidra
  - codex
  - automatisation
  - gmkteck
translation: when-ai-finally-unlocked-industrial-systems
---
Pendant plus de dix ans, certaines parties de notre infrastructure semblaient impossibles à faire évoluer sans dépendre entièrement d’un fabricant externe.

Chaque modification coûtait cher.  
Chaque évolution prenait du temps.  
Et certaines limitations techniques étaient devenues tellement normales que plus personne n’essayait vraiment de les remettre en question.

Puis les LLM sont arrivés.

Pas les versions marketing utilisées pour corriger des emails ou générer des posts LinkedIn.  
Mais les nouveaux outils capables d’analyser du code, corréler des flux, assister du reverse engineering et raisonner sur des systèmes complexes.

Et honnêtement, je ne pensais pas voir ça arriver aussi vite.

Pendant longtemps, j’ai vu l’intelligence artificielle comme beaucoup de monde autour de moi : un outil pratique pour corriger des emails, traduire des textes ou résumer des documents.

Dans mon environnement professionnel, c’était souvent limité à ça. Quelques collègues l’utilisaient pour reformuler un message ou gagner du temps sur des tâches administratives, mais rarement pour aller plus loin.



![Illustration IA et systèmes industriels](/uploads/ia-industrie/hero.webp)

Et puis quelque chose a changé.

Depuis plus de dix ans, nous travaillions avec un système industriel extrêmement fermé. Un environnement ancien, peu documenté, construit autour de protocoles propriétaires et d’une dépendance forte envers un fabricant externe.

Chaque petite évolution demandait du temps, des validations, parfois des coûts très importants. Certaines modifications simples étaient facturées des dizaines de milliers d’euros. Avec les années, nous avions fini par adapter notre manière de travailler aux limites du système lui-même.

Le problème, ce n’était pas seulement le coût.

C’était surtout l’impression d’être bloqué.

Nous avions des idées pour moderniser certaines interfaces, automatiser des traitements complexes, simplifier des flux internes et construire une plateforme plus moderne autour de notre métier. Mais sans accès réel aux mécanismes internes du système, tout devenait extrêmement lent.

Pendant des années, nous avons travaillé autour des limites du système.

Pas avec lui.  
Autour de lui.

Pendant des années, le reverse engineering classique nous a permis d’avancer un peu, mais jamais suffisamment.

Captures réseau, analyse de sessions, corrélations manuelles, comportements étranges, formats obscurs… énormément de temps était consacré à essayer de comprendre des flux dont personne ne semblait encore posséder une vision globale.

Il y a eu des soirées entières où nous pensions avoir enfin compris une structure… avant de réaliser le lendemain que notre hypothèse était complètement fausse.

Les premières versions de ChatGPT étaient impressionnantes, mais dans ce contexte elles restaient limitées. Même chose pour les premiers grands modèles concurrents. Ils pouvaient aider à expliquer du code ou suggérer quelques hypothèses, mais pas réellement assister un travail d’ingénierie complexe.

Puis, progressivement, les choses ont évolué.

L’arrivée de nouveaux modèles, notamment certains concurrents chinois comme DeepSeek, GLM ou MiniMax, combinés à des outils comme le MCP de [Ghidra](https://github.com/NationalSecurityAgency/ghidra), Codex ou encore les dernières générations de modèles de raisonnement, a complètement changé notre manière de travailler.

Pour la première fois, nous avions l’impression d’avoir un assistant capable de raisonner avec nous.

Pas un outil magique.

Pas un bouton “analyser”.

Mais quelque chose capable de :

- corréler des comportements,
- comparer des flux,
- détecter des structures récurrentes,
- formuler des hypothèses crédibles,
- accélérer des semaines de réflexion humaine.

Et surtout : capable de garder un contexte technique complexe sur la durée.

Petit à petit, des éléments qui semblaient incompréhensibles depuis des années ont commencé à devenir plus clairs.

Certaines structures ont enfin pris du sens.

Des sessions que nous observions depuis longtemps ont commencé à révéler leur logique interne.

Je resterai volontairement vague sur plusieurs aspects techniques, par respect pour les acteurs concernés et parce que certains systèmes sont encore en production. Le but ici n’est pas de divulguer des protocoles ou des informations sensibles.

Mais plutôt de parler d’un changement plus profond.

Pendant longtemps, l’intelligence artificielle nous aidait surtout à mieux communiquer.

Aujourd’hui, elle commence à nous aider à mieux comprendre.

Et dans certains métiers techniques, cette différence est énorme.

---

## Aucun modèle n’était vraiment suffisant seul

Ce qui est intéressant aujourd’hui, ce n’est pas seulement l’existence des modèles IA.

C’est l’écosystème entier qui commence à se construire autour.

Avec le temps, j’ai fini par utiliser plusieurs outils en parallèle, chacun avec ses forces et ses limites. Un peu comme une boîte à outils d’ingénierie moderne.

Par exemple, j’utilise énormément [OpenCode](https://opencode.ai/) avec toute une armada de modèles chinois comme DeepSeek, GLM, MiniMax ou d’autres modèles parfois moins connus mais extrêmement performants sur certaines tâches spécifiques.

Pour une dizaine de dollars par mois, honnêtement, c’est presque absurde vu ce que ces outils permettent déjà de faire.

Évidemment, tout n’est pas parfait.

Parfois certains modèles commencent à délirer après plusieurs milliers de lignes ou perdent complètement le contexte technique initial. On sent rapidement les limites des fenêtres de contexte lorsqu’on travaille sur des projets complexes qui s’étalent sur plusieurs jours.

Parfois aussi, certains modèles nous faisaient perdre plusieurs heures avec des raisonnements totalement inventés.

De leur côté, Claude Sonnet et Opus ont souvent été impressionnants pour le raisonnement, notamment lorsqu’il fallait analyser des comportements ou reformuler des hypothèses complexes. Mais il y a aussi cette frustration moderne assez étrange : passer cinq heures à travailler sur un problème difficile avec un modèle… pour finalement se faire couper en plein milieu d’une session critique parce qu’on a atteint une limite d’usage.

Et puis il y a eu ChatGPT 5.5 et surtout Codex.

Honnêtement, au début, je ne pensais pas que Codex deviendrait réellement utile dans ce type de workflow très technique.

Je voyais surtout ça comme un assistant de développement “classique”.

Jusqu’au jour où il a commencé à m’aider à analyser des fichiers issus d’un environnement Linux embarqué, comprendre certaines structures binaires, proposer des pistes crédibles de recompilation et assister des manipulations que je n’aurais probablement jamais imaginé pouvoir faire seul il y a encore quelques années.

Même avec des spécialistes de l’embarqué, certains sujets restaient autrefois extrêmement complexes ou réservés à quelques profils très niche.

Aujourd’hui, les barrières commencent doucement à bouger.

Mais il y a quelque chose d’important que beaucoup de gens ne comprennent pas encore : les modèles ne servent à rien sans logique métier.

Le plus difficile n’est pas de poser une question à une IA.

Le plus difficile, c’est :

- comprendre le système,
- savoir expliquer clairement le contexte,
- transmettre le vrai objectif,
- formuler des hypothèses cohérentes,
- guider les modèles dans une direction utile.

Parce que le but ici n’a jamais été de “hacker” quoi que ce soit.

L’objectif était de comprendre des systèmes anciens afin de :

- les moderniser,
- améliorer les flux,
- automatiser certaines tâches,
- réduire des dépendances historiques,
- rendre des outils plus maintenables.

C’est une énorme différence.

---



![Obsidian comme mémoire de travail](/uploads/ia-industrie/obsidian.webp)

## Quand les conversations deviennent impossibles à suivre

Avec le temps, je me suis aussi rendu compte qu’un autre problème apparaissait : la mémoire.

Quand plusieurs sessions, agents et analyses tournent pendant des jours, parfois même en parallèle, il devient impossible de tout garder en tête.

J’ai donc commencé à utiliser Obsidian comme mémoire externe pour centraliser :

- les découvertes,
- les hypothèses,
- les captures,
- les corrélations,
- les comportements observés,
- les réponses intéressantes produites par différents modèles.

Finalement, [Obsidian](https://obsidian.md/) est presque devenu le “cerveau persistant” autour des LLM.

J’ai également dû adapter mon infrastructure personnelle.

Mon Mac était excellent pour énormément de choses, mais certaines recompilations ou certains environnements Linux embarqués devenaient rapidement compliqués à gérer nativement.

J’ai donc fini par investir dans un [petit mini PC chinois](https://amzn.to/4wLBzKf) de la marque GMKtec "Aberrant frérrot ;) " dédié uniquement à ce travail.

Rien de spectaculaire.

Pas un énorme serveur.

Juste une machine simple, toujours allumée, toujours accessible, capable de compiler, tester et exécuter certains outils directement sous Linux.

Avec [Tailscale](https://tailscale.com/), ce mini PC est devenu une sorte de laboratoire distant permanent accessible depuis partout.

Honnêtement, c’est probablement l’un des outils que je recommande le plus aujourd’hui tant il simplifie des architectures qui auraient été beaucoup plus compliquées auparavant.

J’ai aussi volontairement évité certaines solutions d’agents totalement autonomes ou trop opaques.

Quand on travaille avec des données sensibles, des systèmes de production ou des flux industriels, on réfléchit forcément différemment aux questions de confidentialité et d’exposition des données.

---

## Le vrai travail reste humain

Et c’est probablement ça qui me fascine le plus dans cette période actuelle.

Nous sommes peut-être dans l’un des premiers moments où un ingénieur ou un technicien expérimenté peut enfin augmenter énormément ses capacités sans avoir besoin d’une énorme équipe, d’un budget gigantesque ou d’un accès privilégié au constructeur d’origine.

Le plus impressionnant dans cette évolution n’est pas que l’IA “trouve les réponses”.

C’est sa capacité à réduire la friction intellectuelle accumulée pendant des années autour de systèmes complexes, anciens et fermés.

Elle ne remplace pas l’expertise terrain.

Elle ne remplace pas l’expérience.

Elle ne remplace pas l’intuition technique construite après des années passées à observer un système réel.

Mais elle agit comme un accélérateur.

L’impression que j’ai aujourd’hui, c’est que beaucoup d’entreprises sous-estiment encore complètement ce qui est en train de se passer dans les métiers techniques et industriels.

Parce que vu de l’extérieur, l’IA ressemble encore à un assistant bureautique évolué.

Alors qu’en réalité, elle commence déjà à transformer des domaines beaucoup plus profonds :

- rétro-ingénierie,
- maintenance industrielle,
- compréhension de systèmes hérités,
- interopérabilité,
- automatisation avancée,
- modernisation d’infrastructures anciennes.

Le plus fascinant dans tout ça n’est peut-être pas la puissance des modèles eux-mêmes.

C’est le fait que, pour la première fois depuis longtemps, certaines petites équipes techniques peuvent recommencer à comprendre les systèmes qu’elles utilisent au quotidien.

Et dans certains métiers, cette autonomie change déjà énormément de choses.

Et honnêtement, même après plusieurs mois de travail dessus, il y a encore des moments où j’ai du mal à réaliser que certains blocages présents depuis plus de dix ans commencent enfin à céder.