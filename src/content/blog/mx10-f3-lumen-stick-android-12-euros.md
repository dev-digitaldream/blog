---
title: "MX10-F3 : j’ai transformé un stick Android à 12 € en media center propre avec Lumen"
description: "Mon MX10-F3 à base d’Allwinner H313 était un dongle IPTV bridé, rooté et verrouillé en 720p. Sauvegarde FEL, nettoyage, 1080p, OwnTV et création de mon launcher Lumen."
date: 2026-10-22
lang: fr
translation: "mx10-f3-lumen-android-stick-travel-media-center"
draft: false
category: "blog"
tags: ["Android TV", "Allwinner", "H313", "Lumen", "ADB", "FEL", "OwnTV", "IA", "voyage"]
cover: "/uploads/mx10-f3-lumen/01-lumen-paysage.webp"
excerpt: "J’avais acheté ce MX10-F3 environ 12 € pour les TV d’hôtel et d’Airbnb. Derrière son firmware IPTV bricolé, j’ai trouvé un H313 capable, un accès root, un mode FEL et suffisamment de marge pour en faire un dongle de voyage propre avec mon interface Lumen."
metaTitle: "MX10-F3 H313 : de dongle IPTV à media center Lumen"
metaDescription: "Retour complet sur mon MX10-F3 Allwinner H313 : accès ADB/FEL, sauvegarde eMMC, débloat, 1080p, Widevine L3, OwnTV et création du launcher Lumen."
---

Quand je voyage, que ce soit dans un hôtel ou un Airbnb, j’aime bien retrouver mes propres applications sur la télévision de la chambre. Les interfaces d’hôtel sont souvent verrouillées, les applications manquent, et certaines télécommandes donnent l’impression d’avoir été dessinées après une longue réunion consacrée à la souffrance humaine. J’ai donc pris l’habitude d’emporter un petit stick Android HDMI dans mon sac.

Le mien est un **MX10-F3**, acheté autour de **12 €** à l’époque. Oui, douze euros. Je l’ai retrouvé récemment autour de 30 € sur AliExpress selon les promotions, donc même les fonds de tiroirs de l’électronique chinoise semblent avoir découvert l’inflation. À 12 €, je pouvais pardonner beaucoup de choses. À presque 30 €, je commencerais déjà à regarder les alternatives avant de commander.

Et il faut en pardonner, des choses.

Sur le papier, c’est un petit dongle Android basé sur un **Allwinner H313**. En pratique, l’exemplaire que j’ai reçu ressemblait davantage à un terminal IPTV préparé pour un usage bien précis qu’à un véritable appareil Android TV généraliste. Très peu d’applications, des propriétés système fantaisistes, une interface bloquée en 720p et une expérience pensée pour lancer rapidement quelques services déjà installés plutôt que pour laisser l’utilisateur faire ce qu’il veut.

Mon but n’était pourtant pas compliqué : brancher le stick derrière une télévision, me connecter au Wi-Fi de l’hôtel, lancer YouTube, VLC, mes services de streaming ou mes propres sources légales, puis ranger le tout dans le sac au moment de repartir. Je voulais quelque chose de simple et réactif, pas un projet de rétro-ingénierie.

Évidemment, c’est devenu un projet de rétro-ingénierie.

## Avant de modifier quoi que ce soit : ouvrir et comprendre

La première bonne surprise est arrivée en ouvrant le boîtier.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/mx10-f3-pcb.webp" alt="Carte électronique du MX10-F3 avec le SoC Allwinner H313 et la mémoire Samsung KMR8X0001M-B608" width="1024" height="768" loading="lazy" decoding="async" />
  <figcaption>Le MX10-F3 ouvert : Allwinner H313 à gauche, eMCP Samsung KMR8X0001M-B608 à droite.</figcaption>
</figure>

Le SoC est bien un **Allwinner H313**, un quad-core Cortex-A53 64 bits avec GPU Mali-G31. Allwinner annonce pour cette puce le décodage H.265 jusqu’en 4K60 et une sortie HDMI pouvant aller jusqu’en 4K60. Le problème de mon stick n’était donc pas simplement « le processeur est trop faible ». Le matériel dispose de capacités vidéo correctes pour ce type d’usage.

