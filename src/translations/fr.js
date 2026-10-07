export const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    services: "Services",
    portfolio: "Projets",
    contact: "Contact",
  },
  hero: {
    greeting: "Salut,",
    title: "Je suis",
    name: "Oussama Mosbah",
    subtitle: "Ingénieur Frontend",
    roles: ["Frontend Dev", "Expert React", "Intégrateur UI"],
    description:
      "Création d'applications web performantes, évolutives et innovantes. Construction d'interfaces haute performance avec des technologies modernes.",
    statusText: "Disponible pour travailler",
    connectButton: "Me Contacter",
    resumeButton: "Mon CV",
  },
  about: {
    title: "À propos de moi",
    description1:
      "Je suis un ingénieur Frontend qualifié avec plus de trois ans d'expérience, contribuant au succès d'organisations de premier plan en fournissant des solutions de haute qualité centrées sur l'utilisateur.",
    description2:
      "Ma passion pour le développement frontend se démontre à la fois par mon expérience extensive et l'engagement et l'enthousiasme inébranlables que j'apporte à chaque projet.",
    skills: {
      htmlCss: "HTML & CSS",
      reactJs: "React.js",
      javascript: "JavaScript",
      nextJs: "Next.js",
      typescript: "TypeScript",
      tailwind: "Tailwind CSS",
    },
    achievements: {
      experience: "Années d'Expérience",
      experienceValue: "3+",
      projects: "Projets Réalisés",
      projectsValue: "9+",
      clients: "Clients Satisfaits",
      clientsValue: "5+",
    },
  },
  experience: {
    title: "Expérience Professionnelle",
    jobs: [
      {
        company: "Astrolab Agency (Sousse, Tunisie)",
        role: "Front-End Engineer",
        period: "Jan. 2023 – Aujourd'hui",
        description:
          "Développement frontend de sept projets chez Astrolab Agency : applications SaaS, fintech et e-learning, landing pages Astrolab et Talinty, et interface de gestion Ciceria. Création d'interfaces React et Next.js responsive, intégrations API et paiement, avec revues de code, travail Agile et développement assisté par IA selon les projets.",
        tags: ["ReactJS", "Next.js", "TypeScript", "Material UI", "Stripe API", "REST API", "GitLab", "ClickUp"],
        type: "CDI",
        projects: [
          {
            id: "astrolab",
            name: "Astrolab",
            role: "Développeur Frontend",
            description:
              "Développement de la landing page d'Astrolab avec Next.js : présentation des services, réalisations et parcours de contact, adaptée au mobile et au bureau. Animations avec Motion (Framer Motion) et développement assisté par IA, avec revue du code et validation des parcours utilisateurs.",
            tech: ["Next.js", "Motion", "Shadcn/ui", "Design responsive"],
            achievements: [
              "Création d'une landing page Next.js structurée autour des services, des réalisations et des prises de contact.",
              "Adaptation des sections et de la navigation aux écrans mobiles et de bureau.",
              "Prototypage et implémentation assistés par IA, avec revue du code généré et validation des parcours utilisateurs."
            ],
            link: "https://astrolab.co/fr/"
          },
          {
            id: "talinty",
            name: "Talinty",
            role: "Développeur Frontend",
            description:
              "Développement d'une landing page responsive Next.js présentant la solution de recrutement assisté par IA de Talinty, ses fonctionnalités et les demandes de démonstration. Animations Motion (Framer Motion) et prototypage assisté par IA, avec revue du code et validation des parcours utilisateurs.",
            tech: ["Next.js", "Motion", "Shadcn/ui", "Design responsive"],
            achievements: [
              "Développement d'une présentation claire du parcours de recrutement et des bénéfices de la plateforme.",
              "Présentation des fonctionnalités d'évaluation des profils proposées par le produit et des appels à l'action vers la démonstration.",
              "Interface responsive et animations Motion ; prototypage et implémentation assistés par IA, avec revue du code et validation des parcours."
            ],
            link: "https://talinty.com/en"
          },
          {
            id: "ciceria",
            name: "Ciceria",
            role: "Développeur Frontend",
            description:
              "Développement du back-office React de Ciceria, une plateforme de formalités juridiques destinée aux professionnels du droit. Conception d'interfaces structurées pour administrer les utilisateurs, opérations, documents et référentiels métier.",
            tech: ["React", "Tailwind CSS", "Design responsive"],
            achievements: [
              "Organisation des vues de suivi des dossiers, des documents et des vérifications de données dans une interface cohérente.",
              "Conception d'un parcours de gestion visant à rendre les étapes de formalité plus lisibles pour les utilisateurs.",
              "Développement des vues React de consultation des dossiers et des pièces justificatives pour faciliter le travail des gestionnaires."
            ],
            link: "https://app.ciceria.fr/auth/signin"
          },
          {
            id: "sweetees",
            name: "Sweetees Gift & Ticket",
            role: "Développeur Frontend",
            description:
              "Plateforme 100 % digitale de cartes-cadeaux et de billetterie avec portails Manager et Admin distincts. Développement des interfaces React permettant aux commerçants et aux équipes internes de gérer les offres, les utilisateurs et les parcours de paiement.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "GitLab", "ClickUp"],
            achievements: [
              "Développement des interfaces React des portails Manager et Admin, avec tableaux de bord et vues adaptés aux 3 rôles d'accès définis par le backend.",
              "Intégration côté frontend des API d'authentification JWT et adaptation de la navigation et des vues aux rôles transmis par le backend (RBAC).",
              "Intégration frontend du parcours de paiement Stripe : affichage des statuts, confirmations et erreurs renvoyés par les API backend.",
              "Documentation technique, participation Agile (sprint planning, stand-ups, revues) via ClickUp/GitLab CI/CD, et standardisation de composants UI réutilisables sur les deux portails."
            ],
            link: "https://manager.sweetees.fr/"
          },
          {
            id: "agcff",
            name: "AGCFF",
            role: "Développeur Frontend",
            description:
              "Plateforme de gestion de tournois de football pour la région du Golfe, reliant organisateurs, clubs et fédérations. Centralise planification, résultats en direct et documents officiels de compétition dans une expérience web responsive.",
            tech: ["ReactJS", "TypeScript", "Material UI", "GitHub", "ClickUp"],
            achievements: [
              "Développement d'interfaces réactives pour organisateurs, clubs et fédérations, supportant la gestion multi-tournois avec planification, résultats en temps réel et navigation intuitive sur des structures de compétition complexes.",
              "Intégration côté frontend des actions de génération et de téléchargement des rapports PDF de matchs et des documents de compétition.",
              "Stratégie de tests unitaires et d'intégration atteignant 75%+ de couverture sur les modules critiques, renforçant la fiabilité avant mise en production.",
              "Application des principes DRY/KISS et revues de code ; prototypage assisté par Claude, Cursor et Codex, avec validation du code et des parcours utilisateurs."
            ],
            link: "https://agcff.net/"
          },
          {
            id: "championsmind",
            name: "Champion Mind",
            role: "Développeur Frontend",
            description:
              "Plateforme e-learning reliant enseignants et étudiants via deux portails dédiés. Permet la publication de cours, les évaluations interactives et le suivi des progrès dans un environnement scalable et mobile-friendly.",
            tech: ["ReactJS", "TypeScript", "Material UI", "REST API"],
            achievements: [
              "Développement des interfaces d'une plateforme e-learning à deux portails : création de cours et quiz côté enseignant, contenus et évaluations côté étudiant.",
              "Développement des interfaces de 20+ modules interactifs, des parcours de quiz et des tableaux de suivi, avec affichage des résultats et notes fournis par les API backend.",
              "Composants React structurés et réutilisables pour maintenir la logique UI et accélérer l'ajout de nouvelles fonctionnalités pédagogiques.",
              "Interfaces mobile-first et intégration des API REST avec l'équipe backend ; prototypage et implémentation assistés par Claude et Cursor, avec revue du code généré et validation des parcours utilisateurs."
            ],
            link: ""
          },
          {
            id: "eldowallet",
            name: "Eldo Wallet",
            role: "Développeur Frontend",
            description:
              "Plateforme de fidélisation et marketing mobile pour Apple Wallet et Google Wallet. Développement de l'ensemble des écrans Admin, Manager et Partner en React et TypeScript pour gérer les cartes, notifications et indicateurs de campagne. La plateforme annonce plus d'un million de cartes activées.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "REST API", "GitLab"],
            achievements: [
              "Développement de l'ensemble des écrans Admin, Manager et Partner en React et TypeScript pour gérer les cartes de fidélité, billets et coupons destinés à 2 portefeuilles mobiles : Apple Wallet et Google Wallet.",
              "Intégration frontend des API REST du backend pour mettre à jour les cartes et piloter les notifications ciblées, avec affichage des statuts et gestion des erreurs.",
              "Développement de composants réutilisables de visualisation de données pour présenter les indicateurs des campagnes et faciliter leur suivi depuis le tableau de bord."
            ],
            link: "https://manager.eldowallet.fr/"
          }
        ]
      },
      {
        company: "NEXYM (Monastir, Tunisie)",
        role: "Développeur Frontend — Alternance",
        period: "Fév. 2022 – Déc. 2022",
        description:
          "Développement frontend de Sarabapp, plateforme e-commerce d'abayas traditionnelles, avec Next.js SSR. Intégration du parcours de paiement MyFatoorah et création de composants animés pour faciliter la navigation et les achats.",
        tags: ["Next.js", "Material UI", "TypeScript", "MyFatoorah API", "GitLab", "ClickUp"],
        type: "Alternance",
        projects: [
          {
            id: "sarabapp",
            name: "Sarab App",
            role: "Développeur Frontend",
            description:
              "E-commerce complet pour abayas traditionnelles : catalogue, commande sécurisée et expérience d'achat mobile-first adaptée aux clients du Moyen-Orient.",
            tech: ["Next.js", "TypeScript", "Material UI", "MyFatoorah API", "GitLab", "ClickUp"],
            achievements: [
              "Développement de Sarabapp en Next.js SSR pour améliorer les temps de chargement, le référencement naturel et la navigation du catalogue.",
              "Intégration côté frontend du parcours de paiement MyFatoorah : étapes de commande, statuts et messages d'erreur à partir des API backend.",
              "10+ composants UI animés et micro-interactions CSS, améliorant l'expérience utilisateur et la fluidité du parcours d'achat.",
              "Livraisons itératives via GitLab/ClickUp, corrections rapides en production et alignement continu avec les besoins métier."
            ],
            link: ""
          }
        ]
      },
      {
        company: "ZenHosting (Sousse, Tunisie)",
        role: "Développeur Frontend Web",
        period: "Juil. 2021 – Oct. 2021",
        description:
          "Développement des interfaces de la plateforme média EeKad : accueil, articles, catégories et profils, avec authentification Firebase, contenus REST API et accès contributeur/administrateur. Optimisation du chargement et documentation utilisateur.",
        tags: ["ReactJS", "REST API", "Firebase", "Material UI", "Jira", "GitLab"],
        type: "Stage d'été",
        projects: [
          {
            id: "eekad",
            name: "EeKad",
            role: "Développeur Frontend",
            description:
              "Site d'actualités moderne : accueil, articles, catégories et profils. Combine Firebase, API REST et permissions différenciées pour contributeurs et administrateurs.",
            tech: ["ReactJS", "Firebase", "REST API", "Material UI", "GitLab", "Jira"],
            achievements: [
              "Plateforme EeKad (accueil, articles, catégories, profils) avec Firebase et REST API : lecture fluide et droits clairs pour l'équipe éditoriale.",
              "Pipelines de rendu dynamique pour garder les pages articles rapides, lisibles et faciles à faire évoluer avec la croissance du catalogue.",
              "Optimisation via lazy loading, code splitting et compression — scores Lighthouse > 90 ; documentation technique et guides pour la rédaction."
            ],
            link: ""
          }
        ]
      },
      {
        company: "Dräxlmaier Group (Sousse, Tunisie)",
        role: "Stage de Fin d'Études en Ingénierie (PFE)",
        period: "Jan. 2020 – Juil. 2020",
        description:
          "Stage d'ingénierie orienté contrôle qualité industriel : détection temps réel d'anomalies de sertissage par vision (YOLO sur Raspberry Pi), interface de supervision opérateur et documentation complète de passation.",
        tags: ["Python", "YOLO", "Machine Learning", "Raspberry Pi", "Java Swing"],
        type: "Stage Ingénieur",
        projects: [
          {
            id: "crimping",
            name: "Détecteur d'anomalies de sertissage",
            role: "Stagiaire Systèmes Embarqués (PFE)",
            description:
              "Solution de contrôle qualité IA pour lignes de production automobile. Détecte les défauts de sertissage en temps réel via caméras et alerte les opérateurs via une application de supervision bureau.",
            tech: ["Python", "YOLO", "Machine Learning", "Raspberry Pi", "Java Swing"],
            achievements: [
              "Système de détection temps réel avec modèle YOLO optimisé sur Raspberry Pi, atteignant un taux de détection supérieur à 90% lors des validations terrain en usine.",
              "Intégration des flux caméra et pipelines d'inférence pour un retour de classification quasi instantané sur la ligne.",
              "Interface Java Swing pour visualiser les événements, alerter les opérateurs et faciliter le suivi quotidien ; documentation technique complète pour maintenance et passation."
            ],
            link: ""
          }
        ]
      },
      {
        company: "TCC Informatique (Sousse, Tunisie)",
        role: "Stage de Perfectionnement",
        period: "Jan. 2019 – Mars 2019",
        description:
          "Stage IoT : distributeur intelligent de médicaments — hardware Arduino pour les prises programmées, application Android pour configuration à distance, suivi et alertes soignants via Firebase.",
        tags: ["Android", "Arduino", "Firebase"],
        type: "Stage Professionnel",
        projects: [
          {
            id: "pilldispenser",
            name: "Smart Pill Dispenser",
            role: "Développeur IoT & Android",
            description:
              "Prototype santé connectée : distributeur motorisé (Arduino) et application Android compagnon. Prises programmées, suivi à distance et alertes proactives pour patients et aidants.",
            tech: ["Android", "Arduino", "Firebase", "Java", "C++"],
            achievements: [
              "Logique Arduino pour distribuer les doses aux horaires prévus, surveiller la rotation du carrousel et remonter l'état du dispositif.",
              "Application Android avec Firebase Realtime Database : planification, historique des prises et monitoring en direct.",
              "Notifications Firebase Cloud Messaging pour alerter les soignants en cas d'oubli ou d'anomalie sur le distributeur.",
              "Documentation câblage, firmware et parcours mobile pour faciliter les tests et la maintenance future."
            ],
            link: ""
          }
        ]
      },
    ],
  },
  skills: {
    title: "Mes Compétences et Développement",
    items: [
      {
        icon: "⚡",
        name: "Rapide",
        description:
          "Temps de chargement optimisés et interactions fluides pour des applications web haute performance.",
      },
      {
        icon: "📱",
        name: "Responsive",
        description:
          "Mises en page parfaitement adaptées à toutes les tailles d'écran, du mobile au desktop.",
      },
      {
        icon: "🎯",
        name: "Intuitif",
        description:
          "Design centré utilisateur, élégant et simple à utiliser et à naviguer.",
      },
      {
        icon: "✨",
        name: "Dynamique",
        description:
          "Éléments interactifs avec animations fluides qui donnent vie à vos idées numériques.",
      },
    ],
  },
  services: {
    title: "Mes Services",
    service1: {
      title: "Développement Front-End Moderne",
      description:
        "Création d'interfaces performantes, réactives et optimisées grâce aux technologies React.js, Next.js et TypeScript.",
    },
    service2: {
      title: "UI/UX Design & Intégration",
      description:
        "Transformation de maquettes Figma ou Adobe XD en expériences utilisateur fluides, accessibles et adaptées à tous les appareils.",
    },
    service3: {
      title: "Applications Web Sur-Mesure",
      description:
        "Conception et développement de plateformes web sur mesure : dashboards, systèmes de gestion, applications e-commerce ou fintech.",
    },
    service4: {
      title: "Intégration d'APIs & Services Tiers",
      description:
        "Connexion fluide à des APIs REST, systèmes de paiement (Stripe, MyFatoorah), outils de notification ou gestion de contenu.",
    },
    service5: {
      title: "Performance & Sécurité",
      description:
        "Optimisation des temps de chargement, SEO technique, bonnes pratiques de sécurité et tests pour une application rapide et fiable.",
    },
    service6: {
      title: "Méthodologie Agile & Travail d'Équipe",
      description:
        "Collaboration efficace en environnement Agile (Scrum), gestion via GitLab, Jira ou ClickUp, avec revues de code régulières et documentation.",
    },
  },
  solutions: {
    title: "Solutions IT Sur-Mesure Adaptées à Vos Besoins",
    subtitle:
      "Des solutions IT innovantes pour optimiser vos opérations, renforcer la sécurité et améliorer l'expérience client.",
    items: [
      {
        title: "Développement Web Responsive",
        points: [
          "Développement React & Next.js personnalisé",
          "HTML5, CSS3 et TypeScript",
          "Compatibilité cross-navigateur",
        ],
      },
      {
        title: "Intégration Design UI/UX",
        points: [
          "Conversion Figma vers React",
          "Implémentation pixel-perfect",
          "Conformité accessibilité",
        ],
      },
      {
        title: "Optimisation des Performances",
        points: [
          "Optimisation Core Web Vitals",
          "Code splitting & lazy loading",
          "Bonnes pratiques SEO",
        ],
      },
      {
        title: "Intégration API & Systèmes",
        points: [
          "Intégration API REST",
          "Passerelles de paiement (Stripe, MyFatoorah)",
          "Synchronisation de données en temps réel",
        ],
      },
    ],
  },
  work: {
    imagePreview: "Aperçu du projet",
    logo: "Logo",
    title: "Mes Projets",
    navigation: "Carrousel des projets",
    page: "Page",
    of: "sur",
    previousPage: "Projets précédents",
    nextPage: "Projets suivants",
    viewSite: "→ Voir le site",
  },
  projects: {
    astrolab: {
      name: "Astrolab",
      description:
        "Landing page Next.js : services, réalisations et contact. Responsive, animations Motion. Prototypage assisté par IA, revue du code et validation des parcours.",
      technologies: "Next.js, Motion, Shadcn/ui, Design responsive",
    },
    talinty: {
      name: "Talinty",
      description:
        "Landing page Next.js présentant une solution de recrutement assisté par IA, ses fonctionnalités et les demandes de démo. Animations Motion, code et parcours validés.",
      technologies: "Next.js, Motion, Shadcn/ui, Design responsive",
    },
    ciceria: {
      name: "Ciceria",
      description:
        "Back-office React pour les formalités juridiques : interfaces responsive de gestion des utilisateurs, opérations, documents et référentiels.",
      technologies: "React, Tailwind CSS, Design responsive",
    },
    eldowallet: {
      name: "Eldo Wallet",
      description:
        "Tous les écrans Admin, Manager et Partner en React/TypeScript pour Apple Wallet et Google Wallet. La plateforme annonce plus d'un million de cartes activées.",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, REST API, GitLab",
    },
    sweetees: {
      name: "Sweetees",
      description:
        "Interfaces React Manager/Admin pour les cartes-cadeaux et la billetterie : vues par rôle, connexion JWT et intégration frontend du paiement Stripe.",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, GitLab, ClickUp",
    },
    sarabapp: {
      name: "Sarab App",
      description:
        "Interfaces e-commerce Next.js SSR pour abayas traditionnelles : navigation du catalogue, intégration frontend du paiement MyFatoorah et 10+ composants animés pour fluidifier le parcours d'achat.",
      technologies: "Next.js, TypeScript, Material UI, MyFatoorah API, GitLab, ClickUp",
    },
    championsmind: {
      name: "Champion Mind",
      description:
        "Interfaces React pour enseignants et étudiants : cours, 20+ modules interactifs, parcours de quiz et suivi des résultats fournis par les API backend, avec une mise en page mobile-first.",
      technologies: "ReactJS, TypeScript, Material UI, REST API",
    },
    agcff: {
      name: "AGCFF",
      description:
        "Interfaces React de gestion de tournois dans le Golfe : planification, résultats et rapports PDF, avec 75%+ de couverture de tests sur les modules critiques.",
      technologies: "ReactJS, TypeScript, Material UI, GitHub, ClickUp",
    },
    eekad: {
      name: "EeKad",
      description:
        "Plateforme d'actualités avec auth Firebase, contenu REST API, accès par rôles et optimisations performances (scores Lighthouse > 90).",
      technologies: "ReactJS, Firebase, REST API, Material UI, GitLab, Jira",
    },
  },
  contact: {
    title: "Me Contacter",
    subtitle: "Travaillons Ensemble",
    description:
      "Les grandes idées méritent une grande exécution. Je crée des expériences web de haute qualité centrées sur l'utilisateur qui non seulement sont belles mais fonctionnent parfaitement. Donnons vie à votre vision — contactez-moi et construisons quelque chose d'extraordinaire ensemble !",
    form: {
      name: "Votre Nom",
      email: "Votre Email",
      message: "Votre Message",
      namePlaceholder: "Entrez Votre Nom",
      emailPlaceholder: "Entrez Votre Email",
      messagePlaceholder: "Entrez Votre Message",
      submit: "Envoyer Maintenant",
      submitting: "Envoi en cours...",
    },
    details: {
      email: "Mosbahoussama19@gmail.com",
      phone: "+216 20 009 536 / 54 809 536",
      location: "Sousse, Tunisie",
    },
    toast: {
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi. Veuillez réessayer.",
    },
  },
  contactModal: {
    title: "Me Contacter",
    subtitle: "Travaillons ensemble sur des projets incroyables !",
    email: "Email",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    github: "GitHub",
  },
  footer: {
    description:
      "Ingénieur Frontend basé à Sousse, Tunisie, avec plus de 3 ans d'expérience. Développement d'interfaces web chez Astrolab Agency : applications SaaS, fintech, e-commerce et e-learning.",
    rights: "Créé avec ❤ par © Oussama Mosbah 2026. Tous droits réservés.",
    terms: "Conditions de Service",
    privacy: "Politique de Confidentialité",
    connect: "Me Contacter",
    quickLinks: "Liens Rapides",
    socialMedia: "Réseaux Sociaux",
    newsletter: "Restez informé de mes derniers projets et réalisations.",
    emailPlaceholder: "Entrez votre adresse email",
    subscribe: "S'abonner",
    subscribeSuccess: "Merci pour votre abonnement !",
    subscribeError: "Une erreur est survenue.",
  },
};
