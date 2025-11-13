/**
 * PORTFOLIO DATA
 * 
 * This file contains all the content for the portfolio website.
 * Update the values below to customize your portfolio.
 * 
 * HOW TO UPDATE:
 * - Personal info: Update name, role, email, social links, CV link
 * - Projects: Modify the projects array with your project details
 * - Experience: Update the experience array with your work history
 * - Skills: Modify the skills object to reflect your expertise
 */

export const personalInfo = {
  name: "Uttkarsh Tyagi",
  role: "Backend-focused Developer",
  email: "uttkarsh25tyagi@gmail.com",
  phone: "+91 9193399551",
  github: "https://github.com/tyxgx",
  linkedin: "https://www.linkedin.com/in/uttkarsh-tyagi-038372246",
  cv: "/Uttkarsh_Tyagi_.pdf", // Update this path to your actual CV file
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  intro: "Hi, I'm Uttkarsh.",
  tagline: "Passionate about building scalable systems and optimizing performance.",
  description: "Fresher backend developer focused on crafting clean APIs, solid database logic, and real-time features.",
  cta: "Let's connect.",
};

export const aboutContent = {
  text: `I'm a backend-focused developer building scalable server-side architectures, RESTful APIs, and real-time services. Experienced in authentication, database modeling, and cloud deployment.

I've built production-ready systems like Teamboard (real-time messaging platform) and Notesy (sticky-notes application), implementing advanced features like WebSocket communication, multi-layer caching, role-based access control, and database optimizations.

Currently pursuing my B.Tech in Information Technology and actively looking for backend-focused opportunities where I can contribute to building robust, scalable systems.`,
};

export const skills = {
  "Core Technologies": [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "React",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "SQL",
  ],
  "Backend Skills": [
    "REST APIs",
    "WebSockets (Socket.io)",
    "JWT Auth",
    "Google OAuth",
    "RBAC",
    "Caching",
    "Database & Query Optimization",
  ],
  "Tools & Deployment": [
    "Git/GitHub",
    "Postman",
    "Render",
    "Vercel",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Teamboard",
    description: "Real-time messaging platform I built to learn WebSockets and real-time systems.",
    shortDescription: "A real-time messaging platform where team members can share ideas openly — anonymously or directly with admins — to foster a collaborative environment.",
    technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "Socket.io", "Prisma"],
    highlights: [
      "Instant, real-time collaboration with a smooth live messaging flow",
      "Smart client-side caching for consistently fast interactions",
      "High-performance UI optimized to avoid unnecessary renders and stays responsive under load",
      "Optimized data handling for a reliable, scalable backend",
    ],
    codeLink: "https://github.com/tyxgx/teamboard",
    demoLink: "https://teamboard-delta.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Notesy",
    description: "A practice project - sticky notes app to learn REST APIs and authentication.",
    shortDescription: "A focused sticky-notes board for capturing and organizing ideas quickly.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "REST API with CRUD operations",
      "JWT authentication",
      "Search, filter, and pagination",
    ],
    codeLink: "https://github.com/tyxgx/Notes-API",
    demoLink: "https://notes-api-livid-pi.vercel.app",
    featured: false,
  },
];

export const education = [
  {
    id: 1,
    institution: "Uttarakhand Technical University, Dehradun",
    degree: "B.Tech in Information Technology",
    period: "Sep 2021 - July 2025",
    details: "CGPA: 6.5",
  },
  {
    id: 2,
    institution: "Delhi Public School Ranipur, Haridwar",
    degree: "Class 12",
    period: "",
    details: "88.4%",
  },
  {
    id: 3,
    institution: "Delhi Public School Ranipur, Haridwar",
    degree: "Class 10",
    period: "",
    details: "86%",
  },
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Unlock Discounts, Bangalore (Remote)",
    period: "July 2024 – Oct 2024",
    summary: "Built features, worked with APIs, learned how real teams ship code.",
  },
  {
    id: 2,
    title: "Project Intern",
    company: "BHEL, Haridwar",
    period: "July 2024 – Aug 2024",
    summary: "Built a web portal, learned about working in a large organization.",
  },
];

export const ctaContent = {
  heading: "Currently looking for backend opportunities",
  description: `I'm actively looking for a backend-focused internship or junior backend developer role.

I enjoy working on REST APIs, real-time messaging features, and database design and performance.

Open to remote and on-site roles across India.`,
};

export const contactContent = {
  text: "The fastest way to reach me:",
  email: personalInfo.email,
  phone: personalInfo.phone,
};

export const footerContent = {
  text: "© 2025 · Built by Uttkarsh Tyagi · Backend first.",
};
