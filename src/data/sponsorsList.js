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
];

export const sponsorsByTier = (list) =>
  TIERS.map((tier) => ({ tier, sponsors: list.filter((s) => s.tier === tier) })).filter(
    (g) => g.sponsors.length
  );
