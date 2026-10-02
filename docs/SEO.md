# Plan SEO, GEO/AEO et validation

## 1. Corrections intégrées dans le projet

Le framework reste React 18 + Vite. Aucun changement de textes commerciaux, de couleurs, de disposition ou de services de contact n'est nécessaire à cette mise en place.

| Sujet | Mise en place |
| --- | --- |
| Contenu indexable | Pré-rendu React au build : le HTML contient déjà le nom, le métier, les compétences, les expériences, les neuf projets et les coordonnées. Même contenu pour visiteurs et robots. |
| Langues | Anglais sur `/`, français sur `/fr/`. Le sélecteur conserve le changement sans rechargement, les ancres et l'historique. Les deux adresses fonctionnent aussi au chargement direct. |
| Métadonnées | Titres et descriptions EN/FR, canonique propre à chaque page, `hreflang` réciproques et `x-default`. Open Graph et Twitter cohérents avec la langue et les dimensions réelles de l'image. |
| Données structurées | Graphe JSON-LD `Person`, `WebSite`, `ProfilePage`, `ItemList` et neuf `CreativeWork`. Identité reliée aux profils publics ; projets rattachés en tant que contributions, sans inventer une propriété exclusive ni des avis. |
| Structure HTML | Un `main`, un seul `h1`, titres hiérarchisés, liens de navigation HTML avec des ancres, identifiants stables des projets, textes alternatifs descriptifs. |
| Exploration | Sitemap des deux pages canoniques ; Google, Bing et OAI-SearchBot autorisés. Les fichiers nécessaires au rendu restent accessibles. |
| Performances | Portraits et logo TCC convertis en WebP au build ; dimensions du portrait réservées ; image principale et police préchargées ; images secondaires chargées paresseusement ; police identique auto-hébergée. |
| Mesure | GA4 et Clarity conservés ; événements mis en file dès le départ, chargement des scripts après le chargement critique, pendant une période disponible. |
| Hébergement | Configuration Vercel : build complet, dossier `dist`, redirections permanentes des domaines secondaires vers `www`, cache long des assets avec empreinte, page 404 non indexable, aucune réécriture globale vers l'accueil. |

### Métier ciblé et affichage dans les recherches

Le métier principal est maintenant « Frontend Engineer » en anglais et « Ingénieur Frontend » en français. Il apparaît dans le sous-titre visible, le texte de présentation, le titre HTML, la description, Open Graph, Twitter et `Person.jobTitle` du JSON-LD. Les vrais intitulés d'expériences professionnelles restent inchangés. Les titres prévus sont :

- EN : `Oussama Mosbah | Frontend Engineer, React & Next.js`
- FR : `Oussama Mosbah | Ingénieur Frontend React & Next.js`

Les descriptions résument le métier, la ville et les technologies React, Next.js et TypeScript dans chaque langue. Aucun `meta keywords` n'est ajouté : Google ignore cette balise. Les moteurs peuvent choisir un autre titre ou un autre extrait selon la requête ; le code peut fournir des signaux cohérents, pas imposer le texte exact de chaque résultat.

Le pré-rendu est régénéré à chaque build à partir des composants et des traductions existants. Il n'y a pas de copie cachée destinée uniquement aux robots. Les fichiers `src/assets/generated/` et `dist-ssr/` sont des sorties de build ignorées par Git.

## 2. Vérifications reproductibles

