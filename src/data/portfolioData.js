export const personalInfo = {
  name: "Sujan Bhowmik",
  title: "B.Tech CSE Undergraduate & AI Agent Developer",
  university: "Adamas University",
  degree: "B.Tech in Computer Science & Engineering",
  year: "2025 — 2029",
  cgpa: "9.2 / 10",
  location: "Medinipur, West Bengal",
  phone: "+91 8944887015",
  goal: "Software Development & AI Agents",
  bio: "Computer Science and Engineering undergraduate at Adamas University with a strong academic record (9.2/10 first-year average) and a growing foundation in C++, Java, C, SQL, Data Structures and Algorithms, Object-Oriented Programming, and frontend development. Interested in software development and AI-agent technologies, with a focus on building practical projects and strengthening problem-solving skills.",
  heroSubtitle: "Computer Science & Engineering undergraduate at Adamas University (9.2 CGPA) passionate about Software Development, AI Agents, C++, Java, Data Structures & Algorithms, and building practical real-world applications.",
  
  socials: {
    github: "https://github.com/sujanbhowmik12",
    linkedin: "https://www.linkedin.com/in/sujan-bhowmik-5b195337",
    instagram: "https://www.instagram.com/sujn_eeee_?stkn=YXpkMm4xeG10aDJl",
    email: "ytmrsujan@gmail.com",
    phone: "8944887015"
  },
  
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_u5dqfq9",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_vrtsy5g",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "U4tCNPo7WCPeru7IT"
  },
  
  resumeUrl: "/resume/Sujan-Bhowmik-Resume.pdf"
};

export const aboutCards = [
  { icon: "🎓", label: "Education", value: "B.Tech CSE (9.2 CGPA)" },
  { icon: "🤖", label: "Interest", value: "AI Agents & Software Dev" },
  { icon: "💻", label: "Languages", value: "C++, Java, C, SQL" },
  { icon: "🧠", label: "Core CS", value: "DSA & OOP" },
  { icon: "🚀", label: "Focus", value: "Practical Projects" }
];

export const journeyTimeline = [
  { step: "Schooling", desc: "Foundation in Mathematics & Sciences with distinction" },
  { step: "B.Tech CSE", desc: "Adamas University (2025–2029) | Second Year (9.2/10 CGPA)" },
  { step: "Programming Core", desc: "Mastering C++, Java, C, Data Structures & Algorithms, OOP" },
  { step: "Web & Software", desc: "Frontend development, responsive UIs, and interactive applications" },
  { step: "AI Agents & Projects", desc: "Building practical projects like ZOYA (AI Agent) and YTMR-LPG" },
  { step: "Future Vision", desc: "Creating high-impact intelligent software solutions and autonomous agents" }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "C++", level: "Intermediate", icon: "Cpu" },
      { name: "Java", level: "Intermediate", icon: "Coffee" },
      { name: "C", level: "Intermediate", icon: "Code2" },
      { name: "SQL", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    name: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", level: "Intermediate", icon: "Binary" },
      { name: "Object-Oriented Programming", level: "Intermediate", icon: "Code2" },
      { name: "Database Management (SQL)", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    name: "Web & Software Development",
    skills: [
      { name: "Frontend Development", level: "Intermediate", icon: "Laptop" },
      { name: "JavaScript", level: "Intermediate", icon: "Code2" },
      { name: "HTML5 & CSS3", level: "Intermediate", icon: "FileCode" },
      { name: "Git & GitHub", level: "Intermediate", icon: "GitBranch" }
    ]
  },
  {
    name: "AI Agents & Interests",
    skills: [
      { name: "AI Agents", level: "Active Focus", icon: "BrainCircuit" },
      { name: "Software Development", level: "Active Focus", icon: "Sparkles" },
      { name: "Task-Oriented AI", level: "Intermediate", icon: "Bot" }
    ]
  }
];

export const projectCategories = ["All", "AI/ML", "Data Science", "Web Development", "C/C++"];