La deuxième puce visible sur ma carte est une **Samsung KMR8X0001M-B608**. Sa documentation correspond à un eMCP combinant **16 Go d’eMMC et 2 Go de LPDDR3**. C’est intéressant, parce que les informations remontées par ces appareils et les fiches vendeurs sont parfois assez créatives. Au moins, ici, la référence imprimée directement sur le composant donne une base plus sérieuse.

Avant d’aller plus loin, j’ai appliqué une règle que je conseille vraiment sur ce genre de matériel : **ne rien flasher et ne rien supprimer avant d’avoir une sauvegarde exploitable**. Sur une clé à 12 €, la tentation est grande de se dire qu’on peut tout casser. Le problème est surtout qu’un firmware exotique peut être beaucoup plus difficile à retrouver que douze euros.

## Trouver une vraie porte d’entrée

Au départ, tout donnait l’impression que le dongle avait été conçu pour décourager la bidouille. Le port USB semblait ne servir qu’à l’alimentation, le shell ADB paraissait limité et le mode **FEL**, le mode de récupération bas niveau des SoC Allwinner, n’était pas immédiatement accessible.

J’ai perdu un peu de temps sur de fausses pistes, notamment avec un mauvais périphérique USB identifié côté PC. Puis j’ai fini par constater deux choses très intéressantes sur mon exemplaire : **ADB par USB fonctionnait**, et l’appareil était déjà **rooté**.

