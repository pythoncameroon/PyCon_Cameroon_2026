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
      fr: "Canonical est l'éditeur d'Ubuntu, le système d'exploitation open source le plus utilisé pour le cloud, les serveurs et le poste de travail. Canonical soutient les communautés open source à travers le monde.",
      en: 'Canonical is the publisher of Ubuntu, the most widely used open source operating system for cloud, servers and desktops. Canonical supports open source communities around the world.',
    },
  },
  {
    id: 'apify',
    name: 'Apify',
    tier: 'bronze',
    logo: '/sponsors/apify.svg',
    website: 'https://apify.com',
    description: {
      fr: "Plateforme de web scraping et d'automatisation, avec un SDK Python.",
      en: 'Web scraping and automation platform with a Python SDK.',
    },
  },
  {
    id: 'black-python-devs',
    name: 'Black Python Devs',
    tier: 'community',
    logo: '/sponsors/bpd.webp',
    website: 'https://blackpythondevs.com',
    description: {
      fr: 'Communauté mondiale qui accompagne les développeurs Python noirs et de couleur.',
      en: 'A global community supporting Black and people of colour Python developers.',
    },
  },
  {
    id: 'chaoss',
    name: 'CHAOSS',
    tier: 'community',
    logo: '/sponsors/chaoss.webp',
    website: 'https://chaoss.community',
    description: {
      fr: 'Projet de la Linux Foundation dédié à la santé et à la pérennité des communautés open source.',
      en: 'A Linux Foundation project focused on the health and sustainability of open source communities.',
    },
  },
  {
    id: 'dsf',
    name: 'Django Software Foundation',
    tier: 'community',
    logo: '/sponsors/dsf.webp',
    website: 'https://www.djangoproject.com/foundation/',
    description: {
      fr: 'La Django Software Foundation soutient le développement et la communauté du framework Django.',
      en: 'The Django Software Foundation supports the development and community of the Django web framework.',
    },
  },
  {
    id: 'jetbrains',
    name: 'JetBrains',
    tier: 'community',
    logo: '/sponsors/jetbrains.webp',
    website: 'https://www.jetbrains.com',
    description: {
      fr: "JetBrains crée des outils de développement logiciel intelligents utilisés par plus de 11,4 millions de professionnels et 88 entreprises du Fortune Global Top 100. Notre gamme de plus de 30 produits comprend des IDE primés, dont PyCharm — l'IDE de référence pour un développement Python productif et efficace. Nous proposons également l'assistant de codage JetBrains AI ainsi que l'agent de codage Junie.",
      en: 'JetBrains creates intelligent software development tools used by over 11.4 million professionals and 88 Fortune Global Top 100 companies. Our lineup of more than 30 products includes award-winning IDEs, including PyCharm -- the go-to IDE for productive and efficient Python development. We also offer the JetBrains AI-powered coding assistant, and coding agent Junie.',
    },
  },
];

export const sponsorsByTier = (list) =>
  TIERS.map((tier) => ({ tier, sponsors: list.filter((s) => s.tier === tier) })).filter(
    (g) => g.sponsors.length
  );
