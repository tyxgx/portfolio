import type { GithubProjectMetadata } from '../projects/types';
import { projectConfig } from '../projects/projectConfig';

const parseRepoPath = (repository: string): { owner: string; repo: string } | null => {
  const match = repository.match(/github\.com\/([^/]+)\/([^/]+)\/?$/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
};

const fetchLatestCommit = async (repository: string): Promise<GithubProjectMetadata | null> => {
  const parsed = parseRepoPath(repository);
  if (!parsed) return null;

  try {
    const response = await fetch(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/commits?per_page=1`
    );
    if (!response.ok) return null;

    const commits = await response.json();
    const latest = commits[0];
    if (!latest) return null;

    const authoredAt = new Date(latest.commit.author.date);

    return {
      repository,
      latestCommit: {
        message: latest.commit.message.split('\n')[0],
        date: authoredAt.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
        time: authoredAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      },
    };
  } catch {
    return null;
  }
};

export const getGithubMetadataByRepository = async (): Promise<Map<string, GithubProjectMetadata>> => {
  const results = await Promise.all(projectConfig.map((project) => fetchLatestCommit(project.repository)));

  return new Map(
    results
      .filter((result): result is GithubProjectMetadata => result !== null)
      .map((result) => [result.repository, result])
  );
};
