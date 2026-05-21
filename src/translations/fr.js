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
    subtitle: "Développeur Frontend",
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
      "Je suis un développeur Frontend qualifié avec plus de trois ans d'expérience, contribuant au succès d'organisations de premier plan en fournissant des solutions de haute qualité centrées sur l'utilisateur.",
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
      projectsValue: "6+",
      clients: "Clients Satisfaits",
      clientsValue: "5+",
    },
  },
  experience: {
    title: "Expérience Professionnelle",
    jobs: [
      {
        company: "Astrolab Agency (Sousse, Tunisie)",
        role: "Développeur Frontend",
        period: "Jan. 2023 – Aujourd'hui",
        description:
          "Livraison d'applications web SaaS, fintech et e-learning en production sur quatre missions client chez Astrolab Agency. Interfaces Manager/Admin à double portail, authentification JWT/RBAC, intégrations Stripe et REST API, qualité de code maintenue via cérémonies Agile, revues par les pairs et développement assisté par IA (Cursor, Claude) sur Sweetees, AGCFF, Champion Mind et Eldo Wallet.",
        tags: ["ReactJS", "Material UI", "TypeScript", "Stripe API", "REST API", "GitLab", "ClickUp"],
        type: "CDI",
        projects: [
          {
            id: "sweetees",
            name: "Sweetees Gift & Ticket",
            role: "Développeur Frontend",
            description:
              "Plateforme complète de cartes-cadeaux et billetterie de concerts avec portails Manager et Admin distincts. Conçue pour un trafic quotidien élevé, des paiements sécurisés et des parcours adaptés aux commerçants et aux équipes internes.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "GitLab", "ClickUp"],
            achievements: [
              "Conception et développement d'une application à double portail (Manager et Admin) desservant 200+ utilisateurs enregistrés sur 3 rôles, avec tableaux de bord différenciés et gestion granulaire des permissions.",
              "Architecture d'une authentification multi-rôles JWT/RBAC assurant une gestion sécurisée et fluide des sessions pour l'ensemble des catégories d'utilisateurs.",
              "Intégration Stripe gérant 100+ transactions mensuelles (cartes-cadeaux et concerts), incluant confirmation temps réel, gestion d'erreurs et traitement des événements webhook.",
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
              "Pipeline de génération automatique de PDF pour rapports officiels et documents de compétition, réduisant significativement la charge de travail administratif des équipes fédérales.",
              "Stratégie de tests unitaires et d'intégration atteignant 75%+ de couverture sur les modules critiques, renforçant la fiabilité avant mise en production.",
              "Standards de code propre (DRY, KISS, conventions) via revues régulières et outils IA (Cursor, Claude), améliorant la maintenabilité et accélérant les livraisons hebdomadaires."
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
              "Conception d'une plateforme e-learning à double portail : dashboard enseignant (cours, quiz, modules) et interface étudiant pour contenus et évaluations en ligne.",
              "Implémentation de 20+ modules interactifs avec quiz temps réel, notation automatique et tableaux de suivi pour enseignants et étudiants.",
              "Composants React structurés et réutilisables pour maintenir la logique UI et accélérer l'ajout de nouvelles fonctionnalités pédagogiques.",
              "Réactivité multi-appareils en mobile-first, coordination REST API avec le backend, et outils IA (Claude, Cursor) pour optimiser les composants et résoudre les cas limites UI."
            ],
            link: ""
          },
          {
            id: "eldowallet",
            name: "Eldo Wallet",
            role: "Développeur Frontend",
            description:
              "SaaS de fidélisation et portefeuilles mobiles pour toucher les clients via Apple Wallet et Google Wallet. Regroupe gestion des passes, notifications ciblées et analytics de campagne dans un tableau de bord marchand unifié.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "REST API", "GitLab"],
            achievements: [
              "Tableau de bord marchand pour concevoir, publier et gérer cartes de fidélité, billets et coupons dans Apple/Google Wallet — sans application mobile dédiée côté client final.",
              "Moteur de mise à jour des passes en temps réel et notifications push géolocalisées : 72% d'opt-in et 35% de réduction de coût par rapport aux SMS.",
              "Composants de dataviz réutilisables et vues analytics (engagement, coupons, fréquence de visite) pour les équipes marketing retail, restauration et secteur public.",
              "Collaboration avec backend et produit sur les flux REST API et Stripe, assurant une synchronisation fiable entre dashboard et expérience portefeuille utilisateur."
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
          "Pilotage du développement frontend de Sarabapp, plateforme e-commerce d'abayas traditionnelles. Livraison Next.js SSR, intégration MyFatoorah pour les marchés régionaux et interactions UI soignées renforçant conversion et confiance utilisateur.",
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
              "Plateforme Sarabapp en Next.js SSR : temps de chargement mesurables nettement inférieurs à une React SPA classique, meilleur SEO et navigation fluide entre catalogue et tunnel de commande.",
              "Intégration MyFatoorah pour un checkout sécurisé et localisé, adapté aux besoins du marché moyen-oriental avec support multi-devises.",
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
          "Conception et développement de la plateforme média EeKad — pages de contenu, rôles utilisateurs, authentification Firebase et workflows REST — avec un fort accent sur performance, lisibilité et ergonomie éditoriale.",
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
    title: "Mes Projets",
    showMore: "Voir Plus",
    viewSite: "→ Voir le site",
  },
  projects: {
    eldowallet: {
      name: "Eldo Wallet",
      description:
        "SaaS fidélisation et portefeuilles mobiles — tableau de bord marchand Apple/Google Wallet, mises à jour temps réel, notifications push géolocalisées et analytics (72% opt-in, -35% coût vs SMS).",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, REST API, GitLab",
    },
    sweetees: {
      name: "Sweetees",
      description:
        "Plateforme cartes-cadeaux et billetterie avec portails Manager/Admin, auth JWT/RBAC pour 200+ utilisateurs enregistrés et Stripe (100+ transactions mensuelles).",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, GitLab, ClickUp",
    },
    sarabapp: {
      name: "Sarab App",
      description:
        "E-commerce Next.js SSR pour abayas traditionnelles — temps de chargement mesurables inférieurs à une React SPA, checkout MyFatoorah localisé et 10+ composants animés.",
      technologies: "Next.js, TypeScript, Material UI, MyFatoorah API, GitLab, ClickUp",
    },
    championsmind: {
      name: "Champion Mind",
      description:
        "Plateforme e-learning double portail — dashboard enseignant, évaluations étudiant, 20+ modules interactifs, quiz temps réel, notation auto et intégration REST API mobile-first.",
      technologies: "ReactJS, TypeScript, Material UI, REST API",
    },
    agcff: {
      name: "AGCFF",
      description:
        "Gestion tournois football Golfe pour organisateurs, clubs et fédérations — gestion multi-tournois, PDF automatisés et 75%+ couverture tests sur modules critiques.",
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
      "Développeur Frontend basé à Sousse, Tunisie, avec 3 ans d'expérience au sein d'Astrolab Agency, spécialisée dans les solutions web innovantes et les applications métier à haute valeur ajoutée.",
    rights: "Créé avec ❤ par © Oussama Mosbah 2025. Tous droits réservés.",
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
