---
title: "Idiophile One"
description: "Mon lecteur audio gratuit et open source pour macOS : une façade hi-fi vintage avec vu-mètres, un chemin audio vérifiable, un égaliseur paramétrique et des sources réseau."
date: 2026-10-18
lang: fr
translation: idiophile-one-en
draft: false
cover: "/uploads/idiophile-one/idiophile-one-blue-glass.webp"
applicationCategory: "MultimediaApplication"
operatingSystem: ["macOS 14+", "Apple Silicon", "Intel"]
technologies: ["Swift", "SwiftUI", "AVAudioEngine", "Core Audio"]
repoURL: "https://github.com/dev-digitaldream/idiophile-one"
---

## Pourquoi je l'ai créé

Je suis retombé sur des annonces d'amplis Technics, Pioneer et Sansui, avec leurs grandes aiguilles lumineuses qui dansaient au rythme de la batterie. Comme je n'ai ni la place ni le temps de collectionner ces belles machines, j'ai voulu retrouver ce plaisir sur mon Mac. Le projet a commencé par une façade virtuelle avec vu-mètres VU et PEAK, puis il a évolué vers un vrai lecteur audio.

Et oui, le nom **Idiophile** taquine gentiment les excès du milieu audiophile : câbles hors de prix, accessoires miraculeux et switches réseau rebaptisés « audiophiles ». L'application, elle, est gratuite, sans abonnement, et publiée en open source sous licence GPL-3.0 ou ultérieure.

![Les trois finitions d'Idiophile One : Champagne, Black et Blue Glass](/uploads/idiophile-one/idiophile-one-finishes.webp)

## Ce qui fonctionne dans l'alpha

- Une façade inspirée des éléments hi-fi vintage, avec deux vu-mètres, un analyseur de spectre et trois finitions : Champagne, Black et Blue Glass.
- Une bibliothèque locale organisée par albums, artistes, compositeurs, genres et morceaux.
- Les radios internet et les serveurs DLNA / UPnP du réseau local.
- Un égaliseur paramétrique jusqu'à 20 filtres, avec profils AutoEq et Equalizer APO, et comparaison A/B à volume égal.
- Un mode **DIRECT** et un panneau **Audio Path** pour expliquer le trajet du signal. **Verify** compare les échantillons envoyés à Core Audio à ceux du fichier, dans les limites du moteur actuel.

Le voyant **BIT-PERFECT** n'est pas une décoration : il s'allume seulement quand les conditions contrôlées par le lecteur sont réunies. Cela ne garantit pas l'absence de traitement après Core Audio, notamment dans le DAC ou les enceintes. Les haut-parleurs intégrés du Mac ne permettent pas de revendiquer une sortie bit-perfect de bout en bout.

## Ce qu'il faut savoir avant de l'installer

C'est une **alpha 0.1.0-alpha.2**. Il y a encore des bugs, et je ne l'ai testée que sur peu de DAC. Le moteur repose sur AVAudioEngine en flottant 32 bits : les sources de plus de 24 bits sont actuellement arrondies à 24 bits, et le lecteur le signale. Il n'y a pas encore de DSD, de correction de pièce ni de streaming commercial. L'application n'est pas encore notarisée ; les étapes d'autorisation sur macOS sont documentées dans le README.

**Téléchargement :** [versions disponibles sur GitHub](https://github.com/dev-digitaldream/idiophile-one/releases). Pour signaler un bug ou me dire quel DAC vous utilisez, [les issues GitHub sont ouvertes](https://github.com/dev-digitaldream/idiophile-one/issues).

[J'ai raconté la naissance du lecteur, les vu-mètres vintage, les choix techniques et les limites de cette alpha dans le billet complet.](/blog/idiophile-one-lecteur-audiophile-vintage-mac/)
