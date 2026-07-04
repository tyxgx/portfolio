import { getGithubMetadataByRepository } from '../github/metadataLoader';
import { projectConfig } from './projectConfig';
import type { ProjectDashboardItem } from './types';

const fallbackCommit = {
  message: 'Unavailable',
  date: '',
  time: '',
};

export const getProjectDashboardItems = async (): Promise<ProjectDashboardItem[]> => {
  const metadataByRepository = await getGithubMetadataByRepository();

  return projectConfig.map((project) => ({
    ...project,
    latestCommit: metadataByRepository.get(project.repository)?.latestCommit ?? fallbackCommit,
  }));
};

export const getProjectDashboardItemsWithUnavailableMetadata = (): ProjectDashboardItem[] => {
  return projectConfig.map((project) => ({
    ...project,
    latestCommit: fallbackCommit,
  }));
};
