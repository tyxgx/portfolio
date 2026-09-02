/**
 * PORTFOLIO DATA
 *
 * All content for the site lives here. Update these values to change what's
 * shown, components read from this file, not the other way around.
 */

export const personalInfo = {
  name: "Uttkarsh Tyagi",
  role: "Data Engineer · Cloud Engineer · ML Engineer",
  email: "uttkarsh25tyagi@gmail.com",
  phone: "+91 9193399551",
  github: "https://github.com/tyxgx",
  linkedin: "https://www.linkedin.com/in/uttkarsh-tyagi-8579b7404",
  cv: `${import.meta.env.BASE_URL}Uttkarsh_Tyagi_.pdf`,
};

// Public assets must be prefixed with BASE_URL since this site is served
// from a /portfolio/ subpath (GitHub Pages), not the domain root.
const shot = (file: string) => `${import.meta.env.BASE_URL}screenshots/${file}`;

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  status: "Open to opportunities",
  headline: "Systems that keep running after the demo ends.",
  subtext:
    "Data engineering, cloud infrastructure, and ML: five shipped projects, each a different real problem.",
  ctaPrimary: "See the work",
  ctaSecondary: "Download CV",
};

export const aboutContent = {
  heading: "What I actually build",
  paragraphs: [
    "I build systems, not scripts: a streaming lakehouse that survives a mid-write process kill without losing or duplicating data, serverless AWS infrastructure re-architected around real account-level restrictions instead of stalling on them, and a RAG chatbot that refuses to answer rather than hallucinate when it doesn't know.",
    "C-DAC PG Certificate in Big Data Analytics, on top of a B.Tech in Information Technology. Currently looking at Data Engineer, Cloud Engineer, ML Engineer, and DevOps Engineer roles.",
  ],
};

