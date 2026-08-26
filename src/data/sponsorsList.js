export const TIERS = ['diamond', 'gold', 'silver', 'bronze', 'community'];

/**
 * @typedef {Object} Sponsor
 * @property {string} id - unique, slug
 * @property {string} name
 * @property {'diamond'|'gold'|'silver'|'bronze'|'community'} tier
 * @property {string} logo - square, ~400x400, transparent or white background
 * @property {string} [website] - optional
 * @property {{ fr: string, en: string }} description - 1 to 3 sentences
 */

// {
//   id: 'acme',                       // unique, slug
//   name: 'ACME Corp',
//   tier: 'gold',                     // 'diamond' | 'gold' | 'silver' | 'bronze' | 'community'
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
      fr: "Canonical fournit des solutions open source sécurisées de niveau entreprise, auxquelles font confiance des millions de développeurs et les plus grandes organisations mondiales. Sa vaste gamme de produits s'articule autour d'Ubuntu — le système d'exploitation open source le plus utilisé au monde et la plateforme de référence pour l'infrastructure cloud et le développement Python. L'entreprise propose également des technologies cloud-native avancées, telles que MicroK8s, LXD, ainsi que la couverture de sécurité complète d'Ubuntu Pro.",
      en: "Canonical delivers secure, enterprise-grade open-source solutions trusted by millions of developers and leading global organizations. Its extensive portfolio is anchored by Ubuntu — the world's most widely used open-source operating system and the go-to platform for cloud infrastructure and seamless Python development. Canonical also offers advanced cloud-native technologies, including MicroK8s, LXD, and the comprehensive enterprise security coverage of Ubuntu Pro.",
    },
  },
  {
    id: 'apify',
    name: 'Apify',
    tier: 'bronze',
    logo: '/sponsors/apify.svg',
    website: 'https://apify.com',
    description: {
      fr: "Apify fournit une plateforme avancée de web scraping et d'automatisation à laquelle font confiance des milliers de développeurs et d'organisations orientées données à travers le monde. Son vaste écosystème propose plus d'un millier de programmes cloud prêts à l'emploi appelés Actors — les solutions de référence pour l'extraction de données à grande échelle et l'automatisation des processus. L'entreprise offre également de puissants outils de développement, notamment le framework open source Crawlee et un SDK Python dédié pour une intégration fluide.",
      en: 'Apify provides an advanced web scraping and automation platform trusted by thousands of developers and data-driven organizations worldwide. Its extensive ecosystem features over a thousand ready-to-use cloud programs called Actors — the go-to solutions for scalable web data extraction and workflow automation. The company also offers robust developer tools, including the open-source Crawlee framework and a dedicated Python SDK for seamless integration into modern tech stacks.',
    },
  },
  {
    id: 'black-python-devs',
    name: 'Black Python Devs',
    tier: 'community',
    logo: '/sponsors/bpd.webp',
    website: 'https://blackpythondevs.com',
    description: {
      fr: "Black Python Devs cultive une communauté mondiale dynamique dédiée au soutien des développeurs noirs et de couleur à travers l'industrie technologique. Son vaste réseau fournit des ressources essentielles, notamment du mentorat et des opportunités de développement professionnel — l'écosystème de référence pour autonomiser les voix sous-représentées dans le domaine de Python. L'organisation milite également pour la diversité et l'inclusion, favorisant un espace collaboratif pour l'évolution de carrière et l'excellence technique.",
      en: "Black Python Devs cultivates a thriving, global community dedicated to supporting Black and people of color developers across the tech industry. Its extensive network provides vital resources, including mentorship and professional development opportunities — the go-to ecosystem for empowering underrepresented voices in Python. The organization also advocates for diversity and inclusion, fostering a collaborative space for career growth and technical excellence.",
    },
  },
  {
    id: 'chaoss',
    name: 'CHAOSS',
    tier: 'community',
    logo: '/sponsors/chaoss.webp',
    website: 'https://chaoss.community',
    description: {
      fr: "CHAOSS crée des métriques standardisées et des logiciels d'analyse utilisés par les gestionnaires de communautés, les équipes d'ingénierie et les écosystèmes open source du monde entier pour évaluer la santé et la pérennité des communautés. Son écosystème d'outils comprend GrimoireLab et Augur — les plateformes de référence pour collecter et visualiser les données des projets open source. Le projet de la Linux Foundation propose également le tableau de bord 8Knot, ainsi que des méthodologies complètes pour analyser l'engagement des contributeurs.",
      en: "CHAOSS creates standard metrics and analytics software used by community managers, engineering teams, and open source ecosystems worldwide to evaluate community health and sustainability. Its ecosystem of tools includes GrimoireLab and Augur — the go-to platforms for collecting and visualizing open source project data. The Linux Foundation project also offers the 8Knot dashboard, alongside comprehensive methodologies for understanding contributor engagement.",
    },
  },
  {
    id: 'dsf',
    name: 'Django Software Foundation',
    tier: 'community',
    logo: '/sponsors/dsf.webp',
    website: 'https://www.djangoproject.com/foundation/',
    description: {
      fr: "La Django Software Foundation (DSF) protège et fait progresser l'écosystème open source Django, soutenant des millions de développeurs et d'organisations qui conçoivent des applications web modernes à travers le monde. Elle pilote Django — le framework web Python de référence pour créer des applications sécurisées, évolutives et maintenables, conçu pour les perfectionnistes sous pression de délais. La fondation finance également le développement communautaire, octroie des bourses pour les événements et anime une communauté mondiale dynamique et inclusive.",
      en: "The Django Software Foundation (DSF) protects and advances the open-source Django ecosystem, supporting millions of developers and organizations powering modern web applications globally. It stewards Django — the go-to Python web framework for building secure, scalable, and maintainable web applications with perfectionists under tight deadlines. The foundation also funds community development, provides event grants, and nurtures a vibrant, inclusive global developer community.",
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
];

export const sponsorsByTier = (list) =>
  TIERS.map((tier) => ({ tier, sponsors: list.filter((s) => s.tier === tier) })).filter(
    (g) => g.sponsors.length
  );
