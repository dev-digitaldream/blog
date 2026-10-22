---
title: "Idiophile One : j’ai créé mon lecteur audiophile gratuit pour Mac, façon hi-fi vintage"
description: "Une annonce d'ampli vintage, des vu-mètres à aiguilles et une envie de retrouver ce charme sur Mac : comment est né Idiophile One, mon lecteur audio gratuit et open source."
date: 2026-10-18
lang: fr
translation: "idiophile-one-vintage-mac-en"
draft: false
category: "blog"
tags: ["macOS", "audio", "audiophile", "hi-fi vintage", "open source", "IA"]
cover: "/uploads/idiophile-one/idiophile-one-blue-glass.webp"
sticker: best-of-the-best
stickerRotation: -14
stickerScale: 0.96
excerpt: "Je voulais retrouver les grandes aiguilles lumineuses des amplis d'autrefois, sans acheter une chaîne hi-fi. De cette nostalgie est né Idiophile One, un lecteur gratuit pour Mac qui prend aussi le chemin du signal audio très au sérieux."
metaTitle: "Idiophile One : lecteur audiophile vintage gratuit pour Mac"
metaDescription: "Pourquoi j’ai créé Idiophile One : vu-mètres vintage, DAC, bit-perfect vérifiable, égaliseur, radios et DLNA. Un lecteur Mac gratuit et open source, encore en alpha."
---

Je suis retombé récemment sur des annonces de vieux amplis hi-fi, de ces belles machines des années 70 et 80, à l'époque des Technics, Pioneer, Sansui et compagnie. Et là, petit moment de nostalgie : ces façades immenses, ces boutons, cet éclairage chaleureux et surtout ces magnifiques **vu-mètres à aiguilles**, larges et lumineux, qui dansaient au rythme de la musique. On avait presque l'impression de sentir les coups de batterie et les basses en regardant les aiguilles bouger. Ce n'était pas indispensable pour écouter un disque, évidemment, mais qu'est-ce que ça avait comme charme ! Aujourd'hui, on sait faire des appareils minuscules et techniquement impressionnants. Pourtant, il me manque parfois cette façon de *voir* la musique autant que de l'écouter.

L'idée d'acheter un ampli vintage m'a traversé l'esprit. Sauf que je n'ai pas la place, pas vraiment le temps de me lancer dans la restauration d'un appareil de plusieurs décennies et, pour tout dire, je n'écoute même plus beaucoup de musique. Ce serait dommage d'acheter un gros ampli simplement pour admirer ses aiguilles trois fois par an. Alors je me suis demandé : pourquoi ne pas recréer cette façade sur mon Mac ? Un lecteur virtuel, avec de beaux vu-mètres VU et PEAK, un analyseur de spectre et cette ambiance hi-fi d'une autre époque. Au départ, je voulais surtout retrouver cet objet qui me plaisait tant. Puis, forcément, le projet a commencé à prendre un peu d'ampleur.

Et c'est là qu'arrive **Idiophile One**. Avant que les audiophiles ne sortent les fourches, je leur dois peut-être une petite excuse pour le nom ! Je n'ai rien contre la recherche d'une bonne restitution sonore, bien au contraire. Mais il faut reconnaître qu'on voit parfois de belles conneries sur Internet : des câbles électriques à plusieurs milliers d'euros, des accessoires aux promesses extraordinaires ou encore de banals switches réseau Netgear présentés comme des produits audiophiles et revendus à des prix délirants. On finit par se demander si les électrons ont besoin d'une carte de membre pour bien circuler. Le nom **Idiophile** est un clin d'œil à ces excès, pas une attaque contre les passionnés de musique. Au contraire, j'avais envie de proposer quelque chose de **gratuit, open source et sans abonnement**, où les affirmations techniques peuvent être vérifiées plutôt que simplement affichées sur une jolie boîte.

Et puisque je suis un **vibe codeur**, pas un développeur professionnel, j'ai décidé de fabriquer ce lecteur avec l'aide de l'IA, comme mes autres petits projets. Mon cahier des charges de départ tenait presque en une phrase : un lecteur Mac qui ressemble à une belle chaîne hi-fi vintage. Sauf qu'en commençant à regarder sérieusement ce qui se passe entre un fichier musical et un convertisseur audio, autrement dit un DAC, je suis tombé sur tout un monde de formats, de fréquences d'échantillonnage, de traitements et de compromis. Le projet qui devait faire bouger quelques aiguilles est devenu un lecteur audio avec de vraies ambitions techniques. C'est tout moi : je pars pour bricoler une façade et je me retrouve à examiner le trajet des échantillons audio.


