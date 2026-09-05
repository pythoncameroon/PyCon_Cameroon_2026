export const TIERS = ['diamond', 'gold', 'silver', 'bronze', 'community', 'deployment'];

/**
 * @typedef {Object} Sponsor
 * @property {string} id - unique, slug
 * @property {string} name
 * @property {'diamond'|'gold'|'silver'|'bronze'|'community'|'deployment'} tier
 * @property {string} logo - square, ~400x400, transparent or white background
 * @property {string} [website] - optional
 * @property {{ fr: string, en: string }} description - 1 to 3 sentences
 */

// {
//   id: 'acme',                       // unique, slug
//   name: 'ACME Corp',
//   tier: 'gold',                     // 'diamond' | 'gold' | 'silver' | 'bronze' | 'community' | 'deployment'
//   logo: '/sponsors/acme.webp',      // carré, ~400×400, fond transparent ou blanc
//   website: 'https://acme.example',  // optionnel
//   description: { fr: '…', en: '…' } // 1 à 3 phrases
// }

/** @type {Sponsor[]} */
export const sponsorsList = [
  {
    id: 'canonical',
    name: 'Canonical',
    tier: 'diamond',
    logo: '/sponsors/canonical.webp',
    website: 'https://canonical.com',
    description: {
      fr: "Canonical fournit des solutions open source sécurisées de niveau entreprise, utilisées par des millions de développeurs et les plus grandes organisations mondiales. Son produit phare, Ubuntu, est le système d'exploitation open source le plus utilisé au monde, plateforme de référence pour le cloud et le développement Python. Canonical propose aussi des technologies cloud-native comme MicroK8s, LXD et Ubuntu Pro.",
      en: "Canonical delivers secure, enterprise-grade open-source solutions used by millions of developers and organizations worldwide. Its flagship product, Ubuntu, is the world's most used open-source OS and a go-to platform for cloud infrastructure and Python development. Canonical also offers MicroK8s, LXD, and Ubuntu Pro.",
    },
  },
  {
    id: 'apify',
    name: 'Apify',
    tier: 'bronze',
    logo: '/sponsors/apify.svg',
    website: 'https://apify.com',
    description: {
      fr: "Apify fournit une plateforme de web scraping et d'automatisation utilisée par des milliers de développeurs et d'organisations orientées données dans le monde. Son écosystème propose plus d'un millier de programmes cloud prêts à l'emploi appelés Actors, pour l'extraction de données à grande échelle et l'automatisation des tâches. Apify offre aussi le framework open source Crawlee et un SDK Python dédié.",
      en: 'Apify provides a web scraping and automation platform used by thousands of developers and data-driven organizations worldwide. Its ecosystem features over a thousand ready-to-use cloud programs called Actors, for large-scale web data extraction and task automation. Apify also offers the open-source Crawlee framework and a dedicated Python SDK.',
    },
  },
  {
    id: 'valkey',
    name: 'Valkey',
    tier: 'bronze',
    logo: '/sponsors/valkey.svg',
    website: 'https://valkey.io',
    description: {
      fr: "Valkey est une base de données clé-valeur open source haute performance, sous licence BSD et hébergée par la Linux Foundation, née en 2024 d'un fork de Redis. Elle sert de cache en mémoire, de file de messages ou de base principale, avec scripting Lua et mode cluster. Soutenue par AWS, Google Cloud et Oracle, elle propose des clients officiels, dont un pour Python.",
      en: "Valkey is an open-source, high-performance key-value datastore, BSD-licensed and hosted by the Linux Foundation, born in 2024 as a fork of Redis. It serves as an in-memory cache, message queue or primary database, with Lua scripting and cluster mode. Backed by AWS, Google Cloud and Oracle, it offers official clients, including one for Python.",
    },
  },
  {
    id: 'suprapay',
    name: 'SupraPay',
    tier: 'bronze',
    logo: '/sponsors/suprapay.webp',
    website: 'https://www.suprapay.io',
    description: {
      fr: "SupraPay est une fintech qui fournit aux freelances, créateurs et PME d'Afrique des coordonnées bancaires dédiées en dollars et en euros pour encaisser leurs paiements internationaux. Les fonds sont retirables en Mobile Money dans une douzaine de pays, dont le Cameroun, généralement en moins d'une heure. Fondée en 2024, elle propose aussi des liens de paiement et des transferts vers plus de 25 pays.",
      en: "SupraPay is a fintech that gives African freelancers, creators and SMEs dedicated US dollar and euro banking details to collect international payments. Funds can be withdrawn to Mobile Money in a dozen countries, including Cameroon, usually within an hour. Founded in 2024, it also offers payment links and transfers to over 25 countries.",
    },
  },
  {
    id: 'trust-consulting',
    name: 'Trust Consulting',
    tier: 'bronze',
    logo: '/sponsors/trust.jpg',
    website: 'https://www.linkedin.com/company/trust-consulting-sarl',
    description: {
      fr: "Trust Consulting est un cabinet de conseil et de services numériques basé à Yaoundé, au Cameroun. Il accompagne les entreprises dans la conception et le développement de solutions logicielles adaptées à leurs besoins. Son équipe réunit des développeurs qui contribuent activement à l'écosystème Python camerounais.",
      en: "Trust Consulting is an IT consulting and digital services firm based in Yaoundé, Cameroon. It supports businesses in designing and building software solutions tailored to their needs. Its team includes developers who actively contribute to Cameroon's Python ecosystem.",
    },
  },
  {
    id: 'black-python-devs',
    name: 'Black Python Devs',
    tier: 'community',
    logo: '/sponsors/bpd.webp',
    website: 'https://blackpythondevs.com',
    description: {
      fr: "Black Python Devs anime une communauté mondiale dédiée au soutien des développeurs noirs et de couleur dans l'industrie technologique. Son réseau offre des ressources essentielles comme le mentorat et des opportunités de développement professionnel pour les voix sous-représentées dans l'écosystème Python. L'organisation milite aussi pour la diversité et l'inclusion, favorisant l'évolution de carrière et l'excellence technique.",
      en: "Black Python Devs runs a global community supporting Black and people of color developers in tech. It offers mentorship and professional development opportunities for underrepresented voices in the Python ecosystem. The organization advocates for diversity and inclusion, fostering career growth and technical excellence.",
    },
  },
  {
    id: 'chaoss',
    name: 'CHAOSS',
    tier: 'community',
    logo: '/sponsors/chaoss.webp',
    website: 'https://chaoss.community',
    description: {
      fr: "CHAOSS crée des métriques standardisées et des logiciels d'analyse utilisés par les gestionnaires de communautés et les écosystèmes open source du monde entier pour évaluer la santé des communautés. Ses outils incluent GrimoireLab et Augur, pour collecter et visualiser les données de projets open source. Ce projet de la Linux Foundation propose aussi le tableau de bord 8Knot pour analyser l'engagement des contributeurs.",
      en: "CHAOSS creates standard metrics and analytics software used by community managers and open source ecosystems worldwide to evaluate community health. Its tools include GrimoireLab and Augur, for collecting and visualizing open source project data. This Linux Foundation project also offers the 8Knot dashboard for analyzing contributor engagement.",
    },
  },
  {
    id: 'dsf',
    name: 'Django Software Foundation',
    tier: 'community',
    logo: '/sponsors/dsf.webp',
    website: 'https://www.djangoproject.com/foundation/',
    description: {
      fr: "La Django Software Foundation (DSF) fait progresser l'écosystème open source Django, soutenant des millions de développeurs d'applications web modernes. Elle pilote Django, le framework web Python de référence pour créer des applications sécurisées, évolutives et maintenables. La fondation finance aussi le développement communautaire et anime une communauté mondiale inclusive.",
      en: "The Django Software Foundation (DSF) advances the open-source Django ecosystem, supporting millions of developers building modern web applications. It stewards Django, the go-to Python framework for secure, scalable, maintainable web apps. The foundation also funds community development and nurtures an inclusive global community.",
    },
  },
  {
    id: 'jetbrains',
    name: 'JetBrains',
    tier: 'community',
    logo: '/sponsors/jetbrains.webp',
    website: 'https://www.jetbrains.com',
    description: {
      fr: "JetBrains crée des outils de développement logiciel intelligents utilisés par plus de 11,4 millions de professionnels et 88 des 100 plus grandes entreprises du classement Fortune Global. Sa gamme de plus de 30 produits comprend des IDE primés, dont PyCharm — l'IDE de référence pour un développement Python productif et efficace. L'entreprise propose également l'assistant de codage basé sur l'IA de JetBrains, ainsi que l'agent de codage Junie.",
      en: "JetBrains creates intelligent software development tools used by over 11.4 million professionals and 88 Fortune Global Top 100 companies. Its lineup of more than 30 products includes award-winning IDEs, including PyCharm — the go-to IDE for productive and efficient Python development. The company also offers the JetBrains AI-powered coding assistant, and coding agent Junie.",
    },
  },
  {
    id: 'defna',
    name: 'DEFNA',
    tier: 'community',
    logo: '/sponsors/defna.png',
    website: 'https://www.defna.org',
    description: {
      fr: "La Django Events Foundation North America (DEFNA) est une organisation à but non lucratif créée en 2015 à la demande de la Django Software Foundation pour organiser DjangoCon US, la conférence annuelle de la communauté Django nord-américaine. Elle finance aussi des événements Django via son programme de bourses lancé en 2017. DEFNA œuvre à rendre les événements open source accessibles à tous les développeurs.",
      en: "The Django Events Foundation North America (DEFNA) is a non-profit founded in 2015 at the request of the Django Software Foundation to run DjangoCon US, the annual conference for the North American Django community. It also funds Django events through its grants program launched in 2017. DEFNA works to make open-source events accessible to all developers.",
    },
  },
  {
    id: 'pythonanywhere',
    name: 'PythonAnywhere',
    tier: 'deployment',
    logo: '/sponsors/pythonanywhere.svg',
    website: 'https://www.pythonanywhere.com',
    description: {
      fr: "PythonAnywhere est un environnement de développement et d'hébergement Python en ligne, avec consoles, éditeur et tâches planifiées directement dans le navigateur. Il permet de déployer des applications web (Django, Flask, etc.) en quelques clics, sans gérer de serveurs. Son offre gratuite est très appréciée des apprenants et enseignants ; PythonAnywhere fait partie d'Anaconda.",
      en: "PythonAnywhere is an online Python development and hosting environment, with consoles, an editor, and scheduled tasks right in the browser. It lets you deploy web apps (Django, Flask, etc.) in a few clicks, without managing servers. Its free tier is popular with learners and educators; PythonAnywhere is part of Anaconda.",
    },
  },
];

export const sponsorsByTier = (list) =>
  TIERS.map((tier) => ({ tier, sponsors: list.filter((s) => s.tier === tier) })).filter(
    (g) => g.sponsors.length
  );
