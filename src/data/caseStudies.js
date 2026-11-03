import connexionSombre from '../assets/gametest/connexion-theme-sombre.jpg'
import connexionClair from '../assets/gametest/connexion-theme-clair.jpg'
import inscription from '../assets/gametest/inscription.jpg'
import validation from '../assets/gametest/validation-formulaire.jpg'
import motDePasse from '../assets/gametest/mot-de-passe-oublie.jpg'
import listeTests from '../assets/gametest/liste-des-tests.jpg'
import contact from '../assets/gametest/contact.jpg'
import maquetteConnexion from '../assets/gametest/maquette-connexion.jpg'
import maquetteInscription from '../assets/gametest/maquette-inscription.jpg'

import gamelabLanding from '../assets/gamelab/landing-page.jpg'
import gamelabLandingCharacter from '../assets/gamelab/landing-page-personnage.jpg'
import gamelabMobileMockups from '../assets/gamelab/maquettes-mobile.jpg'
import gamelabWebMockups from '../assets/gamelab/maquettes-web.jpg'
import gamelabUserFlow from '../assets/gamelab/parcours-utilisateur.jpg'
import gamelabApiDoc from '../assets/gamelab/documentation-api.jpg'
import gamelabBackOffice from '../assets/gamelab/back-office.jpg'
import gamelabUsers from '../assets/gamelab/gestion-utilisateurs.jpg'
import gamelabUserModal from '../assets/gamelab/modification-utilisateur.jpg'
import gamelabTrello from '../assets/gamelab/trello.jpg'
import crazyLivingRoom from '../assets/crazy/theme-salon.jpg'
import crazyAnimal from '../assets/crazy/theme-animal.jpg'
import crazyTurns from '../assets/crazy/tours-de-jeu.jpg'
import crazyWheel from '../assets/crazy/roue-des-gages.jpg'
import crazyMascot from '../assets/crazy/mascotte.jpg'
import crazyMascotSkin from '../assets/crazy/mascotte-skin.jpg'

// Projets présentés en détail (étude de cas) dans la section « Mes projets ».
// `id` sert d'ancre : les liens de la section « Parcours » pointent vers #id.
// Les documents PDF sont dans public/ et s'ouvrent dans la visionneuse du navigateur.
const publicFile = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

export const GAMETEST = {
  id: 'gametest',
  name: 'GameTest',
  tagline: 'Site de tests de jeux vidéo',
  badges: ['Projet de certification', 'Bac +2 DWWM', 'Pop School', '2023', 'Projet solo'],
  summary:
    'Un rédacteur publie le test subjectif et noté d’un jeu ; les visiteurs donnent à leur tour leur note sur 20, et la moyenne des joueurs s’affiche à côté de celle du rédacteur. Ce projet, réalisé seul, m’a permis d’obtenir mon titre professionnel Développeur Web et Web Mobile (Bac +2).',
  stakes: [
    {
      title: 'Valider le titre DWWM',
      text: 'Démontrer, seul et de bout en bout, les compétences du référentiel : maquettage, base de données, back-end, front-end et sécurité.',
    },
    {
      title: 'Des tests honnêtes',
      text: 'Beaucoup de jeux sont surnotés parce que sponsorisés. GameTest mise sur des avis subjectifs et argumentés, et redonne la parole aux joueurs.',
    },
    {
      title: 'S’organiser en solo',
      text: 'Planifier les tâches au jour le jour sur Trello et tenir un historique propre sur GitLab (branches et commits).',
    },
  ],
  features: [
    {
      title: 'Conception',
      text: 'Wireframes, moodboard inspiré de Marvel (thème clair Black Panther, thème sombre Iron Man) avec vérification des contrastes, puis maquette sur Figma.',
    },
    {
      title: 'Base de données',
      text: 'Schéma relationnel et MCD, entités Doctrine (utilisateurs, articles, catégories, notes) et CRUD pour l’administration.',
    },
    {
      title: 'Comptes utilisateurs',
      text: 'Inscription contrôlée par REGEX (e-mail valide, mot de passe fort), confirmation par e-mail, photo de profil avec aperçu, connexion et réinitialisation du mot de passe.',
    },
    {
      title: 'Articles modulables',
      text: 'Image de couverture, trailer YouTube, titres, paragraphes et images en nombre variable, catégories de jeux.',
    },
    {
      title: 'Notes des joueurs',
      text: 'Chaque utilisateur connecté donne une note de 1 à 20, modifiable ; la moyenne est calculée automatiquement.',
    },
    {
      title: 'Navigation',
      text: 'Recherche par titre, filtre par catégorie, formulaire de contact et choix du thème mémorisé dans le navigateur.',
    },
  ],
  stack: ['Symfony', 'PHP', 'Twig', 'MySQL', 'Doctrine', 'Bootstrap', 'JavaScript', 'Figma', 'GitLab', 'Trello', 'Mailtrap'],
  screenshots: [
    { src: connexionSombre, caption: 'Connexion, thème sombre' },
    { src: connexionClair, caption: 'Connexion, thème clair' },
    { src: listeTests, caption: 'Liste des tests avec recherche et filtre par catégorie' },
    { src: inscription, caption: 'Inscription avec photo de profil' },
    { src: validation, caption: 'Validation des champs du formulaire' },
    { src: motDePasse, caption: 'Réinitialisation du mot de passe' },
    { src: contact, caption: 'Formulaire de contact' },
    { src: maquetteConnexion, caption: 'Maquette Figma de la connexion' },
    { src: maquetteInscription, caption: 'Maquettes Figma de l’inscription, deux thèmes' },
  ],
  takeaways:
    'Ce projet m’a fait progresser sur Symfony, la gestion des images et des e-mails, et le design. Travailler seul m’a surtout appris à planifier et à organiser mon travail. Son évolution, GameLab, est devenue mon projet de fin de Bac +4.',
  documents: [
    { label: 'Dossier projet', detail: 'PDF, 46 pages', url: publicFile('dossier-projet-gametest.pdf') },
    { label: 'Présentation', detail: 'PDF, 15 diapositives', url: publicFile('presentation-gametest.pdf') },
  ],
}

