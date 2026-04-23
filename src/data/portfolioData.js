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
    title: 'Contract and Order Flow for OMS',
    eyebrow: 'Angular, .NET Core, enterprise workflow',
    icon: FiShield,
    summary:
      'Built a contract module that made order processing more trustworthy and easier to manage across a larger operational flow.',
    impact: [
      'Introduced secure order linking and e-sign support',
      'Reduced friction in high-trust contract handling',
      'Fit cleanly into an existing enterprise system',
    ],
  },
  {
    title: 'Salesforce and AS400 Integration Layer',
    eyebrow: 'Salesforce, Dell Boomi, legacy integration',
    icon: FiCommand,
    summary:
      'Created bi-directional integrations that helped modern cloud workflows stay aligned with legacy business systems.',
    impact: [
      'Improved data movement between AS400 and Salesforce',
      'Reduced manual handoffs between teams and systems',
      'Strengthened reliability of service operations',
    ],
  },
  {
    title: 'Custom Framing Product Experience',
    eyebrow: 'Angular, Next.js, .NET Core, image tooling',
    icon: FiBox,
    summary:
      'Led delivery of a creative commerce experience where users could configure visual products through multiple specialized interfaces.',
    impact: [
      'Supported a dual-frontend architecture for different needs',
      'Combined product customization with image-heavy flows',
      'Coordinated across design, development, and delivery',
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
