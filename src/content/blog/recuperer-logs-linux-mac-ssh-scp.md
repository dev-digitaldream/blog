---
title: "Récupérer un fichier de logs Linux depuis un Mac avec SSH et SCP"
description: "Une procédure ciblée pour copier un fichier de logs Linux sur Mac : accès SSH, chemin distant, transfert et limites des anciennes machines."
date: 2026-10-10
lang: fr
translation: retrieve-linux-log-file-from-mac-ssh-scp
draft: true
category: blog
tags: [macOS, Linux, SSH, SCP, SFTP]
cover: ""
excerpt: "Récupérer des logs fait partie de mon quotidien. Voici une procédure au terminal pour un fichier précis, avec des exemples à adapter à la machine distante."
metaTitle: "Récupérer des logs Linux sur Mac avec SSH et SCP"
metaDescription: "Copier un fichier de logs Linux sur Mac avec SSH et scp : prérequis, port, permissions et cas d’un ancien serveur sans SFTP."
---
Récupérer des logs sur des machines Linux fait partie de mon quotidien. C’est l’un des besoins qui m’ont poussé à [construire macSCP](/blog/macscp-outil-transfert-manquait-mac/), pour retrouver une interface graphique adaptée à mes habitudes.

Je pars ici d’un besoin plus étroit : ramener un fichier précis sur le Mac depuis le terminal. Cette procédure ne dépend pas de mon application, qui reste un projet personnel sans téléchargement public. Les commandes ci-dessous sont des exemples documentés, pas le compte rendu d’une intervention sur une machine particulière.

## Ce qu’il faut connaître avant le transfert

Il faut un accès réseau à la machine, un serveur SSH accessible, un compte autorisé et le chemin d’un fichier que ce compte peut lire. Dans les exemples, `user@linux.example`, le port `22` et `/var/log/my-service/app.log` sont fictifs et doivent être remplacés.

Toutes les commandes sont lancées dans Terminal sur le Mac. La version du client se vérifie avec :

```sh
ssh -V
```

Ce guide concerne des logs enregistrés dans un fichier. Il ne suppose ni que toutes les distributions utilisent le même chemin, ni que le journal systemd soit un fichier texte directement récupérable.

## Vérifier l’accès et le chemin

Avant de copier, la commande suivante demande à la machine distante d’afficher les informations du fichier :

```sh
ssh -p 22 user@linux.example 'ls -l /var/log/my-service/app.log'
```

La [documentation SSH](https://man.openbsd.org/ssh) détaille la vérification des clés de serveur. Lors de la première connexion, l’empreinte de la clé du serveur doit correspondre à celle confirmée par l’administrateur ou une source fiable. Une alerte de changement de clé mérite une vérification, pas une suppression automatique de l’ancienne entrée.

Si le fichier n’existe pas ou si l’accès est refusé, le transfert n’est pas encore prêt. Le bon chemin et les droits de lecture se règlent côté serveur avec la personne qui l’administre, sans ouvrir les permissions de tout un dossier pour contourner le problème.

## Copier vers un dossier local distinct

Je sépare la récupération dans un nouveau dossier, créé dans le répertoire courant du terminal :

```sh
LOG_DIR="$(mktemp -d "$PWD/logs-linux.XXXXXX")"
```

Cette commande doit réussir avant la suivante. Le dossier porte un suffixe généré et évite de mélanger cette récupération avec une précédente.

```sh
scp -P 22 user@linux.example:/var/log/my-service/app.log "$LOG_DIR/"
```

Le port s’écrit `-p` avec `ssh`, mais `-P` avec `scp`. La [documentation de scp](https://man.openbsd.org/scp) décrit ces options.

Après un transfert terminé sans erreur, le fichier local se retrouve avec :

```sh
ls -lh "$LOG_DIR/app.log"
```

Un fichier de logs peut continuer à changer sur le serveur pendant sa copie. Cette méthode récupère un fichier ; elle ne promet pas un instantané cohérent de tous les journaux d’un incident.

## Le piège des anciennes machines : scp peut utiliser SFTP

Depuis [OpenSSH 9.0](https://www.openssh.org/txt/release-9.0), `scp` utilise SFTP par défaut. Le nom de la commande ne suffit donc pas à connaître le protocole employé.

Pour une machine qui accepte SSH mais ne fournit pas SFTP, un client prenant en charge l’option `-O` peut utiliser l’ancien protocole SCP :

```sh
scp -O -P 22 user@linux.example:/var/log/my-service/app.log "$LOG_DIR/"
```

Ce cas doit être identifié avant de changer la commande. `-O` ne corrige ni un compte incorrect, ni des droits insuffisants, ni un échec de négociation SSH. Je garde ici un chemin explicite, sans joker ni caractères spéciaux.

## Ce que cette récupération permet, et ce qu’elle laisse ouvert

L’objectif reste modeste : disposer du fichier sur le Mac pour l’examiner. Avant de transmettre ce log ou d’en publier une capture, les identifiants, adresses et données confidentielles doivent être retirés de la copie destinée au partage.

Pour les transferts répétés et la navigation entre dossiers, mon usage reste celui décrit dans la note macSCP. Le terminal apporte ici une procédure indépendante pour un fichier connu. Les autres notes de ce fil sont regroupées dans [travailler sur Mac avec Linux et Windows](/sujets/apple-et-outils/).