export const projects = [
  {
    id: "zoya-ai-agent",
    title: "ZOYA — AI Agent",
    description: "Developed an AI-agent project exploring task-oriented functionality and practical applications of AI concepts.",
    category: "AI/ML",
    technologies: ["AI Agents", "Python", "LLMs", "Task Automation"],
    githubUrl: "https://github.com/sujanbhowmik12",
    liveUrl: null,
    isFeatured: true,
    isComingSoon: false,
    badge: "AI Agent"
  },
  {
    id: "lecturemind-ai",
    title: "LectureMind AI",
    description: "An AI-powered application designed to convert lecture/video content into text and help users process educational content more efficiently.",
    category: "AI/ML",
    technologies: ["AI", "Whisper", "Gemini", "JavaScript", "Web Development"],
    githubUrl: "https://github.com/sujanbhowmik12/LectureMind-AI",
    liveUrl: "https://lecture-mind-ai-xi.vercel.app/",
    isFeatured: true,
    isComingSoon: false,
    badge: "AI Application"
  },
  {
    id: "ytmr-lpg",
    title: "YTMR-LPG",
    description: "Developed a project focused on LPG-related functionality and user requirements, applying programming concepts to organize and implement the solution.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Backend", "Database"],
    githubUrl: "https://github.com/sujanbhowmik12/MyLPG-F.git",
    liveUrl: "https://ytmr-lpg-sujan.vercel.app/",
    isFeatured: true,
    isComingSoon: false,
    badge: "Web Platform"
  },
  {
    id: "titanic-prediction",
    title: "Titanic Survival Prediction",
    description: "Machine learning classification model predicting passenger survival probability based on demographic and voyage data features.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    githubUrl: "https://github.com/sujanbhowmik12",
    liveUrl: null,
    isFeatured: false,
    isComingSoon: true,
    badge: "Coming Soon"
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description: "Regression analysis model evaluating real estate dataset metrics, location dynamics, and square footage to estimate property values.",
    category: "Data Science",
    technologies: ["Python", "NumPy", "Matplotlib", "Scikit-learn"],
    githubUrl: "https://github.com/sujanbhowmik12",
    liveUrl: null,
    isFeatured: false,
    isComingSoon: true,
    badge: "Coming Soon"
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation",
    description: "Unsupervised clustering (K-Means) project analyzing retail customer purchasing behavior and purchasing patterns.",
    category: "Data Science",
    technologies: ["Python", "Scikit-learn", "Seaborn", "K-Means"],
    githubUrl: "https://github.com/sujanbhowmik12",
    liveUrl: null,
    isFeatured: false,
    isComingSoon: true,
    badge: "Coming Soon"
  }
];

export const experienceTimeline = [
  {
    title: "B.Tech CSE — Adamas University",
    period: "2025 — 2029",
    tag: "Second Year | CGPA: 9.2/10",
    description: "Pursuing Bachelor of Technology in Computer Science & Engineering. Maintaining a 9.2/10 academic average with strong focus on computer science theory, algorithms, and practical software engineering."
  },
  {
    title: "Programming Core & OOP",
    period: "Ongoing",
    tag: "C++, Java, C",
    description: "Developing robust algorithmic foundation and object-oriented architectures in C++, Java, and C, with Data Structures & Algorithms and clean code practices."
  },
  {
    title: "Web & Frontend Development",
    period: "Ongoing",
    tag: "Frontend & Full Stack",
    description: "Building responsive, modern, and high-performance web applications using modern JavaScript, HTML5, CSS3, and React."
  },
  {
    title: "AI Agents & Autonomous Systems",
    period: "Ongoing",
    tag: "AI Innovation",
    description: "Designing and developing autonomous AI agents (such as ZOYA), exploring task-oriented workflows and practical applications of artificial intelligence."
  },
  {
    title: "Database Management (SQL)",
    period: "Ongoing",
    tag: "Database Systems",
    description: "Working with relational database design, SQL queries, and backend storage architectures for software projects like YTMR-LPG."
  }
];

export const achievements = [
  {
    id: "hackathons",
    icon: "Trophy",
    title: "Hackathons",
    description: "Add your hackathon achievements here.",
    placeholder: true
  },
  {
    id: "coding",
    icon: "Code",
    title: "Coding Achievements",
    description: "Add your coding achievements here.",
    placeholder: true
  },
  {
    id: "projects",
    icon: "Sparkles",
    title: "Notable Projects",
    description: "Add notable project achievements here.",
    placeholder: true
  },
  {
    id: "competitions",
    icon: "Award",
    title: "Competitions",
    description: "Add competition achievements here.",
    placeholder: true
  }
];

export const certifications = [
  {
    id: "genai-tools-nasscom",
    name: "Gen AI Tools",
    issuer: "FutureSkills Prime (NASSCOM & MeitY, Govt. of India)",
    date: "August 23, 2026",
    credentialId: "FSP/2026/8/10365111",
    imageUrl: "/certificates/genai-tools.png",
    pdfUrl: "/certificates/Sujan_Bhowmik_Gen_AI_Tools_Certificate.pdf",
    badge: "🥇 Gold Certified (70%+ Score)",
    grade: "Gold Tier Assessment",
    skills: ["Gen AI Tools", "Artificial Intelligence", "NASSCOM Standards"],
    isVerified: true,
    isPlaceholder: false
  },
  {
    id: "cert-2",
    name: "Data Science & ML Specialization",
    issuer: "Target Credential",
    date: "In Progress",
    credentialUrl: "#",
    isPlaceholder: true
  }
];