```sh
npm ci
npm run lint
npm run build
npm run test:seo
npm run test:e2e
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Les 11 tests contrôlent les deux langues : contenu HTML sans JavaScript, une seule canonique, métadonnées et alternates, syntaxe et relations JSON-LD, ancres existantes, CV, images locales et dimensions Open Graph, sitemap, robots, configuration des redirections et budgets de poids.

Les sept tests Playwright de `npm run test:e2e` démarrent un aperçu du build de production sur le port 4174. Ils contrôlent le HTML initial servi à `OAI-SearchBot` en anglais et en français, le changement de langue et de métadonnées, l'historique, le thème clair/sombre, la navigation et le menu mobile, les neuf cartes de projets, le carrousel Coverflow (carte centrée, voisines inclinées, flèches, points, geste tactile et retournement d'origine des cartes), les liens des trois nouveaux projets, les fenêtres de contact et d'expérience, le chargement du logo TCC dans sa carte et sa fenêtre, et l'absence d'erreurs JavaScript non interceptées. Aucun formulaire n'est envoyé. Playwright utilise Chrome installé et conserve une trace en cas d'échec ; les rapports sont ignorés par Git.

### Choix des bibliothèques après revue du dépôt GitHub

Le dépôt public GitHub pointe encore vers l'alias `oussamamosbah.vercel.app` dans son champ « About ». Le profil GitHub, lui, pointe déjà vers `www.oussamamosbah.com` et affiche « Front-End Engineer from Tunisia! ». Le README local renvoie désormais lui aussi vers le domaine canonique et explicite le métier ; le champ « About » du dépôt devra être modifié sur GitHub après publication.

Le pré-rendu React/Vite existant est conservé : Google recommande le rendu statique ou serveur avec hydratation pour rendre le contenu accessible aussi aux robots sans JavaScript. Installer `react-helmet-async`, migrer vers Next.js ou ajouter un générateur de `llms.txt` n'apporterait pas en soi un meilleur classement à ces deux pages ; cela ajouterait surtout du code et du risque de régression. `@playwright/test` est utilisé en développement pour vérifier le vrai rendu et les interactions dans Chrome. Le carrousel des projets utilise le module léger `motion/mini` de la dépendance Motion : le budget de JavaScript initial reste sous 100 Ko gzip. Pour la mesure externe, utiliser les outils propriétaires des moteurs (Search Console, Bing Webmaster Tools) et PageSpeed Insights, sans installer de « score GEO » opaque.

Les neuf projets restent présents dans le HTML pré-rendu et le carrousel affiche une carte centrale avec ses voisines, sur ordinateur comme sur mobile. Les trois nouveaux logos sont cadrés sans découpe dans leur carte. Le nouveau logo TCC fourni par le propriétaire est converti en WebP carré avec marges blanches au build : le mot-symbole n'est pas recadré dans les emplacements carrés.

Google indique qu'aucun fichier ni schéma spécial IA n'est nécessaire pour ses fonctionnalités IA et que l'indexation est une condition préalable, pas une garantie de présence. La documentation officielle OpenAI précise que `OAI-SearchBot` concerne ChatGPT Search, indépendamment de `GPTBot` pour l'entraînement. Les assistants comme Gemini ne proposent pas de balise permettant d'imposer une citation : l'action vérifiable reste la publication, l'indexation et la cohérence des sources publiques.

Audit local Lighthouse, avec un serveur d'aperçu déjà démarré :

```sh
npm exec --yes --package=lighthouse@12.8.2 -- lighthouse http://127.0.0.1:4173/ --chrome-flags="--headless" --only-categories=performance,seo,accessibility,best-practices --output=json --output=html --output-path=./qa-results/lighthouse-mobile
npm exec --yes --package=lighthouse@12.8.2 -- lighthouse http://127.0.0.1:4173/fr/ --preset=desktop --chrome-flags="--headless" --only-categories=performance,seo,accessibility,best-practices --output=json --output=html --output-path=./qa-results/lighthouse-desktop-fr
```

Créer le dossier `qa-results` avant ces commandes si nécessaire. Lighthouse nécessite Chrome installé ; ses rapports sont locaux et ignorés par Git.

Les contrôles JSON-LD locaux ne remplacent pas le test Google des résultats enrichis. Le score SEO Lighthouse couvre les contrôles techniques de base, pas le classement, l'autorité ou la probabilité d'être cité par une IA.

### Résultats locaux du 1er octobre 2026

`npm run lint`, `npm run build` et les **11 tests SEO** réussissent. Les vérifications navigateur décrites ci-dessus réussissent sans erreur React détectée.

| Mesure Lighthouse | Mobile EN | Ordinateur FR |
| --- | ---: | ---: |
| SEO | 100/100 | 100/100 |
| Performance | 77/100 | 100/100 |
| LCP | 2,51 s | 0,54 s |
| CLS | 0,002 | 0,000 |
| Total Blocking Time | 780 ms | 0 ms |
| Accessibilité automatique | 96/100 | 93/100 |
| Bonnes pratiques automatiques | 79/100 | 78/100 |

Rapports locaux : `qa-results/lighthouse-mobile-final.report.html` et `qa-results/lighthouse-desktop-fr.report.html` (JSON associés). L'audit mobile précède uniquement la dernière correction du nom accessible du sélecteur de langue ; le rendu et les optimisations de performance sont identiques. L'audit desktop couvre cette correction.

Pendant l'optimisation, le premier audit local, déjà après ajout du pré-rendu, mesurait 55/100 en performance mobile et 5,15 s de LCP. Après auto-hébergement de la police et adaptation du chargement des scripts, le second mesure 77/100 et 2,51 s. **Ce premier audit n'est pas une mesure du projet original avant toute modification.** Les conditions réseau des scripts externes et la charge du poste peuvent faire varier les résultats.

Les trois images modifiées passent de 1 493 373 à 65 692 octets, soit environ **95,6 % de moins**, sans compter le reste des images. Les pages HTML complètes restent à environ 14,5–14,8 Ko compressées en gzip ; le JavaScript initial est à environ 87,7 Ko gzip.

### Vérification après corrections complémentaires

Le 1er octobre 2026, après isolation des animations du Hero, limitation du travail de défilement, correction du contraste du copyright, agrandissement de la zone cliquable des liens de projet et mise à jour des dépendances vulnérables :

| Mesure Lighthouse | Mobile EN | Ordinateur FR |
| --- | ---: | ---: |
| Performance | 84/100 (86 au passage précédent) | 100/100 |
| SEO | 100/100 | 100/100 |
| Accessibilité | 100/100 | 100/100 |
| Bonnes pratiques | 79/100 | 78/100 |
| LCP | 2,44 s | 0,60 s |
| CLS | 0,001 | 0,000 |
| Total Blocking Time | 514 ms | 0 ms |

Rapports les plus récents : `qa-results/lighthouse-mobile-ready.report.html` et `qa-results/lighthouse-desktop-final.report.html`. Le score de performance mobile reste variable entre les passages de laboratoire ; l'essentiel est que LCP reste juste sous 2,5 s et que le blocage total mobile demeure le principal axe technique à améliorer.

`npm audit` est à **0 vulnérabilité** après mise à jour des dépendances compatibles et de Sharp. Le build, ESLint et les 11 tests SEO passent.

Après le changement de métier, le build et les 11 tests SEO passent toujours. L'aperçu HTTP a été demandé avec les agents `Googlebot` et `OAI-SearchBot` sur `/` et `/fr/` : quatre réponses 200 avec les bons titres et descriptions, le HTML pré-rendu, les canoniques et le JSON-LD `Person`. Lighthouse SEO sur `/` : **100/100** (`qa-results/lighthouse-seo-frontend-engineer`). Cela vérifie la sortie locale servie aux robots, sans simuler l'index Google ni la sélection de citations ChatGPT.

Le seul échec restant dans « bonnes pratiques » provient du cookie tiers `CLID` posé par Microsoft Clarity et détecté dans l'onglet Issues de Chrome. Clarity est conservé pour ne pas supprimer la mesure comportementale demandée implicitement par la configuration actuelle. Le supprimer ou le soumettre à un mécanisme de consentement est une décision produit/confidentialité, pas une correction purement technique.

Les cartes de projet gardent un nom accessible plus court que leur contenu visible ; cela n'est pas signalé par l'audit automatisé actuel. Les Core Web Vitals réels (notamment INP) ne sont pas certifiables avec Lighthouse seul et doivent être observés après publication.

Ces mesures sont des **tests de laboratoire locaux**. Elles ne valident pas l'INP réel ni la réussite des trois Core Web Vitals sur les visiteurs. Il faut les contrôler sur la production avec PageSpeed Insights/Search Console après collecte de données. La valeur de LCP mobile est à la limite du seuil « bon » de 2,5 s ; il ne faut pas la présenter comme un passage garanti.

## 3. Publication et contrôles de production

1. Relire le diff, puis publier les changements sur la branche de production GitHub. Vérifier dans Vercel que le projet utilise bien ce dépôt et cette branche : le déclenchement automatique n'a pas été confirmé depuis le tableau de bord.
2. Dans les variables d'environnement Vercel (Production et Preview si souhaité), configurer `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` et `VITE_EMAILJS_PUBLIC_KEY` pour que les formulaires fonctionnent ; le `.env.local` configuré sur le poste n'est jamais transmis à Vercel. Ajouter `VITE_GOOGLE_SITE_VERIFICATION` uniquement si la validation Search Console par balise HTML est choisie. Vercel exécute `npm run build` et sert `dist/` ; un aperçu construit avec seulement `vite build` n'aura pas le pré-rendu SEO.
3. Vérifier en production que `/` et `/fr/` répondent en HTTP 200 avec le bon HTML et la bonne canonique, avant toute exécution de JavaScript.
4. Vérifier que les adresses `oussamamosbah.vercel.app` et `oussamamosbah.com` redirigent vers `www.oussamamosbah.com`, sans boucle et en conservant le chemin. Vérifier `/fr` vers `/fr/`.
5. Demander une URL inexistante et vérifier un vrai statut HTTP 404, pas un accueil renvoyé en 200. Le serveur `vite preview` peut appliquer un fallback SPA : ce n'est pas le test de la configuration Vercel.
6. Ouvrir `/robots.txt` et `/sitemap.xml`. Vérifier que le pare-feu Vercel ne bloque pas les robots de recherche par un challenge et que la production n'envoie pas de `X-Robots-Tag: noindex`.
7. Contrôler le partage Open Graph et les liens des CV/profils. Exécuter le Rich Results Test et le Schema Markup Validator sur les URLs publiques après déploiement.

Les redirections, le pare-feu et les en-têtes Vercel restent à valider sur un véritable déploiement. Le contrôle local de `vercel.json` ne simule pas l'infrastructure Vercel.

Lors du contrôle en navigateur du 1er octobre 2026, la version publique `www.oussamamosbah.com` n'avait pas `data-prerendered` sur `#root` et n'exposait pas de lien canonique ; elle servait encore le rendu client précédent. Les améliorations locales présentes dans ce dépôt ne sont donc **pas encore en production**. La configuration des variables Vercel et un déploiement autorisé sont les étapes restantes avant de pouvoir vérifier la production.

