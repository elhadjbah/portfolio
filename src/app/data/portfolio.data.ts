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
      'Java 17',
      'Spring Boot',
      'Spring Security',
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
    tags: ['PostgreSQL', 'MongoDB', 'Git', 'Sonar', 'Scrum/Agile', 'Jira', 'Postman'],
    span: 3
  }
];

export const experiences: Experience[] = [
  {
    period: '2022–2024',
    title: 'Développeur Full Stack & DevOps',
    company: 'URSSAF Caisse Nationale (Alternance)',
    stack: ['Java/Spring Boot', 'Angular', 'Microservices', 'OAuth2', 'Kubernetes', 'OpenShift', 'GitLab CI', 'ArgoCD']
  },
  {
    period: '2021–2022',
    title: 'Développeur Backend — Stage (APIs REST)',
    company: '',
    stack: ['Spring Boot', 'PostgreSQL', 'Docker']
  },
  {
    period: '2020–2024',
    title: 'Expert Informatique Bac+5',
    company: 'EPSI Toulouse',
    stack: ['Architecture logicielle', 'DevOps', 'Cloud']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    badge: 'Projet perso',
    featured: true,
    title: 'Application de gestion de produits',
    description:
      "Full stack CRUD, Angular + Spring Boot, pipeline CI/CD, déployée sur Kubernetes.",
    stack: ['Spring Boot', 'Angular', 'Kubernetes', 'Docker', 'CI/CD', 'REST API'],
    githubUrl: undefined,
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
];

export const navLinks = [
  { label: 'Compétences', targetId: 'skills' },
  { label: 'Parcours', targetId: 'experience' },
  { label: 'Projets', targetId: 'projects' },
  { label: 'Certifications', targetId: 'certifications' },
  { label: 'Contact', targetId: 'contact' }
] as const;

