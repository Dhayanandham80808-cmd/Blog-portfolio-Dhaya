export const personalInfo = {
  name: "Dhayanandham A",
  title: "Full Stack Developer & AI/ML Engineer",
  email: "dhayanandham80808@gmail.com",
  phone: "+91 6383275813",
  location: "Puducherry, India",
  github: "https://github.com/dhayanandham80808-cmd",
  linkedin: "https://linkedin.com/in/dhayanandham-a-a39505323",
  summary: "Results-driven Full Stack Developer and AI/ML Engineer with hands-on experience building production-quality responsive web applications and machine learning systems from scratch. Proficient in HTML5, CSS3, JavaScript, Python and skilled in neural network architectures, federated learning, and IoT development.",
  college: "Sri Manakula Vinayagar Engineering College, Puducherry",
  degree: "B.Tech — Electronics & Communication Engineering",
  graduationYear: "2022 – 2026",
  status: "Actively seeking entry-level roles in Web Development, Full Stack Engineering, or AI/ML"
};

export const stats = [
  { label: "Production Projects", value: "6+", highlight: "Web & AI/ML" },
  { label: "Core Technologies", value: "15+", highlight: "MERN, Python, MATLAB" },
  { label: "Certifications", value: "5+", highlight: "AI, IoT & Embedded" },
  { label: "Leadership Roles", value: "ISF Secretary", highlight: "Engineering Council" },
];

export const skillsData = {
  frontend: [
    { name: "HTML5 & Semantic Markup", level: 95, tag: "Core" },
    { name: "CSS3, Flexbox & CSS Grid", level: 95, tag: "Layouts" },
    { name: "JavaScript (ES6+)", level: 90, tag: "Logic" },
    { name: "React.js & Hooks", level: 88, tag: "Framework" },
    { name: "Tailwind CSS & Bootstrap", level: 92, tag: "Styling" },
    { name: "Responsive & Accessible UI", level: 94, tag: "Design Systems" },
  ],
  backend: [
    { name: "Python", level: 90, tag: "General & ML" },
    { name: "Node.js & Express.js", level: 85, tag: "REST APIs" },
    { name: "MongoDB & Mongoose", level: 82, tag: "NoSQL DB" },
    { name: "Java & Basic C", level: 80, tag: "Foundations" },
    { name: "RESTful API Design & JSON", level: 90, tag: "Architecture" },
    { name: "Basic SQL & Relational DBs", level: 78, tag: "Database" },
  ],
  aiml: [
    { name: "Federated Transfer Learning", level: 88, tag: "Decentralized AI" },
    { name: "Neural Network Architectures", level: 90, tag: "Deep Learning" },
    { name: "Backpropagation & Gradient Descent", level: 92, tag: "First Principles" },
    { name: "MATLAB Deep Learning Toolbox", level: 86, tag: "Simulation" },
    { name: "Data Preprocessing & Metrics", level: 85, tag: "Pipeline" },
  ],
  tools: [
    { name: "Git & GitHub Version Control", level: 92, tag: "VCS" },
    { name: "VS Code & Debugging Tools", level: 95, tag: "IDE" },
    { name: "GitHub Pages & Web Hosting", level: 92, tag: "DevOps" },
    { name: "Arduino IDE & Hardware Interfacing", level: 88, tag: "Embedded" },
    { name: "Firebase (Auth & Firestore)", level: 85, tag: "BaaS" },
    { name: "PCB Design & Hardware Prototyping", level: 80, tag: "Electronics" },
  ],
  soft: [
    { name: "Analytical Problem Solving", level: 95 },
    { name: "Technical Documentation", level: 90 },
    { name: "Team Leadership & Coordination", level: 92 },
    { name: "Event & Logistics Management", level: 88 },
    { name: "Rapid Technical Learning", level: 96 },
  ]
};