## De belles aiguilles, mais pas seulement

![Idiophile One en finition Blue Glass, avec un DAC USB Fiio et une lecture FLAC](/uploads/idiophile-one/rack-idle.webp)

Idiophile One reprend l'allure d'un lecteur réseau ou d'un ampli intégré, avec ses **vu-mètres VU et PEAK**, son analyseur de spectre et trois finitions : **Champagne, Black et Blue Glass (Mc..sh;)**. Je voulais une interface qui donne envie d'être regardée, sans faire passer le décor avant la musique. Il existe également un mini-lecteur qui, d'après les mesures du projet, utilise environ **2 % d'un cœur**. L'aide est disponible en français et en anglais.

Je ne cherchais pas à reproduire à l'identique une machine existante, ni à refaire toutes les fonctions d'un logiciel audiophile hors de prix. Je voulais retrouver une sensation, avec un outil que je pourrais réellement utiliser sur mon Mac. Et, quitte à faire un lecteur, autant qu'il sache expliquer ce qu'il fait au signal sonore.

![Les trois finitions d’Idiophile One : Champagne, Black et Blue Glass](/uploads/idiophile-one/idiophile-one-finishes.webp)

## Le fameux bit-perfect : autant pouvoir le vérifier

Le terme **bit-perfect** revient partout dans le monde audiophile. L'idée est simple : envoyer au DAC les échantillons audio sans les modifier. Mais entre un fichier et la sortie audio d'un ordinateur, il peut se passer beaucoup de choses. Idiophile One essaie donc de rendre ce trajet visible au lieu de se contenter d'allumer un voyant rassurant.

L'application adapte la fréquence de sortie à celle du fichier et sélectionne le format entier disponible le plus précis. Son mode **DIRECT** demande un accès exclusif à la sortie et écarte l'égaliseur ainsi que le ReplayGain du chemin audio. Le voyant **BIT-PERFECT** ne s'allume que lorsque les conditions prévues par le lecteur sont réunies ; sinon il reste éteint et indique pourquoi. Un écran **Audio Path** détaille les différentes étapes entre le fichier et le DAC, tandis que **Verify** compare les échantillons transmis à Core Audio à ceux du fichier. Le but est d'avoir des éléments concrets à examiner, pas de demander à l'utilisateur de croire une petite LED sur parole.

![Le détail du chemin audio dans Idiophile One](/uploads/idiophile-one/audio-path.webp)

Il y a tout de même une distinction importante : cette vérification porte sur le chemin audio contrôlé par l'application et les données transmises à Core Audio. Elle ne mesure pas ce qui sort physiquement d'un DAC. De même, les haut-parleurs intégrés du Mac appliquent leurs propres traitements et ne permettent pas de garantir un résultat bit-perfect de bout en bout. Pour cet usage, je recommande un **DAC USB externe**. Je préfère préciser ces limites plutôt que de vendre de la magie numérique, on en trouve déjà suffisamment ailleurs.

## Un égaliseur, et même de quoi comparer sans tricher avec le volume

Tout le monde n'a pas le même casque, les mêmes enceintes ni les mêmes goûts. J'ai donc prévu un **égaliseur paramétrique jusqu'à 20 filtres**, avec calcul en double précision, bypass exact et marge automatique. Les réglages sont associés à chaque sortie audio, ce qui évite de reprendre systématiquement les mêmes corrections lorsqu'on change de périphérique.

L'application peut aussi importer des profils **AutoEq** et **Equalizer APO**, depuis un fichier, par glisser-déposer ou depuis le presse-papiers, et propose des profils casque intégrés. Mais ce qui m'intéresse particulièrement, c'est la **comparaison A/B à volume égal pendant l'écoute**. Notre oreille a vite fait de préférer ce qui joue un peu plus fort. Là, l'idée est justement de limiter ce biais pour comparer les réglages dans des conditions plus équitables. Pas besoin d'un câble à 3 000 euros pour découvrir qu'on avait simplement monté le volume.

![L’éditeur d’égaliseur paramétrique et sa comparaison A/B](/uploads/idiophile-one/eq-editor.webp)

## La musique locale, les radios et les fichiers du NAS

![Le mini-lecteur Idiophile One avec commandes de lecture et vu-mètre minimaliste](/uploads/idiophile-one/compact.webp)

