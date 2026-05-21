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
    subtitle: "Frontend Developer",
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
      "I am a skilled Frontend Developer with over three years of experience, contributing to the success of leading organizations by delivering high-quality, user-centric solutions.",
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
      projectsValue: "6+",
      clients: "Happy Clients",
      clientsValue: "5+",
    },
  },
  experience: {
    title: "Professional Experience",
    jobs: [
      {
        company: "Astrolab Agency (Sousse, Tunisia)",
        role: "Frontend Developer",
        period: "Jan 2023 – Present",
        description:
          "Delivered production-grade SaaS, fintech, and e-learning web applications across four client missions at Astrolab Agency. Built dual-portal Manager/Admin interfaces with JWT/RBAC authentication, Stripe and REST API integrations, and maintained high code quality through Agile ceremonies, peer reviews, and AI-assisted development (Cursor, Claude) on Sweetees, AGCFF, Champion Mind, and Eldo Wallet.",
        tags: ["ReactJS", "Material UI", "TypeScript", "Stripe API", "REST API", "GitLab", "ClickUp"],
        type: "Full-time",
        projects: [
          {
            id: "sweetees",
            name: "Sweetees Gift & Ticket",
            role: "Frontend Developer",
            description:
              "End-to-end gift card and concert ticketing platform with separate Manager and Admin portals. Designed for secure checkout flows and role-based workflows for merchants and internal operations teams.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "GitLab", "ClickUp"],
            achievements: [
              "Led the design and development of a dual-interface web application (Manager and Admin portals) serving 200+ registered users across 3 distinct access roles, with tailored dashboards and granular permission management per role.",
              "Architected a multi-role authentication system using JWT tokens and RBAC, ensuring secure and seamless session handling across all user categories.",
              "Integrated the Stripe payment gateway handling 100+ monthly transactions for gift cards and concert tickets, including real-time confirmation, error handling, and webhook event processing.",
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
              "Engineered an automated PDF generation pipeline for official match reports and competition documents, significantly reducing manual administrative workload for federation staff.",
              "Designed and executed unit and integration tests achieving 75%+ code coverage on critical data-handling modules, strengthening reliability before production releases.",
              "Applied clean code standards (DRY, KISS, naming conventions) through peer reviews and AI-assisted development (Cursor, Claude), improving maintainability and accelerating weekly feature delivery."
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
              "Designed and built a dual-portal e-learning platform: an instructor dashboard for creating and publishing courses, quizzes, and learning modules, and a student interface for content access and online assessments.",
              "Implemented 20+ interactive learning modules with a real-time quiz engine, automated grading, and performance dashboards for both students and instructors.",
              "Built structured, reusable React components to keep UI logic maintainable across modules and accelerate iteration on new pedagogical features.",
              "Ensured full cross-device responsiveness with mobile-first strategies, coordinated with backend engineers on REST API contracts, and used AI tools (Claude, Cursor) to optimize component generation and resolve complex UI edge cases."
            ],
            link: ""
          },
          {
            id: "eldowallet",
            name: "Eldo Wallet",
            role: "Frontend Developer",
            description:
              "Digital loyalty and mobile wallet SaaS helping merchants reach customers via Apple Wallet and Google Wallet. Combines pass management, targeted notifications, and campaign analytics in a unified merchant dashboard.",
            tech: ["ReactJS", "TypeScript", "Material UI", "Stripe API", "REST API", "GitLab"],
            achievements: [
              "Engineered a merchant dashboard enabling businesses to design, publish, and manage digital loyalty cards, tickets, and coupons distributed directly into Apple Wallet and Google Wallet — without requiring a dedicated consumer app.",
              "Implemented a real-time pass update engine and geolocated push notification system, driving a 72% opt-in rate and 35% cost reduction compared to traditional SMS campaigns.",
              "Delivered reusable data visualization components and campaign analytics views tracking engagement, coupon redemption, and visit frequency for marketing teams across retail, hospitality, and public-sector clients.",
              "Collaborated with backend and product teams on REST API integration and Stripe-related flows, ensuring reliable data sync between the dashboard and end-user wallet experiences."
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
          "Led frontend development of Sarabapp, a full e-commerce platform for traditional abayas. Delivered Next.js SSR performance gains, MyFatoorah payment integration for regional markets, and polished UI interactions that strengthened conversion and user trust.",
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
              "Developed the Sarabapp platform with Next.js SSR, delivering measurably faster page loads and significantly improved SEO performance compared to a client-side React SPA.",
              "Integrated the MyFatoorah payment API for a secure, localized checkout experience tailored to Middle Eastern markets with multi-currency support.",
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
          "Built the EeKad news and media platform from the ground up — content pages, user roles, Firebase authentication, and REST-driven publishing workflows — with a strong focus on performance, readability, and editorial usability.",
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
    title: "My Projects",
    showMore: "Show More",
    viewSite: "→ View site",
  },
  projects: {
    eldowallet: {
      name: "Eldo Wallet",
      description:
        "Digital loyalty and mobile wallet SaaS — merchant dashboard for Apple/Google Wallet passes, real-time updates, geolocated push notifications, and campaign analytics (72% opt-in, 35% cost reduction vs SMS).",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, REST API, GitLab",
    },
    sweetees: {
      name: "Sweetees",
      description:
        "Gift cards and concert ticketing platform with dual Manager/Admin portals, JWT/RBAC auth for 200+ registered users, and Stripe handling 100+ monthly transactions.",
      technologies: "ReactJS, TypeScript, Material UI, Stripe API, GitLab, ClickUp",
    },
    sarabapp: {
      name: "Sarab App",
      description:
        "Next.js SSR e-commerce for traditional abayas — measurably faster page loads than a client-side React SPA, localized MyFatoorah checkout, and 10+ animated UI components.",
      technologies: "Next.js, TypeScript, Material UI, MyFatoorah API, GitLab, ClickUp",
    },
    championsmind: {
      name: "Champion Mind",
      description:
        "Dual-portal e-learning platform — instructor dashboard, student assessments, 20+ interactive modules, real-time quiz engine, automated grading, and mobile-first REST API integration.",
      technologies: "ReactJS, TypeScript, Material UI, REST API",
    },
    agcff: {
      name: "AGCFF",
      description:
        "Gulf football tournament management for organizers, clubs, and federations — multi-tournament management, automated PDF reports, and 75%+ test coverage on critical modules.",
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
      "I am a frontend developer based in Sousse, Tunisia, with 3 years of experience working at Astrolab Agency, a company specializing in innovative web solutions.",
    rights: "Built with ❤ by © Oussama Mosbah 2025. All rights reserved.",
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
