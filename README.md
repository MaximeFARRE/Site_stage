# Site carrière – Maxime Farré

Site personnel développé avec Next.js pour présenter mon profil, mes projets, mes expériences et mes compétences.

Objectif du site :
- montrer qui je suis ;
- mettre en avant mes projets ;
- me différencier auprès des recruteurs en finance, entrepreneuriat et tech.

---

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

---

## Philosophie du projet

Le site doit rester :
- sobre ;
- moderne ;
- cohérent ;
- facile à maintenir ;
- facile à enrichir.

Le contenu doit être séparé du design.

Les textes, projets, expériences et compétences doivent être centralisés dans `src/data/`.

---

## Structure principale

```text
src/
├── app/
├── components/
├── data/
├── lib/
├── types/
└── styles/

Pages prévues
/ → Accueil
/a-propos → À propos
/projets → Liste des projets
/projets/[slug] → Fiche projet détaillée
/experiences → Parcours et expériences
/cv → CV
/contact → Contact

Données principales (`src/data/`)
- `personal-info.ts`
- `navigation.ts`
- `projects.ts`
- `experiences.ts`
- `skills.ts`
- `contact.ts`
- `cv.ts`
- `social-links.ts`

Règles importantes
Ne jamais écrire de contenu important directement dans les composants.
Toujours réutiliser les composants existants avant d’en créer un nouveau.
Garder des noms de fichiers simples et cohérents.
Toujours privilégier la lisibilité à la complexité.
Toute nouvelle page doit avoir :
un titre clair ;
une metadata SEO ;
une structure cohérente avec le reste du site.

---

# docs/vision-site.md

```md
# Vision du site

## Objectif principal

Créer un site personnel qui donne immédiatement une image :
- sérieuse ;
- ambitieuse ;
- professionnelle ;
- différenciante.

Le site doit montrer que je ne suis pas seulement un étudiant, mais une personne qui construit déjà des projets concrets.

---

## Positionnement

Le site doit refléter un profil rare :

- étudiant en ingénierie financière ;
- entrepreneur ;
- profil technique ;
- passionné par la finance et l’investissement.

---

## Public cible

- recruteurs en finance ;
- fonds d’investissement ;
- asset managers ;
- family offices ;
- private equity ;
- recruteurs plus entrepreneuriaux ou techniques.

---

## Message principal

> Étudiant en ingénierie financière, entrepreneur et passionné par l’investissement, je développe des projets concrets à l’intersection de la finance, de la technologie et de l’entrepreneuriat.

---

## Ce qui doit ressortir

1. J’ai déjà créé des projets.
2. J’ai une vision long terme.
3. Je combine plusieurs compétences.
4. Je suis crédible, ambitieux et concret.

---

## Ce que le site ne doit pas devenir

- un CV trop long ;
- un site surchargé ;
- un portfolio étudiant banal ;
- un site trop technique ou trop froid.
