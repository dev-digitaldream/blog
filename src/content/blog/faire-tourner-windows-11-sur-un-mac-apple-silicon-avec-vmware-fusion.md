---
title: "Faire tourner Windows 11 sur un Mac Apple Silicon avec VMware Fusion"
description: "Retour concret sur Windows 11 ARM avec VMware Fusion 26H1 : installation, compatibilité, limites et comparaison avec UTM et Parallels."
date: "2026-01-11"
updated: 2026-09-13
updateNote: "Le guide a été actualisé pour VMware Fusion 26H1. Les limites de Windows ARM, des dossiers partagés et de la virtualisation imbriquée sont maintenant précisées."
category: "blog"
tags: ["vmware", "windows-11", "apple-silicon", "virtualisation", "mac"]
excerpt: ""
metaTitle: "Windows 11 ARM sur Mac avec VMware Fusion 26H1"
metaDescription: "Installer Windows 11 ARM sur un Mac Apple Silicon avec VMware Fusion 26H1 gratuit : licence, compatibilité, performances et limites réelles."
cover: "/blog/faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion/vmware.webp"
lang: fr
translation: running-windows-11-on-apple-silicon-mac-vmware-fusion
---

*Quand un vieux monde du logiciel d’entreprise fait encore une surprise*

VMware fait partie de ces noms que j’associe aux salles serveurs, aux environnements critiques et aux licences difficiles à suivre. Après le rachat par Broadcom, les changements commerciaux autour des produits d’entreprise ont renforcé cette image.

Au milieu de ce bruit, Fusion a pourtant pris la direction inverse. Depuis novembre 2024, VMware Fusion Pro est gratuit pour les usages personnels, éducatifs et commerciaux. La version actuelle, Fusion 26H1, conserve ce modèle.

Cela en fait une option sérieuse pour lancer Windows 11 sur un Mac Apple Silicon, à condition de comprendre ce que « Windows sur ARM » implique réellement.

## Pourquoi garder Windows sur un Mac

Le besoin est rarement idéologique. Il peut venir d’un logiciel métier disponible uniquement sous Windows, d’un outil d’administration jamais porté sur macOS ou d’un environnement de test qu’il serait inutile d’installer sur une seconde machine.

Sur les Mac Intel, Boot Camp permettait de démarrer directement sous Windows. Apple Silicon utilise une architecture ARM différente. Fusion ne traduit pas un système d’exploitation x86 complet : il virtualise un système conçu pour la même architecture que le Mac. Sur ces machines, il faut donc installer **Windows 11 ARM64**.

Windows 11 ARM peut ensuite exécuter de nombreuses applications x86 et x64 grâce à sa propre couche d’émulation. Cette compatibilité concerne les applications, pas les systèmes d’exploitation ni tous les pilotes.

## Fusion est gratuit, Windows ne l’est pas

