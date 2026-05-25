---
title: "Faire tourner Windows 11 sur un Mac Apple Silicon avec VMware Fusion"
description: "Guide complet pour installer et utiliser Windows 11 ARM sur un Mac Apple Silicon avec VMware Fusion Pro gratuit. Comparaison avec Parallels et UTM, performances, limites et cas d’usage réels."
date: "2026-01-11"
category: "blog"
tags: []
excerpt: ""
metaTitle: "Faire tourner Windows 11 sur un Mac Apple Silicon avec VMware Fusion"
metaDescription: "Guide complet pour installer et utiliser Windows 11 ARM sur un Mac Apple Silicon avec VMware Fusion Pro gratuit. Comparaison avec Parallels et UTM, performances, limites et cas d’usage réels."
cover: ""
lang: fr
---

*Quand un vieux monde du logiciel d’entreprise fait encore une surprise*

Il y a des noms qui traînent depuis longtemps dans l’informatique, parfois un peu poussiéreux, parfois rassurants. VMware fait clairement partie de ceux-là. Pendant des années, c’était l’outil sérieux, solide, un peu austère, qu’on associait aux salles serveurs, aux environnements critiques et aux licences hors de prix. Un logiciel qu’on respectait, sans forcément l’aimer.

Puis Broadcom a racheté VMware, et là, tout a commencé à grincer. Des licences qui disparaissent, des abonnements imposés, des clients historiques un peu perdus. Le genre de feuilleton qui donne surtout envie de regarder ailleurs et de tourner la page sans trop se retourner.

Et pourtant, au milieu de ce bruit, une décision presque contre intuitive est tombée fin 2024. **VMware Fusion Pro devient gratuit.** Gratuit, vraiment. Pas une version bridée, pas un mode démo, pas un essai limité dans le temps, mais un vrai hyperviseur complet, utilisable sur macOS, y compris sur les Mac Apple Silicon, pour faire tourner Windows 11.

Et ça mérite qu’on s’y attarde calmement.

---

## Pourquoi vouloir Windows sur un Mac ARM

La question revient souvent, et elle est rarement idéologique. Dans la plupart des cas, elle est très concrète. Il y a le logiciel métier qui n’existe que sous Windows, l’outil d’administration jamais porté ailleurs, le programme interne ancien qu’on n’a ni le temps ni l’envie de réécrire, ou simplement le besoin de tester un environnement Windows sans acheter un PC supplémentaire.

Sur les Mac Intel, la question ne se posait pas vraiment. Boot Camp ou la virtualisation classique faisaient le travail. Avec Apple Silicon, on est passé sur une autre architecture, ARM, la même famille que celle des smartphones. Windows existe bien en version ARM, mais tout l’écosystème a dû s’adapter.

Aujourd’hui, ça fonctionne. Pas parfaitement, pas magiquement, mais suffisamment bien pour beaucoup d’usages réels.


## VMware Fusion, c’est quoi exactement

VMware Fusion est un **hyperviseur**, c’est à dire un logiciel qui permet de faire tourner un ordinateur dans un autre ordinateur. Ton Mac continue de fonctionner normalement, macOS reste maître à bord, et Fusion crée une machine virtuelle avec son propre processeur, sa mémoire, son disque et sa carte graphique simulée. Windows croit être installé sur un vrai PC, alors qu’il partage en réalité les ressources de la machine hôte.

C’est un principe ancien et éprouvé, largement utilisé dans les entreprises, les laboratoires et les environnements de test. VMware fait ça depuis longtemps, et plutôt bien. Sur Mac Apple Silicon, Fusion s’appuie sur l’hyperviseur natif d’Apple, ce qui évite toute émulation lente ou bricolée. On est sur de la virtualisation propre, stable et prévisible.



## La surprise Broadcom : Fusion Pro gratuit

C’est là que l’histoire devient réellement intéressante. Depuis novembre 2024, **VMware Fusion Pro est téléchargeable gratuitement**, sans différence fonctionnelle avec ce qui était auparavant payant. Les limitations ne sont pas techniques, mais administratives.

Concrètement, on peut créer autant de machines virtuelles que nécessaire, allouer librement CPU et mémoire, activer l’accélération graphique, utiliser des snapshots, partager des dossiers entre macOS et Windows et brancher des périphériques USB. Bref, tout ce qui fait un hyperviseur sérieux est bien présent.

La contrepartie concerne surtout le support. Il n’y a pas de hotline dédiée ni de tickets prioritaires, et on s’appuie sur la documentation et les forums communautaires. Pour un usage personnel, éducatif ou de test, ce n’est généralement pas un problème. Il faut simplement accepter qu’un compte Broadcom soit requis pour télécharger Fusion, ce qui n’est pas très élégant, mais une fois le logiciel installé, il sait se faire discret.

