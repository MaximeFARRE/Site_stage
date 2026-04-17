
```md
# AGENTS.md

## Mission
Construire un site carrière simple, élégant et crédible.

Le site doit convaincre des recruteurs en finance, entrepreneuriat et tech.

## Pages autorisées

```text
/
a-propos
projets
projets/[slug]
experiences
cv
contact

Architecture :
src/
├── app/
├── components/
├── data/
├── lib/
├── types/
└── styles/

Données : 
src/data/
├── personal-info.ts
├── navigation.ts
├── projects.ts
├── experiences.ts
├── skills.ts
└── social-links.ts

Tout le contenu doit être centralisé ici.

Workflow
créer les données
créer les composants de base
créer les pages
connecter les données
améliorer le style
Règles
code simple
composants réutilisables
même style partout
responsive obligatoire
pas de complexité inutile
Interdictions
base de données
CMS
API complexe
authentification
trop de dépendances
trop d’animations

Style
minimaliste
beaucoup d’espace
couleur accent : bleu (#1D4ED8)
texte : gris foncé (#111827)
fond : blanc cassé (#F8F9FB)
Typographie : Inter
Composants
Header
Footer
Card
Button
Section
Layout
Projets
Chaque projet doit contenir :
titre
description
technologies
résultats
Ce que j’ai appris
Livrables
code complet
README.md
instructions de déploiement
```
26E4-0DA3