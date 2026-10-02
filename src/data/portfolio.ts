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
    "Data engineering, cloud infrastructure, and ML: seven projects, each a different real problem.",
  ctaPrimary: "See the work",
  ctaSecondary: "Download CV",
};

export const aboutContent = {
  heading: "What I actually build",
  paragraphs: [
    "I build systems, not scripts: a streaming lakehouse that survives a mid-write process kill without losing or duplicating data, serverless AWS infrastructure re-architected around real account-level restrictions instead of stalling on them, and a chatbot that can only state a number if a tool actually returned it.",
    "C-DAC PG Certificate in Big Data Analytics, on top of a B.Tech in Information Technology. Currently looking at Data Engineer, Cloud Engineer, ML Engineer, and DevOps Engineer roles.",
  ],
};

export const skills: { category: string; icon: "database" | "cloud" | "brain" | "terminal"; items: string[] }[] = [
  {
    category: "Data Engineering",
    icon: "database",
    items: ["DuckDB", "Apache Spark", "Kafka / Redpanda", "dbt", "Delta Lake", "Medallion Architecture", "Apache Airflow"],
  },
  {
    category: "Cloud (AWS)",
    icon: "cloud",
    items: ["Lambda", "S3", "API Gateway", "EventBridge", "DynamoDB", "CloudWatch", "IAM / GitHub OIDC", "Terraform"],
  },
  {
    category: "Machine Learning",
    icon: "brain",
    items: ["PyTorch", "ONNX", "scikit-learn", "pandas / NumPy", "MLflow", "LangGraph", "RAG / Vector Search", "Model Evaluation"],
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
  architectureLink?: string;
  featured: boolean;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "liveflights",
    description:
      "Real-time flight intelligence platform. Live on AWS: a scheduled Lambda pulls real aircraft positions every minute into S3, a PyTorch GRU model (ONNX, served by its own Lambda) predicts each aircraft's position 5 minutes ahead and is scored against reality continuously, and a Next.js dashboard with click-to-focus and compare modes serves it all. A separate local streaming lakehouse (Redpanda, Spark, Delta, dbt, Airflow) is verified in CI.",
    shortDescription:
      "Live aircraft over Europe, updated every minute, with a PyTorch model predicting each aircraft's path. Serverless AWS (Terraform), about $2 a month.",
    technologies: ["PyTorch", "ONNX", "AWS Lambda", "Terraform", "FastAPI", "Next.js", "Spark", "Delta Lake", "dbt", "Airflow"],
    roleTags: ["Data Engineer", "Cloud Engineer", "ML Engineer"],
    highlights: [
      "Live on AWS: an EventBridge-scheduled Lambda pulls real flight positions every minute into S3, and FastAPI plus a Next.js map dashboard serve about 3,500 aircraft from 50+ countries, all defined in Terraform",
      "A PyTorch GRU predicts each aircraft's position 5 minutes ahead, exported to ONNX and served by its own Lambda; every prediction is scored against the real position later, with a live median error of about 1-1.5 km",
      "Corridor discovery (DBSCAN), anomaly detection and a traffic forecast trained on 28 days / 72M real ADS-B rows (1,831 corridors; hourly forecast error 86 flights vs 568 for a naive baseline)",
      "Fixed real production bugs found on live traffic: a Lambda timeout (batched inference), an out-of-memory error (lazy loading) and impossible speeds caused by aircraft-address collisions (a plausibility guard)",
      "Caught a projected ~$155/mo DynamoDB write cost via CloudWatch and rebuilt the live state as one overwritten S3 object, about $2/mo now; CloudWatch alarms and AWS budgets watch the rest",
      "Local streaming lakehouse (Redpanda, Spark Structured Streaming, Delta Lake, dbt) with 4 Airflow DAGs, verified end to end in GitHub Actions CI (9/9 tasks green)",
    ],
    codeLink: "https://github.com/tyxgx/liveflights",
    demoLink: "https://liveflights-prod-site-922120357133.s3.us-east-1.amazonaws.com/index.html",
    architectureLink: `${import.meta.env.BASE_URL}diagrams/liveflights-architecture.html`,
    featured: true,
    images: [shot('liveflights-dashboard.png'), shot('liveflights-corridors.png')],
  },
  {
    id: 2,
    title: "StreamPulse",
    description:
      "A serverless analytics platform for daily Spotify charts across 72 markets: a daily pipeline builds a Bronze/Silver/Gold lake on S3, a static dashboard shows it, and a LangGraph chatbot answers questions using only deterministic tools and a number verifier.",
    shortDescription:
      "Daily Spotify chart analytics for 72 markets, with a chatbot whose every number is checked against the data.",
    technologies: ["LangGraph", "DuckDB", "AWS Lambda", "S3", "DynamoDB", "Terraform", "GitHub Actions", "Chart.js"],
    roleTags: ["Data Engineer", "ML Engineer"],
    highlights: [
      "Medallion lake on S3: append-only Bronze with row-hash change detection (44.6M raw rows, 72 markets), Silver rebuilt from Bronze and fully replayable, Gold tables, and a Gold-vs-Silver reconciliation on every run",
      "Daily pipeline on GitHub Actions with DuckDB (about 7 minutes), authenticated by GitHub OIDC instead of stored AWS keys; all infrastructure in Terraform",
      "Static dashboard (home plus 9 views, 72 country pages) built from about 8 MB of precomputed JSON, so visitors trigger no queries; a data-health page shows freshness and quality checks",
      "LangGraph chatbot on AWS Lambda: 10 deterministic DuckDB tools produce every number, a verifier rejects any figure a tool did not return, with injection guardrails, DynamoDB rate limits and a Groq/Gemini fallback",
      "Evaluated on a 38-question golden set whose expected answers come from independent SQL (38/38 pass); a small set, so it is a regression check, not a benchmark",
      "Found and fixed a non-deterministic aggregation (artist counts changed between runs on the same data), now covered by 11 pipeline tests",
      "The idea and original Gold-layer design came from an 8-person C-DAC capstone; the serverless pipeline, dashboard, chatbot and deployment are my own work. The first version (Django and pgvector RAG on EC2) is documented in the repo",
    ],
    codeLink: "https://github.com/tyxgx/streampulse",
    demoLink: "https://streampulse-site-922120357133.s3.ap-south-1.amazonaws.com/index.html",
    architectureLink: `${import.meta.env.BASE_URL}diagrams/streampulse-architecture.html`,
    featured: false,
    images: [shot('streampulse-dashboard.png')],
  },
  {
    id: 3,
    title: "Interactive ML",
    description:
      "An educational ML platform that exposes every stage of a scikit-learn pipeline, load, split, preprocess, train, predict, evaluate, as an independently inspectable step instead of one black-box predict button.",
    shortDescription:
      "Explore an ML pipeline step by step, load, preprocess, train, evaluate, instead of one black-box button. Works with your own CSV too.",
    technologies: ["FastAPI", "scikit-learn", "Pyodide", "pytest", "Selenium", "Next.js", "TypeScript", "Tailwind CSS"],
    roleTags: ["ML Engineer"],
    highlights: [
      "Every pipeline stage runs as an independent, inspectable step, or the whole pipeline in one click",
      "Leakage-safe preprocessing: the ColumnTransformer is fit only on the training split, never the test split",
      "Fair multi-algorithm comparison, every candidate scored against an identical train/test split",
      "Schema-driven auto-preprocessing routes built-in datasets and uploaded CSVs through the same code path",
      "Python backend runs in the browser: the same FastAPI code executes in a Pyodide Web Worker, so no server cold starts",
      "Model diagnostics (learning curve, ROC/PR, residuals, permutation importance), 38 pytest tests, GitHub Actions CI and a Selenium suite run through Jenkins",
    ],
    codeLink: "https://github.com/tyxgx/interactive-ml",
    demoLink: "https://interactive-ml-kappa.vercel.app/",
    architectureLink: `${import.meta.env.BASE_URL}diagrams/interactive-ml-architecture.html`,
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
      "Reactions, replies, @mentions, full-text search, message edit/delete, image attachments and avatars, with per-user rate limiting",
      "55 backend jest tests and 16 Playwright end-to-end tests in two browsers, run in GitHub Actions CI; a perf pass on a 3,000-message board cut reaction reads from 190ms to 10ms",
    ],
    codeLink: "https://github.com/tyxgx/teamboard",
    demoLink: "https://teamboard-delta.vercel.app",
    architectureLink: `${import.meta.env.BASE_URL}diagrams/teamboard-architecture.html`,
    featured: false,
    images: [shot('teamboard-hero.jpg')],
  },
  {
    id: 5,
    title: "PDF Digest",
    description:
      "Upload any PDF and ask it questions in plain English, a lightweight document Q&A app: FastAPI, TF-IDF keyword retrieval with page-level citations, and Groq-hosted gpt-oss.",
    shortDescription: "Upload a PDF and ask it questions. Answers come only from the document itself.",
    technologies: ["FastAPI", "Groq", "Next.js", "TypeScript"],
    roleTags: ["ML Engineer", "Data Engineer"],
    highlights: [
      "FastAPI backend extracts PDF text page by page, chunks it, and ranks chunks with TF-IDF keyword retrieval (no vector DB, no embeddings)",
      "Answers are grounded in the retrieved chunks via Groq-hosted gpt-oss-20b, with cited source pages and follow-up chat history",
      "Hardened API: LLM failures return 502, 10 MB upload limit, scanned/empty PDFs rejected with a clear error, 7 pytest tests",
      "Next.js frontend on Vercel, backend on Render, split-stack deployment, not a monolith",
    ],
    codeLink: "https://github.com/tyxgx/pdfdigest",
    demoLink: "https://pdfdigest.vercel.app",
    architectureLink: `${import.meta.env.BASE_URL}diagrams/pdfdigest-architecture.html`,
    featured: false,
    images: [shot('pdfdigest-hero.jpg')],
  },
  {
    id: 6,
    title: "Hyper Quest Research Assistant",
    description:
      "A GraphRAG research assistant over the Yoga Sutras and the Sāṃkhya Kārikā, built as a pitch for a documentary studio: a Neo4j knowledge graph of every verse with Devanagari text, word-by-word breakdowns and commentary, plus a chat that cites its sources and refuses to fabricate Sanskrit it can't verify.",
    shortDescription:
      "Ask questions of two classical Sanskrit texts. Answers cite the verses, and it says so when it can't verify something.",
    technologies: ["Neo4j", "FastAPI", "Groq", "Next.js", "TypeScript", "Vercel", "Render"],
    roleTags: ["ML Engineer", "Data Engineer"],
    highlights: [
      "Neo4j knowledge graph of 195 Yoga Sutras and 73 Sāṃkhya Kārikā verses, with Devanagari text, plain-language meanings and word-by-word breakdowns",
      "Chat answers cite their source verses and decline to invent Sanskrit that can't be verified, Groq-hosted LLM at about 5 seconds per answer",
      "Five product views around the flagship research chat, including a graph explorer",
      "Split-stack deployment: Next.js on Vercel, FastAPI on Render, auto-deploying from GitHub",
    ],
    codeLink: "https://github.com/tyxgx/hyperquest-research-assistant",
    demoLink: null,
    featured: false,
    images: [],
  },
  {
    id: 7,
    title: "Seamless Tiler",
    description:
      "A tool that turns a single textile pattern into a seamlessly tileable texture, built for a real take-home assignment. Three versions, each fixing the previous one's visible flaw: a classical offset-and-blend, a minimum-error seam cut, and a generative inpainting pass for the hardest patterns.",
    shortDescription: "Turn one pattern into a seamless tile. Three versions, each fixing the last one's visible flaw.",
    technologies: ["Python", "NumPy", "Pillow", "Streamlit", "Flux Fill (Replicate)"],
    roleTags: ["ML Engineer"],
    highlights: [
      "v1 offset and mirror blend showed ghosting (double-exposed motifs) on real samples, which is why it was replaced",
      "v2 seam cut (minimum-error boundary via dynamic programming) removed the ghosting but left mirror-fold artifacts on bold, sparse patterns, documented as a structural limit of any pixel-reuse method",
      "v3 masks the seam band and inpaints it with a generative model; a soft mask left a hazy band, fixed with a hard-edged mask (raising guidance made it worse, so it was reverted)",
      "Streamlit UI and CLI, with a suitability check that flags images that are not real repeating patterns",
    ],
    codeLink: "https://github.com/tyxgx/seamless-tiler",
    demoLink: null,
    featured: false,
    images: [],
  },
];

export const education = [
  {
    id: 0,
    institution: "C-DAC (Centre for Development of Advanced Computing), Mumbai",
    degree: "PG Certificate Programme in Big Data Analytics",
    period: "Feb 2026 - Sep 2026",
    details: "Grade A, 72.71%",
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
    period: "Jul 2025 - Oct 2025",
    summary: "Built features, worked with APIs, learned how real teams ship code.",
  },
  {
    id: 2,
    title: "Project Intern",
    company: "BHEL, Haridwar",
    period: "Jul 2025 - Aug 2025",
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