Recherche publique du même jour pour `Oussama Mosbah frontend engineer` : dans Google sans personnalisation et dans Bing, LinkedIn est le premier résultat et le portfolio est le deuxième résultat visible ; les deux affichent encore l'ancien titre « Oussama Mosbah — Frontend Developer ». Un test de ChatGPT avec « Recherche sur le Web » a identifié et cité le portfolio officiel, LinkedIn et les projets, mais a également cité l'ancien titre du site. Ce sont des observations ponctuelles avant publication, sensibles à la région et à l'index du moment. Après déploiement, refaire les mêmes recherches et vérifier dans Search Console la page explorée, la canonique choisie, les impressions et les requêtes.

## 4. Audit de production du 2 octobre 2026

L'audit HTTP public confirme que la production sert encore l'ancien build : `/` répond `200` mais contient un `#root` vide, l'ancien titre « Frontend Developer », aucune canonique et aucun JSON-LD ; `/fr/` répond `404`. Le sitemap public ne liste que `/`, annonce à tort une version française sur la même URL et contient un `lastmod` ancien. `oussamamosbah.vercel.app` répond `200` au lieu de rediriger vers le domaine canonique ; le domaine sans `www` répond actuellement `307`, non permanent. Le `robots.txt` public autorise les robots via `User-agent: *` : le blocage n'est pas la cause principale. Ces défauts de production ne sont **pas** présents dans le build local testé.

