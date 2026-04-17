# CLAUDE.md

Tu travailles sur un site carrière personnel en Next.js.

Objectif :
Créer un site sobre, premium et professionnel pour présenter :
- un profil finance + entrepreneuriat + technique ;
- des projets concrets ;
- une ambition long terme.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel

Ne pas ajouter de dépendances inutiles.

## Pages V1
- /
- /a-propos
- /projets
- /projets/[slug]
- /experiences
- /cv
- /contact

Ne pas ajouter :
- blog
- CMS
- base de données
- authentification
- formulaire complexe
- animations inutiles

## Structure obligatoire

```text
src/
├── app/
├── components/
├── data/
├── lib/
├── types/
└── styles/

Règles
tout le contenu va dans src/data/
ne jamais écrire les textes longs dans les composants
composants petits et réutilisables
un composant = une responsabilité
privilégier la simplicité
Style
minimaliste
beaucoup d’espace
peu de couleurs
animations discrètes

Palette :

fond : #F8F9FB
texte : #111827
accent : #1D4ED8
gris : #64748B
Home obligatoire
Hero
Présentation
Différenciation
Projets
Parcours
CTA final
Projets minimum
application de suivi de patrimoine
backtest / portefeuille
Occifloc

Toujours préciser :

fichiers modifiés
pourquoi
dépendances ajoutées