export const projectsData = [
  {
    id: "wander-trail",
    title: "Wander Trail",
    subtitle: "Travel Landing Page with Dynamic Indian Destinations",
    year: "2024",
    category: "Full Stack Web",
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "GitHub Pages"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    description: "Built a fully responsive travel-themed landing page showcasing popular Indian destinations with interactive sticky navigation, smooth hover micro-animations, and localized INR pricing packages.",
    highlights: [
      "Engineered flexible CSS Grid & Flexbox layouts adapting across 480px, 768px, and 1024px breakpoints.",
      "Optimized external CDN assets (Font Awesome & Google Fonts) for sub-second first contentful paint.",
      "Automated continuous deployment workflow onto GitHub Pages."
    ],
    demoUrl: "https://dhayanandham80808-cmd.github.io/Wander-Trail/",
    githubUrl: "https://github.com/dhayanandham80808-cmd",
    badge: "Live Deployed"
  },
  {
    id: "wanderrate",
    title: "WanderRate",
    subtitle: "TripAdvisor-Style Travel Review & Discovery Platform",
    year: "2024",
    category: "Full Stack Web",
    tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Font Awesome"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive travel review ecosystem featuring dynamic destination cards, interactive 5-star rating breakdowns, hero showcases, and user testimonials using modern semantic CSS architecture.",
    highlights: [
      "Demonstrated real-world GitHub Pages problem solving by resolving a Google Safe Browsing false-positive deployment issue through clean domain rebranding.",
      "Modularized styling using BEM methodology for reusable component classes.",
      "100% pure vanilla implementation ensuring zero dependency bloat."
    ],
    demoUrl: "https://dhayanandham80808-cmd.github.io/WanderRate/",
    githubUrl: "https://github.com/dhayanandham80808-cmd",
    badge: "Problem Solved"
  },
  {
    id: "skillforge",
    title: "SkillForge / LearnHub",
    subtitle: "E-Learning Platform UI Inspired by Coursera & Udemy",
    year: "2024",
    category: "Full Stack Web",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: "Created an immersive e-learning interface with interactive course cards, video preview containers, tiered subscription pricing tables, and verified instructor profiles built using component-based design tokens.",
    highlights: [
      "Structured accessible tabbed navigation for browsing categories (Coding, Design, AI, Business).",
      "Created fluid pricing toggle switch between monthly and annual billing with discount animations.",
      "Engineered touch-friendly carousel navigation for course lists."
    ],
    demoUrl: "https://github.com/dhayanandham80808-cmd",
    githubUrl: "https://github.com/dhayanandham80808-cmd",
    badge: "Component UI"
  },
  {
    id: "federated-learning",
    title: "Privacy-Preserving Federated Transfer Learning",
    subtitle: "Decentralized Deep Learning Simulation Environment",
    year: "2026",
    category: "AI & Machine Learning",
    tech: ["Python", "MATLAB", "Deep Learning", "Transfer Learning"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    description: "Designed a decentralized simulation architecture enabling multi-node neural network updates without centralizing sensitive edge data, integrating transfer learning to transfer foundational representations.",
    highlights: [
      "Reduced client-to-server payload bandwidth by 74% by federating classification layers over frozen feature extractors.",
      "Achieved 93.8% validation accuracy in just 14 communication rounds across non-IID client distributions.",
      "Built visual telemetry tracking convergence loss, node communication overhead, and differential privacy bounds."
    ],
    demoUrl: "#projects",
    githubUrl: "https://github.com/dhayanandham80808-cmd",
    badge: "Research Project"
  },
  {
    id: "neural-network",
    title: "Optimized Feed-Forward Neural Network",
    subtitle: "Vectorized Multi-Layer Perceptron Built From First Principles",
    year: "2026",
    category: "AI & Machine Learning",
    tech: ["MATLAB", "Backpropagation", "Linear Algebra", "Optimization"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    description: "Constructed a multi-layer neural network from scratch utilizing matrix calculus, dynamic activation functions, and variable momentum backpropagation in MATLAB without external autograd toolboxes.",
    highlights: [
      "Vectorized forward and backward matrix passes yielding a 5.2x speedup over iterative for-loops.",
      "Implemented adaptive learning rates with variable momentum beta factor to escape saddle point plateaus.",
      "Validated against standard benchmark datasets with full numerical gradient checking."
    ],
    demoUrl: "#projects",
    githubUrl: "https://github.com/dhayanandham80808-cmd",
    badge: "First Principles"
  },
  {
    id: "braille-converter",
    title: "Text-to-Braille Converter",
    subtitle: "Assistive Tactile Translation System for Visually Impaired",
    year: "2023",
    category: "Embedded & IoT",
    tech: ["Python", "Arduino", "Embedded C++", "Hardware Interfacing"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Engineered an accessibility converter bridging high-level Python string manipulation with Arduino-controlled electromagnetic solenoids to actuate physical 6-dot Braille patterns in real time.",
    highlights: [
      "Encoded alphanumeric characters into 6-bit binary masks mapped to digital GPIO driver circuits.",
      "Programmed debounced actuation timing to avoid solenoid overheating while maintaining 50 WPM reading speeds.",
      "Built an interactive software preview simulator allowing users to visualize tactile outputs."
    ],
    demoUrl: "#braille-demo",
    githubUrl: "https://github.com/dhayanandham80808-cmd",
    badge: "Hardware & IoT"
  }
];

export const educationData = [
  {
    period: "2022 – 2026",
    degree: "B.Tech — Electronics & Communication Engineering",
    institution: "Sri Manakula Vinayagar Engineering College",
    location: "Puducherry, India",
    description: "Specializing in embedded systems, digital signal processing, modern web systems, and machine learning architectures. Active member of technical symposiums and engineering bodies.",
    icon: "GraduationCap"
  },
  {
    period: "2022",
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Amlorpavam Higher Secondary School",
    location: "Puducherry, India",
    score: "65.4%",
    description: "Focused on Mathematics, Physics, Chemistry, and Computer Science foundations.",
    icon: "BookOpen"
  },
  {
    period: "2020",
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Amlorpavam Higher Secondary School",
    location: "Puducherry, India",
    score: "72.5%",
    description: "Strong academic foundation in science, mathematics, and analytical reasoning.",
    icon: "Award"
  }
];

export const certificationsData = [
  {
    title: "Certified — AI & Machine Learning Fundamentals",
    issuer: "AI Certification Authority",
    year: "2024",
    skills: ["Neural Networks", "Deep Learning", "Model Evaluation"]
  },
  {
    title: "NPTEL Certified — Internet of Things (IoT)",
    issuer: "IIT / NPTEL (Govt of India)",
    year: "2024",
    skills: ["Sensor Networks", "Microcontrollers", "MQTT & Cloud Protocols"]
  },
  {
    title: "Industrial Training — Embedded Systems",
    issuer: "CodeBind Technologies",
    year: "2023",
    skills: ["Embedded C", "Microcontrollers", "Peripheral Interfacing"]
  },
  {
    title: "Electronics Workshop — Hardware & System Integration",
    issuer: "Raja Electronics Institute",
    year: "2023",
    skills: ["Circuit Debugging", "Hardware-Software Integration"]
  },
  {
    title: "Practical PCB Design & Prototyping",
    issuer: "Engineering Design Council",
    year: "2023",
    skills: ["Schematic Capture", "PCB Routing", "Soldering & Assembly"]
  }
];

export const leadershipData = {
  role: "ISF Council Secretary",
  organization: "Engineering College ISF Chapter",
  highlights: [
    "Managed and coordinated college-wide technical events, hackathons, and student activities.",
    "Spearheaded communications and logistical operations across multiple engineering departments.",
    "Cultivated hands-on team leadership, conflict resolution, delegation, and stakeholder management skills."
  ]
};
