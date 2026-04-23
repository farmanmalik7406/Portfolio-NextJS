import {
  FiActivity,
  FiBox,
  FiCode,
  FiCommand,
  FiCpu,
  FiDatabase,
  FiFigma,
  FiGlobe,
  FiLayers,
  FiRefreshCw,
  FiServer,
  FiShield,
  FiShoppingBag,
  FiSmartphone,
  FiTool,
  FiUsers,
} from 'react-icons/fi';
import {
  SiAngular,
  // SiAzuredevops,
  SiCloudinary,
  SiCss3,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSass,
  SiSalesforce,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

export const profile = {
  name: 'Farman Malik',
  title: 'Full Stack Developer building business-focused products across web, integrations, and enterprise systems.',
  location: 'Mohali, Punjab, India',
  email: 'farmanmalik7406@gmail.com',
  phone: '+91 9760677406',
  summary:
    'I design and ship interfaces, APIs, and connected systems that make complex workflows feel simple. My sweet spot is turning operational problems into polished products with strong architecture, thoughtful UX, and reliable delivery.',
  availability: 'Available for product engineering, full stack development, and enterprise platform work.',
  stats: [
    { value: '4+', label: 'years delivering production software' },
    { value: '12+', label: 'core technologies used across projects' },
    { value: '3', label: 'specialties: frontend, backend, integrations' },
  ],
  links: {
    github: 'https://github.com/farmanmalik',
    linkedin: 'https://www.linkedin.com/in/farmanmalik',
    resume: '/Farman-FullStack-Resume.pdf',
  },
};

export const spotlight = [
  {
    icon: FiLayers,
    title: 'Product-minded frontend',
    text: 'Responsive interfaces, admin workflows, and polished UI systems built to help people move faster.',
  },
  {
    icon: FiServer,
    title: 'Reliable backend systems',
    text: 'APIs, business logic, authentication flows, and data models designed for scale and maintainability.',
  },
  {
    icon: FiRefreshCw,
    title: 'Enterprise integrations',
    text: 'Bridging legacy systems, Salesforce, and cloud services so teams get cleaner operations and fewer manual steps.',
  },
];

export const capabilityLanes = [
  {
    title: 'Frontend Engineering',
    description:
      'Building fast, modern interfaces that balance UX polish with production practicality.',
    icon: FiSmartphone,
    highlights: [
      'Component-driven UI architecture',
      'Responsive layouts and interaction design',
      'Stateful dashboards and workflow tools',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Angular', icon: SiAngular },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'SCSS', icon: SiSass },
    ],
  },
  {
    title: 'Backend and APIs',
    description:
      'Designing services and data flows that keep applications stable, secure, and extensible.',
    icon: FiDatabase,
    highlights: [
      'REST API design and implementation',
      'Business rules, auth, and data integrity',
      'Performance-minded service architecture',
    ],
    technologies: [
      { name: '.NET Core', icon: SiDotnet },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    title: 'Cloud, Ops, and Connected Platforms',
    description:
      'Connecting platforms and delivery pipelines so software supports how teams actually work.',
    icon: FiCpu,
    highlights: [
      'Salesforce and enterprise workflow customization',
      'Cross-system integrations and automation',
      'Versioned delivery and team collaboration',
    ],
    technologies: [
      { name: 'Salesforce', icon: SiSalesforce },
      // { name: 'Azure DevOps', icon: SiAzuredevops },
      { name: 'Dell Boomi', icon: FiRefreshCw },
      { name: 'Cloudinary', icon: SiCloudinary },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Jira', icon: SiJira },
    ],
  },
];

export const featuredProjects = [
  {
    title: 'Platform Integrations',
    eyebrow: 'Cross-system workflow',
    icon: FiShield,
    summary:
      'Connecting platforms like Salesforce, AS400, and internal services so operational data moves reliably between systems.',
    stack: ['Salesforce', 'Dell Boomi', 'AS400', 'REST APIs', 'Data mapping'],
    impact: [
      'Bi-directional sync flows',
      'Reduced manual platform handoffs',
      'Cleaner service operations',
    ],
  },
  {
    title: 'Database Sync and Data Consistency',
    eyebrow: 'Backend and integration logic',
    icon: FiCommand,
    summary:
      'Designing flows for syncing records across databases and services while protecting integrity, traceability, and business rules.',
    stack: ['.NET Core', 'Node.js', 'MySQL', 'MongoDB', 'Validation logic'],
    impact: [
      'Record reconciliation',
      'Safer update handling',
      'Less duplicate data drift',
    ],
  },
  {
    title: 'Admin Panels and Internal Tools',
    eyebrow: 'Operational productivity',
    icon: FiBox,
    summary:
      'Building dashboards, contract modules, and workflow-focused interfaces that help teams move faster with fewer manual steps.',
    stack: ['Angular', 'React', 'Role-based UI', 'Form flows', 'Business workflows'],
    impact: [
      'Approval-focused UX',
      'Structured admin journeys',
      'Better visibility for teams',
    ],
  },
  {
    title: 'Custom API and Service Development',
    eyebrow: 'Application backbone',
    icon: FiServer,
    summary:
      'Creating APIs and service layers that power frontend applications, business logic, authentication, and third-party integrations.',
    stack: ['.NET Core', 'Express', 'REST APIs', 'Auth', 'Postman'],
    impact: [
      'Reusable service endpoints',
      'Stronger backend structure',
      'Faster feature delivery',
    ],
  },
  {
    title: 'Commerce and Product Customization',
    eyebrow: 'Customer-facing experiences',
    icon: FiShoppingBag,
    summary:
      'Working on storefront and customization flows where users explore products, configure options, and move through a smoother buying experience.',
    stack: ['Next.js', 'Angular', 'Cloudinary', 'UI flows', 'Config-driven logic'],
    impact: [
      'Image-heavy interfaces',
      'Configurable product journeys',
      'More polished customer UX',
    ],
  },
  {
    title: 'Frontend Systems and Responsive UI',
    eyebrow: 'Interface engineering',
    icon: FiLayers,
    summary:
      'Building maintainable frontend systems across React, Angular, and Next.js with responsive layouts, reusable components, and stronger UI consistency.',
    stack: ['React', 'Next.js', 'Angular', 'TypeScript', 'SCSS'],
    impact: [
      'Reusable component patterns',
      'Responsive layout systems',
      'Cleaner user-facing polish',
    ],
  },
];

export const workflow = [
  {
    title: 'Understand the workflow',
    text: 'I start with the real user journey, especially when the product sits inside a business process rather than a marketing site.',
  },
  {
    title: 'Shape the system',
    text: 'Then I define the UI, API, and data responsibilities so the build stays coherent as features grow.',
  },
  {
    title: 'Ship with confidence',
    text: 'I focus on maintainable code, collaboration, and the kind of delivery pace teams can actually sustain.',
  },
];

export const experienceHighlights = [
  {
    company: 'Sourcemash',
    role: 'Full Stack .NET Developer',
    period: '2022 - Present',
    points: [
      'Built and maintained business-critical applications across frontend, backend, and integration layers.',
      'Led delivery on modules involving contracts, workflow automation, and enterprise platform customization.',
      'Supported team execution through architecture decisions, collaboration, and hands-on implementation.',
    ],
  },
];

export const trustSignals = [
  { label: 'Architecture', icon: FiCode },
  { label: 'System Integration', icon: FiGlobe },
  { label: 'Business Workflows', icon: FiActivity },
  { label: 'Team Collaboration', icon: FiUsers },
  { label: 'Dev Tooling', icon: FiTool },
  { label: 'UI Thinking', icon: FiFigma },
  { label: 'Commerce Projects', icon: FiShoppingBag },
];
