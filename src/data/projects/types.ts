export interface ProjectConfig {
  id: string;
  name: string;
  repository: string;
  status: string;
  techStack: string[];
}

export interface GithubCommitMetadata {
  message: string;
  date: string;
  time: string;
}

export interface GithubProjectMetadata {
  repository: string;
  latestCommit: GithubCommitMetadata;
}

export interface ProjectDashboardItem extends ProjectConfig {
  latestCommit: GithubCommitMetadata;
}
