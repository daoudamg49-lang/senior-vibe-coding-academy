# Senior Vibe Coding Academy

Une acadÃ©mie francophone qui aide les entrepreneurs et makers Ã  comprendre les systÃ¨mes quâ€™ils construisent avec lâ€™IA. Le contenu explique dâ€™abord pourquoi chaque notion existe, puis la montre avec une analogie, un schÃ©ma et un exemple avant dâ€™aller vers les dÃ©tails techniques.

## Lancer lâ€™application

Ouvrez `index.html` dans un navigateur rÃ©cent. Lâ€™application est statique et ne nÃ©cessite ni installation ni compte. La progression, les favoris et les notes sont conservÃ©s dans le stockage local du navigateur.

## PÃ©rimÃ¨tre livrÃ©

- **Module 00 â€” PrÃ©paration mentale** : Ã©chec du vibe coding, mÃ©thode Senior Vibe Coding et apprentissage efficace.
- **Module 01 â€” Comprendre Internet** : rÃ©seau, adresses IP, domaines, DNS, parcours dâ€™une URL, serveurs, datacenters et vue complÃ¨te.
- **Modules 02 Ã  12** : web, pensÃ©e informatique, bases de donnÃ©es, lecture de code IA, authentification, sÃ©curitÃ©, Git et dÃ©ploiement, outils IA, workflow professionnel, architecture SaaS et projets guidÃ©s.
- Le parcours compte **96 chapitres**, avec quiz, exercices, simulations et exemples concrets.
- Quiz Ã  deux Ã©tapes qui proposent un rappel guidÃ© aprÃ¨s une erreur ou un approfondissement aprÃ¨s une bonne rÃ©ponse.
- Historique des chapitres consultÃ©s, badges de jalon et certificat interne imprimable aprÃ¨s validation du parcours entier.

Les leÃ§ons suivent une progression en trois niveaux (essentiel, intermÃ©diaire, avancÃ©), puis relient le concept Ã  un schÃ©ma animÃ©, un mini quiz, un exercice, une simulation et une fiche de rÃ©vision. Les mots techniques soulignÃ©s ouvrent le dictionnaire.

## PÃ©dagogie

1. **Partir du besoin** : pourquoi la notion existe et quel problÃ¨me elle rÃ¨gle.
2. **CrÃ©er un repÃ¨re concret** : analogie du quotidien et exemple de produit.
3. **Construire le modÃ¨le mental** : schÃ©ma interactif et explication par niveaux.
4. **VÃ©rifier la comprÃ©hension** : exercice, simulation et quiz avec explication.
5. **Consolider** : rÃ©sumÃ© visuel, carte mentale et flashcards.

## Structure du projet

- `index.html` â€” structure de lâ€™application et modales.
- `styles.css` â€” design responsive sombre.
- `app.js` â€” curriculum, dictionnaire, interactions et sauvegarde locale.

## HÃ©bergement GitHub Pages

Le dÃ©pÃ´t contient un workflow GitHub Actions dans `.github/workflows/pages.yml`. AprÃ¨s avoir envoyÃ© le projet sur une branche `main`, activez **Settings â†’ Pages â†’ Build and deployment â†’ GitHub Actions** dans le dÃ©pÃ´t. Les prochains changements envoyÃ©s sur `main` seront publiÃ©s automatiquement.

GitHub Pages sert ce site comme un site public. Les progrÃ¨s, favoris et notes sont conservÃ©s dans le navigateur de chaque personne ; il nâ€™y a pas de compte ni de synchronisation entre appareils.

## Consultation hors connexion

Le site doit dâ€™abord Ãªtre ouvert une fois avec Internet, sur son adresse GitHub Pages en HTTPS. Le service worker enregistre alors les fichiers de lâ€™application dans le cache du navigateur. Une fois ce premier chargement terminÃ©, lâ€™accueil, les chapitres et la progression locale restent utilisables hors connexion sur ce mÃªme navigateur et cet appareil.

Les polices et photographies distantes ne sont pas garanties hors connexion. Si elles manquent, le texte et les fonctionnalitÃ©s de lâ€™application restent disponibles. Le cache hors connexion ne fonctionne pas en ouvrant directement `index.html` avec `file://`.

