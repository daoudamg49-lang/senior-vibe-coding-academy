# Senior Vibe Coding Academy

Une académie francophone qui aide les entrepreneurs et makers à comprendre les systèmes qu’ils construisent avec l’IA. Le contenu explique d’abord pourquoi chaque notion existe, puis la montre avec une analogie, un schéma et un exemple avant d’aller vers les détails techniques.

## Lancer l’application

Ouvrez `index.html` dans un navigateur récent. L’application est statique et ne nécessite ni installation ni compte. La progression, les favoris et les notes sont conservés dans le stockage local du navigateur.

## Périmètre livré

- **Module 00 — Préparation mentale** : échec du vibe coding, méthode Senior Vibe Coding et apprentissage efficace.
- **Module 01 — Comprendre Internet** : réseau, adresses IP, domaines, DNS, parcours d’une URL, serveurs, datacenters et vue complète.
- **Modules 02 à 12** : web, pensée informatique, bases de données, lecture de code IA, authentification, sécurité, Git et déploiement, outils IA, workflow professionnel, architecture SaaS et projets guidés.
- Le parcours compte **96 chapitres**, avec quiz, exercices, simulations et exemples concrets.
- Quiz à deux étapes qui proposent un rappel guidé après une erreur ou un approfondissement après une bonne réponse.
- Historique des chapitres consultés, badges de jalon et certificat interne imprimable après validation du parcours entier.

Les leçons suivent une progression en trois niveaux (essentiel, intermédiaire, avancé), puis relient le concept à un schéma animé, un mini quiz, un exercice, une simulation et une fiche de révision. Les mots techniques soulignés ouvrent le dictionnaire.

## Pédagogie

1. **Partir du besoin** : pourquoi la notion existe et quel problème elle règle.
2. **Créer un repère concret** : analogie du quotidien et exemple de produit.
3. **Construire le modèle mental** : schéma interactif et explication par niveaux.
4. **Vérifier la compréhension** : exercice, simulation et quiz avec explication.
5. **Consolider** : résumé visuel, carte mentale et flashcards.

## Structure du projet

- `index.html` — structure de l’application et modales.
- `styles.css` — design responsive sombre.
- `app.js` — curriculum, dictionnaire, interactions et sauvegarde locale.

## Hébergement GitHub Pages

Le dépôt contient un workflow GitHub Actions dans `.github/workflows/pages.yml`. Après avoir envoyé le projet sur une branche `main`, activez **Settings → Pages → Build and deployment → GitHub Actions** dans le dépôt. Les prochains changements envoyés sur `main` seront publiés automatiquement.

GitHub Pages sert ce site comme un site public. Les progrès, favoris et notes sont conservés dans le navigateur de chaque personne ; il n’y a pas de compte ni de synchronisation entre appareils.

## Consultation hors connexion

Le site doit d’abord être ouvert une fois avec Internet, sur son adresse GitHub Pages en HTTPS. Le service worker enregistre alors les fichiers de l’application dans le cache du navigateur. Une fois ce premier chargement terminé, l’accueil, les chapitres et la progression locale restent utilisables hors connexion sur ce même navigateur et cet appareil.

Les polices et photographies distantes ne sont pas garanties hors connexion. Si elles manquent, le texte et les fonctionnalités de l’application restent disponibles. Le cache hors connexion ne fonctionne pas en ouvrant directement `index.html` avec `file://`.


## Live demo

[Open Senior Vibe Coding Academy](https://daoudamg49-lang.github.io/senior-vibe-coding-academy/)
