import { Building2, GraduationCap, ShoppingCart, Ticket } from 'lucide-react'

// Projets professionnels affichés dans la section « Mes projets ».

export const PROJECTS = [
  {
    name: 'Almadia Pro',
    period: '2023 – 2025',
    type: 'Site B2B pour les professionnels de santé (pharmaciens)',
    Icon: ShoppingCart,
    workMode: 'Autonomie complète',
    description:
      'Site réalisé de A à Z : maquettage, rédaction du cahier des charges, développement, puis mise en production sécurisée avec un environnement de préproduction.',
    tags: ['Symfony', 'JavaScript', 'CSS', 'Maquettage', 'Cahier des charges', 'Préproduction'],
  },
  {
    name: 'Almadia',
    period: '2025',
    type: 'Site institutionnel',
    Icon: Building2,
    workMode: 'Autonomie complète',
    description:
      'Site institutionnel de l’entreprise réalisé sous WordPress, avec des plugins développés sur mesure pour répondre à ses besoins.',
    tags: ['WordPress', 'PHP', 'Plugins sur mesure'],
  },
  {
    name: 'SMA',
    period: '2025',
    type: 'Site de formation pour les professionnels de santé',
    Icon: GraduationCap,
    workMode: 'Autonomie complète',
    description:
      'Plateforme de formation réalisée sous WordPress, avec des plugins développés sur mesure.',
    tags: ['WordPress', 'PHP', 'Plugins sur mesure'],
  },
  {
    name: 'Qualibat',
    period: '2025 – 2026',
    type: 'Application métier',
    Icon: Ticket,
    workMode: 'En équipe',
    description:
      'Traitement de tickets, amélioration du cahier des charges et des maquettes, au sein d’une équipe en méthode agile (daily meetings et sprints).',
    tags: ['Ticketing', 'Cahier des charges', 'Maquettage', 'Méthode agile', 'Travail en équipe'],
  },
]
