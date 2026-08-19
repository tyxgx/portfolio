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
    id: 'interactive-ml',
    name: 'Interactive ML',
    repository: 'https://github.com/tyxgx/interactive-ml',
    status: 'Completed',
    techStack: ['FastAPI', 'scikit-learn', 'pandas', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'streampulse',
    name: 'StreamPulse',
    repository: 'https://github.com/tyxgx/streampulse',
    status: 'Completed',
    techStack: ['Django', 'PostgreSQL', 'pgvector', 'SentenceTransformers', 'Groq', 'AWS EC2'],
  },
];