export const GAMELAB = {
  id: 'gamelab',
  name: 'GameLab',
  tagline: 'Find, Rate, Collect : gérer et découvrir ses jeux vidéo',
  badges: ['Projet de certification', 'Bac +4 CDA', 'ForEach Academy', '2024 – 2025', 'Projet solo', 'Web et mobile'],
  summary:
    'Application multiplateforme (web et Android) pour gérer ses collections de jeux vidéo, créer des listes personnalisées, noter les jeux et en découvrir de nouveaux parmi plus de 400 000 titres grâce à l’API IGDB. Évolution de GameTest, ce projet m’a permis d’obtenir mon titre de Concepteur Développeur d’Applications (Bac +4).',
  stakes: [
    {
      title: 'Un marché saturé',
      text: 'En 2023, 14 500 jeux sont sortis, soit environ 40 par jour, et 19 milliards de dollars de jeux dorment sur Steam sans avoir été lancés. Les joueurs ont besoin d’outils pour découvrir et organiser leurs jeux.',
    },
    {
      title: 'Se démarquer, partout',
      text: 'Le secteur est déjà occupé : GameLab doit se distinguer par ses fonctionnalités et offrir une expérience cohérente sur le web comme sur Android.',
    },
    {
      title: 'Composer avec les contraintes',
      text: 'Pas de version iOS faute de matériel Apple, des moyens limités et une application en anglais, comme l’API IGDB. Pistes envisagées : financement participatif et partenariats.',
    },
  ],
  features: [
    {
      title: 'Conception',
      text: 'Analyse des besoins, user story et tests d’acceptation, parcours utilisateur, MCD, schéma d’architecture et maquettes Figma en mobile first, inspirées de Backloggd et de Steam.',
    },
    {
      title: 'API GameLab',
      text: 'API REST en Symfony et API Platform, documentée avec Swagger, base MariaDB avec migrations Doctrine, authentification par JWT et conteneurisation avec Docker.',
    },
    {
      title: 'API IGDB',
      text: 'Intégration de l’API de Twitch (OAuth 2.0) pour la recherche, les fiches de jeux, les filtres et les sorties à venir, testée au préalable avec Postman.',
    },
    {
      title: 'Collections et notes',
      text: 'Favoris, joués, wishlist, terminés et collections personnalisées, notes de 0,5 à 5 avec commentaire, le tout sans rechargement de page grâce à AJAX.',
    },
    {
      title: 'Trois interfaces',
      text: 'Une landing page en Symfony et Tailwind au visuel tiré au hasard, l’application web en Twig avec son back-office, et l’application mobile en Flutter, livrée en APK Android.',
    },
    {
      title: 'Sécurité et qualité',
      text: 'reCAPTCHA v3, vérification de l’e-mail, mots de passe forts et hachés, requêtes paramétrées contre les injections SQL, tests unitaires, suivi sur Trello et GitLab avec Gitmoji.',
    },
  ],
  stack: ['Symfony', 'API Platform', 'PHP', 'Twig', 'Tailwind', 'MariaDB', 'Doctrine', 'JWT', 'Docker', 'Flutter', 'Dart', 'API IGDB', 'Figma', 'Postman', 'GitLab', 'Trello'],
  screenshots: [
    { src: gamelabLanding, caption: 'Landing page : jaquettes et personnage tirés au hasard' },
    { src: gamelabLandingCharacter, caption: 'Un autre personnage à chaque chargement' },
    { src: gamelabMobileMockups, caption: 'Maquettes Figma de l’application mobile' },
    { src: gamelabWebMockups, caption: 'Maquettes Figma de l’application web' },
    { src: gamelabUserFlow, caption: 'Parcours utilisateur' },
    { src: gamelabApiDoc, caption: 'Documentation de l’API avec API Platform' },
    { src: gamelabBackOffice, caption: 'Tableau de bord du back-office' },
    { src: gamelabUsers, caption: 'Gestion des utilisateurs' },
    { src: gamelabUserModal, caption: 'Modification d’un utilisateur' },
    { src: gamelabTrello, caption: 'Suivi du projet sur Trello' },
  ],
  takeaways:
    'Mon projet le plus complet : une API, une API tierce, une application web et une application mobile, avec de vraies problématiques de structure et de performance. Pistes pour la suite : mode hors ligne, multilingue, intégration de Twitch et de HowLongToBeat, prix des jeux et guides de joueurs.',
  documents: [
    { label: 'Dossier projet', detail: 'PDF, 60 pages', url: publicFile('dossier-projet-gamelab.pdf') },
    { label: 'Présentation', detail: 'PDF, 27 diapositives', url: publicFile('presentation-gamelab.pdf') },
  ],
}

