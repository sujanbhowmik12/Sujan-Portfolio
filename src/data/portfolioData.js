export const personalInfo = {
  name: "Sujan Bhowmik",
  title: "B.Tech CSE Student & Aspiring Data Scientist",
  university: "Adamas University",
  degree: "B.Tech in Computer Science & Engineering",
  year: "2026 — Present",
  location: "Kolkata, West Bengal, India",
  goal: "Aspiring Data Scientist",
  bio: "I'm Sujan Bhowmik, a B.Tech Computer Science & Engineering student at Adamas University. I enjoy building software projects, exploring artificial intelligence and learning how data can be used to solve real-world problems.",
  heroSubtitle: "B.Tech CSE student and aspiring Data Scientist passionate about Data Science, Machine Learning, Artificial Intelligence and building useful real-world applications.",
  
  socials: {
    github: "https://github.com/sujanbhowmik12",
    linkedin: "https://www.linkedin.com/in/sujan-bhowmik-5b1953378?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sujn_eeee_?stkn=YXpkMm4xeG10aDJl",
    email: "ytmrsujan@gmail.com"
  },
  
  resumeUrl: "/resume/Sujan-Bhowmik-Resume.pdf"
};

export const aboutCards = [
  { icon: "🎓", label: "Education", value: "B.Tech CSE" },
  { icon: "📊", label: "Goal", value: "Aspiring Data Scientist" },
  { icon: "🤖", label: "Interest", value: "AI/ML Enthusiast" },
  { icon: "💻", label: "Role", value: "Developer" },
  { icon: "🚀", label: "Focus", value: "Project Builder" }
];

export const journeyTimeline = [
  { step: "School", desc: "Foundation in Mathematics & Science" },
  { step: "B.Tech CSE", desc: "Computer Science & Engineering at Adamas University" },
  { step: "Programming", desc: "Mastering C, C++, Data Structures & Algorithms" },
  { step: "Web Development", desc: "Building full-stack interactive web applications" },
  { step: "Data Science", desc: "Exploring Statistics, Data Analysis & Visualization" },
  { step: "Machine Learning", desc: "Building predictive models & Intelligent systems" },
  { step: "Future Data Scientist", desc: "Solving real-world industry challenges with Data & AI" }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "C", level: "Intermediate", icon: "Code2" },
      { name: "C++", level: "Intermediate", icon: "Cpu" },
      { name: "Java", level: "Intermediate", icon: "Coffee" },
      { name: "SQL", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    name: "Data Science & Tools",
    skills: [
      { name: "Python", level: "Learning", icon: "Terminal" },
      { name: "NumPy", level: "Familiar", icon: "Binary" },
      { name: "Pandas", level: "Familiar", icon: "Table" },
      { name: "SQL", level: "Intermediate", icon: "Database" },
      { name: "Jupyter Notebook", level: "Intermediate", icon: "BookOpen" }
    ]
  },
  {
    name: "AI / ML Foundations",
    skills: [
      { name: "Machine Learning", level: "Learning", icon: "Sparkles" },
      { name: "Artificial Intelligence", level: "Learning", icon: "BrainCircuit" },
      { name: "Deep Learning", level: "Learning", icon: "Network" }
    ]
  },
  {
    name: "Development Tools",
    skills: [
      { name: "Git", level: "Intermediate", icon: "GitBranch" },
      { name: "GitHub", level: "Intermediate", icon: "Github" },
      { name: "VS Code", level: "Intermediate", icon: "Laptop" },
      { name: "Google Colab", level: "Intermediate", icon: "Cloud" }
    ]
  }
];

export const projectCategories = ["All", "AI/ML", "Data Science", "Web Development", "C/C++"];

export const projects = [
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
    description: "A management platform concept for LPG delivery operations, customer records, booking information, payment tracking and cylinder status.",
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
    period: "2026 — Present",
    tag: "Education & Foundation",
    description: "Pursuing Bachelor of Technology in Computer Science & Engineering. Building strong fundamentals in Computer Science theory, software engineering principles, and data analysis."
  },
  {
    title: "Programming & DSA",
    period: "Ongoing",
    tag: "Core Computer Science",
    description: "Learning C, C++, pointers, arrays, structures, memory management, and linked lists to establish a strong algorithmic foundation."
  },
  {
    title: "Web Development",
    period: "Ongoing",
    tag: "Frontend & Full Stack",
    description: "Building responsive, modern, and high-performance web applications using modern JavaScript, HTML5, CSS3, and React."
  },
  {
    title: "Data Science & Analysis",
    period: "Ongoing",
    tag: "Data Focus",
    description: "Learning Python, exploratory data analysis (EDA), statistics, NumPy, Pandas, Matplotlib, and predictive modeling."
  },
  {
    title: "Artificial Intelligence & LLMs",
    period: "Ongoing",
    tag: "AI Exploration",
    description: "Exploring state-of-the-art AI tools, large language models (LLMs), prompt engineering, and integrating AI APIs into software applications."
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