L’[annonce de VMware](https://blogs.vmware.com/cloud-foundation/2024/11/11/vmware-fusion-and-workstation-are-now-free-for-all-users/) confirme que Fusion Pro est gratuit pour tous les utilisateurs et que les fonctions de l’ancienne version payante restent présentes. Le support repose principalement sur la documentation et la communauté lorsqu’aucun contrat de support antérieur n’est encore actif.

Le téléchargement passe toujours par un compte gratuit sur le portail Broadcom. Depuis 25H2, VMware utilise une numérotation calendaire. [Fusion 26H1](https://blogs.vmware.com/cloud-foundation/2026/05/14/announcing-vmware-workstation-and-fusion-26h1/) est la version publiée au premier semestre 2026.

La gratuité de l’hyperviseur ne couvre pas Windows. Microsoft demande une licence distincte pour chaque instance de Windows 11 Pro, y compris dans une machine virtuelle. Une clé Windows 11 Pro peut activer l’édition ARM comme l’édition x64.

## Installer Windows 11 ARM

Fusion propose une fonction **Get Windows from Microsoft** qui télécharge la bonne image ARM64. Cette méthode évite de récupérer par erreur un ISO x86 incompatible.

La création de la machine reste classique : choix des ressources, création du disque virtuel et démarrage de l’installation. Windows 11 demande un TPM 2.0. Fusion fournit un TPM virtuel, ce qui nécessite le chiffrement de la machine virtuelle. Il faut conserver le mot de passe associé avec les sauvegardes de la VM.

Après l’installation, VMware Tools apporte les pilotes et une meilleure intégration. Sur Apple Silicon, cette intégration n’est toutefois pas identique à celle connue autrefois sur les Mac Intel.

## Ce qui fonctionne bien

Pour la bureautique, les outils d’administration, les navigateurs, les applications métier classiques et de nombreux logiciels x86 ou x64, Windows 11 ARM est devenu parfaitement exploitable. Fusion prend en charge les snapshots, le réseau virtuel, l’USB et l’accélération DirectX 11 dans les versions récentes.

L’ensemble convient bien à un environnement isolé que l’on ouvre pour une tâche précise. Les snapshots permettent de revenir rapidement en arrière après un test ou une mise à jour risquée.

L’émulation des applications x86 et x64 a néanmoins un coût. Une application ARM64 native reste préférable lorsqu’elle existe, surtout pour les charges lourdes.

## Les limites à connaître avant de commencer

La [documentation de compatibilité de VMware](https://knowledge.broadcom.com/external/article/315609) évite plusieurs mauvaises surprises :

- un Mac Apple Silicon ne peut pas lancer une machine virtuelle Windows x86, Windows XP ou Windows 7 avec Fusion ;
- les dossiers partagés Fusion ne sont pas pris en charge pour un invité Windows ARM ;
- Unity Mode n’est pas disponible ;
- les pilotes de périphériques Windows doivent exister en ARM64 ;
- la virtualisation imbriquée n’est pas prise en charge.

Cette dernière limite désactive notamment WSL2, Windows Sandbox et certaines fonctions reposant sur Hyper-V ou VBS. Pour du développement Linux dans Windows, ce point peut suffire à écarter Fusion sur Apple Silicon.

Les jeux et logiciels utilisant des pilotes anti-triche, des pilotes noyau ou des fonctions graphiques récentes doivent aussi être vérifiés au cas par cas. « La majorité des applications fonctionne » ne signifie pas que tout logiciel Windows devient compatible.

## UTM pour préserver une ancienne machine

UTM répond à un autre besoin dans mon travail. Je l’utilise pour conserver une ancienne machine Windows XP clonée depuis une station arrivée en fin de vie. Elle contient des logiciels aujourd’hui difficiles à retrouver qui assurent encore la communication entre des équipements anciens et un système de monitoring plus récent.

Réécrire ces logiciels n’aurait pas de sens. Ils sont stables, remplissent leur rôle et les machines pilotées approchent elles-mêmes de leur fin de vie. La solution la plus pragmatique a été de virtualiser l’existant et de rendre cette machine sauvegardable et portable.

UTM peut émuler une autre architecture avec QEMU, ce que Fusion ne fait pas sur Apple Silicon. Cette souplesse se paie en performances et en intégration, mais elle reste précieuse pour préserver un vieux système.

## Parallels reste plus intégré

Parallels offre une installation plus guidée et une intégration macOS plus poussée. Cette finition compte lorsqu’une machine Windows accompagne toute la journée de travail. Le produit reste commercial et généralement vendu par abonnement.

Fusion paraît plus austère, mais il couvre gratuitement beaucoup de besoins professionnels ponctuels. Le choix dépend surtout du niveau d’intégration attendu et des fonctions ARM indispensables, pas seulement du prix.

## Un bon outil, dans un cadre précis

VMware Fusion 26H1 permet bien de faire tourner Windows 11 ARM gratuitement sur un Mac Apple Silicon. Il s’agit d’un hyperviseur mature, toujours maintenu et utilisable également dans un contexte commercial.

Il faut ajouter le prix éventuel de la licence Windows et vérifier les dépendances critiques avant de migrer un poste de travail : architecture des applications, pilotes, USB, WSL2, Sandbox et dossiers partagés.

Pour ouvrir un logiciel métier, maintenir un environnement de test ou effectuer une intervention ponctuelle, le compromis reste très convaincant. Fusion n’efface pas les limites de Windows ARM. Il leur donne simplement un cadre stable et compréhensible.
