// Contenu de la section « Expériences professionnelles et formations », de la plus récente à la plus ancienne.

export const EXPERIENCES = [
  {
    title: 'Développeur WinDev / WebDev (full stack)',
    organization: 'Clicconcept',
    location: 'Télétravail complet',
    period: 'Sept. 2025 – nov. 2026',
    details: [
      'Prise en charge de tickets : améliorations et corrections de bugs sur des applications WinDev / WebDev',
      'Maquettage des interfaces avant développement',
      'Modélisation UML avec StarUML',
      'Alimentation de bases de données',
      'Tests complets avant chaque livraison',
      'Travail en méthode agile',
    ],
  },
  {
    title: 'Développeur web full stack (alternance)',
    organization: 'Almadia',
    location: "Villeneuve-d'Ascq",
    period: 'Nov. 2023 – sept. 2025',
    details: [
      'Site e-commerce de matériel médical pour les professionnels de santé (Symfony, CSS, JS)',
      'Site de formation pour les professionnels de santé (Symfony, React, Tailwind), puis migré vers WordPress',
      "Site institutionnel d'Almadia (Symfony, React, Tailwind), puis migré vers WordPress",
      'Conception et développement de plugins WordPress sur mesure pour ces deux sites',
      'Maquettage et maintenance des sites',
      'Méthodes agiles avec Trello et Notion',
    ],
  },
  {
    title: 'Développeur mobile (stage)',
    organization: 'Crazy',
    location: 'Valenciennes',
    period: 'Mai 2023 – juil. 2023',
    details: [
      "Maquettage de l'application avec un designer web",
      'Développement Flutter au sein d’une équipe de deux développeurs',
      'Méthode agile, rôle de Scrum Master',
      'Rédaction de la documentation',
    ],
    link: { label: 'Voir le projet Crazy', href: '#crazy' },
  },
]

// `projects.items[].url` : lien externe, ancre vers une étude de cas (#gametest…) ou vide.
export const FORMATIONS = [
  {
    title: 'Mastère Architecte Web (Bac +5)',
    organization: 'ForEach Academy',
    location: 'Wasquehal',
    period: 'Sept. 2025 – nov. 2026',
    details: [
      'Intelligence artificielle, DevOps et Linux',
      'Processus de recrutement (module RH)',
      'Publicité web et référencement (SEO)',
    ],
    projects: {
      label: 'Projets de groupe de fin de formation',
      items: [
        { name: 'Thé Tip Top', url: '' },
        { name: 'Furious Duck', url: '' },
      ],
    },
  },
  {
    title: "Concepteur développeur d'applications (Bac +4)",
    organization: 'ForEach Academy',
    location: 'Mons-en-Barœul',
    period: 'Oct. 2023 – juil. 2025',
    details: [
      'Conception complète des applications',
      'DevOps',
      'Rédaction de cahiers des charges',
      'Intelligence artificielle',
    ],
    projects: {
      label: 'Projet de fin de formation',
      items: [{ name: 'GameLab', description: 'évolution de GameTest', url: '#gamelab' }],
    },
  },
  {
    title: 'Développeur web et web mobile (Bac +2)',
    organization: 'Pop School',
    location: 'Valenciennes',
    period: 'Sept. 2022 – juil. 2023',
    details: [
      'Projets réalisés en autonomie et en groupe',
      'Apprentissage de HTML, CSS, JavaScript, Symfony, React, React Native et Flutter',
      'Maquettage des interfaces',
    ],
    projects: {
      label: 'Projet de fin de formation',
      items: [{ name: 'GameTest', url: '#gametest' }],
    },
  },
]
