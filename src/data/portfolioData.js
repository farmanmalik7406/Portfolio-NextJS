import {
  FiActivity,
  FiBox,
  FiCode,
  FiCommand,
  FiCpu,
  FiDatabase,
  FiFeather,
  FiFigma,
  FiGlobe,
  FiLayers,
  FiPlayCircle,
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
  title: 'Integration & Full-Stack Architect building interactive UIs and enterprise-grade data pipelines.',
  location: 'Mohali, Punjab, India',
  email: 'farmanmalik7406@gmail.com',
  phone: '+91 9760677406',
  summary:
    'I bridge the gap between complex enterprise backends and immersive, real-time user experiences. My sweet spot lies in engineering robust full-stack systems, optimizing cross-platform integrations (Salesforce, Dell Boomi, legacy systems), and building high-performance, client-side canvas visualization architectures.',
  availability: 'Available for premium product engineering, enterprise integration architecture, and high-performance full-stack development.',
  stats: [
    { value: '4+', label: 'years engineering enterprise-grade production software' },
    { value: '12+', label: 'core technologies utilized to scale business applications' },
    { value: '3', label: 'specialties: rich interactive UIs, robust backend APIs, ecosystem integrations' },
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
    title: 'High-Performance, Rich UIs',
    text: 'Building immersive, stateful client-side interfaces and complex visualization engines that drastically reduce server overhead.',
  },
  {
    icon: FiServer,
    title: 'Enterprise Backend Architecture',
    text: 'Designing reliable APIs, data validation engines, and secure business logic layers built for absolute scale and uptime.',
  },
  {
    icon: FiRefreshCw,
    title: 'Mission-Critical Integrations',
    text: 'Connecting Salesforce ecosystems, legacy platforms, and cloud services to eliminate operational bottlenecks and data drift.',
  },
];

