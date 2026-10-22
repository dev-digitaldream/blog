# Étoile « Best of the Best » : flux éditorial

Un seul visuel est utilisé : `public/stickers/dech_star.webp`. L'étoile est statique, transparente et sans animation.

## Activer sur un article ou un projet

Dans le frontmatter Markdown de `src/content/blog/*.md` **ou** `src/content/projects/*.md` :

```yaml
sticker: best-of-the-best
stickerRotation: -14
stickerScale: 1.04
```

- `sticker` est facultatif. Sans ce champ, **aucune étoile**.
- `sticker: none` désactive explicitement l'étoile.
- `stickerRotation` en degrés, de -180 à 180. Par défaut : -14.
- `stickerScale` de 0.5 à 1.5. Par défaut : 1.04.

Pour les publications traduites, renseigner le frontmatter **dans les deux fichiers FR et EN**. Il n'y a pas d'activation automatique par titre ni par projet.

## Où elle s'affiche

- Articles : cartes des dernières notes sur l'accueil et cartes du journal complet, ainsi que sur l'image de couverture du billet ouvert.
- Projets : cartes sur la page des projets et image de couverture de la fiche projet.
- Les projets sans image de couverture peuvent afficher l'étoile sur leur carte, mais n'auront pas de couverture étoilée dans la fiche détail.

## Processus de publication

1. Rédiger ou modifier l'article ou le projet et demander **« Étoile Best of the Best : oui/non »**.
2. Si oui, renseigner `sticker: best-of-the-best` dans les versions linguistiques voulues.
3. Ajuster facultativement rotation et taille, sans retoucher les composants.
4. Prévisualiser desktop/mobile, puis déployer avec le flux de validation habituel.

Le composant réutilisable est `src/components/HoloSticker.astro`. Il emploie uniquement le WebP fourni, sans dépendance JavaScript supplémentaire. Les pages d'accueil conservent leur intégration historique.
