import type { Certification, Experience, Project, SkillCategory } from '../models/portfolio.model';

export const portfolioIdentity = {
  firstName: 'Elhadj ',
  lastName: 'BAH',
  title: 'Développeur Full Stack & DevOps',
  location: 'Toulouse, France',
  statusLabel: 'Disponible immédiatement (CDI ou freelance)',
  education: 'Bac +5 Expert en Informatique et Système d\'information — EPSI Toulouse',
  description:
    "Java · Spring Boot · Angular · Kubernetes · CI/CD — Je conçois\net déploie des applications robustes, de l'API à la production.",
  cvUrl: 'assets/cv-elhadj-bah.pdf'
} as const;

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    tags: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Keycloak',
      'OAuth2/JWT',
      'JPA/Hibernate',
      'REST API',
      'Microservices',
      'Kafka'
    ]
  },
  {
    title: 'Frontend',
    tags: ['Angular 21', 'TypeScript', 'RxJS', 'HTML/CSS', 'NgRx']
  },
  {
    title: 'DevOps & Cloud',
    tags: ['Docker', 'Kubernetes', 'OpenShift', 'GitLab CI/CD', 'ArgoCD', 'GitHub Actions']
  },
  {
    title: 'Outils & méthodes',
    tags: ['PostgreSQL', 'MongoDB', 'Git', 'Sonar', 'Scrum/Agile', 'Jira', 'Postman']
  }
];

export const experiences: Experience[] = [
  {
    period: 'septembre 2023– octocbre 2025',
    title: 'Développeur Full Stack & DevOps',
    company: 'URSSAF Caisse Nationale',
    stack: ['Java/Spring Boot', 'Angular', 'Microservices', 'OAuth2', 'Kubernetes', 'OpenShift', 'GitLab CI', 'ArgoCD']
  },
  {
    period: '2021–2022',
    title: 'Développeur Backend — Stage (APIs REST)',
    company: 'Ministère des Armées STAT - DASIM',
    stack: ['C++','Spring Boot', 'Docker']
  },
  {
    period: '2020–2024',
    title: 'Expert en Informatique et Système d’Information (Bac+5)',
    company: 'EPSI Toulouse',
    stack: ['Architecture logicielle', 'DevOps', 'Cloud', 'Stratégie système d’informatione']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    badge: 'Projet perso',
    featured: true,
    title: 'Application de gestion d\'utilisaters, de produits',
    description:
      "Full stack, Service Authentification/Users, Angular + Spring Boot, pipeline CI/CD, déployée sur Kubernetes.",
    stack: ['Spring Boot', 'Angular', 'Microservice', 'Kubernetes', 'Docker', 'CI/CD', 'REST API'],
    githubUrl: "https://github.com/elhadj-cloud-lab",
    demoUrl: undefined
  },
  {
    id: 2,
    title: 'Plateforme de gestion URSSAF',
    description: 'Application métier et évolutions sur un SI critique.',
    stack: ['Spring Boot', 'Angular', 'OpenShift']
  },
  {
    id: 3,
    title: 'API Gateway & Auth Service',
    description: 'Gateway + service d’authentification avec sécurité moderne.',
    stack: ['Spring Security', 'Keycloak', 'Docker']
  },
  {
    id: 4,
    title: 'Pipeline CI/CD automatisé',
    description: 'Automatisation build/test/deploy avec GitOps.',
    stack: ['GitLab CI', 'ArgoCD', 'Kubernetes']
  },
  {
    id: 5,
    title: 'Dashboard Angular temps réel',
    description: 'Tableaux de bord en streaming pour données live.',
    stack: ['Angular', 'RxJS', 'WebSocket']
  }
];

/**
 * Ajoute tes certifications ici.
 *
 * Exemple :
 * `{
 *   id: 1,
 *   title: 'AWS Certified Cloud Practitioner',
 *   issuer: 'AWS',
 *   date: '2023',
 *   credentialUrl: 'https://...'
 * }`
 */
export const certifications: Certification[] = [
  // Ajoute tes certifications ici
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner en cours',
    issuer: '',
    date: '',
    credentialUrl: ''
  },
  {
    id: 2,
    title: 'Certified Kubernetes Application Developer (CKAD) en cours',
    issuer: '',
    date: '',
    credentialUrl: ''
  }
];

export const navLinks = [
  { label: 'Compétences', targetId: 'skills' },
  { label: 'Parcours', targetId: 'experience' },
  { label: 'Projets', targetId: 'projects' },
  { label: 'Certifications', targetId: 'certifications' },
  { label: 'Contact', targetId: 'contact' }
] as const;