Le build local passe `npm run lint`, `npm run build`, les **11 tests SEO** et les **7 tests Chrome**. Le premier Lighthouse local mesurait mobile EN `77` en performance, `100` en SEO, `96` en accessibilité et un Total Blocking Time de `830 ms`. Les points du carrousel ont ensuite reçu des cibles tactiles de 24 px sans changement de leur aspect : le second audit mesure `100` en accessibilité mobile, `100` en SEO et `83` en performance (Total Blocking Time `510 ms`). La différence de performance entre ces deux passages peut aussi venir de la variabilité du laboratoire ; elle n'est pas attribuée à la correction CSS. Sur ordinateur FR, le dernier audit mesure `100` en performance et SEO et `96` en accessibilité. Les liens de projet et certains noms accessibles des cartes restent les deux constats d'accessibilité desktop. Ce sont des mesures de laboratoire, pas les Core Web Vitals réels de la production. Rapports finaux : `qa-results/lighthouse-deep-audit-mobile-after.json` et `qa-results/lighthouse-deep-audit-desktop-after.json`.

Après publication, lancer `npm run test:production-seo` : ce contrôle HTTP vérifie les deux langues avec `Googlebot` et `OAI-SearchBot`, le HTML sans JavaScript, les métadonnées, le JSON-LD, le sitemap, `robots.txt`, la vraie page 404, les redirections et l'image Open Graph. Il échoue actuellement, comme attendu, parce que le déploiement n'est pas encore à jour. Une réussite après merge vérifierait la mise en ligne technique, **pas** une position sur Google ou une citation par ChatGPT/Gemini. La liaison Vercel–dépôt/branche et l'état réel de l'index Google nécessitent respectivement le tableau de bord Vercel et Search Console.

