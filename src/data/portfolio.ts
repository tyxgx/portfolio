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
  role: "Data Engineer · Cloud Engineer · ML Engineer",
  email: "uttkarsh25tyagi@gmail.com",
  phone: "+91 9193399551",
  github: "https://github.com/tyxgx",
  linkedin: "https://www.linkedin.com/in/uttkarsh-tyagi-8579b7404",
  cv: `${import.meta.env.BASE_URL}Uttkarsh_Tyagi_.pdf`, // Update this path to your actual CV file
};

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  intro: "Hi, I'm Uttkarsh.",
  tagline: "I ship data pipelines, cloud infrastructure, and ML systems that run in production — not notebooks that run once on my laptop.",
  description: "Five projects below, five different stacks, all live and linked. That's the pitch.",
  cta: "Let's talk.",
};

export const aboutContent = {
  text: `I build systems, not scripts — a streaming lakehouse that survives a mid-write process kill without losing or duplicating data, serverless AWS infrastructure re-architected around real account-level restrictions instead of stalling on them, and a RAG chatbot that refuses to answer rather than hallucinate when it doesn't know.

Five shipped projects, five different problems: a real-time flight-tracking lakehouse (Spark, Kafka-compatible streaming, Terraform-provisioned AWS running live under a $5/month budget), two independently-built RAG systems on completely different stacks (Django + pgvector, FastAPI + ChromaDB), a stage-by-stage ML pipeline explorer built to teach leakage-safe preprocessing, and a real-time collaborative platform tuned down to sub-100ms database reads.

C-DAC PG Certificate in Big Data Analytics, on top of a B.Tech in Information Technology. Currently looking at Data Engineer, Cloud Engineer, ML Engineer, and DevOps Engineer roles — everything below is the actual argument for that, not this paragraph.`,
};

export const skills = {
  "Data Engineering": [
    "Apache Spark",
    "Kafka / Redpanda",
    "dbt",
    "Delta Lake",
    "Medallion Architecture",
    "Apache Airflow",
  ],
  "Cloud (AWS)": [
    "Lambda",
    "S3",
    "API Gateway",
    "Step Functions",
    "EventBridge",
    "Glue Data Catalog",
    "IAM",
    "Terraform",
  ],
  "Machine Learning": [
    "scikit-learn",
    "pandas",
    "MLflow",
    "RAG / Vector Search",
    "Model Evaluation Pipelines",
  ],
  "Backend & DevOps": [
    "Python",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "GitHub Actions (CI/CD)",
    "Socket.io / WebSockets",
  ],
};

