import { BriefcaseBusiness, FolderOpen, House, Mail, User } from 'lucide-react'

// Source unique des sections : utilisée par le menu, la barre de progression
// et le bouton de retour. L'ordre ici doit suivre l'ordre d'affichage.
export const SECTIONS = [
  { id: 'accueil', label: 'Accueil', Icon: House },
  { id: 'a-propos', label: 'À propos de moi', Icon: User },
  { id: 'parcours', label: 'Parcours', Icon: BriefcaseBusiness },
  { id: 'projets', label: 'Mes projets', Icon: FolderOpen },
  { id: 'contact', label: 'Contactez-moi', Icon: Mail },
]

export const SECTION_IDS = SECTIONS.map((section) => section.id)
