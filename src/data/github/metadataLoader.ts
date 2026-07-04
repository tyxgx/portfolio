import type { GithubProjectMetadata } from '../projects/types';

interface GithubMetadataFile {
  projects: GithubProjectMetadata[];
}

const metadataPath = '/data/project-metadata.json';

export const getGithubMetadataByRepository = async (): Promise<Map<string, GithubProjectMetadata>> => {
  const response = await fetch(metadataPath);

  if (!response.ok) {
    throw new Error(`Unable to load GitHub metadata: ${response.status}`);
  }

  const githubMetadata = (await response.json()) as GithubMetadataFile;

  return new Map(githubMetadata.projects.map((project) => [project.repository, project]));
};