## 5. Google Search Console et Bing

1. Ajouter une propriété **Domaine** `oussamamosbah.com` dans [Google Search Console](https://search.google.com/search-console/) et suivre la validation DNS TXT. Si l'on utilise plutôt une propriété de préfixe d'URL, la balise HTML est possible : reporter le véritable jeton dans `VITE_GOOGLE_SITE_VERIFICATION`, puis reconstruire et déployer.
2. Envoyer `https://www.oussamamosbah.com/sitemap.xml` dans « Sitemaps ».
3. Inspecter `/` et `/fr/`, lancer le test de l'URL publiée, vérifier la canonique choisie, le HTML exploré et l'autorisation d'indexation, puis demander l'indexation si nécessaire.
4. Vérifier les rapports d'indexation, de performances Web et, s'il est disponible pour la propriété, le rapport de performances des fonctionnalités IA génératives, ainsi que les Core Web Vitals après collecte de données. Pour un site peu fréquenté, les données terrain peuvent manquer ; un résultat absent ne signifie pas une réussite.
5. Ajouter également le site à [Bing Webmaster Tools](https://www.bing.com/webmasters/) et y soumettre le sitemap.

Aucune propriété Search Console, modification DNS ou demande d'indexation n'a été effectuée par ces changements de code.

## 6. Visibilité IA et suivi éditorial

Le contenu factuel et lisible, les liens explorables et une identité cohérente sont la base de la visibilité IA. Le fichier robots autorise explicitement `OAI-SearchBot`, qui concerne la recherche ChatGPT. L'autorisation d'un robot n'impose ni exploration, ni indexation, ni citation. La politique existante concernant `GPTBot` n'est pas modifiée.

Google indique qu'aucun fichier IA ou schéma spécial n'est requis pour ses fonctionnalités IA. Aucun `llms.txt`, faux avis, FAQ invisible ou promesse de position n'a été ajouté.

Après publication, vérifier régulièrement la cohérence du nom « Oussama Mosbah », du rôle, des dates d'expérience et des liens entre le portfolio, LinkedIn et GitHub. Maintenir les descriptions de projets et les chiffres d'impact exacts et justifiables. Les textes actuels sont conservés : leur vérification factuelle reste à la charge du propriétaire.

Suivre les impressions et clics sur le nom et les requêtes pertinentes dans Search Console, puis les visites et contacts obtenus. Enrichir ultérieurement les études de cas avec du contenu original si souhaité ; cela ferait l'objet d'un changement de contenu distinct.

## Sources officielles

- [Google : fonctionnalités IA et sites web](https://developers.google.com/search/docs/appearance/ai-features)
- [Google : optimisation pour les fonctionnalités IA génératives](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search Console : inspection d'URL et demande d'indexation](https://support.google.com/webmasters/answer/9012289)
- [Google : JavaScript SEO et intérêt du pré-rendu](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google : création des liens de titre](https://developers.google.com/search/docs/appearance/title-link)
- [Google : création des extraits](https://developers.google.com/search/docs/appearance/snippet)
- [Google : la balise meta keywords est ignorée](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag)
- [Google : versions linguistiques](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google : données structurées ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [OpenAI : robots de recherche et de navigation](https://developers.openai.com/api/docs/bots)
- [Playwright : tests avec serveur d'aperçu](https://playwright.dev/docs/test-webserver)
- [Bing : inspection d'URL et vue Bingbot](https://www.bing.com/webmasters/help/url-inspection-55a30305)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