export const capabilityLanes = [
  {
    title: 'Advanced Frontend Engineering',
    description:
      'Engineering fast, stateful interfaces that balance visual polish with highly complex, interactive browser capabilities.',
    icon: FiSmartphone,
    highlights: [
      'Interactive Canvas Engineering (Fabric.js / Konva.js UI architectures)',
      'Stateful workflow engines and multi-role administrative dashboards',
      'Component-driven frontend systems optimized for minimal rendering lag',
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
    title: 'Robust Backends and Core APIs',
    description:
      'Designing transactional microservices and data pipelines that keep enterprise applications stable, secure, and traceable.',
    icon: FiDatabase,
    highlights: [
      'High-throughput RESTful API design and middleware optimization',
      'Asynchronous backend synchronization layers and strict data validation',
      'Performance-minded record management and secure role-based authentication',
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
    title: 'Enterprise Clouds and Connected Platforms',
    description:
      'Architecting deep cross-system integrations to ensure disparate corporate platforms operate under a unified source of truth.',
    icon: FiCpu,
    highlights: [
      'Salesforce Cloud ecosystem customization and API management',
      'Dell Boomi middleware orchestration and automated data transformations',
      'Strategic API quota containment and infrastructure cost reduction',
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
    title: 'Enterprise Platform Integrations',
    eyebrow: 'Cross-System Ecosystem Synchronization',
    icon: FiShield,
    summary:
      'Engineered bi-directional data pipelines connecting Salesforce ecosystems, middleware platforms like Dell Boomi, and legacy AS400 mainframes to ensure reliable enterprise operations.',
    stack: ['Salesforce', 'Dell Boomi', 'AS400', 'REST APIs', 'Data Transformation'],
    impact: [
      'Maintained ironclad data sync with legacy systems as a source of truth',
      'Eliminated costly operational data drift across global cloud ecosystems',
      'Streamlined multi-platform corporate workflows, replacing manual handoffs',
    ],
  },
  {
    title: 'Data Consistency and API Optimization',
    eyebrow: 'Backend Architecture and Pipeline Refinement',
    icon: FiCommand,
    summary:
      'Architected custom server-side data suppression and smart pagination logic within a .NET Core backbone to process massive records without hitting external cloud thresholds.',
    stack: ['.NET Core', 'Node.js', 'MySQL', 'MongoDB', 'Suppression & Pagination Logic'],
    impact: [
      'Resolved critical third-party OCI API quota overage errors permanently',
      'Secured transactional integrity and record reconciliation across databases',
      'Protected cloud infrastructure budgets from expensive hardware scaling costs',
    ],
  },
  {
    title: 'Order Management & Contract Systems',
    eyebrow: 'Transactional Operational Architecture',
    icon: FiBox,
    summary:
      'Built business-critical components for Order Management Systems (OMS), featuring real-time document signing interactions and immediate backend state synchronization.',
    stack: ['Angular', 'React', 'Role-Based Authorization', 'Dynamic Workflows', '.NET Core'],
    impact: [
      'Designed frictionless, approval-centric administrative user journeys',
      'Guaranteed transactional data safety during rapid, real-time client signing',
      'Provided absolute operational visibility for cross-functional management teams',
    ],
  },
  {
    title: 'Custom Enterprise API Ecosystems',
    eyebrow: 'Scalable Application Backbone',
    icon: FiServer,
    summary:
      'Designed and deployed high-performance Web API layers powering multiple dependent frontends, enforcing ironclad authentication and highly clean domain logic.',
    stack: ['.NET Core', 'Express', 'JWT/Auth Systems', 'Domain-Driven Design', 'Postman'],
    impact: [
      'Shipped cleanly decoupled, reusable microservice endpoints',
      'Accelerated product feature delivery times for frontend development teams',
      'Established reliable, traceable API request pipelines for downstream systems',
    ],
  },
  {
    title: 'Immersive Product Customization Engines',
    eyebrow: 'Interactive Client-Side UI Architecture',
    icon: FiShoppingBag,
    summary:
      'Engineered advanced, client-side configuration frontends using canvas manipulation tools to process multi-layered product visualizers directly in the user browser.',
    stack: ['Next.js', 'Angular', 'Fabric.js / Konva.js', 'Cloudinary Asset Mapping', 'Stateful Canvas'],
    impact: [
      'Drastically decreased cloud hosting costs by offloading rendering to the client',
      'Delivered a lightning-fast, lag-free visual customizer experience for buyers',
      'Seamlessly translated complex frontend UI layer states into clean database payloads',
    ],
  },
  {
    title: 'Scalable Design Systems and Responsive UI',
    eyebrow: 'Interface Standardization & Performance',
    icon: FiLayers,
    summary:
      'Established maintainable frontend design frameworks across modern Javascript ecosystems, emphasizing responsive grids, crisp visual execution, and UI consistency.',
    stack: ['React', 'Next.js', 'Angular', 'TypeScript', 'SCSS Systems'],
    impact: [
      'Created highly reusable modular component libraries across codebases',
      'Guaranteed flawless browser responsiveness across varying desktop and mobile viewports',
      'Significantly decreased frontend technical debt through standardized coding patterns',
    ],
  },
];

export const liveProjects = [
  {
    title: 'NLP AI Interface Playground',
    eyebrow: 'Interactive AI Demonstration Space',
    icon: FiPlayCircle,
    url: 'https://nlp-ai-demo.vercel.app',
    summary:
      'An interactive sandbox interface exploring concepts in natural language processing and text intelligence, translating advanced AI algorithms into smooth web experiences.',
    stack: ['NLP Integration', 'AI UX Paradigms', 'React', 'Vercel Deployment', 'Stateful Interactivity'],
    highlights: [
      'Live web environment optimized for zero latency and interactive exploration',
      'Demonstrates clean execution of parsing text intelligence data into accessible UX models',
    ],
    accentIcon: FiFeather,
  },
];

export const workflow = [
  {
    title: 'Map the Operational Journey',
    text: 'I analyze the true business flow, identifying where the data lives and how human users interact with the system before writing a single line of code.',
  },
  {
    title: 'Architect Decoupled Responsibility',
    text: 'I map clear boundary lines between the frontend layer, API gateways, and enterprise middleware to safeguard long-term system scaling and performance.',
  },
  {
    title: 'Ship Secure, Maintainable Products',
    text: 'I lead development cycles with a sharp focus on clean code conventions, robust test coverage, and repeatable deployment automation pipelines.',
  },
];

export const experienceHighlights = [
  {
    company: 'Sourcemash',
    role: 'Full Stack .NET & Integration Engineer',
    period: '2022 - Present',
    points: [
      'Engineered and maintained business-critical web applications and integration systems across modern Javascript layers and .NET Core backends.',
      'Led technical delivery on specialized modules involving transactional order workflows, custom API scaling, and Salesforce platform customizations.',
      'Guided multi-disciplinary project teams—including developers, UI/UX designers, and QA engineers—by providing architectural clarity and hands-on code reviews.',
    ],
  },
];

export const trustSignals = [
  { label: 'System Architecture', icon: FiCode },
  { label: 'Enterprise Integrations', icon: FiGlobe },
  { label: 'Business Workflows', icon: FiActivity },
  { label: 'Technical Team Leadership', icon: FiUsers },
  { label: 'E-commerce Platforms', icon: FiShoppingBag },
  { label: 'Canvas/Rich UI Engineering', icon: FiFigma },
  { label: 'API Optimization', icon: FiTool },
];