Pour le mode FEL, l’outil qui m’a réellement débloqué la situation est **[Tenkai ROM Studio](https://xdaforums.com/t/tool-windows-v0-3-0-tenkai-rom-studio-universal-allwinner-firmware-suite-imagewty-rom-builder-magisk-root-patcher-unbrick-flasher.4799388/#post-90709062)**, découvert sur XDA. Merci à son développeur : dans mon cas, il m’a permis de sortir des bricolages à moitié documentés et d’obtenir enfin un accès bas niveau propre au stick. Une fois le MX10-F3 en FEL, il apparaît comme périphérique Allwinner avec le VID USB **1F3A**.

Je ne transforme volontairement pas cette partie en recette « cliquez ici, court-circuitez ça, flashez ceci ». Il existe plusieurs révisions de ces dongles sous des noms commerciaux très proches, parfois avec des cartes différentes. Une manipulation valable sur mon MX10-F3 peut parfaitement transformer un autre modèle en presse-papier HDMI.

## Dix-sept partitions avant le premier vrai changement

Une fois l’accès obtenu, j’ai commencé par sauvegarder.

J’ai extrait **les 17 partitions de l’eMMC**, pour environ **11,3 Go de données**, puis vérifié les dumps avec des sommes MD5. Avec la référence Samsung de 16 Go identifiée sur la carte, cette taille devient cohérente. Surtout, j’avais enfin un filet de sécurité : si une modification tournait mal, je pouvais revenir au contenu d’origine au lieu de chercher un firmware douteux sur un forum abandonné depuis trois ans.

C’est probablement l’étape la moins spectaculaire de tout le projet. C’est aussi celle que je referais en premier si je devais recommencer.

## Le firmware d’origine : Android, mais pas vraiment Android TV

Une fois le système inspecté, le côté « appareil préparé » devenait évident. Mon exemplaire contenait une quantité ridiculement faible d’applications système par rapport à une installation Android TV classique et certaines propriétés étaient falsifiées, jusqu’à se présenter comme un **Pixel 2**.

L’interface, elle, restait verrouillée en **720p**.

Ce qui est amusant, c’est que le H313 sait techniquement faire beaucoup mieux. Le problème se situait donc dans la pile logicielle, les réglages et le firmware fourni avec le dongle. J’ai forcé une sortie **1920 × 1080**, ajusté la densité à **280 dpi** et repris quelques paramètres d’affichage. Pour mon usage, le 1080p stable est devenu le meilleur compromis.

J’ai également testé le 4K. Le kernel et la sortie HDMI peuvent réellement aller jusque-là, ce qui colle avec les spécifications du H313, mais la couche Android de ce firmware reste suffisamment bricolée pour que je préfère largement un 1080p propre et prévisible à une case « 4K » cochée pour le plaisir de la fiche technique.

## Nettoyer le grenier avant de refaire le salon

Le débloat a commencé par les applications installées par le vendeur. J’ai retiré une douzaine d’applications IPTV ou vendor dont je n’avais aucune utilité : lecteurs préinstallés, stores douteux et composants présentés comme des outils de firmware.

Tout cela a été fait après sauvegarde, et de manière à pouvoir revenir en arrière.

Pour vérifier rapidement ce que le matériel pouvait donner avec une interface plus légère, j’ai d’abord testé **FLauncher**. À titre indicatif, sur mon appareil, le launcher lourd que j’avais testé autour de l’écosystème Google TV pouvait occuper environ **365 Mo de RAM**, là où FLauncher tournait autour de **50 Mo**. Sur une machine avec seulement 2 Go, la différence se ressent immédiatement.

Cela m’a surtout confirmé une chose : le H313 n’était pas le principal problème. Il fallait arrêter de lui demander de faire tourner une interface pensée comme si la RAM était gratuite.

## Puis j’ai décidé de fabriquer Lumen

J’avais commencé à alléger et repenser l’expérience de ce stick avant la vague actuelle d’interfaces TV minimalistes qu’on voit fleurir un peu partout. Plus tard, je suis tombé sur **[FreeMyTV](https://freemytv.io/)**. J’aime beaucoup son idée de départ : remettre les applications au centre, enlever la publicité et alléger radicalement l’écran d’accueil. Le projet m’a clairement inspiré sur certains principes.

Mais il ne correspondait pas exactement à mon besoin.

FreeMyTV vise avant tout des Google TV et Android TV existants, sans root, avec une approche réversible centrée sur le remplacement du launcher. Moi, je travaillais sur un petit dongle chinois déjà rooté, très bricolé, avec une télécommande basique et un cas d’usage précis : **la télévision d’un hôtel ou d’un Airbnb**.

Alors j’ai fait ce que je fais de plus en plus souvent : au lieu de continuer à adapter l’outil de quelqu’un d’autre, j’ai commencé le mien.

**Lumen** est mon propre launcher. Ce n’est pas un fork de FreeMyTV et ce n’est pas un thème posé sur FLauncher. J’ai utilisé **GLM 5.3** et **Astra 6** comme partenaires de développement pour accélérer les essais, corriger les comportements avec la télécommande et construire l’interface que j’avais en tête.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/01-lumen-paysage.webp" alt="Accueil Lumen sur MX10-F3 avec YouTube, OwnTV, Apple TV, Prime Video, Netflix et VLC devant un paysage de plage" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Lumen aujourd’hui : peu de choses à l’écran, de grosses cibles pour la télécommande et les applications que j’utilise réellement.</figcaption>
</figure>

Je voulais de gros éléments lisibles à plusieurs mètres, un focus évident, une météo et une horloge discrètes, et surtout aucune rangée publicitaire qui décide à ma place de ce que je devrais regarder.

Les paysages peuvent tourner automatiquement. Dans mes réglages actuels, la rotation peut être configurée et le cache évite de recharger les mêmes données en permanence. Je peux aussi choisir les applications visibles sur l’accueil et modifier leur ordre directement à la télécommande.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/04-reglages-lumen.webp" alt="Écran des réglages de Lumen sur le MX10-F3" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Les réglages de Lumen : fond, affiches, actualisation, rotation des paysages, horloge et autres options restent accessibles à la télécommande.</figcaption>
</figure>

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/05-choix-applications.webp" alt="Écran permettant de choisir et réordonner les applications de l’accueil Lumen" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Le choix et l’ordre des applications de l’accueil se font directement dans Lumen.</figcaption>
</figure>

Je voulais également pouvoir donner un peu de vie à l’accueil sans retomber dans le panneau publicitaire géant. Lumen peut donc afficher une mise en avant visuelle en arrière-plan, tout en conservant les applications à portée de télécommande.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/03-lumen-series.webp" alt="Lumen avec une série mise en avant en arrière-plan et les applications de streaming en dessous" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Une mise en avant visuelle, mais les applications restent le cœur de l’écran.</figcaption>
</figure>

## Remplacer les applications IPTV sans pousser au piratage

Le firmware d’origine avait clairement été préparé autour d’applications IPTV. Ce n’était pas ce que je voulais conserver.

J’ai notamment remplacé ces applications par **[OwnTV](https://github.com/ahXN00/OwnTV)**, un lecteur Android TV open source qui fonctionne avec des sources M3U, Xtream ou Stalker que l’utilisateur fournit lui-même. Je remercie aussi son développeur pour le travail effectué : l’application est moderne, pensée pour la télécommande et beaucoup plus cohérente avec ce que je voulais sur ce dongle.

Important : **OwnTV ne fournit aucune chaîne, aucun abonnement et aucun flux**. Le projet le précise lui-même. On peut trouver sur GitHub des flux publics et légaux, ou utiliser ses propres sources auxquelles on a légitimement accès, mais le but de cet article n’est certainement pas de transformer une clé à 12 € en machine à pirater la télévision. J’utilise OwnTV comme lecteur, avec des sources que j’ai le droit de consulter.

C’est une nuance importante. Remplacer des applications obscures préinstallées par un lecteur open source ne rend pas magiquement n’importe quelle playlist légale.

## Les limites que Lumen ne peut pas corriger

Il y a un moment où le vibe coding s’arrête et où les clés cryptographiques commencent.

Mon MX10-F3 est limité à **Widevine L3**. Ce niveau de DRM est suffisant pour faire fonctionner certains services, mais il ne possède pas les certifications matérielles nécessaires à tous les usages HD protégés. Dans mes tests, **Netflix reste limité à 480p**, quelles que soient les capacités théoriques du H313 ou la résolution de l’interface.

Et non, ni Astra, ni GLM, ni une nuit complète avec ADB ne vont transformer une certification Widevine L3 en L1. C’est justement le genre de limite qu’il vaut mieux connaître avant d’acheter.

La situation est donc assez amusante : le SoC sait décoder de la vidéo 4K, ma sortie HDMI peut fonctionner bien au-delà de 480p, l’interface Lumen est en 1080p, mais un service comme Netflix peut tout de même décider que la vidéo restera en définition standard parce que la chaîne de confiance DRM n’est pas certifiée.

C’est probablement la meilleure illustration de la différence entre **capacité matérielle** et **produit certifié**.

## Est-ce que je conseillerais encore le MX10-F3 aujourd’hui ?

À **12 €**, oui, si vous aimez bricoler.

À ce prix, j’ai eu un petit H313, 2 Go de RAM, 16 Go d’eMMC sur mon exemplaire, du Wi-Fi, une sortie HDMI et suffisamment de marge pour créer exactement l’appareil de voyage que je voulais. Rien que l’expérimentation valait le prix.

Autour de **30 €**, je serais beaucoup plus prudent.

Il faut acheter ce genre de dongle en sachant que le nom commercial ne garantit pas toujours la carte qui arrivera dans le colis, que les informations Android peuvent être falsifiées, que les certifications DRM sont limitées et qu’un firmware exotique peut rendre la récupération pénible. Si le but est simplement de regarder Netflix en bonne qualité dans un hôtel, il existe des appareils certifiés bien plus raisonnables.

En revanche, pour quelqu’un qui aime démonter, sauvegarder, comprendre et adapter son matériel, le MX10-F3 reste un objet amusant. L’Allwinner H313 est beaucoup plus capable que l’expérience d’origine ne le laisse penser.

## Ce que cette clé m’a surtout appris

Au départ, je voulais seulement un petit appareil à laisser dans mon sac de voyage.

Je me suis retrouvé à identifier des composants sur un PCB, entrer en FEL, sauvegarder dix-sept partitions, nettoyer un firmware IPTV, tester les limites de Widevine et développer mon propre launcher TV avec l’aide de plusieurs IA.

Le plus intéressant n’est finalement pas d’avoir « rendu rapide un dongle chinois ». C’est d’avoir séparé ce qui relevait réellement du matériel de ce qui relevait d’un mauvais logiciel.

Le H313 n’est pas devenu plus rapide. Les 2 Go de RAM n’ont pas doublé pendant la nuit. Netflix est toujours en L3. Mais en retirant ce qui n’avait rien à faire là, en passant au 1080p stable et en construisant une interface adaptée aux ressources disponibles, le même matériel est devenu **beaucoup plus agréable à utiliser**.

Et surtout, Lumen correspond maintenant à mon usage : j’arrive dans un hôtel, je branche la clé, je retrouve mes applications et je ne passe pas vingt minutes à me battre avec la Smart TV de quelqu’un d’autre.

Pour une chinoiserie payée douze euros, je trouve qu’elle s’en sort plutôt bien.
