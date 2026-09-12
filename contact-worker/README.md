# Contact CraneMail — préparation, non déployée

Branche `feat/contact-cranemail`. Le formulaire actuellement publié utilise toujours Formbricks.

## Architecture

Astro sur Pages, Worker séparé sur la route `blog.digitaldream.work/api/contact*`.
Ce Worker permet les bindings de limitation de fréquence sans base de données.
CraneMail SMTP `eu1.workspace.org:465`, TLS vérifié, compte et expéditeur `blog@digitaldream.work`, destinataire fixe `dev@digitaldream.work`. Le visiteur devient Reply-To uniquement.
Turnstile se charge au premier focus du formulaire. Validation serveur du jeton, du domaine et de l'action `contact`. Aucune voie de secours sans vérification.

3 tentatives/minute/IP avant validation, 10 envois/minute au total après validation. Les compteurs Cloudflare sont approximatifs et locaux à chaque datacenter : ils ne constituent pas un plafond mondial ni une garantie de zéro spam. Aucun message ou IP n'est journalisé par notre code. Cloudflare et CraneMail traitent néanmoins les données nécessaires au service.

## Configuration à terminer

1. Utiliser le compte Cloudflare `160f96a41efd2629170558cb351d8972` (compte du blog, pas OpenPark).
2. Créer un widget Turnstile Managed pour `blog.digitaldream.work`.
3. Mettre la clé publique dans `PUBLIC_TURNSTILE_SITE_KEY` des variables de build du projet Pages **blog-digitaldream**.
4. Enregistrer `SMTP_PASSWORD` et `TURNSTILE_SECRET_KEY` comme secrets du Worker **carnet-dd-contact**. Aucun secret dans Git ou dans la conversation. Avec le CLI authentifié au bon compte, utiliser `npx wrangler secret put NOM` depuis ce dossier ; saisie interactive par l'utilisateur.
5. Terminer la compilation Worker et un test SMTP dans le runtime Cloudflare. La connexion TLS locale est vérifiée ; cela ne prouve pas l'authentification SMTP ni l'accessibilité depuis Cloudflare.
6. Déployer le Worker puis le frontend ensemble, avec les secrets et la clé publique en place. Ne pas fusionner ce frontend avant : sans clé il refusera les envois.
7. Avec autorisation d'envoi du message de test, vérifier réception dans dev@digitaldream.work, Reply-To, FR/EN, refus Turnstile, rate limit, navigation Astro et conservation du texte en cas d'erreur.
8. Conserver Formbricks jusqu'à réception validée ; sauvegarder ses réponses avant son éventuel arrêt. Ne pas supprimer la base.

Les routes Worker sur Pages, Nodemailer dans le runtime Cloudflare et la connexion SMTP authentifiée restent à valider en environnement Cloudflare. Ne pas présenter cette préparation comme déjà opérationnelle.

## Vérifications effectuées

- `npm test` : 15 tests réussis, sans envoi réseau de message.
- Footer.astro compilé avec @astrojs/compiler, script JS analysé sans erreur.
- SMTP local : certificat TLS validé, bannière 220, aucune authentification ni soumission.
- `wrangler deploy --dry-run` et build Astro complet restés sans résultat, arrêtés. Aucun succès de compilation complète revendiqué.
- Installation isolée npm ; aucun changement du package.json du blog. Les dépendances du Worker ont zéro vulnérabilité signalée lors de l'installation ; celles du blog ont des alertes préexistantes à traiter séparément.
- Accès automatisé au tableau de bord Cloudflare : délai dépassé, aucune configuration modifiée.

## Commandes

Depuis contact-worker : `npm ci`, `npm test`, `npm run check`.
Depuis la racine du blog : `npm ci`, `npm run build`.
Le serveur Astro seul n'exécute pas le Worker. Un test local du backend se fait avec Wrangler, séparément.