export const projects = [
  {
    id: 1,
    title: "liveflights",
    description: "Real-time flight intelligence platform: live flight data streamed through Redpanda and Spark into a Delta lakehouse, modeled in dbt, scored by four ML models, and served to a Next.js dashboard — plus a live serverless AWS deployment of the same pipeline.",
    shortDescription: "A streaming lakehouse for live aircraft data — Spark, Kafka-compatible streaming, Delta Lake medallion architecture, and a Terraform-provisioned serverless AWS deployment running live under a $5/month budget.",
    technologies: ["Spark", "Redpanda", "Delta Lake", "dbt", "Terraform", "AWS Lambda", "MLflow", "FastAPI", "Next.js"],
    roleTags: ["Data Engineer", "Cloud Engineer"],
    highlights: [
      "End-to-end streaming lakehouse: Redpanda → Spark Structured Streaming → medallion Delta Lake (bronze/silver/gold), modeled with dbt into Postgres marts",
      "Fully serverless AWS replica deployed via Terraform — EventBridge-scheduled Lambda ingestion, Kinesis Firehose, S3 lake, Step Functions, Glue Data Catalog — live under a $5/month budget",
      "Root-caused AWS account-level provisioning restrictions using IAM policy simulation and re-architected around them with zero downtime",
      "Four purpose-built ML models (anomaly detection, forecasting, corridor/trajectory analysis) tracked via MLflow, served through a FastAPI + Next.js dashboard",
    ],
    codeLink: "https://github.com/tyxgx/liveflights",
    demoLink: "https://liveflights-prod-site-922120357133.s3.us-east-1.amazonaws.com/index.html",
    featured: true,
  },
  {
    id: 2,
    title: "StreamPulse",
    description: "A Django web app with a Spotify streaming-analytics dashboard and a RAG chatbot that answers natural-language questions grounded in real data, backed by Postgres + pgvector.",
    shortDescription: "Spotify analytics dashboard and a pgvector-backed RAG chatbot with a confidence gate, a SQL router for aggregate questions, and a Groq/Gemini/Ollama LLM fallback chain.",
    technologies: ["Django", "PostgreSQL", "pgvector", "SentenceTransformers", "Groq", "AWS EC2"],
    roleTags: ["Data Engineer", "ML Engineer"],
    highlights: [
      "RAG pipeline: Gold data chunked into sentences, embedded with all-MiniLM-L6-v2, retrieved via pgvector's ivfflat index",
      "Confidence gate refuses to answer instead of guessing when no relevant data is found",
      "Keyword-routed SQL path answers aggregate questions ('which is highest') directly against Postgres instead of via RAG",
      "Three-tier LLM fallback chain — Groq, then Gemini, then local Ollama — keeps the chatbot answering even if a provider's free tier is exhausted",
    ],
    codeLink: "https://github.com/tyxgx/streampulse",
    demoLink: null,
    featured: true,
  },
  {
    id: 3,
    title: "Interactive ML",
    description: "An educational ML platform that exposes every stage of a scikit-learn pipeline — load, split, preprocess, train, predict, evaluate — as an independently inspectable step, instead of a single black-box predict button.",
    shortDescription: "A stage-by-stage ML pipeline explorer with leakage-safe preprocessing and fair multi-algorithm comparison, for built-in datasets or your own uploaded CSV.",
    technologies: ["FastAPI", "scikit-learn", "pandas", "Next.js", "TypeScript", "Tailwind CSS"],
    roleTags: ["ML Engineer"],
    highlights: [
      "Every pipeline stage runs as an independent, inspectable step — or the whole pipeline in one click",
      "Leakage-safe preprocessing: the ColumnTransformer is fit only on the training split, never the test split",
      "Fair multi-algorithm comparison — every candidate algorithm is scored against an identical train/test split",
      "Schema-driven auto-preprocessing routes built-in datasets and uploaded CSVs through the same code path",
    ],
    codeLink: "https://github.com/tyxgx/interactive-ml",
    demoLink: "https://interactive-ml-kappa.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "TeamBoard",
    description: "A real-time collaborative messaging platform: Socket.io WebSockets with optimistic UI, role-based anonymous messaging, and a multi-layer caching strategy built to hold up under real concurrent load, not just a demo.",
    shortDescription: "Real-time messaging platform — optimistic UI updates, role-based anonymous channels, and a caching layer that cut API calls by ~60% and re-renders by ~70%.",
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "JWT"],
    roleTags: ["DevOps Engineer"],
    highlights: [
      "Real-time messaging over Socket.io with optimistic UI, UUID-based dedup, and automatic reconnection with exponential backoff",
      "Role-based anonymous messaging — members see 'Anonymous', admins see the real sender, enforced at both the API and UI layer",
      "Multi-tier IndexedDB + in-memory cache (30s-10min TTLs) cut API calls by ~60% and component re-renders by ~70%",
      "Atomic bulk operations via Prisma transactions, 8 targeted database indexes, sub-100ms reads / sub-200ms writes",
    ],
    codeLink: "https://github.com/tyxgx/teamboard",
    demoLink: "https://teamboard-delta.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "PDF Digest",
    description: "Upload any PDF and ask it questions in plain English — a second, independently-built RAG chatbot on a completely different stack from StreamPulse: FastAPI, ChromaDB, and Groq instead of Django and pgvector.",
    shortDescription: "A PDF-to-chatbot RAG pipeline — extract, chunk, embed into ChromaDB, and answer strictly from retrieved context via Groq-hosted Llama 3.1.",
    technologies: ["FastAPI", "ChromaDB", "Groq", "Next.js", "TypeScript"],
    roleTags: ["ML Engineer", "Data Engineer"],
    highlights: [
      "FastAPI backend extracts, chunks, and embeds PDF text into ChromaDB for semantic retrieval, no manual re-indexing step",
      "Answers are grounded in retrieved chunks via Groq-hosted Llama 3.1 — not open-ended generation off the base model",
      "A second, independent RAG implementation (FastAPI/ChromaDB vs. StreamPulse's Django/pgvector) — the pattern generalizes, it wasn't a one-off",
      "Next.js frontend deployed on Vercel, backend on Render — split-stack deployment, not a monolith",
    ],
    codeLink: "https://github.com/tyxgx/pdfdigest",
    demoLink: "https://pdfdigest.vercel.app",
    featured: true,
  },
];

export const education = [
  {
    id: 0,
    institution: "C-DAC (Centre for Development of Advanced Computing)",
    degree: "PG Certificate Programme in Big Data Analytics (PGCP-BDA)",
    period: "Feb 2026 - Aug 2026",
    details: "",
  },
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
  heading: "The work speaks first.",
  description: `Open to Data Engineer, Cloud Engineer, ML Engineer, and DevOps Engineer roles.

Everything on this page is live, running, and linked — not slideware. Click through, break something, or just ask me about a decision above.`,
};

export const contactContent = {
  text: "The fastest way to reach me:",
  email: personalInfo.email,
  phone: personalInfo.phone,
};

export const footerContent = {
  text: "© 2026 · Built by Uttkarsh Tyagi.",
};