Un beau lecteur qui ne sait lire que trois fichiers sur le Bureau aurait tout de même un intérêt limité. Idiophile One dispose donc d'une **bibliothèque musicale** avec albums, artistes, compositeurs, genres, morceaux et recherche instantanée. J'ai aussi intégré les **radios internet** à partir de l'annuaire radio-browser.info : lorsqu'une station propose plusieurs flux, l'application sélectionne le meilleur selon le codec et le débit annoncés.

Il y a également la découverte automatique des serveurs **DLNA / UPnP**, pour retrouver notamment la musique hébergée sur un NAS sans devoir saisir toutes les adresses à la main. C'est une manière de réunir la bibliothèque locale, les stations radio et les fichiers du réseau dans la même interface. Les usages sont différents, mais je trouvais dommage de multiplier les logiciels pour retrouver de la musique qui, au fond, se trouve déjà chez soi.

![Les sources réseau et les radios dans Idiophile One](/uploads/idiophile-one/network.webp)

## C'est une alpha, pas un miracle audiophile

Je préfère être clair : **Idiophile One est encore en version 0.1.0-alpha.2**. Il y a des bugs possibles et je n'ai pas testé l'application avec une grande variété de DAC. Pour un premier essai, mieux vaut donc garder un volume raisonnable, surtout avec un amplificateur ou un casque sensible.

Le moteur audio actuel repose sur **AVAudioEngine en flottant 32 bits**. Cela signifie notamment que les sources entières au-delà de 24 bits ne conservent pas forcément leur précision d'origine ; l'application le signale. C'est précisément pour cela que je ne veux pas laisser croire que tout est bit-perfect en toutes circonstances. Il n'y a pas encore de **DSD**, ni de correction acoustique de pièce, ni d'intégration de services de streaming. L'application n'est pas encore notarisée non plus : macOS peut demander une autorisation manuelle lors du premier lancement, avec les étapes indiquées dans le README.

Je trouve plus utile d'afficher les limites actuelles que de prétendre avoir créé, entre deux discussions avec une IA, le lecteur parfait que toute l'industrie attendait. Les aiguilles peuvent être jolies, elles ne corrigent pas les bugs.

## Ce que j'aimerais améliorer ensuite

La prochaine grosse étape serait un **moteur Core Audio dédié**, avec un chemin en nombres entiers, la prise en charge des sources 32 bits et une lecture gapless exacte. J'aimerais également créer une **version iPad**, notamment pour utiliser un DAC USB-C, puis avancer sur le DSD et la correction de pièce. Ce sont des objectifs, pas des fonctions déjà disponibles.

Pour les services de streaming, **Qobuz** et **Tidal** m'intéressent, mais uniquement par leurs programmes et interfaces officiels, et sous réserve de leur accord. Je ne prévois pas d'intégration de **Deezer, Spotify ou Apple Music** tant que ces services ne donnent pas aux applications tierces l'accès au signal audio nécessaire à ce type de lecteur. Inutile de promettre ce que les plateformes ne permettent pas.

## Gratuit, open source, et encore beaucoup à apprendre

Idiophile One est disponible gratuitement, avec son code source publié sous licence **GPL-3.0 ou ultérieure**. Il fonctionne à partir de **macOS 14**, sur les Mac **Apple Silicon et Intel**. Pour l'instant, il reste un projet en alpha, né d'une envie un peu nostalgique et devenu bien plus ambitieux que prévu. Je n'ai pas la prétention d'avoir révolutionné l'audio sur Mac, et je sais qu'il faudra encore du travail et de vrais retours d'utilisateurs pour savoir où il tient la route et où il faut le corriger.

Le programme et son code source sont disponibles sur [GitHub](https://github.com/dev-digitaldream/idiophile-one), avec les [versions à télécharger](https://github.com/dev-digitaldream/idiophile-one/releases) et un espace pour [signaler les bugs](https://github.com/dev-digitaldream/idiophile-one/issues). Les retours sur les DAC utilisés seront particulièrement utiles, puisque je n'ai pas de collection de convertisseurs à disposition pour tout tester.

Au départ, je regardais simplement des annonces d'amplis vintage et leurs grandes aiguilles lumineuses. Maintenant, j'ai un lecteur à moi, avec trois finitions, un chemin audio à examiner et une liste de fonctions futures qui s'allonge déjà. Je n'ai toujours pas plus de place pour installer une chaîne hi-fi de quinze kilos, mais au moins les vu-mètres peuvent danser sur mon écran. Et ça, c'est déjà une petite victoire.