![vmware](https://alaoui.be/grav/blog/faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion/vmware.webp "vmware")



## Installer Windows 11, ce qui change vraiment

Windows 11 a introduit des exigences supplémentaires, notamment en matière de sécurité, avec des notions comme le TPM, le Secure Boot ou le chiffrement. Sur le papier, cela peut paraître contraignant, mais dans les faits, c’est surtout un cadre à respecter.

Dans VMware Fusion, cela se traduit par quelques étapes supplémentaires lors de la création de la machine virtuelle. Il faut activer le chiffrement afin de pouvoir ajouter un module TPM virtuel. Ce n’est pas compliqué, mais ce n’est pas non plus un simple enchaînement de clics.

Une fois cette étape passée, Windows 11 ARM s’installe normalement. Et c’est souvent là que la surprise arrive. **La majorité des logiciels Windows classiques fonctionnent.** Microsoft fournit une couche de traduction pour les applications x86, un peu à la manière de Rosetta sur macOS. Ce n’est pas parfait, mais pour beaucoup d’outils professionnels, c’est largement suffisant.



## À l’usage, ce que ça vaut vraiment

Soyons honnêtes, VMware Fusion n’essaie pas d’être magique. L’interface est sobre, parfois un peu sèche, et on ne cherche pas à faire oublier qu’on est dans une machine virtuelle. Windows reste dans sa fenêtre, avec ses réglages, ses limites et son environnement bien distinct.

Mais en échange, on gagne en prévisibilité. Les performances sont stables, les snapshots fiables, et les réglages explicites. C’est typiquement le genre d’outil qu’on lance pour un besoin précis, qu’il s’agisse d’ouvrir un logiciel métier, de maintenir un environnement de test ou de faire une opération ponctuelle, puis qu’on referme sans y penser davantage.

C’est un peu comme un bon tournevis. Pas spectaculaire, mais toujours là quand il faut.



## Et UTM dans tout ça

Impossible de parler de virtualisation sur Mac Apple Silicon sans mentionner **UTM**. UTM est une solution open source, très appréciée dans la communauté macOS, notamment parce qu’elle est simple à installer et repose sur les technologies natives d’Apple.

Dans mon cas, UTM me rend un service très concret. Je l’utilise pour faire tourner une ancienne machine Windows XP, clonée depuis une station de travail en fin de vie. Cette machine embarque des logiciels aujourd’hui introuvables, mais qui assurent encore la communication entre des équipements anciens et un système de monitoring plus récent.

Réécrire ces logiciels n’aurait aucun sens. Ils sont stables, ils font exactement ce qu’on leur demande, et les machines qu’ils pilotent arrivent elles aussi en fin de vie. La solution la plus pragmatique a donc été de virtualiser l’existant tel quel, de cloner le Windows XP d’origine et de le faire tourner sur mon Mac via UTM.

Ce n’est pas parfait. L’intégration est limitée, les performances ne sont pas spectaculaires et on sent clairement l’âge du système. Mais ça fonctionne, et surtout, le système reste disponible, sauvegardable et portable, sans dépendre d’une vieille machine physique qui finira forcément par tomber en panne.

Dans ce genre de situation, UTM n’est pas un outil moderne ou élégant. C’est un outil pragmatique, presque utilitaire, et parfois, c’est exactement ce dont on a besoin.



## Et face à Parallels

La comparaison avec Parallels est inévitable. Parallels est plus simple à prendre en main, plus soigné visuellement et plus orienté grand public. L’intégration avec macOS est impressionnante, parfois au point de faire oublier qu’on utilise Windows.

Mais Parallels est payant, par abonnement, et clairement positionné comme un produit commercial. VMware Fusion, lui, ressemble davantage à un outil d’ingénieur mis à disposition. Moins flatteur, plus brut, mais désormais gratuit. Pour quelqu’un qui accepte de comprendre un minimum ce qu’il fait, c’est un compromis très honnête.



## Un outil gratuit, pour combien de temps

C’est sans doute la vraie question. Broadcom a montré qu’il pouvait changer brutalement de stratégie, et rien ne garantit que cette gratuité durera éternellement. Mais aujourd’hui, le logiciel est là, complet, fonctionnel et utilisable sans carte bancaire.

Pour un usage personnel, éducatif, ou simplement pour éviter de dépendre d’un abonnement de plus, c’est difficile de ne pas y voir une opportunité.



## En guise de fin

VMware Fusion n’est pas redevenu cool, et il n’a pas changé de personnalité.
Mais il est redevenu **accessible**.

Faire tourner Windows 11 sur un Mac Apple Silicon, sans payer, sans bidouille douteuse, avec un outil mature et éprouvé, c’est désormais possible. Ce n’est pas parfait, ce n’est pas magique, mais c’est suffisamment solide pour répondre à beaucoup de besoins réels.

Et parfois, dans le numérique, c’est exactement ce qu’on attend d’un outil.
