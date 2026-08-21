import type { ProjectConfig } from './types';

export const projectConfig: ProjectConfig[] = [
  {
    id: 'liveflights',
    name: 'liveflights',
    repository: 'https://github.com/tyxgx/liveflights',
    status: 'Completed',
    techStack: ['Spark', 'Redpanda', 'Delta Lake', 'dbt', 'Terraform', 'AWS Lambda', 'MLflow', 'FastAPI', 'Next.js'],
  },
  {
    id: 'streampulse',
    name: 'StreamPulse',
    repository: 'https://github.com/tyxgx/streampulse',
    status: 'Completed',
    techStack: ['Django', 'PostgreSQL', 'pgvector', 'SentenceTransformers', 'Groq', 'AWS EC2'],
  },
  {
    id: 'interactive-ml',
    name: 'Interactive ML',
    repository: 'https://github.com/tyxgx/interactive-ml',
    status: 'Completed',
    techStack: ['FastAPI', 'scikit-learn', 'pandas', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'teamboard',
    name: 'TeamBoard',
    repository: 'https://github.com/tyxgx/teamboard',
    status: 'Completed',
    techStack: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'JWT'],
  },
  {
    id: 'pdfdigest',
    name: 'PDF Digest',
    repository: 'https://github.com/tyxgx/pdfdigest',
    status: 'Completed',
    techStack: ['FastAPI', 'ChromaDB', 'Groq', 'Next.js', 'TypeScript'],
  },
];
