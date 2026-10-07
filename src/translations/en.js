export const en = {
  nav: {
    home: "Home",
    about: "About Me",
    experience: "Experience",
    services: "Services",
    portfolio: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello,",
    title: "I am",
    name: "Oussama Mosbah",
    subtitle: "Frontend Engineer",
    roles: ["Frontend Dev", "React Expert", "UI Integrator"],
    description:
      "Delivering efficient, scalable and innovative web applications. Building high-performance interfaces with modern technologies.",
    statusText: "Available for work",
    connectButton: "Connect With Me",
    resumeButton: "My Resume",
  },
  about: {
    title: "About Me",
    description1:
      "I am a skilled Frontend Engineer with over three years of experience, contributing to the success of leading organizations by delivering high-quality, user-centric solutions.",
    description2:
      "My passion for frontend development is demonstrated through both my extensive experience and the unwavering commitment and enthusiasm I bring to every project.",
    skills: {
      htmlCss: "HTML & CSS",
      reactJs: "React.js",
      javascript: "JavaScript",
      nextJs: "Next.js",
      typescript: "TypeScript",
      tailwind: "Tailwind CSS",
    },
    achievements: {
      experience: "Years of Experience",
      experienceValue: "3+",
      projects: "Projects Completed",
      projectsValue: "9+",
      clients: "Happy Clients",
      clientsValue: "5+",
    },
  },
  experience: {
    title: "Professional Experience",
    jobs: [
      {
        company: "Astrolab Agency (Sousse, Tunisia)",
        role: "Front-End Engineer",
        period: "Jan 2023 – Present",
        description:
          "Frontend development across seven projects at Astrolab Agency: SaaS, fintech and e-learning applications, the Astrolab and Talinty landing pages, and Ciceria's management interface. Built responsive React and Next.js interfaces, integrated APIs and payments, and worked with code reviews, Agile practices and AI-assisted development where relevant.",
        tags: ["ReactJS", "Next.js", "TypeScript", "Material UI", "Stripe API", "REST API", "GitLab", "ClickUp"],
        type: "Full-time",
        projects: [
          {
            id: "astrolab",
            name: "Astrolab",
            role: "Frontend Developer",
            description:
              "Developed Astrolab's Next.js landing page, presenting services, selected work and contact journeys across mobile and desktop. Added Motion (Framer Motion) animations and used AI-assisted development with code review and user-flow validation.",
            tech: ["Next.js", "Motion", "Shadcn/ui", "Responsive design"],
            achievements: [
              "Built a Next.js landing page organized around services, case studies and contact opportunities.",
              "Adapted the sections and navigation for mobile and desktop screens.",
              "Used AI for prototyping and implementation, with review of generated code and validation of user journeys."
            ],
            link: "https://astrolab.co/fr/"
          },
          {
            id: "talinty",
            name: "Talinty",
            role: "Frontend Developer",
            description:
              "Developed a responsive Next.js landing page presenting Talinty's AI-assisted recruitment solution, its features and demo requests. Added Motion (Framer Motion) animations and used AI-assisted prototyping with code review and user-flow validation.",
            tech: ["Next.js", "Motion", "Shadcn/ui", "Responsive design"],
            achievements: [
              "Developed a clear presentation of the recruitment workflow and the platform's value.",
              "Presented the product's candidate assessment features and calls to action for demo requests.",
              "Built responsive layouts and Motion animations; used AI-assisted prototyping and implementation with code review and user-flow validation."
            ],
            link: "https://talinty.com/en"
          },
          {
            id: "ciceria",
            name: "Ciceria",
            role: "Frontend Developer",
            description:
              "Developed Ciceria's React back office for a legal-formality platform used by legal professionals. Designed structured interfaces for administering users, operations, documents and business reference data.",
            tech: ["React", "Tailwind CSS", "Responsive design"],
            achievements: [
              "Organized case tracking, documents and data checks into a coherent management interface.",
              "Designed a workflow that makes each legal-formality step easier for users to follow.",
              "Built React views for reviewing cases and supporting documents to help managers navigate their daily work."
            ],
            link: "https://app.ciceria.fr/auth/signin"
          },
          {
            id: "sweetees",
            name: "Sweetees Gift & Ticket",
            role: "Frontend Developer",
            description:
              "Fully digital gift-card and ticketing platform with separate Manager and Admin portals. Developed the React interfaces that enable merchants and internal teams to manage offers, users and payment journeys.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "GitLab", "ClickUp"],
            achievements: [
              "Built the React interfaces for the Manager and Admin portals, with dashboards and views tailored to the 3 access roles defined by the backend.",
              "Integrated JWT authentication APIs on the frontend and adapted navigation and views to roles provided by the backend (RBAC).",
              "Integrated the frontend Stripe payment journey, displaying payment status, confirmations and errors returned by backend APIs.",
              "Maintained technical documentation and participated in full Agile ceremonies (sprint planning, stand-ups, code reviews) via ClickUp and GitLab CI/CD, while standardizing reusable UI components across both portals."
            ],
            link: "https://manager.sweetees.fr/"
          },
          {
            id: "agcff",
            name: "AGCFF",
            role: "Frontend Developer",
            description:
              "Football tournament management platform for the Gulf region, connecting organizers, clubs, and federations. Centralizes scheduling, live results, and official competition documentation in a single responsive web experience.",
            tech: ["ReactJS", "TypeScript", "Material UI", "GitHub", "ClickUp"],
            achievements: [
              "Developed fully responsive interfaces for organizers, clubs, and federations, supporting multi-tournament management with real-time match scheduling, live results, and intuitive navigation across complex competition structures.",
              "Integrated frontend actions for generating and downloading official match reports and competition documents as PDFs.",
              "Designed and executed unit and integration tests achieving 75%+ code coverage on critical data-handling modules, strengthening reliability before production releases.",
              "Applied DRY/KISS principles and code reviews; used Claude, Cursor and Codex for assisted prototyping, followed by code and user-flow validation."
            ],
            link: "https://agcff.net/"
          },
          {
            id: "championsmind",
            name: "Champion Mind",
            role: "Frontend Developer",
            description:
              "Online e-learning platform connecting instructors and students through dedicated portals. Supports course publishing, interactive assessments, and progress tracking in a scalable, mobile-friendly learning environment.",
            tech: ["ReactJS", "TypeScript", "Material UI", "REST API"],
            achievements: [
              "Developed the interfaces of a dual-portal e-learning platform for instructor course and quiz creation, plus student content and assessments.",
              "Built frontend interfaces for 20+ interactive learning modules, quiz journeys and progress dashboards, displaying results and grades supplied by backend APIs.",
              "Built structured, reusable React components to keep UI logic maintainable across modules and accelerate iteration on new pedagogical features.",
              "Delivered mobile-first interfaces and integrated REST APIs with the backend team; used Claude and Cursor for prototyping and implementation, with generated-code review and user-flow validation."
            ],
            link: ""
          },
          {
            id: "eldowallet",
            name: "Eldo Wallet",
            role: "Frontend Developer",
            description:
              "Customer loyalty and mobile marketing platform for Apple Wallet and Google Wallet. Developed all screens across the Admin, Manager and Partner portals using React and TypeScript to manage cards, notifications and campaign metrics. The platform reports over one million activated cards.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "REST API", "GitLab"],
            achievements: [
              "Developed all screens across the Admin, Manager and Partner portals using React and TypeScript to manage loyalty cards, tickets and coupons for 2 mobile wallets: Apple Wallet and Google Wallet.",
              "Integrated backend REST APIs on the frontend to update cards and manage targeted notifications, with status displays and error handling.",
              "Built reusable data-visualization components to present campaign metrics and help merchants monitor campaigns from the dashboard."
            ],
            link: "https://manager.eldowallet.fr/"
          }
        ]
      },
      {
        company: "NEXYM (Monastir, Tunisia)",
        role: "Frontend Developer — Apprenticeship",
        period: "Feb 2022 – Dec 2022",
        description:
          "Developed the frontend of Sarabapp, an e-commerce platform for traditional abayas, using Next.js SSR. Integrated the MyFatoorah checkout journey and built animated components to support catalog navigation and purchasing.",
        tags: ["Next.js", "Material UI", "TypeScript", "MyFatoorah API", "GitLab", "ClickUp"],
        type: "Apprenticeship",
        projects: [
          {
            id: "sarabapp",
            name: "Sarab App",
            role: "Frontend Developer",
            description:
              "Full-featured e-commerce platform for traditional women's abayas, including catalog browsing, secure checkout, and a mobile-first shopping experience tailored to Middle Eastern customers.",
            tech: ["Next.js", "TypeScript", "Material UI", "MyFatoorah API", "GitLab", "ClickUp"],
            achievements: [
              "Built Sarabapp with Next.js SSR to improve load times, SEO and catalog navigation.",
              "Integrated the frontend MyFatoorah checkout journey, displaying order steps, payment statuses and error messages from backend APIs.",
              "Designed and implemented 10+ animated UI components with CSS micro-interactions, improving overall user engagement and contributing to a smoother browsing and purchasing experience.",
              "Worked closely with the team via GitLab and ClickUp to ship iterative releases, fix production issues quickly, and keep the storefront aligned with business requirements."
            ],
            link: ""
          }
        ]
      },
      {
        company: "ZenHosting (Sousse, Tunisia)",
        role: "Frontend Web Developer",
        period: "Jul 2021 – Oct 2021",
        description:
          "Developed EeKad's frontend interfaces: homepage, articles, categories and profiles, with Firebase authentication, REST API content and contributor/admin access. Optimized loading performance and wrote user documentation.",
        tags: ["ReactJS", "REST API", "Firebase", "Material UI", "Jira", "GitLab"],
        type: "Summer Internship",
        projects: [
          {
            id: "eekad",
            name: "EeKad",
            role: "Frontend Developer",
            description:
              "Modern news and media website covering homepage, articles, categories, and user profiles. Combines Firebase authentication, REST API content delivery, and differentiated access for contributors and administrators.",
            tech: ["ReactJS", "Firebase", "REST API", "Material UI", "GitLab", "Jira"],
            achievements: [
              "Built the EeKad platform (homepage, articles, categories, profiles) with Firebase authentication and REST API integration, delivering a smooth reading flow and clear role-based permissions for editorial staff.",
              "Structured dynamic content rendering pipelines to keep article pages fast, readable, and easy to maintain as the publication catalog grew.",
              "Optimized performance through lazy loading, code splitting, and asset compression, achieving Lighthouse scores above 90; authored technical documentation and user guides for the editorial team."
            ],
            link: ""
          }
        ]
      },
      {
        company: "Dräxlmaier Group (Sousse, Tunisia)",
        role: "Final Year Engineering Internship (PFE)",
        period: "Jan 2020 – Jul 2020",
        description:
          "Engineering internship focused on industrial quality control: real-time cable crimping anomaly detection with computer vision (YOLO on Raspberry Pi), operator supervision UI, and full technical handover documentation.",
        tags: ["Python", "YOLO", "Machine Learning", "Raspberry Pi", "Java Swing"],
        type: "Engineering Internship",
        projects: [
          {
            id: "crimping",
            name: "Crimping Anomaly Detector",
            role: "Embedded Systems Intern (PFE)",
            description:
              "AI-powered quality control solution for automotive production lines. Detects crimping defects in real time via camera feeds and alerts operators through a dedicated supervision desktop application.",
            tech: ["Python", "YOLO", "Machine Learning", "Raspberry Pi", "Java Swing"],
            achievements: [
              "Developed a real-time crimping anomaly detection system using an optimized YOLO model on Raspberry Pi, reaching 90%+ detection accuracy during field validation on the factory floor.",
              "Integrated camera streams and inference pipelines to provide near-instant classification feedback on the production line.",
              "Built a Java Swing supervision interface to visualize detection events, alert operators, and support daily monitoring; authored complete technical documentation for maintenance and knowledge transfer."
            ],
            link: ""
          }
        ]
      },
      {
        company: "TCC Informatique (Sousse, Tunisia)",
        role: "Professional Internship",
        period: "Jan 2019 – Mar 2019",
        description:
          "IoT internship delivering a smart medication dispenser: Arduino-based hardware for scheduled dosing, paired with an Android app for remote configuration, monitoring, and caregiver alerts via Firebase.",
        tags: ["Android", "Arduino", "Firebase"],
        type: "Professional Internship",
        projects: [
          {
            id: "pilldispenser",
            name: "Smart Pill Dispenser",
            role: "IoT & Android Developer",
            description:
              "Connected health IoT prototype combining a motorized pill dispenser (Arduino) and a companion Android app. Enables scheduled dosing, remote monitoring, and proactive alerts for patients and caregivers.",
            tech: ["Android", "Arduino", "Firebase", "Java", "C++"],
            achievements: [
              "Programmed Arduino logic to dispense medication at scheduled times, monitor carousel rotation, and report device status reliably.",
              "Developed an Android app with Firebase Realtime Database for remote scheduling, dose history, and live device monitoring.",
              "Configured Firebase Cloud Messaging push notifications to alert caregivers when a dose is missed or the dispenser requires attention.",
              "Documented hardware wiring, firmware behavior, and mobile app flows to support testing and future maintenance."
            ],
            link: ""
          }
        ]
      },
    ],
  },
  skills: {
    title: "My Skills and Development",
    items: [
      {
        icon: "⚡",
        name: "Fast",
        description:
          "Optimized load times and smooth interactions for high-performance web applications.",
      },
      {
        icon: "📱",
        name: "Responsive",
        description:
          "Beautifully adapted layouts for every screen size from mobile to desktop.",
      },
      {
        icon: "🎯",
        name: "Intuitive",
        description:
          "User-centered design that is elegant and simple to use and navigate.",
      },
      {
        icon: "✨",
        name: "Dynamic",
        description:
          "Interactive elements with fluid animations that bring your digital ideas to life.",
      },
    ],
  },
  services: {
    title: "My Services",
    service1: {
      title: "Modern Front-End Development",
      description:
        "Creation of high-performance, responsive and optimized interfaces using React.js, Next.js and TypeScript technologies.",
    },
    service2: {
      title: "UI/UX Design & Integration",
      description:
        "Transformation of Figma or Adobe XD mockups into smooth, accessible user experiences adapted to all devices.",
    },
    service3: {
      title: "Custom Web Applications",
      description:
        "Design and development of custom web platforms: dashboards, management systems, e-commerce or fintech applications.",
    },
    service4: {
      title: "API & Third-Party Services Integration",
      description:
        "Smooth connection to REST APIs, payment systems (Stripe, MyFatoorah), notification tools or content management.",
    },
    service5: {
      title: "Performance & Security",
      description:
        "Loading time optimization, technical SEO, security best practices and testing for a fast and reliable application.",
    },
    service6: {
      title: "Agile Methodology & Teamwork",
      description:
        "Effective collaboration in Agile environment (Scrum), management via GitLab, Jira or ClickUp, with regular code reviews and documentation.",
    },
  },
  solutions: {
    title: "Custom IT Solutions Tailored to Your Needs",
    subtitle:
      "Delivering innovative IT solutions to streamline your operations, enhance security, and elevate your customer experience.",
    items: [
      {
        title: "Responsive Web Development",
        points: [
          "Custom React & Next.js development",
          "HTML5, CSS3, and TypeScript",
          "Cross-browser compatibility",
        ],
      },
      {
        title: "UI/UX Design Integration",
        points: [
          "Figma to React conversion",
          "Pixel-perfect implementation",
          "Accessibility compliance",
        ],
      },
      {
        title: "Performance Optimization",
        points: [
          "Core Web Vitals optimization",
          "Code splitting & lazy loading",
          "SEO best practices",
        ],
      },
      {
        title: "API & System Integration",
        points: [
          "REST API integration",
          "Payment gateways (Stripe, MyFatoorah)",
          "Real-time data synchronization",
        ],
      },
    ],
  },
  work: {
    imagePreview: "Project preview",
    logo: "Logo",
    title: "My Projects",
    navigation: "Project carousel",
    page: "Page",
    of: "of",
    previousPage: "Previous projects",
    nextPage: "Next projects",
    viewSite: "→ View site",
  },
  projects: {
    astrolab: {
      name: "Astrolab",
      description:
        "Next.js landing page for agency services, work and contact. Responsive layouts, Motion animations and AI-assisted prototyping, with code review and user-flow validation.",
      technologies: "Next.js, Motion, Shadcn/ui, Responsive Design",
    },
    talinty: {
      name: "Talinty",
      description:
        "Next.js landing page presenting an AI-assisted recruitment solution, its features and demo requests. Responsive layouts, Motion animations and AI-assisted development, with code review and user-flow validation.",
      technologies: "Next.js, Motion, Shadcn/ui, Responsive Design",
    },
    ciceria: {
      name: "Ciceria",
      description:
        "React back office for legal formalities, with responsive interfaces for managing users, operations, documents and reference data.",
      technologies: "React, Tailwind CSS, Responsive Design",
    },
    eldowallet: {
      name: "Eldo Wallet",
      description:
        "Built all Admin, Manager and Partner screens in React/TypeScript for Apple Wallet and Google Wallet. The platform reports over one million activated cards.",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, REST API, GitLab",
    },
    sweetees: {
      name: "Sweetees",
      description:
        "React Manager/Admin interfaces for gift cards and ticketing: role-based views, JWT sign-in and frontend Stripe checkout integration.",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, GitLab, ClickUp",
    },
    sarabapp: {
      name: "Sarab App",
      description:
        "Next.js SSR e-commerce interfaces for traditional abayas: catalog navigation, frontend MyFatoorah checkout integration and 10+ animated components to streamline the shopping journey.",
      technologies: "Next.js, TypeScript, Material UI, MyFatoorah API, GitLab, ClickUp",
    },
    championsmind: {
      name: "Champion Mind",
      description:
        "React interfaces for instructors and students: courses, 20+ interactive modules, quiz journeys and results supplied by backend APIs, delivered through mobile-first layouts.",
      technologies: "ReactJS, TypeScript, Material UI, REST API",
    },
    agcff: {
      name: "AGCFF",
      description:
        "React tournament-management interfaces for Gulf organizers, clubs and federations: scheduling, results and access to PDF reports, with 75%+ test coverage on critical modules.",
      technologies: "ReactJS, TypeScript, Material UI, GitHub, ClickUp",
    },
    eekad: {
      name: "EeKad",
      description:
        "News platform with Firebase auth, REST API content, role-based access, and performance optimizations achieving Lighthouse scores above 90.",
      technologies: "ReactJS, Firebase, REST API, Material UI, GitLab, Jira",
    },
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Let's work together",
    description:
      "Great ideas deserve great execution. I craft high-quality, user-centric web experiences that not only look good but work flawlessly. Let's bring your vision to life—contact me and let's build something extraordinary together!",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      namePlaceholder: "Enter Your Name",
      emailPlaceholder: "Enter Your Email",
      messagePlaceholder: "Enter Your Message",
      submit: "Submit Now",
      submitting: "Sending...",
    },
    details: {
      email: "Mosbahoussama19@gmail.com",
      phone: "+216 20 009 536 / 54 809 536",
      location: "Sousse, Tunisia",
    },
    toast: {
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
    },
  },
  contactModal: {
    title: "Connect With Me",
    subtitle: "Let's work together on amazing projects!",
    email: "Email",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp",
    github: "GitHub",
  },
  footer: {
    description:
      "Frontend Engineer based in Sousse, Tunisia, with 3+ years of experience. Developing web interfaces at Astrolab Agency across SaaS, fintech, e-commerce and e-learning applications.",
    rights: "Built with ❤ by © Oussama Mosbah 2026. All rights reserved.",
    terms: "Terms of Services",
    privacy: "Privacy Policy",
    connect: "Connect with me",
    quickLinks: "Quick Links",
    socialMedia: "Social Media",
    newsletter: "Stay updated with my latest projects and insights.",
    emailPlaceholder: "Enter your email address",
    subscribe: "Subscribe",
    subscribeSuccess: "Thank you for subscribing!",
    subscribeError: "Something went wrong.",
  },
};
