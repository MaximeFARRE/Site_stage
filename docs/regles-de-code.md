# Règles de développement

## Règles générales

- privilégier la simplicité ;
- écrire du code lisible ;
- éviter les composants trop gros ;
- éviter la duplication.

---

## Règles sur les composants

- un composant = une responsabilité ;
- pas plus de 150 lignes si possible ;
- si un composant devient trop gros, le découper.

---

## Règles sur les données

- tout le contenu doit être dans `src/data/` ;
- ne jamais mettre les textes importants directement dans les composants.

---

## Règles de nommage

- noms de fichiers en kebab-case ;
- composants React en PascalCase ;
- variables claires et explicites.

---

## Avant chaque nouvelle fonctionnalité

Toujours se demander :

1. Est-ce utile pour la V1 ?
2. Est-ce cohérent avec le reste du site ?
3. Peut-on le faire plus simplement ?

---

## Ce qu’il ne faut pas faire

- ajouter des animations partout ;
- multiplier les couleurs ;
- créer trop de pages ;
- utiliser plusieurs styles différents ;
- faire un site compliqué trop tôt.