export const CRAZY = {
  id: 'crazy',
  name: 'Crazy',
  tagline: 'Jeu mobile d’ambiance à jouer entre amis',
  badges: ['Stage', 'Crazy, Valenciennes', '2023', 'En équipe', 'Scrum Master'],
  summary:
    'Une lettre, un thème, et il faut trouver un mot : un objet du salon en T ? Une télécommande ! Pendant un stage de deux mois, j’ai développé les fonctionnalités principales de ce jeu mobile à jouer en soirée, au sein d’une équipe de deux développeurs.',
  stakes: [
    {
      title: 'Choisir la bonne techno',
      text: 'Une première version présentée sous React Native, puis le passage à Flutter, plus flexible et plus rapide.',
    },
    {
      title: 'Rendre le jeu attachant',
      text: 'Au caméléon d’origine, nous avons proposé d’ajouter des « skins » pour un côté plus fun : une idée qui a tout de suite plu à notre tuteur.',
    },
    {
      title: 'Faire avancer l’équipe',
      text: 'En tant que Scrum Master, m’assurer de l’implication de chacun et aider à lever les obstacles pour que le projet avance.',
    },
  ],
  features: [
    {
      title: 'Le cœur du jeu',
      text: 'Lettre et thème tirés au hasard et annoncés par synthèse vocale (« un animal en A »), déclenchés d’une simple pression sur la flèche.',
    },
    {
      title: 'Des couleurs en mouvement',
      text: 'À chaque tour, les couleurs avancent dans un ordre précis entre les cercles et le fond de l’écran.',
    },
    {
      title: 'La roue des gages',
      text: 'À 5 points, un ami fait tourner la roue qui désigne un thème de gage ; développée avec la bibliothèque flutter_fortune_wheel.',
    },
    {
      title: 'Organisation',
      text: 'Méthode Scrum avec des rôles définis, versionnage du code, maquettage avec un designer web et rédaction de la documentation.',
    },
  ],
  stack: ['Flutter', 'Dart', 'flutter_fortune_wheel', 'Synthèse vocale', 'Git', 'Scrum', 'React Native (prototype)'],
  screenshots: [
    { src: crazyLivingRoom, caption: 'Un objet du salon en T' },
    { src: crazyAnimal, caption: 'Un animal en A' },
    { src: crazyTurns, caption: 'Les couleurs avancent à chaque tour' },
    { src: crazyWheel, caption: 'La roue des gages' },
    { src: crazyMascot, caption: 'La mascotte caméléon' },
    { src: crazyMascotSkin, caption: 'Un « skin » de mascotte' },
  ],
  takeaways:
    'Mon premier projet en équipe et en méthode agile. Le rôle de Scrum Master m’a beaucoup plu : aider là où il le faut pour que le projet avance.',
  documents: [{ label: 'Ma contribution', detail: 'PDF, 2 pages', url: publicFile('projet-crazy.pdf') }],
}