export const skills: { category: string; icon: "database" | "cloud" | "brain" | "terminal"; items: string[] }[] = [
  {
    category: "Data Engineering",
    icon: "database",
    items: ["Apache Spark", "Kafka / Redpanda", "dbt", "Delta Lake", "Medallion Architecture", "Apache Airflow"],
  },
  {
    category: "Cloud (AWS)",
    icon: "cloud",
    items: ["Lambda", "S3", "API Gateway", "Step Functions", "EventBridge", "Glue Data Catalog", "IAM", "Terraform"],
  },
  {
    category: "Machine Learning",
    icon: "brain",
    items: ["scikit-learn", "pandas", "MLflow", "RAG / Vector Search", "Model Evaluation Pipelines"],
  },
  {
    category: "Backend & DevOps",
    icon: "terminal",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Docker", "GitHub Actions (CI/CD)", "Socket.io"],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  roleTags: string[];
  highlights: string[];
  codeLink: string;
  demoLink: string | null;
  featured: boolean;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "liveflights",
    description:
      "Real-time flight intelligence platform: live flight data streamed through Redpanda and Spark into a Delta lakehouse, modeled in dbt, scored by ML, and served to a Next.js dashboard, plus a live serverless AWS deployment of the same pipeline.",
    shortDescription:
      "A streaming pipeline for live aircraft data across Europe, serverless AWS deployment (Terraform), running under a few dollars a month.",
    technologies: ["Spark", "Redpanda", "Delta Lake", "dbt", "Terraform", "AWS Lambda", "MLflow", "FastAPI", "Next.js"],
    roleTags: ["Data Engineer", "Cloud Engineer"],
    highlights: [
      "Streaming lakehouse: Redpanda into Spark Structured Streaming into medallion Delta Lake, modeled with dbt into Postgres marts",
      "Fully serverless AWS deployment via Terraform, EventBridge-scheduled Lambda ingestion, S3 lake, live corridor and anomaly ML",
      "Root-caused a real ~$155/mo DynamoDB cost bug via CloudWatch and rebuilt the live-state store on S3, cutting cost to cents",
      "DBSCAN-based flight corridor discovery and anomaly detection, scored per-request against the live snapshot, no idle infra",
    ],
    codeLink: "https://github.com/tyxgx/liveflights",
    demoLink: "https://liveflights-prod-site-922120357133.s3.us-east-1.amazonaws.com/index.html",
    featured: true,
    images: [shot('liveflights-dashboard.png'), shot('liveflights-corridors.png')],
  },
  {
    id: 2,
    title: "StreamPulse",
    description:
      "A Django web app with a Spotify streaming-analytics dashboard and a RAG chatbot that answers natural-language questions grounded in real data, backed by Postgres and pgvector.",
    shortDescription:
      "A Spotify analytics dashboard with a chatbot that answers questions about the data. It says it doesn't know instead of guessing.",
    technologies: ["Django", "PostgreSQL", "pgvector", "SentenceTransformers", "Groq", "AWS EC2"],
    roleTags: ["Data Engineer", "ML Engineer"],
    highlights: [
      "RAG pipeline: gold data chunked into sentences, embedded with all-MiniLM-L6-v2, retrieved via pgvector's ivfflat index",
      "Confidence gate refuses to answer instead of guessing when no relevant data is found",
      "Keyword-routed SQL path answers aggregate questions directly against Postgres instead of via RAG",
      "Three-tier LLM fallback chain (Groq, Gemini, local Ollama) keeps the chatbot answering if a provider's free tier runs out",
    ],
    codeLink: "https://github.com/tyxgx/streampulse",
    demoLink: "https://streampulse-tyxgx.duckdns.org",
    featured: false,
    images: [shot('streampulse-chatbot.jpg')],
  },
  {
    id: 3,
    title: "Interactive ML",
    description:
      "An educational ML platform that exposes every stage of a scikit-learn pipeline, load, split, preprocess, train, predict, evaluate, as an independently inspectable step instead of one black-box predict button.",
    shortDescription:
      "Explore an ML pipeline step by step, load, preprocess, train, evaluate, instead of one black-box button. Works with your own CSV too.",
    technologies: ["FastAPI", "scikit-learn", "pandas", "Next.js", "TypeScript", "Tailwind CSS"],
    roleTags: ["ML Engineer"],
    highlights: [
      "Every pipeline stage runs as an independent, inspectable step, or the whole pipeline in one click",
      "Leakage-safe preprocessing: the ColumnTransformer is fit only on the training split, never the test split",
      "Fair multi-algorithm comparison, every candidate scored against an identical train/test split",
      "Schema-driven auto-preprocessing routes built-in datasets and uploaded CSVs through the same code path",
    ],
    codeLink: "https://github.com/tyxgx/interactive-ml",
    demoLink: "https://interactive-ml-kappa.vercel.app/",
    featured: false,
    images: [shot('interactive-ml-pipeline.png'), shot('interactive-ml-comparison.png')],
  },
  {
    id: 4,
    title: "TeamBoard",
    description:
      "A real-time collaborative messaging platform: Socket.io WebSockets with optimistic UI, role-based anonymous messaging, and a multi-layer caching strategy built to hold up under real concurrent load.",
    shortDescription: "A real-time chat app, instant message updates, anonymous channels, caching that cut API calls by about 60%.",
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "JWT"],
    roleTags: ["DevOps Engineer"],
    highlights: [
      "Real-time messaging over Socket.io with optimistic UI, UUID-based dedup, and automatic reconnection with backoff",
      "Role-based anonymous messaging, members see 'Anonymous', admins see the real sender, enforced at API and UI layers",
      "Multi-tier IndexedDB and in-memory cache cut API calls by roughly 60% and re-renders by roughly 70%",
      "Atomic bulk operations via Prisma transactions, 8 targeted database indexes, sub-100ms reads and sub-200ms writes",
    ],
    codeLink: "https://github.com/tyxgx/teamboard",
    demoLink: "https://teamboard-delta.vercel.app",
    featured: false,
    images: [shot('teamboard-hero.jpg')],
  },
  {
    id: 5,
    title: "PDF Digest",
    description:
      "Upload any PDF and ask it questions in plain English, a second, independently-built RAG chatbot on a completely different stack from StreamPulse: FastAPI, ChromaDB, and Groq instead of Django and pgvector.",
    shortDescription: "Upload a PDF and ask it questions. Answers come only from the document itself.",
    technologies: ["FastAPI", "ChromaDB", "Groq", "Next.js", "TypeScript"],
    roleTags: ["ML Engineer", "Data Engineer"],
    highlights: [
      "FastAPI backend extracts, chunks, and embeds PDF text into ChromaDB for semantic retrieval, no manual re-indexing",
      "Answers are grounded in retrieved chunks via Groq-hosted Llama 3.1, not open-ended generation off the base model",
      "A second, independent RAG implementation (FastAPI/ChromaDB vs. StreamPulse's Django/pgvector), the pattern generalizes",
      "Next.js frontend on Vercel, backend on Render, split-stack deployment, not a monolith",
    ],
    codeLink: "https://github.com/tyxgx/pdfdigest",
    demoLink: "https://pdfdigest.vercel.app",
    featured: false,
    images: [shot('pdfdigest-hero.jpg')],
  },
];

export const education = [
  {
    id: 0,
    institution: "C-DAC (Centre for Development of Advanced Computing)",
    degree: "PG Certificate Programme in Big Data Analytics",
    period: "Feb 2026 - Aug 2026",
    details: "",
  },
  {
    id: 1,
    institution: "Uttarakhand Technical University, Dehradun",
    degree: "B.Tech in Information Technology",
    period: "Sep 2021 - Jul 2025",
    details: "CGPA 6.5",
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
    period: "Jul 2024 - Oct 2024",
    summary: "Built features, worked with APIs, learned how real teams ship code.",
  },
  {
    id: 2,
    title: "Project Intern",
    company: "BHEL, Haridwar",
    period: "Jul 2024 - Aug 2024",
    summary: "Built a web portal, learned about working inside a large organization.",
  },
];

export const ctaContent = {
  heading: "Get in touch",
  description:
    "Looking at Data Engineer, Cloud Engineer, ML Engineer, and DevOps Engineer roles. Happy to walk through any project above, or just talk.",
};

export const footerContent = {
  text: "(c) 2026 Uttkarsh Tyagi.",
};
